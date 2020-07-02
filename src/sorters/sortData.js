const startsWithSort = require('./startsWithSort')
const endsWithSort = require('./endsWithSort')
const searchTypes = require('../constants/searchTypes')

const sortData = (data, indexes, type) => {
  if (indexes.length > 0) return data

  switch (type) {
    case searchTypes.start:
      return startsWithSort(data)

    case searchTypes.end:
      return endsWithSort(data)

    default:
      return data
  }
}

module.exports = sortData
