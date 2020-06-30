/**
 * @param {*} value The value that should be asserted to be undefined.
 */
function isUndefined(value) {
  return typeof value === 'undefined'
}

module.exports = isUndefined
