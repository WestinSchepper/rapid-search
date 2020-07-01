const isArray = require('./isArray')
const isInteger = require('./isInteger')

function slice(array, startIndex, endIndex) {
  if (!isArray(array)) {
    return []
  }

  if (isInteger(startIndex) && isInteger(endIndex)) {
    return array.slice(startIndex, endIndex + 1)
  }

  return array
}

module.exports = slice
