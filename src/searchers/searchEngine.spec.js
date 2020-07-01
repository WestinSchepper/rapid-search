const searchEngine = require('./searchEngine')

describe('searchEngine', () => {
  let data = ['aab', 'abc', 'abd', 'bab', 'bbc', 'bcd']

  it('returns an empty array if the query is an empty string', () => {
    const engine = searchEngine(data, '')

    expect(engine.next().value).toEqual([])
  })

  it('returns the limited result of matching records using the predicate', () => {
    const predicate = jest.fn((record, query) => record.startsWith(query))
    const engine = searchEngine(data, 'ab', predicate, 1)

    expect(engine.next().value).toEqual(['abc'])
    expect(engine.next().value).toEqual(['abc', 'abd'])
    expect(engine.next().value).toEqual(['abc', 'abd'])
    expect(predicate).toBeCalled()
  })
})
