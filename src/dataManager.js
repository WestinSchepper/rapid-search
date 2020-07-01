const clone = require('./helpers/clone')
const sortData = require('./sorters/sortData')
const isUndefined = require('./helpers/isUndefined')
const createIndexMap = require('./factories/createIndexMap')
const resolveDataSource = require('./helpers/resolveDataSource')
const createSearchEngine = require('./searchers/createSearchEngine')

const dataManager = (data, limit, type) => {
  const source = sortData(data, type)
  const indexMap = createIndexMap(source, type)
  let lastQuery = ''
  let result = []
  let searchEngine = undefined

  const getResult = () => clone(result)

  const getSource = () => clone(source)

  const getIndexMap = () => clone(indexMap)

  const getLastQuery = () => clone(lastQuery)

  const search = (query) => {
    const dataSource = resolveDataSource(source, result, indexMap, query, lastQuery, type)
    searchEngine = createSearchEngine(dataSource, query, limit, type)
    result = searchEngine.next().value
    lastQuery = query

    return getResult()
  }

  // TODO: Implement `canLoadMore` method
  const loadMore = () => {
    const nextResult = searchEngine.next()
    if (!isUndefined(searchEngine) && !nextResult.done) {
      result = nextResult.value
    }

    return getResult()
  }

  return {
    search,
    loadMore,
    result: getResult,
    source: getSource,
    indexMap: getIndexMap,
    lastQuery: getLastQuery,
  }
}

module.exports = dataManager
