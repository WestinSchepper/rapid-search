const createSearchEngine = require('./createSearchEngine')

jest.mock('./createSearchEngine', () => jest.fn())

describe('createSearchEngine', () => {
  it('creates and returns a search engine', () => {
    createSearchEngine([], 'hello', 'start', 5)

    expect(createSearchEngine).toBeCalledWith([], 'hello', 'start', 5)
  })
})
