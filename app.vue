<script setup lang="ts">
useHead({
  title: 'Tic Tac Toe',
})
</script>

<template>
  <NuxtLayout>
    <NuxtPage />
  </NuxtLayout>
</template>

<style>
html,
body,
#__nuxt {
  height: 100vh;
  margin: 0;
  padding: 0;
}

/* TODO: use tailwind instead */
html.dark-mode {
  background: #222;
  color: white;
}
</style>
