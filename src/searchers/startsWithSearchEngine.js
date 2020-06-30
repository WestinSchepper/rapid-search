const startsWith = require('../helpers/startsWith')
const isUndefined = require('../helpers/isUndefined')
const firstCharacter = require('../helpers/firstCharacter')

function* startsWithSearchEngine(data, indexMap, query, limit) {
  const result = []
  const firstChar = firstCharacter(query)
  const indexes = indexMap[firstChar]
  let nextLimit = limit

  if (query === '' || isUndefined(indexes)) return result

  let start = isUndefined(indexes[0]) ? 0 : indexes[0]
  let end = isUndefined(indexes[1]) ? data.length : indexes[1]

  for (let i = start; i <= end; i++) {
    if (startsWith(data[i], query)) {
      result.push(data[i])
    }

    if (result.length === nextLimit || i === end) {
      nextLimit += limit
      yield result
    }
  }
}

module.exports = startsWithSearchEngine
