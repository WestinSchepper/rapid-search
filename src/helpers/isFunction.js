/**
 * @param {*} value The value that should be asserted to be a function.
 */
function isFunction(value) {
  return typeof value === 'function'
}

module.exports = isFunction
