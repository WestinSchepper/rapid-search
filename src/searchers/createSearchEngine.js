const anyWith = require('../helpers/anyWith')
const endsWith = require('../helpers/endsWith')
const startsWith = require('../helpers/startsWith')
const searchEngine = require('./searchEngine')
const searchTypes = require('../constants/searchTypes')

const createSearchEngine = (data, query, limit, type) => {
  switch (type) {
    case searchTypes.start:
      return searchEngine(data, query, startsWith, limit)

    case searchTypes.end:
      return searchEngine(data, query, endsWith, limit)

    default:
      return searchEngine(data, query, anyWith, limit)
  }
}

module.exports = createSearchEngine
