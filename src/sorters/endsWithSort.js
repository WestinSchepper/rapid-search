const clone = require('../helpers/clone')
const reverseString = require('../helpers/reverseString')

/**
 * @param {String[]} records the records to be sorted.
 * @description given an array of strings, this method will sort them using the last letter.
 */
function endsWithSort(records) {
  return clone(records).sort((a, b) => {
    const ra = reverseString(a).toLowerCase()
    const rb = reverseString(b).toLowerCase()

    if (ra < rb) {
      return -1
    }

    if (ra > rb) {
      return 1
    }

    return 0
  })
}

module.exports = endsWithSort
