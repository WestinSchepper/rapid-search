const isObject = require('./isObject')

function keys(object) {
  if (!isObject(object)) return []

  return Object.keys(object)
}

module.exports = keys
