/**
 * Transforms a two dimensional array.
 *
 * @param grid - The grid to check.
 */
export const transpose = <T>(grid: T[][]) => {
  return grid.at(0).map((_, columnIndex) => grid.map((_, rowIndex) => grid[rowIndex][columnIndex]))
}

/**
 * Check if the given array has match values.
 *
 * @param array - The array to check.
 * @param subject - The subject to check.
 * @param length - The length of match to check.
 */
export const hasArrayMatchValues = <T, P extends number>(array: T[], subject: T, length: P) => {
  return array.length === length && array.every(item => item === subject)
}
