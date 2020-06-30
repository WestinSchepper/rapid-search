const mockStartsWithSearchEngine = require('./startsWithSearchEngine')
const mockEndsWithSearchEngine = require('./endsWithSearchEngine')
const mockAnyWithSearchEngine = require('./anyWithSearchEngine')
const createSearchEngine = require('./createSearchEngine')

jest.mock('./startsWithSearchEngine', () => jest.fn())
jest.mock('./endsWithSearchEngine', () => jest.fn())
jest.mock('./anyWithSearchEngine', () => jest.fn())

describe('createSearchEngine', () => {
  it('calls the startsWithSearchEngine method if the type is `start`', () => {
    createSearchEngine([], {}, '', 5, 'start')
    expect(mockStartsWithSearchEngine).toBeCalled()
  })

  it('calls the endsWithSearchEngine method if the type is `end`', () => {
    createSearchEngine([], {}, '', 5, 'end')
    expect(mockEndsWithSearchEngine).toBeCalled()
  })

  it('calls the anyWithSearchEngine method if the type is `any`', () => {
    createSearchEngine([], {}, '', 5, 'any')
    expect(mockAnyWithSearchEngine).toBeCalled()
  })
})
