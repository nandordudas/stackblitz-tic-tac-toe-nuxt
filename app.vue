<script setup lang="ts">
const appTitle = 'Tic Tac Toe'

useHead({
  htmlAttrs: {
    lang: 'en',
  },
  link: [
    { rel: 'icon', type: 'image/x-icon', href: '/favicon.png' },
  ],
  bodyAttrs: {
    class: 'antialiased text-slate-500 bg-white dark:(text-slate-400 bg-slate-900)',
  },
  titleTemplate: pageTitle => `${appTitle} - ${pageTitle}`,
})
</script>

<template>
  <div>
    <NuxtLayout>
      <NuxtPage />
    </NuxtLayout>
  </div>
</template>
