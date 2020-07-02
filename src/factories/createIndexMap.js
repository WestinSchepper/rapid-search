const startsWithIndexMapFactory = require('./startsWithIndexMapFactory')
const endsWithIndexMapFactory = require('./endsWithIndexMapFactory')
const searchTypes = require('../constants/searchTypes')

// TODO: Create indexMaps based on indexes
const createIndexMap = (data, indexes, type) => {
  if (indexes.length > 0) return {}

  switch (type) {
    case searchTypes.start:
      return startsWithIndexMapFactory(data)

    case searchTypes.end:
      return endsWithIndexMapFactory(data)

    default:
      return {}
  }
}

module.exports = createIndexMap
