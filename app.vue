<script setup lang="ts">
const { trackPageView } = useAnalytics()
const route = useRoute()

// Track initial page load and subsequent route changes
watch(() => route.path, (newPath) => {
  trackPageView(newPath)
}, { immediate: true })
</script>

<template>
  <NuxtLayout>
    <NuxtPage />
  </NuxtLayout>
</template>

<style>
body {
    font-family: 'Onest', sans-serif;
}
</style>