const configManager = require('./configManager')
const cacheManager = require('./cacheManager')
const dataManager = require('./dataManager')

const rapidSearch = (customConfig) => {
  const config = configManager(customConfig)
  const cache = cacheManager(config.cacheSize())
  const data = dataManager(config.data(), config.indexes(), config.searchLimit(), config.type())

  const search = (query) => {
    return cache.getOrSet(query, () => data.search(query))
  }

  return {
    ...config,
    ...data,
    search,
  }
}

module.exports = rapidSearch
