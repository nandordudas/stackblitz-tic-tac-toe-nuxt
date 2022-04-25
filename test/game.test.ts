import { describe, expect, it } from 'vitest'
import { checkWinner } from '../utils/game'
import { MatchLength, Sign } from '../utils/types'
import { fiveByFive, threeByThree } from './game.constants'

describe('Test game', () => {
  it('should check winner horizontally 3x3', () => {
    threeByThree.horizontal.forEach((row) => {
      expect(checkWinner(row, Sign.Cross, MatchLength.Three)).toBe(true)
    })
  })

  it('should check winner vertically 3x3', () => {
    threeByThree.vertical.forEach((row) => {
      expect(checkWinner(row, Sign.Cross, MatchLength.Three)).toBe(true)
    })
  })

  it('should check winner diagonally 3x3', () => {
    threeByThree.diagonal.forEach((row) => {
      expect(checkWinner(row, Sign.Cross, MatchLength.Three)).toBe(true)
    })
  })

  it('should check winner horizontally 5x5', () => {
    fiveByFive.horizontal.forEach((row) => {
      expect(checkWinner(row, Sign.Cross, MatchLength.Five)).toBe(true)
    })
  })

  it('should check winner vertically 5x5', () => {
    fiveByFive.vertical.forEach((row) => {
      expect(checkWinner(row, Sign.Cross, MatchLength.Five)).toBe(true)
    })
  })

  it('should check winner diagonally 5x5', () => {
    fiveByFive.diagonal.forEach((row) => {
      expect(checkWinner(row, Sign.Cross, MatchLength.Five)).toBe(true)
    })
  })
})
