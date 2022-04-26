<script setup>
const { meta } = useRoute()

useHead({ title: meta.title })
</script>

<template>
  <main data-layout="default" class="grid place-items-center h-screen">
    <slot />
  </main>
</template>
