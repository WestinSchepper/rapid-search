const searchTypes = require('./searchTypes')

const defaultConfig = {
  type: searchTypes.start,
  cacheSize: 0,
  searchLimit: Number.MAX_SAFE_INTEGER,
  data: [],
}

module.exports = defaultConfig
