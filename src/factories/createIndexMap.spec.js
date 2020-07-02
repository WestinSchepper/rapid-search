const mockStartsWithIndexMapFactory = require('./startsWithIndexMapFactory')
const mockEndsWithIndexMapFactory = require('./endsWithIndexMapFactory')
const createIndexMap = require('./createIndexMap')

jest.mock('./startsWithIndexMapFactory', () => jest.fn())
jest.mock('./endsWithIndexMapFactory', () => jest.fn())

describe('createIndexMap', () => {
  it('calls the startsWithIndexMapFactory method if the type is `start`', () => {
    createIndexMap(['a', 'b', 'c'], [], 'start')
    expect(mockStartsWithIndexMapFactory).toBeCalled()
  })

  it('calls the endsWithIndexMapFactory method if the type is `end`', () => {
    createIndexMap(['a', 'b', 'c'], [], 'end')
    expect(mockEndsWithIndexMapFactory).toBeCalled()
  })

  it('returns an empty object if the type is not `start` or `end`', () => {
    const input = ['a', 'b', 'c']
    const result = createIndexMap(input, [], 'any')

    expect(result).toEqual({})
  })

  it('returns an empty object if the indexes array is not empty', () => {
    const input = ['a', 'b', 'c']
    const result = createIndexMap(input, ['name'], 'any')

    expect(result).toEqual({})
  })
})
