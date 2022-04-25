<script setup lang="ts">
const gameStore = useGameStore()
</script>

<template>
  <template v-for="(row, x) in gameStore.fields" :key="x">
    <template v-for="(value, y) in row" :key="y">
      <GameField :value="value" :coordinates="{ x, y }" />
    </template>
  </template>
</template>
