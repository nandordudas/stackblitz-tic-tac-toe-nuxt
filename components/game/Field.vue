<script setup lang="ts">
// eslint-disable-next-line @typescript-eslint/consistent-type-imports
import { Sign } from '~~/utils/types'
import type { FieldCoordinates } from '~~/composables/game/types'

interface Props {
  coordinates: FieldCoordinates
  value: Sign
}

const { value, coordinates } = defineProps<Props>()

const gameStore = useGameStore()

const onSelect = () => {
  if (gameStore.isFinished)
    return

  gameStore.setFieldValue(coordinates)
}
</script>

<template>
  <div
    class="grid place-items-center w-16 aspect-square text-4xl text-red bg-red-100 rounded hover:(bg-red-200 cursor-pointer not-empty:grayscale)"
    @click="onSelect"
  >
    <div v-if="value" :class="value === Sign.Cross ? 'i-tabler-x' : 'i-tabler-circle'" />
  </div>
</template>
