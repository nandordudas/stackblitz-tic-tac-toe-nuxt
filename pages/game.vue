<script setup lang="ts">
import { Sign } from '~~/utils/types'

definePageMeta({
  layout: 'game',
})

const gameStore = useGameStore()

onMounted(gameStore.initFields)

const headerText = computed(() => gameStore.isFinished ? 'Game is finished' : 'Game is in progress')

const onClick = () => {
  gameStore.reset()
  gameStore.initFields()
}
</script>

<template>
  <div>
    <h2 class="mb-4 text-center">
      {{ headerText }}
    </h2>
    <div :class="[{ grayscale: gameStore.isFinished }, 'grid gap-4 grid-cols-[repeat(3,1fr)]']">
      <GameBoard />
    </div>
    <template v-if="gameStore.isFinished">
      <div class="flex items-end mt-4 text-center justify-center">
        The winner is: <div :class="gameStore.winner.sign === Sign.Cross ? 'ml-2 i-tabler-x' : 'ml-2 i-tabler-circle'" />
      </div>
      <div class="flex items-end mt-4 text-center justify-center">
        <button class="btn-red" @click="onClick">
          Reset
        </button>
      </div>
    </template>
  </div>
</template>
