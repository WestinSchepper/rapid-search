function* searchEngine(data, query, predicate, limit) {
  const result = []
  let nextLimit = limit

  if (query === '') return result

  for (let i = 0; i < data.length; i++) {
    if (predicate(data[i], query)) {
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
