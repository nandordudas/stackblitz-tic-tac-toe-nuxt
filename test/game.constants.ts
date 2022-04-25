import { MatchLength, Sign } from '../utils/types'
import { transpose } from '../utils/array'

const item = Sign.Cross

const threeByThreeHorizontal: Sign[][][] = [
  [
    [item, item, item],
    [null, null, null],
    [null, null, null],
  ],
  [
    [null, null, null],
    [item, item, item],
    [null, null, null],
  ],
  [
    [null, null, null],
    [null, null, null],
    [item, item, item],
  ],
]

const threeByThreeHorizontalTransposed = Array.from<undefined, Sign[][]>(
  { length: MatchLength.Three },
  (_, i) => transpose(threeByThreeHorizontal.at(i)),
)

const fiveByFiveHorizontal: Sign[][][] = [
  [
    [item, item, item, item, item],
    [null, null, null, null, null],
    [null, null, null, null, null],
    [null, null, null, null, null],
    [null, null, null, null, null],
  ],
  [
    [null, null, null, null, null],
    [item, item, item, item, item],
    [null, null, null, null, null],
    [null, null, null, null, null],
    [null, null, null, null, null],
  ],
  [
    [null, null, null, null, null],
    [null, null, null, null, null],
    [item, item, item, item, item],
    [null, null, null, null, null],
    [null, null, null, null, null],
  ],
  [
    [null, null, null, null, null],
    [null, null, null, null, null],
    [null, null, null, null, null],
    [item, item, item, item, item],
    [null, null, null, null, null],
  ],
  [
    [null, null, null, null, null],
    [null, null, null, null, null],
    [null, null, null, null, null],
    [null, null, null, null, null],
    [item, item, item, item, item],
  ],
]

const fiveByFiveHorizontalTransposed = Array.from<undefined, Sign[][]>(
  { length: MatchLength.Five },
  (_, i) => transpose(fiveByFiveHorizontal.at(i)),
)

const threeByThreeDiagonal: Sign[][] = [
  [item, null, null],
  [null, item, null],
  [null, null, item],
]

const fiveByFiveDiagonal: Sign[][] = [
  [item, null, null, null, null],
  [null, item, null, null, null],
  [null, null, item, null, null],
  [null, null, null, item, null],
  [null, null, null, null, item],
]

export const { fiveByFive, threeByThree } = {
  threeByThree: {
    horizontal: threeByThreeHorizontal,
    vertical: threeByThreeHorizontalTransposed,
    diagonal: [threeByThreeDiagonal, threeByThreeDiagonal.reverse()],
  },
  fiveByFive: {
    horizontal: fiveByFiveHorizontal,
    vertical: fiveByFiveHorizontalTransposed,
    diagonal: [fiveByFiveDiagonal, fiveByFiveDiagonal.reverse()],
  },
}
