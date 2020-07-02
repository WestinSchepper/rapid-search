const endsWith = require('./endsWith')

function resolveQueries(query, configuredIndexes) {
  if (!query.includes(':')) return { indexes: configuredIndexes, queries: [query] }

  const regex = /(\w{0,}\:)/gi
  const splitQuery = query.split(regex)
  splitQuery.shift()

  const result = splitQuery.reduce((accumulator, string) => {
    const sanitizedString = string.trim()

    if (endsWith(sanitizedString, ':')) {
      accumulator.indexes.push(sanitizedString.replace(':', ''))
    } else {
      accumulator.queries.push(sanitizedString)
    }

    return accumulator

  }, { indexes: [], queries: [] })

  return result
}

module.exports = resolveQueries
