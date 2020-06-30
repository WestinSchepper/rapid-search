const clone = require('./helpers/clone')
const insertArray = require('./helpers/insertArray')
const insertObject = require('./helpers/insertObject')
const resolveValue = require('./helpers/resolveValue')

const cacheManager = (cacheSize) => {
  let history = []
  let cache = {}

  const has = (key) => {
    return cache.hasOwnProperty(key)
  }

  const get = (key) => {
    return cache[key]
  }

  const set = (key, value) => {
    if (cacheSize === 0) return value

    history = insertArray(history, cacheSize, key)
    cache = insertObject(cache, history, key, value)

    return value
  }

  const getOrSet = (key, value) => {
    return has(key) ? get(key) : set(key, resolveValue(value))
  }

  const getHistory = () => {
    return clone(history)
  }

  const getCache = () => {
    return clone(cache)
  }

  const clear = () => {
    history = []
    cache = {}
  }

  return {
    has,
    get,
    set,
    clear,
    getOrSet,
    cache: getCache,
    history: getHistory,
  }
}

module.exports = cacheManager
