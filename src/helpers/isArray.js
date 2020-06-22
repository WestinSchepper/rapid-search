/**
 * @param {*} value The value that should be asserted to be an arrays.
 */
function isArray(value) {
  return value && typeof value === 'object' && value.constructor === Array
}

module.exports = isArray
