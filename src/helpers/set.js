const isArray = require('./isArray')
const isObject = require('./isObject')
const isUndefined = require('./isUndefined')

function set(object, path, value) {
  const keys = isArray(path) ? path : path.split('.')
  const targetKey = keys.pop()

  for (key of keys) {
    if (isUndefined(object[key]) || !isObject(object[key])) {
      object[key] = {}
    }

    object = object[key]
  }

  object[targetKey] = value
}

module.exports = set
