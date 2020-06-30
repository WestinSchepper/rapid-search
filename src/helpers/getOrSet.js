const get = require('./get')
const set = require('./set')
const isFunction = require('./isFunction')
const isUndefined = require('./isUndefined')

function getOrSet(object, path, newValue, validator) {
  let isValid = undefined

  if (isUndefined(validator)) {
    isValid = true
  } else if (isFunction(validator)) {
    isValid = validator(newValue)
  } else {
    isValid = validator
  }

  if (isValid && !isUndefined(newValue)) {
    set(object, path, newValue)
  } else {
    return get(object, path)
  }
}

module.exports = getOrSet
