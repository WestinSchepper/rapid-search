const isArray = require('./isArray')
const isObject = require('./isObject')

/**
 * @param {*} value the value to be cloned.
 */
function clone(value) {
  if (isArray(value)) return [ ...value ]
  if (isObject(value)) return { ...value }
  return value
}

module.exports = clone
