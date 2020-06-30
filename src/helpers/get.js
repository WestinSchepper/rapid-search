const isArray = require('./isArray')
const isObject = require('./isObject')

function get(object, path) {
  const keys = isArray(path) ? path : path.split('.')

  if (keys.length === 1) return object[keys[0]]

  if (isObject(object[keys[0]])) {
    return get(object[keys[0]], keys.slice(1))
  }
}

module.exports = get
