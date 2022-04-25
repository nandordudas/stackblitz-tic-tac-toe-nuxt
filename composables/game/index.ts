import { acceptHMRUpdate, defineStore } from 'pinia'
import type { GameActions, GameGetters, GameState } from './types'
import { Sign } from './types'
import { checkWinner } from '~~/utils/game'

const state = reactive<GameState>({
  currentUserSign: null,
  fields: null,
  remainingFields: 9,
  winner: null,
})

const getters: GameGetters = {
  isFinished: computed(() => state.remainingFields === 0 || isDefined(state.winner)),
}

const actions: GameActions = {
  updateWinner() {
    if (state.winner || state.remainingFields > 5)
      return

    if (!checkWinner(state.fields, state.currentUserSign, 3))
      return

    actions.setWinner({ sign: state.currentUserSign })
  },
  decrementRemainingFields() {
    state.remainingFields--
  },
  initFields() {
    state.fields = Array.from({ length: 3 }, () => Array.from({ length: 3 }, () => null))
  },
  reset() {
    state.currentUserSign = null
    state.fields = null
    state.remainingFields = 10
    state.winner = null
  },
  setFieldValue({ x, y }) {
    const field = state.fields[x][y]

    if (isDefined(field))
      return

    state.fields[x][y] = state.currentUserSign
  },
  setCurrentUserSign(value) {
    state.currentUserSign = value
  },
  setWinner(value) {
    state.winner = value
  },
  swapCurrentUserSign() {
    const { setCurrentUserSign } = actions

    if (!isDefined(state.currentUserSign))
      return setCurrentUserSign(Sign.Cross)

    const sign = state.currentUserSign === Sign.Circle ? Sign.Cross : Sign.Circle

    setCurrentUserSign(sign)
  },
}

watch(
  () => state.fields,
  (_, fieldsBefore) => {
    actions.updateWinner()
    actions.swapCurrentUserSign()

    if (!isDefined(fieldsBefore))
      return

    actions.decrementRemainingFields()
  },
  { deep: true },
)

export const useGameStore = defineStore('game', () => ({
  ...toRefs(state),
  ...getters,
  ...actions,
}))

if (import.meta.hot)
  import.meta.hot.accept(acceptHMRUpdate(useGameStore, import.meta.hot))
