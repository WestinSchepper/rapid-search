const assertMatch = require('../helpers/assertMatch')

function* searchEngine(data, indexes, query, predicate, limit) {
  const result = []
  let nextLimit = limit

  if (query === '') return result

  for (let i = 0; i < data.length; i++) {
    if (assertMatch(data[i], indexes, query, predicate)) {
      result.push(data[i])
    }

    if (result.length === nextLimit) {
      nextLimit += limit
      yield result
    }
  }

  return result
}

module.exports = searchEngine
