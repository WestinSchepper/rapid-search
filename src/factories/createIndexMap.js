const startsWithIndexMapFactory = require('./startsWithIndexMapFactory')
const endsWithIndexMapFactory = require('./endsWithIndexMapFactory')
const searchTypes = require('../constants/searchTypes')

const createIndexMap = (data, type) => {
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
