const endsWith = require('../helpers/endsWith')
const isUndefined = require('../helpers/isUndefined')
const lastCharacter = require('../helpers/lastCharacter')

function* endsWithSearchEngine(data, indexMap, query, limit) {
  const result = []
  const lastChar = lastCharacter(query)
  const indexes = indexMap[lastChar]
  let nextLimit = limit

  if (query === '' || isUndefined(indexes)) return result

  let start = isUndefined(indexes[0]) ? 0 : indexes[0]
  let end = isUndefined(indexes[1]) ? data.length : indexes[1]

  for (let i = start; i <= end; i++) {
    if (endsWith(data[i], query)) {
      result.push(data[i])
    }

    if (result.length === nextLimit || i === end) {
      nextLimit += limit
      yield result
    }
  }
}

module.exports = endsWithSearchEngine
