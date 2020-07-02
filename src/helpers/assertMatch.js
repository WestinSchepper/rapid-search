const get = require('./get')

const assertMatch = (datum, indexes, query, predicate) => {
  return (
    indexes.length > 0
    && indexes.some((key) => predicate(get(datum, key), query))
    || predicate(datum, query)
  )
}

module.exports = assertMatch
