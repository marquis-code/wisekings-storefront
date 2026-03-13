<template>
  <div class="fixed bottom-6 right-6 z-[100] font-sans">
    <!-- Toggle Button -->
    <button 
      @click="toggleChat"
      :class="[
        'w-10 h-10 rounded-full shadow-2xl flex items-center justify-center transition-all duration-500 hover:scale-110 active:scale-95 z-[101]',
        isOpen ? 'bg-gray-100 text-gray-900 rotate-90' : 'bg-[#033958] text-white'
      ]"
    >
      <Icon :name="isOpen ? 'lucide:x' : 'lucide:message-circle'" size="20" />
      <span v-if="!isOpen && unreadCount > 0" class="absolute -top-1 -right-1 w-6 h-6 bg-red-600 text-white text-[10px] rounded-full flex items-center justify-center font-black border-2 border-white shadow-lg">{{ unreadCount }}</span>
    </button>

    <!-- Chat Window -->
    <Transition name="chat-panel">
      <div v-if="isOpen" class="absolute bottom-20 right-0 w-[400px] h-[600px] bg-white rounded-[2.5rem] shadow-[0_20px_60px_-15px_rgba(0,0,0,0.3)] border border-gray-100 overflow-hidden flex flex-col pointer-events-auto">
        <!-- Header -->
        <div class="bg-[#033958] p-8 text-white relative">
          <div class="absolute top-0 right-0 p-4 opacity-10">
            <Icon name="lucide:crown" size="120" />
          </div>
          <div class="flex items-center gap-4 relative z-10">
            <div class="w-12 h-12 rounded-2xl bg-white/20 flex items-center justify-center backdrop-blur-md">
              <Icon name="lucide:headset" size="24" />
            </div>
            <div>
              <h3 class="font-black text-xl tracking-tight">WiseKings Support</h3>
              <div class="flex items-center gap-2 mt-1">
                <div class="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></div>
                <span class="text-xs font-bold text-white/70">Online & Ready to Help</span>
              </div>
            </div>
          </div>
        </div>

        <!-- Auth Guard State -->
        <div v-if="!isAuthenticated" class="flex-1 flex flex-col items-center justify-center p-12 text-center space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-500">
          <div class="w-24 h-24 rounded-[2rem] bg-gray-50 flex items-center justify-center text-[#033958] shadow-inner">
            <Icon name="lucide:lock" size="40" />
          </div>
          <div class="space-y-3">
            <h4 class="text-xl font-black text-gray-900 tracking-tight">Members Only Chat</h4>
            <p class="text-sm font-medium text-gray-400 leading-relaxed">Please sign in to your WiseKings account to start a conversation with our support team.</p>
          </div>
          <NuxtLink 
            :to="`/login?redirect=${route.fullPath}`"
            class="w-full py-4 bg-[#033958] text-white font-black rounded-2xl shadow-xl shadow-[#033958]/20 hover:scale-[1.02] active:scale-[0.98] transition-all"
          >
            Sign in to WiseKings
          </NuxtLink>
        </div>

        <!-- Messages Area (Authenticated) -->
        <template v-else>
          <div class="flex-1 overflow-y-auto p-6 space-y-4 bg-gray-50/50" ref="messageContainer">
            <div v-if="messages.length === 0" class="flex flex-col items-center justify-center h-full text-center space-y-4 px-10">
               <div class="w-20 h-20 rounded-full bg-blue-50 flex items-center justify-center text-[#033958]">
                 <Icon name="lucide:sparkles" size="40" />
               </div>
               <p class="text-gray-400 font-bold text-sm">Welcome back! How can we assist you today?</p>
               <div class="flex flex-wrap justify-center gap-2">
                 <button @click="quickMessage('Order status?')" class="px-4 py-2 bg-white rounded-full text-xs font-bold text-[#033958] border border-gray-100 hover:border-[#033958]/30 transition-all">Order status?</button>
                 <button @click="quickMessage('Shipping info?')" class="px-4 py-2 bg-white rounded-full text-xs font-bold text-[#033958] border border-gray-100 hover:border-[#033958]/30 transition-all">Shipping info?</button>
               </div>
            </div>
            
            <template v-for="(msg, i) in messages" :key="msg._id || i">
                    <div :class="['flex w-full mb-3', isSentByMe(msg) ? 'justify-end' : 'justify-start']">
                        <div :class="['max-w-[85%] flex flex-col', isSentByMe(msg) ? 'items-end' : 'items-start']">
                            <!-- Sender name for received messages -->
                            <span v-if="!isSentByMe(msg)" class="text-[10px] uppercase font-bold text-slate-500 mb-1 ml-2 tracking-wider">
                                {{ getSenderName(msg) }} {{ getSenderRole(msg) }}
                            </span>
                            
                            <div :class="[
                                'relative px-4 py-2.5 rounded-2xl shadow-sm transition-all duration-300',
                                isSentByMe(msg) 
                                    ? 'bg-[#033958] text-white rounded-br-none' 
                                    : getSenderRole(msg).includes('Admin') 
                                        ? 'bg-emerald-50 text-emerald-900 border border-emerald-100 rounded-bl-none'
                                        : 'bg-indigo-50 text-indigo-900 border border-indigo-100 rounded-bl-none'
                            ]">
                                <!-- Media Rendering -->
                                <div v-if="msg.attachments?.length > 0" class="mb-2 max-w-[250px] overflow-hidden rounded-xl">
                                    <template v-for="(att, aIdx) in msg.attachments" :key="aIdx">
                                        <img v-if="msg.type === 'image' || msg.type === 'gif' || msg.type === 'sticker'" :src="att" class="w-full object-cover cursor-pointer hover:opacity-90 max-h-48" @click="previewMedia = att" />
                                        <video v-else-if="msg.type === 'video'" :src="att" controls class="w-full"></video>
                                        <audio v-else-if="msg.type === 'audio'" :src="att" controls class="w-full"></audio>
                                        <a v-else :href="att" target="_blank" class="flex flex-col gap-2 p-3 bg-black/5 rounded-lg text-inherit hover:bg-black/10 transition-colors border border-white/10">
                                            <div class="flex items-center gap-3">
                                                <Icon name="lucide:file-text" size="24" class="shrink-0" />
                                                <div class="min-w-0 text-left">
                                                    <p class="text-[12px] font-bold truncate">Document Attachment</p>
                                                    <p class="text-[9px] opacity-60 uppercase font-black">Click to view/download</p>
                                                </div>
                                            </div>
                                        </a>
                                    </template>
                                </div>

                                <!-- Video Link Preview -->
                                <div v-if="msg.type === 'text' && containsVideoLink(msg.content)" class="mb-2 rounded-xl overflow-hidden border border-black/10 bg-black/5">
                                   <div class="p-2 flex items-center gap-2 bg-[#033958]/10">
                                      <Icon name="lucide:video" size="14" class="text-[#033958]" />
                                      <span class="text-[10px] font-bold text-[#033958] uppercase">Video Preview</span>
                                   </div>
                                   <iframe v-if="getYoutubeId(msg.content)" :src="`https://www.youtube.com/embed/${getYoutubeId(msg.content)}`" class="w-full aspect-video border-none" allowfullscreen></iframe>
                                </div>

                                <p class="text-sm font-medium leading-relaxed whitespace-pre-wrap">{{ msg.content }}</p>
                                <div :class="['flex items-center gap-1 mt-1 justify-end', isSentByMe(msg) ? 'text-white/60' : 'text-slate-400']">
                                    <span class="text-[9px] font-bold">{{ formatTime(msg.createdAt) }}</span>
                                    <Icon v-if="isSentByMe(msg)" name="lucide:check-check" class="w-3 h-3" />
                                </div>
                            </div>
                        </div>
                    </div>
                </template>
          </div>

          <!-- Attachment Preview -->
          <div v-if="pendingAttachmentUrl" class="px-6 py-2 bg-blue-50 flex items-center justify-between border-t border-blue-100">
             <div class="flex items-center gap-3">
                <img v-if="pendingAttachmentType === 'image'" :src="pendingAttachmentUrl" class="w-10 h-10 rounded object-cover" />
                <Icon v-else name="lucide:file" class="text-blue-600" />
                <span class="text-[10px] font-bold text-blue-800">Ready to send...</span>
             </div>
             <button @click="clearPendingAttachment" class="text-blue-600 hover:text-blue-800"><Icon name="lucide:x" size="14" /></button>
          </div>

          <!-- Input Area -->
            <!-- Typing Indicator -->
            <div v-if="isTyping" class="px-6 py-2 bg-slate-50 border-t border-slate-100 flex items-center gap-2">
                <div class="flex gap-1">
                    <span class="w-1 h-1 bg-emerald-500 rounded-full animate-bounce"></span>
                    <span class="w-1 h-1 bg-emerald-500 rounded-full animate-bounce [animation-delay:0.2s]"></span>
                    <span class="w-1 h-1 bg-emerald-500 rounded-full animate-bounce [animation-delay:0.4s]"></span>
                </div>
                <span class="text-[10px] italic text-slate-500">{{ typersDisplay }}</span>
            </div>
          <div class="p-6 bg-white border-t border-gray-100 relative">
            <!-- Emoji Picker Popover -->
            <div v-if="showEmojiPicker" class="absolute bottom-full left-6 mb-2 bg-white rounded-3xl shadow-2xl border border-gray-100 p-4 w-[280px] grid grid-cols-6 gap-2 z-[200] animate-in slide-in-from-bottom-2 duration-300">
               <button v-for="emoji in commonEmojis" :key="emoji" @click="addEmoji(emoji)" class="w-8 h-8 flex items-center justify-center hover:bg-gray-50 rounded-lg text-xl transition-all hover:scale-125">{{ emoji }}</button>
            </div>

            <div class="relative flex items-center gap-2">
              <button 
                @click="showEmojiPicker = !showEmojiPicker"
                class="w-10 h-10 bg-gray-50 text-gray-400 rounded-xl flex items-center justify-center hover:text-amber-500 transition-all"
              >
                <Icon name="lucide:smile" size="18" />
              </button>
              <button 
                @click="triggerFileInput" 
                :disabled="isUploading"
                class="w-10 h-10 bg-gray-50 text-gray-400 rounded-xl flex items-center justify-center hover:text-[#033958] transition-all"
              >
                <Icon v-if="!isUploading" name="lucide:paperclip" size="18" />
                <Icon v-else name="lucide:loader-2" size="18" class="animate-spin" />
              </button>
              <input type="file" ref="fileInput" class="hidden" @change="handleFileUpload" />
              
              <input 
                v-model="newMessage"
                @keypress.enter="handleSend"
                @input="handleTyping"
                placeholder="Type your message..."
                class="w-full bg-gray-50 border-none focus:ring-2 focus:ring-[#033958]/10 rounded-2xl px-5 py-4 text-sm font-medium placeholder:text-gray-400 pr-12"
              />
              <button 
                @click="handleSend"
                :disabled="(!newMessage.trim() && !pendingAttachmentUrl) || isUploading"
                class="absolute right-2 w-10 h-10 bg-[#033958] text-white rounded-xl flex items-center justify-center hover:scale-105 active:scale-95 transition-all shadow-lg shadow-[#033958]/20 disabled:opacity-50"
              >
                <Icon name="lucide:send" size="18" />
              </button>
            </div>
            <p class="text-[10px] text-center text-gray-300 mt-4 font-bold uppercase tracking-widest">Powered by WiseKings Real-time</p>
          </div>
        </template>
      </div>
    </Transition>
  </div>
</template>

<script setup lang="ts">
const {
  messages,
  isConnected,
  isTyping,
  typersDisplay,
  connect,
  sendMessage,
  sendTyping
} = useChat()

const userState = useAuthState()
const { user, isAuthenticated } = userState
const route = useRoute()

const isOpen = ref(false)
const newMessage = ref('')
const unreadCount = ref(0)
const messageContainer = ref<HTMLElement | null>(null)
const previewMedia = ref<string | null>(null)

// Attachment State
const isUploading = ref(false)
const pendingAttachmentUrl = ref<string | null>(null)
const pendingAttachmentType = ref<string>('text')
const fileInput = ref<HTMLInputElement | null>(null)

function triggerFileInput() {
  fileInput.value?.click()
}

async function handleFileUpload(event: Event) {
  const target = event.target as HTMLInputElement
  if (!target.files?.length) return
  const file = target.files[0]
  
  isUploading.value = true
  try {
     const url = await useChat().uploadChatFile(file)
     
     pendingAttachmentUrl.value = url
     if (file.type === 'image/gif') pendingAttachmentType.value = 'gif'
     else if (file.type.startsWith('image/')) pendingAttachmentType.value = 'image'
     else if (file.type.startsWith('video/')) pendingAttachmentType.value = 'video'
     else if (file.type.startsWith('audio/')) pendingAttachmentType.value = 'audio'
     else pendingAttachmentType.value = 'document'
     
  } catch (err) {
     console.error('Upload failed', err)
  } finally {
     isUploading.value = false
  }
}

function clearPendingAttachment() {
  pendingAttachmentUrl.value = null
  pendingAttachmentType.value = 'text'
  if (fileInput.value) fileInput.value.value = ''
}

const activeConversationId = ref<string | null>(null)

async function toggleChat() {
  isOpen.value = !isOpen.value
  console.log('[WIDGET] toggleChat:', { isOpen: isOpen.value, isAuthenticated: isAuthenticated.value, userId: user.value?._id })
  if (isOpen.value && isAuthenticated.value) {
    unreadCount.value = 0
    
    // Fetch or create support conversation
    try {
      const config = useRuntimeConfig()
      const referralCookie = useCookie('wk_referral')
      console.log('[WIDGET] Creating/fetching support conversation...', { apiBase: config.public.apiBase, referrer: referralCookie.value })
      const res = await $fetch<any>(`${config.public.apiBase}/chat/conversations`, {
        method: 'POST',
        body: { 
          type: 'support',
          referrer: referralCookie.value
        },
        headers: {
          Authorization: `Bearer ${useAuthState().accessToken.value}`
        }
      })
      console.log('[WIDGET] Conversation response:', JSON.stringify(res?.data || res, null, 2))
      if (res.data?._id) {
        activeConversationId.value = res.data._id
        console.log('[WIDGET] Active conversation ID:', activeConversationId.value)
        console.log('[WIDGET] Participants:', res.data.participants)
        connect(res.data._id)
        
        // Fetch message history
        const msgRes = await $fetch<any>(`${config.public.apiBase}/chat/conversations/${res.data._id}/messages`, {
          headers: {
            Authorization: `Bearer ${useAuthState().accessToken.value}`
          }
        })
        console.log('[WIDGET] Message history loaded:', msgRes.data?.length || 0, 'messages')
        if (msgRes.data) {
          messages.value = msgRes.data
        }
      } else {
        console.error('[WIDGET] ❌ No conversation ID in response!')
      }
    } catch (err) {
      console.error('[WIDGET] ❌ Failed to initialize support chat:', err)
    }
    
    nextTick(() => scrollToBottom())
  }
}

function handleSend() {
  if ((!newMessage.value.trim() && !pendingAttachmentUrl.value) || !activeConversationId.value) return
  
  const content = newMessage.value.trim() || (pendingAttachmentType.value !== 'text' ? `Sent a ${pendingAttachmentType.value}` : '')
  const type = pendingAttachmentType.value === 'document' ? 'document' : pendingAttachmentType.value
  const attachments = pendingAttachmentUrl.value ? [pendingAttachmentUrl.value] : []
  
  sendMessage(activeConversationId.value, content, type, attachments)
  newMessage.value = ''
  clearPendingAttachment()
  scrollToBottom()
}

function quickMessage(text: string) {
  newMessage.value = text
  handleSend()
}

let typingTimeout: any = null
function handleTyping() {
  if (!activeConversationId.value) return
  sendTyping(activeConversationId.value, true)
  if (typingTimeout) clearTimeout(typingTimeout)
  typingTimeout = setTimeout(() => {
    if (activeConversationId.value) sendTyping(activeConversationId.value, false)
  }, 2000)
}

function isSentByMe(msg: any) {
  const senderId = String(msg.senderId?._id || msg.senderId || '')
  const myId = String(user.value?._id || user.value?.id || '')
  return !!senderId && senderId === myId
}

function getSenderName(msg: any) {
  if (isSentByMe(msg)) return 'You'
  return msg.senderId?.fullName || msg.senderId?.email || 'Support'
}

function getSenderRole(msg: any) {
  if (isSentByMe(msg)) return ''
  const role = msg.senderId?.userType || 'admin'
  return `(${role.charAt(0).toUpperCase() + role.slice(1)})`
}

const showEmojiPicker = ref(false)
const commonEmojis = ['👋', '😊', '👍', '❤️', '🔥', '🙌', '✨', '👑', '😋', '📦', '🚚', '💡', '✅', '❌', '❓', '💬', '🌟', '🙏']

function addEmoji(emoji: string) {
  newMessage.value += emoji
  showEmojiPicker.value = false
}

function containsVideoLink(content: string) {
  if (!content) return false
  return content.includes('youtube.com/watch') || content.includes('youtu.be/') || content.includes('vimeo.com/')
}

function getYoutubeId(content: string) {
  const regExp = /^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|\&v=)([^#\&\?]*).*/;
  const match = content.match(regExp);
  return (match && match[2].length === 11) ? match[2] : null;
}

function scrollToBottom() {
  if (messageContainer.value) {
    messageContainer.value.scrollTop = messageContainer.value.scrollHeight
  }
}

function formatTime(date: any) {
  return new Date(date || Date.now()).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
}

watch(messages, () => {
    console.log('[WIDGET] Messages updated:', messages.value.length)
    if (!isOpen.value) unreadCount.value++
    nextTick(() => scrollToBottom())
}, { deep: true })
</script>

<style scoped>
.chat-panel-enter-active, .chat-panel-leave-active {
  transition: all 0.5s cubic-bezier(0.16, 1, 0.3, 1);
}
.chat-panel-enter-from, .chat-panel-leave-to {
  opacity: 0;
  transform: translateY(40px) scale(0.9);
  filter: blur(10px);
}
</style>
