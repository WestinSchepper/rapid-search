const configManager = require('./configManager')
const cacheManager = require('./cacheManager')
const dataManager = require('./dataManager')
const { type } = require('./constants/defaultConfig')

const rapidSearch = (customConfig) => {
  const config = configManager(customConfig)
  const cache = cacheManager(config.cacheSize())
  const data = dataManager(config.data(), config.searchLimit(), config.type())

  const search = (query) => {
    return cache.getOrSet(query, () => data.search(query))
  }

  return {
    ...config,
    ...data,
    search,
  }
}

const rs = rapidSearch({ cacheSize: 2, searchLimit: 2, data: ['bbc', 'abc', 'abd', 'bab', 'aab', 'bcd'] })

// console.log(rs)

// console.log(rs.config())
console.log(rs.search('a'))
console.log(rs.loadMore())
console.log(rs.loadMore())
console.log(rs.loadMore())
console.log(rs.loadMore())
// console.log(rs.result())
// console.log(rs.source())
// console.log(rs.indexMap())
// console.log(rs.lastQuery())

module.exports = rapidSearch
