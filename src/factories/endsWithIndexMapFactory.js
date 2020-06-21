/**
 * TODO: We could probably combine this and `forwardIndexMapFactory` together.
 * NOTE: We might want to include sorting in this method as well.
 *       It feels weird to require a sorted array as the argument.
 */

const lastCharacter = require('../helpers/lastCharacter')

/**
 * @param {String[]} records the records the index map will be created from.
 * @description given a reverse sorted array of strings (`endsWithSort.js`), this method will return an index map.
 * Index `0` indicates the range start, index `1` indicates the range end.
 *
 * { a: [0, 10], b: [11, 20] }
 * @returns {Object.<string, Array<Number>>}
 */
function endsWithIndexMapFactory(records) {
  const result = {}

  for (let i = 0; i < records.length; i++) {
    const record = records[i]
    const lastChar = lastCharacter(record)
    const previousLastChar = lastCharacter(records[i-1])

    if (previousLastChar !== undefined && lastChar !== previousLastChar) {
      result[previousLastChar] = [ ...result[previousLastChar], i-1 ]
    }

    if (i === records.length - 1) {
      result[previousLastChar] = [ ...result[previousLastChar], i ]
    }

    if (!result[lastChar]) {
      result[lastChar] = [i]
    }
  }

  return result
}

module.exports = endsWithIndexMapFactory
