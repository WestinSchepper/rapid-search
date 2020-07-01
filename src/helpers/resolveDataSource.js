const slice = require('./slice')
const startsWith = require('./startsWith')
const lastCharacter = require('./lastCharacter')
const firstCharacter = require('./firstCharacter')
const searchTypes = require('../constants/searchTypes')

const resolveDataSource = (data, lastResult, indexMap, query, lastQuery, type) => {
  if (startsWith(query, lastQuery)) return lastResult
  let indexes = [0, data.length - 1]

  if (searchTypes.start === type) indexes = indexMap[firstCharacter(query)]
  if (searchTypes.end === type) indexes = indexMap[lastCharacter(query)]

  return slice(data, ...indexes)
}

module.exports = resolveDataSource
