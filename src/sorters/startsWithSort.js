/**
 * @param {String[]} records the records to be sorted.
 * @description given an array of strings, this method will sort them.
 */
function startsWithSort(records) {
  return records.sort((a, b) => {
    const la = a.toLowerCase()
    const lb = b.toLowerCase()

    if (la < lb) {
      return -1
    }

    if (la > lb) {
      return 1
    }

    return 0
  })
}

module.exports = startsWithSort
