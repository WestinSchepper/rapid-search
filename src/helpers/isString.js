/**
 * @param {*} value The value that should be asserted to be a string.
 */
function isString(value) {
  return typeof value === 'string' || value instanceof String;
}

module.exports = isString
