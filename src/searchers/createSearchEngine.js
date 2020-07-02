const anyWith = require('../helpers/anyWith')
const endsWith = require('../helpers/endsWith')
const startsWith = require('../helpers/startsWith')
const searchEngine = require('./searchEngine')
const searchTypes = require('../constants/searchTypes')

const createSearchEngine = (data, indexes, query, limit, type) => {
  switch (type) {
    case searchTypes.start:
      return searchEngine(data, indexes, query, startsWith, limit)

    case searchTypes.end:
      return searchEngine(data, indexes, query, endsWith, limit)

    default:
      return searchEngine(data, indexes, query, anyWith, limit)
  }
}

module.exports = createSearchEngine
