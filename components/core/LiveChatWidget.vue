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
            
            <div 
              v-for="(msg, i) in messages" 
              :key="i"
              :class="['flex w-full', msg.senderId === currentUserId ? 'justify-end' : 'justify-start']"
            >
              <div 
                :class="[
                  'max-w-[80%] p-4 rounded-3xl text-sm font-medium shadow-sm',
                  msg.senderId === currentUserId ? 'bg-[#033958] text-white rounded-tr-none' : 'bg-white text-gray-800 rounded-tl-none border border-gray-100'
                ]"
              >
                {{ msg.content }}
                <div :class="['text-[10px] mt-1 opacity-50', msg.senderId === currentUserId ? 'text-white' : 'text-gray-400']">
                  {{ formatTime(msg.createdAt) }}
                </div>
              </div>
            </div>
            
            <div v-if="isTyping" class="flex justify-start">
               <div class="bg-white px-4 py-3 rounded-2xl rounded-tl-none border border-gray-100 flex gap-1">
                 <div class="w-1.5 h-1.5 bg-[#033958]/30 rounded-full animate-bounce"></div>
                 <div class="w-1.5 h-1.5 bg-[#033958]/30 rounded-full animate-bounce [animation-delay:0.2s]"></div>
                 <div class="w-1.5 h-1.5 bg-[#033958]/30 rounded-full animate-bounce [animation-delay:0.4s]"></div>
               </div>
            </div>
          </div>

          <!-- Input Area -->
          <div class="p-6 bg-white border-t border-gray-100">
            <div class="relative flex items-center gap-3">
              <input 
                v-model="newMessage"
                @keypress.enter="handleSend"
                @input="handleTyping"
                placeholder="Type your message..."
                class="w-full bg-gray-50 border-none focus:ring-2 focus:ring-[#033958]/10 rounded-2xl px-5 py-4 text-sm font-medium placeholder:text-gray-400 pr-12"
              />
              <button 
                @click="handleSend"
                class="absolute right-2 w-10 h-10 bg-[#033958] text-white rounded-xl flex items-center justify-center hover:scale-105 active:scale-95 transition-all shadow-lg shadow-[#033958]/20"
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
const { messages, connect, sendMessage, sendTyping, isTyping } = useChat()
const { user, isAuthenticated } = useAuthState()
const route = useRoute()
const currentUserId = computed(() => user.value?._id || 'guest')

const isOpen = ref(false)
const newMessage = ref('')
const unreadCount = ref(0)
const messageContainer = ref<HTMLElement | null>(null)

function toggleChat() {
  isOpen.value = !isOpen
  if (isOpen.value && isAuthenticated.value) {
    unreadCount.value = 0
    connect() 
    nextTick(() => scrollToBottom())
  }
}

function handleSend() {
  if (!newMessage.value.trim()) return
  sendMessage('support-default', newMessage.value) // Using a default support room for now
  newMessage.value = ''
  scrollToBottom()
}

function quickMessage(text: string) {
  newMessage.value = text
  handleSend()
}

let typingTimeout: any = null
function handleTyping() {
  sendTyping('support-default', true)
  if (typingTimeout) clearTimeout(typingTimeout)
  typingTimeout = setTimeout(() => sendTyping('support-default', false), 2000)
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
