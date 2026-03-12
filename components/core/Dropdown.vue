<template>
  <div class="relative" ref="dropdownRef">
    <div @click="toggleOpen" class="cursor-pointer">
      <slot name="trigger" :isOpen="isOpen" :selected="selected">
        <div :class="[
          'flex items-center justify-between px-4 py-3.5 rounded-2xl border transition-all font-medium text-sm',
          isOpen 
            ? 'border-[#033958] ring-2 ring-[#033958]/10 bg-white' 
            : 'border-gray-200 bg-gray-50 hover:border-gray-300'
        ]">
          <span :class="selected ? 'text-gray-900' : 'text-gray-400'">
            {{ selected ? selectedLabel : placeholder }}
          </span>
          <Icon 
            name="lucide:chevron-down" 
            size="18" 
            :class="['text-gray-400 transition-transform duration-200', isOpen ? 'rotate-180' : '']" 
          />
        </div>
      </slot>
    </div>

    <Transition
      enter-active-class="transition duration-200 ease-out"
      enter-from-class="opacity-0 scale-95 -translate-y-2"
      enter-to-class="opacity-100 scale-100 translate-y-0"
      leave-active-class="transition duration-150 ease-in"
      leave-from-class="opacity-100 scale-100 translate-y-0"
      leave-to-class="opacity-0 scale-95 -translate-y-2"
    >
      <div 
        v-if="isOpen" 
        class="absolute z-50 mt-2 w-full bg-white border border-gray-100 rounded-2xl shadow-xl shadow-black/5 py-2 max-h-60 overflow-y-auto"
      >
        <div
          v-for="option in options"
          :key="option.value"
          @click="selectOption(option)"
          :class="[
            'flex items-center gap-3 px-4 py-3 cursor-pointer transition-all text-sm font-medium',
            selected === option.value 
              ? 'bg-[#033958]/5 text-[#033958]' 
              : 'text-gray-700 hover:bg-gray-50'
          ]"
        >
          <Icon v-if="option.icon" :name="option.icon" size="18" class="flex-shrink-0" />
          <span>{{ option.label }}</span>
          <Icon 
            v-if="selected === option.value" 
            name="lucide:check" 
            size="16" 
            class="ml-auto text-[#033958]" 
          />
        </div>
      </div>
    </Transition>
  </div>
</template>

<script setup lang="ts">
import { ref, computed, onMounted, onBeforeUnmount } from 'vue'

interface DropdownOption {
  value: string
  label: string
  icon?: string
}

const props = defineProps<{
  options: DropdownOption[]
  modelValue?: string
  placeholder?: string
}>()

const emit = defineEmits(['update:modelValue'])

const isOpen = ref(false)
const dropdownRef = ref<HTMLElement | null>(null)

const selected = computed(() => props.modelValue)
const selectedLabel = computed(() => {
  const opt = props.options.find(o => o.value === props.modelValue)
  return opt?.label || ''
})

function toggleOpen() { isOpen.value = !isOpen.value }

function selectOption(option: DropdownOption) {
  emit('update:modelValue', option.value)
  isOpen.value = false
}

function handleClickOutside(e: MouseEvent) {
  if (dropdownRef.value && !dropdownRef.value.contains(e.target as Node)) {
    isOpen.value = false
  }
}

onMounted(() => document.addEventListener('click', handleClickOutside))
onBeforeUnmount(() => document.removeEventListener('click', handleClickOutside))
</script>
