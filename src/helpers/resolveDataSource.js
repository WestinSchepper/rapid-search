const slice = require('./slice')
const startsWith = require('./startsWith')
const lastCharacter = require('./lastCharacter')
const firstCharacter = require('./firstCharacter')
const searchTypes = require('../constants/searchTypes')

const resolveDataSource = (data, lastResult, indexes, indexMap, query, lastQuery, type) => {
  if (startsWith(query, lastQuery)) return lastResult
  let indexRange = [0, data.length - 1]

  if (indexes.length > 0) return slice(data, ...indexRange)
  if (searchTypes.start === type) indexRange = indexMap[firstCharacter(query)]
  if (searchTypes.end === type) indexRange = indexMap[lastCharacter(query)]

  return slice(data, ...indexRange)
}

module.exports = resolveDataSource
