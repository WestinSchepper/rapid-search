const startsWithSearchEngine = require('./startsWithSearchEngine')
const endsWithSearchEngine = require('./endsWithSearchEngine')
const anyWithSearchEngine = require('./anyWithSearchEngine')
const searchTypes = require('../constants/searchTypes')

const createSearchEngine = (data, indexMap, query, limit, type) => {
  switch (type) {
    case searchTypes.start:
      return startsWithSearchEngine(data, indexMap, query, limit)

    case searchTypes.end:
      return endsWithSearchEngine(data, indexMap, query, limit)

    default:
      return anyWithSearchEngine(data, query, limit)
  }
}

module.exports = createSearchEngine
