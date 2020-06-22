/**
 * @param {*} value The value that should be asserted to be an integer.
 */
function isInteger(value) {
  return typeof value === 'number' && isFinite(value) && Number.isInteger(value)
}

module.exports = isInteger
