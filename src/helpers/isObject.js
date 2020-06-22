/**
 * @param {*} value The value that should be asserted to be an object.
 */
function isObject(value) {
  return value && typeof value === 'object' && value.constructor === Object
}

module.exports = isObject
