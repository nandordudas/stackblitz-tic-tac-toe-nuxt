import { hasArrayMatchValues, transpose } from './array'

/**
 * Use map-list to store non-duplicated items and check if the subject is already in the map.
 *
 * @param list - The list to manage.
 * @param item - The item to add to the list.
 * @param subject - The subject to check.
 */
const isMapResponsibleForSubject = <T>(list: Map<T, T>, item: T, subject: T) => {
  return list.set(item, item).size === 1 && list.get(item) === subject
}

/**
 * Check if the given grid has a winner.
 *
 * @param grid - The grid to check.
 * @param subject - The subject to check.
 * @param length - The length of match to check.
 */
export const checkWinner = <T, P extends number>(grid: T[][], subject: T, length: P) => {
  // We check the length horizontally and vertically, so we don't need to check it diagonally.
  const [_left, _right]: Map<T, T>[] = [new Map(), new Map()]

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
    if (isMapResponsibleForSubject(_left, _item, subject))
      return true

    // Get the opposite item of the current row.
    _item = row.at(length - (columnIndex + 1))

    // Check the winner diagonally from top-right to bottom-left.
    if (isMapResponsibleForSubject(_right, _item, subject))
      return true

    return false
  })
}
