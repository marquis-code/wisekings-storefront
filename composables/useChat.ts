import { io, Socket } from 'socket.io-client'

export const useChat = () => {
    const config = useRuntimeConfig()
    const { accessToken } = useAuthState()
    const socket = ref<Socket | null>(null)
    const messages = ref<any[]>([])
    const isConnected = ref(false)
    const isTyping = ref(false)

    const connect = (conversationId?: string) => {
        if (socket.value) return

        const socketUrl = config.public.apiBase.replace('/api/v1', '')
        socket.value = io(`${socketUrl}/chat`, {
            auth: {
                token: `Bearer ${accessToken.value}`
            }
        })

        socket.value.on('connect', () => {
            isConnected.value = true
            if (conversationId) {
                joinRoom(conversationId)
            }
        })

        socket.value.on('disconnect', () => {
            isConnected.value = false
        })

        socket.value.on('chat:message:new', (message) => {
            messages.value.push(message)
        })

        socket.value.on('chat:typing:state', (data) => {
            isTyping.value = data.isTyping
        })
    }

    const joinRoom = (conversationId: string) => {
        socket.value?.emit('chat:join', conversationId)
    }

    const sendMessage = (conversationId: string, content: string) => {
        if (!socket.value) return
        socket.value.emit('chat:message', { conversationId, content })
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
        connect,
        sendMessage,
        sendTyping,
        disconnect
    }
}
