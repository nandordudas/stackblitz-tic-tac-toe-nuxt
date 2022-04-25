import { hasArrayMatchValues, transpose } from './array'

/**
 * Check if the given grid has a winner.
 *
 * @param grid - The grid to check.
 * @param subject - The subject to check.
 * @param length - The length of match to check.
 */
export const checkWinner = <T, P extends number>(grid: T[][], subject: T, length: P) => {
  const [_left, _right]: T[][] = [[], []]

  // The grid has square dimensions, so we can use the same index for both dimensions.
  return grid.some((row, columnIndex) => {
    let _item: T = null

    // Check the winner horizontally.
    if (hasArrayMatchValues(row, subject, length))
      return true

    // Check the winner vertically.
    if (hasArrayMatchValues(transpose(grid).at(columnIndex), subject, length))
      return true

    _item = row.at(columnIndex)

    // Check the winner diagonally from top-left to bottom-right.
    if (_item === subject) {
      _left.push(_item)

      if (hasArrayMatchValues(_left, subject, length))
        return true
    }

    // Get the opposite item of the current row.
    _item = row.at(length - (columnIndex + 1))

    // Check the winner diagonally from top-right to bottom-left.
    if (_item === subject) {
      _right.push(_item)

      if (hasArrayMatchValues(_right, subject, length))
        return true
    }

    return false
  })
}
