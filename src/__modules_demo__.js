const keys = require('./helpers/keys')
const isArray = require('./helpers/isArray')
const isString = require('./helpers/isString')
const isInteger = require('./helpers/isInteger')
const searchTypes = require('./constants/searchTypes')

const defaultConfig = {
  type: searchTypes.start,
  cacheSize: 0,
  searchLimit: Number.MAX_SAFE_INTEGER,
  data: [],
}

const validConfigKeys = keys(defaultConfig)

const configValidators = {
  type: isString,
  cacheSize: isInteger,
  searchLimit: isInteger,
  data: isArray,
}

module.exports = {
  validConfigKeys,
  defaultConfig,
  configValidators,
}


const defaults = {
  type: 'start',
  cacheSize: 3,
  searchLimit: 10,
  data: [],
}

// CONFIG MANAGER
const configManager = (config) => {
  let internal = {
    ...defaults,
    ...config,
  }

  const methods = Object.keys(internal).reduce((accumulator, key) => {
    accumulator[key] = (newValue) => {
      if (newValue !== undefined) {
        internal[key] = newValue
      } else {
        return internal[key]
      }
    }

    return accumulator
  }, {})

  const getOrSetConfig = (newValue) => {
    if (newValue !== undefined) {
      internal = {
        ...defaults,
        ...newValue,
      }
    } else {
      return { ...internal }
    }
  }

  return {
    ...methods,
    config: getOrSetConfig,
  }
}

// CACHE MANAGER
const cacheManager = (cacheSize) => {
  let history = []
  let cache = {}

  const get = (key) => {
    return cache[key]
  }

  const set = (key, value) => {
    if (cacheSize === history.length) {
      delete cache[history[0]]
      cache[key] = value
      history = [ ...history.slice(1), key ]
    } else {
      history = [ ...history, key ]
      cache[key] = value
    }

    cache[key] = value
  }

  const getOrSet = (key, value) => {
    if (value !== undefined) {
      set(key, value)
    } else {
      return get(key)
    }
  }

  const clear = () => {
    history = []
    cache = {}
  }

  return {
    get,
    set,
    getOrSet,
    clear,
  }
}

function firstCharacter(string) {
  return string?.substring(0, 1)
}

const sortData = (data, type) => {
  if (type === 'start') {
    return data.sort((a,b) => {
      if (a > b) return -1
      if (a < b) return 1

      return 0
    })
  } else {
    return data.sort((a,b) => {
      if (a < b) return -1
      if (a > b) return 1

      return 0
    })
  }
}

function createIndexMap(records, type) {
  const result = {}

  if (type === 'start') {
    for (let i = 0; i < records.length; i++) {
      const record = records[i]
      const firstChar = firstCharacter(record)
      const previousFirstChar = firstCharacter(records[i-1])

      if (previousFirstChar !== undefined && firstChar !== previousFirstChar) {
        result[previousFirstChar] = [ ...result[previousFirstChar], i-1 ]
      }

      if (!result[firstChar]) {
        result[firstChar] = [i]
      }
    }
  }

  return result
}

// DATA MANAGER
const dataManager = (data, type) => {
  let source = sortData(data, type)
  let indexMap = createIndexMap(source, type)

  const getOrSetData = (newValue) => {
    if (typeof newValue === 'object' && newValue.constructor === Array) {
      source = sortData(data, type)
      indexMap = createIndexMap(source, type)
    } else {
      return [ ...source ]
    }
  }

  const getIndexMap = () => {
    return { ...indexMap }
  }

  return {
    data: getOrSetData,
    indexMap: getIndexMap,
  }
}

function* searchStartsWith(items, indexMap, limit, query) {
  if (query === '') yield []

  const firstChar = query.substring(0, 1).toLowerCase()
  const regex = makeRegex('start', query)

  if (indexMap[firstChar] === undefined) yield []

  let nextLimit = limit
  let start = indexMap[firstChar]?.[0] ?? 0
  let end = indexMap[firstChar]?.[1] ?? items.length
  let result = []

  for (let i = start; i <= end; i++) {
    if (items[i].match(regex)) {
      result.push(items[i])
    }

    if (result.length === nextLimit || i === end) {
      nextLimit += limit
      yield result
    }
  }
}

function createSearchEngine(data, indexMap, limit, type, query) {
  if (type === 'start') {
    return searchStartsWith(data, indexMap, limit, query)
  }
}

const searchManager = (indexMap, limit, type) => {
  let result = []
  let searchEngine = undefined

  const getResult = () => {
    return [ ...result ]
  }

  const search = (data, query) => {
    searchEngine = createSearchEngine(data, indexMap, limit, type, query)
    result = searchEngine.next().value

    return getResult()
  }

  const loadMore = () => {
    if (searchEngine !== undefined && searchEngine.done) {
      result = searchEngine.next().value
    }

    return getResult()
  }

  return {
    search,
    loadMore,
    result: getResult,
  }
}

const rapid = (userConfig) => {
  const _config = configManager(userConfig)
  const _cache = cacheManager(_config.cacheSize(), _config.enableCache())
  const _data = dataManager(_config.data(), _config.type())
  const _search = searchManager(_data.data(), _data.indexMap(), _config.searchLimit(), _config.type())

  const config = _config.config
  const cacheSize = _config.cacheSize
  const searchLimit = _config.searchLimit
  const data = _config.data
  const type = _config.type

  const search = _search.search
  const loadMore = _search.loadMore
  const result = _search.result

  return {
    config,
    cacheSize,
    searchLimit,
    data,
    type,
    search,
    loadMore,
    result,
  }
}

let app = rapid({ data: ['apple', 'orange', 'banana', 'cucumber', 'watermelon', 'animal', 'acid', 'appeal', 'bank'] })

app.search() // new search -> `searchManager.search()`
app.loadMore() // load more if there is a limit -> `searchManager.loadMore()`
app.result() // last result -> `searchManager.result()`
app.config() // get or set the app config -> `configManager.config()`
app.cacheSize() // get or set the config cacheSize -> `configManager.cacheSize()`
app.searchLimit() // get or set the config searchLimit -> `configManager.searchLimit()`
app.data() // get or set the config data -> `configManager.data()`
app.type() // get or set the config type -> `configManager.type()`
