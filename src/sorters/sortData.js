const startsWithSort = require('./startsWithSort')
const endsWithSort = require('./endsWithSort')
const searchTypes = require('../constants/searchTypes')

const sortData = (data, type) => {
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
