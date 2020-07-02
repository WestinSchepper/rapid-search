const resolveQueries = require('./resolveQueries')

describe('resolveQueries', () => {
  it('returns the provided values if the query does not have named parameters', () => {
    const query = 'Hello world'
    const indexes = ['name']
    const result = resolveQueries(query, indexes)

    expect(result).toEqual({ queries: [query], indexes: ['name'] })
  })

  it('returns the named parameter indexes and corresponding queries', () => {
    const query = 'phone:123-456-7890 age:21'
    const indexes = ['name']
    const result = resolveQueries(query, indexes)

    expect(result).toEqual({ queries: ['123-456-7890', '21'], indexes: ['phone', 'age'] })
  })
})
