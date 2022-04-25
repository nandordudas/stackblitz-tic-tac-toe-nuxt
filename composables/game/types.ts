import type { ComputedRef } from 'vue'

export enum Sign {
  Cross = '❌',
  Circle = '⭕',
}

export interface User {
  sign: Sign
}

export interface GameState {
  currentUserSign: Sign
  fields: Sign[][]
  remainingFields: number
  winner: User
}

export interface FieldCoordinates {
  x: number
  y: number
}

export interface GameGetters {
  isFinished: ComputedRef<boolean>
}

export interface GameActions {
  updateWinner(): void
  decrementRemainingFields(): void
  initFields(): void
  reset(): void
  setFieldValue(coordinates: FieldCoordinates): void
  setCurrentUserSign(sign: Sign): void
  setWinner(user: User): void
  swapCurrentUserSign(): void
}
