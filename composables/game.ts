import { acceptHMRUpdate, defineStore } from 'pinia'
import type { Nullable } from '@antfu/utils'
import { checkWinner } from '~~/utils/game'
import { MatchLength, Sign } from '~~/utils/types'

// TODO: move to types
export enum StoreNames {
  Game = 'game',
}

// TODO: move to types
export interface FieldCoordinate {
  x: number
  y: number
}

const defaultGameId = `game-${Date.now()}`

export interface GameState {
  currentPlayer: Nullable<Sign>
  fieldLength: MatchLength
  fields: Nullable<Sign>[][]
  id: string
  isDraw: boolean
  isFinished: boolean
  remainingMoves: number
  winner: Nullable<Sign>
}

export const useGameStore = defineStore(StoreNames.Game, () => {
  // TODO: separate into files
  const state = reactive<GameState>({
    currentPlayer: Sign.Cross,
    fieldLength: MatchLength.Three,
    fields: [
      [null, null, null],
      [null, null, null],
      [null, null, null],
    ],
    id: defaultGameId,
    isDraw: false,
    isFinished: false,
    remainingMoves: 9,
    winner: null,
  })

  const hasWinner = computed(() => state.winner !== null)

  const isDraw = computed(() => state.winner === null && state.remainingMoves === 0)

  const setWinner = (signal: Sign) => state.winner = signal

  const setField = ({ x, y }: FieldCoordinate, value: Sign) => state.fields[x][y] = value

  const resetState = () => {
    state.fields = [
      [null, null, null],
      [null, null, null],
      [null, null, null],
    ]

    state.currentPlayer = Sign.Cross
    state.fieldLength = MatchLength.Three
    state.isDraw = false
    state.isFinished = false
    state.winner = null
  }

  // const upgradeFields = () => {
  //   if (state.fieldLength === MatchLength.Five)
  //     return

  //   state.fields = [
  //     [null, null, null, null, null],
  //     [null, null, null, null, null],
  //     [null, null, null, null, null],
  //     [null, null, null, null, null],
  //     [null, null, null, null, null],
  //   ]

  //   state.fieldLength = MatchLength.Five
  //   state.isDraw = false
  //   state.remainingMoves = 17
  // }

  watch(
    () => state.fields,
    () => {
      if (checkWinner(state.fields, state.currentPlayer, state.fieldLength)) {
        state.isFinished = true
        state.winner = state.currentPlayer

        return
      }

      state.currentPlayer = state.currentPlayer === Sign.Cross ? Sign.Circle : Sign.Cross
      state.remainingMoves -= 1

      // if (isDraw.value)
      //   upgradeFields()
    },
    { deep: true },
  )

  return {
    hasWinner,
    isDraw,
    resetState,
    setField,
    setWinner,
    state,
    // upgradeFields,
  }
})

if (import.meta.hot)
  import.meta.hot.accept(acceptHMRUpdate(useGameStore, import.meta.hot))
