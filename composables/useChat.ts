import { io, Socket } from 'socket.io-client'

export const useChat = () => {
    const config = useRuntimeConfig()
    const { accessToken, user } = useAuthState()
    const socket = ref<Socket | null>(null)
    const messages = ref<any[]>([])
    const isConnected = ref(false)
    const activeTypers = ref<any[]>([])

    const connect = (convId?: string) => {
        console.log('[STOREFRONT CHAT] connect() called', { convId, hasToken: !!accessToken.value, userId: user.value?._id, socketConnected: socket.value?.connected })

        if (socket.value?.connected) {
            console.log('[STOREFRONT CHAT] Already connected, joining room only')
            if (convId) socket.value.emit('chat:join', convId)
            return
        }

        const socketUrl = config.public.apiBase.replace('/api/v1', '') + '/chat'
        console.log('[STOREFRONT CHAT] Connecting to:', socketUrl)

        socket.value = io(socketUrl, {
            auth: { token: `Bearer ${accessToken.value}` },
            transports: ['websocket', 'polling']
        })

        socket.value.on('connect', () => {
            isConnected.value = true
            console.log('[STOREFRONT CHAT] ✅ CONNECTED! Socket ID:', socket.value?.id)
            if (convId) {
                console.log('[STOREFRONT CHAT] Joining room:', convId)
                socket.value?.emit('chat:join', convId)
            }
        })

        socket.value.on('connect_error', (err) => {
            console.error('[STOREFRONT CHAT] ❌ CONNECTION ERROR:', err.message)
        })

        socket.value.on('disconnect', (reason) => {
            isConnected.value = false
            console.log('[STOREFRONT CHAT] ⚠️ DISCONNECTED:', reason)
        })

        socket.value.on('chat:message:new', (msg) => {
            console.log('[STOREFRONT CHAT] 📩 MESSAGE RECEIVED:', { _id: msg._id, content: msg.content, senderId: msg.senderId?._id || msg.senderId })
            if (!messages.value.find(m => m._id === msg._id)) {
                messages.value.push(msg)
            }
        })

        socket.value.on('chat:typing:state', (state) => {
            if (state.userId === user.value?._id) return

            if (state.isTyping) {
                if (!activeTypers.value.find(t => t.userId === state.userId)) {
                    activeTypers.value.push(state)
                }
            } else {
                activeTypers.value = activeTypers.value.filter(t => t.userId !== state.userId)
            }
        })
    }

    const isTyping = computed(() => activeTypers.value.length > 0)
    const typersDisplay = computed(() => {
        if (activeTypers.value.length === 0) return ''
        if (activeTypers.value.length === 1) return `${activeTypers.value[0].userName || 'Someone'} is typing...`
        return 'Multiple people are typing...'
    })

    const joinRoom = (conversationId: string) => {
        socket.value?.emit('chat:join', conversationId)
    }

    const sendMessage = (conversationId: string, content: string, type: string = 'text', attachments: string[] = []) => {
        console.log('[STOREFRONT CHAT] 📤 SENDING MESSAGE:', { conversationId, content, type, attachments, socketConnected: socket.value?.connected })
        if (!socket.value) {
            console.error('[STOREFRONT CHAT] ❌ CANNOT SEND: No socket connection!')
            return
        }
        if (!socket.value.connected) {
            console.error('[STOREFRONT CHAT] ❌ CANNOT SEND: Socket not connected!')
            return
        }
        socket.value.emit('chat:message', { conversationId, content, type, attachments }, (ack: any) => {
            console.log('[STOREFRONT CHAT] 📤 MESSAGE ACK:', ack)
        })
    }

    const uploadChatFile = async (file: File) => {
        const formData = new FormData()
        formData.append('file', file)
        const folder = 'chat'
        const endpoint = file.type.startsWith('image/') || file.type.startsWith('video/') || file.type.startsWith('audio/') 
                    ? `/uploads/image/${folder}`
                    : `/uploads/document/${folder}`;
        
        const res: any = await $fetch(`${config.public.apiBase}${endpoint}`, {
          method: 'POST',
          headers: { Authorization: `Bearer ${accessToken.value}` },
          body: formData
        })
        return res.url
    }

    const sendTyping = (conversationId: string, typing: boolean) => {
        socket.value?.emit('chat:typing', { conversationId, isTyping: typing })
    }

    const disconnect = () => {
        socket.value?.disconnect()
        socket.value = null
    }

    return {
        messages,
        isConnected,
        isTyping,
        typersDisplay,
        connect,
        sendMessage,
        sendTyping,
        disconnect,
        uploadChatFile
    }
}
