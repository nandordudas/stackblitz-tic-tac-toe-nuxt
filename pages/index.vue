<script setup lang="ts">
definePageMeta({
  layout: 'game',
})

const gameStore = useGameStore()
</script>

<template>
  <div
    class="
      grid
      gap-4
      grid-cols-[repeat(3,1fr)]
    "
  >
    <template v-for="(row, x) in gameStore.state.fields" :key="x">
      <template v-for="(value, y) in row" :key="y">
        <div
          class="
            grid
            place-items-center
            w-16
            h-16
            text-4xl
            bg-red-100
            rounded
            hover:(bg-red-200 cursor-pointer)
          "
          @click="!gameStore.state.isFinished && gameStore.setField({ x, y }, gameStore.state.currentPlayer)"
        >
          {{ value }}
        </div>
      </template>
    </template>
  </div>
</template>
