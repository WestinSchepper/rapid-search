/**
 * TODO: We could probably combine this and `reverseIndexMapFactory` together.
 * NOTE: We might want to include sorting in this method as well.
 *       It feels weird to require a sorted array as the argument.
 */

const firstCharacter = require('../helpers/firstCharacter')

/**
 * @param {String[]} records the records the index map will be created from.
 * @description given a sorted array of strings (`startsWithSort.js`), this method will return an index map.
 * Index `0` indicates the range start, index `1` indicates the range end.
 *
 * { a: [0, 10], b: [11, 20] }
 * @returns {Object.<string, Array<Number>>}
 */
function startsWithIndexMapFactory(records) {
  const result = {}

  for (let i = 0; i < records.length; i++) {
    const record = records[i]
    const firstChar = firstCharacter(record)
    const previousFirstChar = firstCharacter(records[i-1])

    if (previousFirstChar !== undefined && firstChar !== previousFirstChar) {
      result[previousFirstChar] = [ ...result[previousFirstChar], i-1 ]
    }

    if (i === records.length - 1) {
      result[previousFirstChar] = [ ...result[previousFirstChar], i ]
    }

    if (!result[firstChar]) {
      result[firstChar] = [i]
    }
  }

  return result
}

module.exports = startsWithIndexMapFactory
