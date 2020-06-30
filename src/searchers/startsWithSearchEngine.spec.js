const startsWithSearchEngine = require('./startsWithSearchEngine')

describe('startsWithSearchEngine', () => {
  let engine = undefined

  beforeAll(() => {
    const data = ['aab', 'abc', 'acd', 'bab', 'bbc', 'bcd']
    const indexMap = { a: [0, 2], b: [3, 5] }
    const query = 'a'
    const limit = 1

    engine = startsWithSearchEngine(data, indexMap, query, limit)
  })

  it('returns 1 results when called', () => {
    expect(engine.next().value).toEqual(['aab'])
    expect(engine.next().value).toEqual(['aab', 'abc'])
    expect(engine.next().value).toEqual(['aab', 'abc', 'acd'])
    expect(engine.next().value).toEqual(undefined)
  })
})
