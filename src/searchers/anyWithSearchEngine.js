const anyWith = require('../helpers/anyWith')

function* anyWithSearchEngine(data, query, limit) {
  const result = []
  let nextLimit = limit

  if (query === '') return result

  for (let i = 0; i < data.length; i++) {
    if (anyWith(data[i])) {
      result.push(data[i])
    }

    if (result.length === nextLimit || i === end) {
      nextLimit += limit
      yield result
    }
  }
}

module.exports = anyWithSearchEngine
