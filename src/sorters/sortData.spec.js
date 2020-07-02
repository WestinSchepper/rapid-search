const mockStartsWithSort = require('./startsWithSort')
const mockEndsWithSort = require('./endsWithSort')
const sortData = require('./sortData')

jest.mock('./startsWithSort', () => jest.fn())
jest.mock('./endsWithSort', () => jest.fn())

describe('sortData', () => {
  it('calls the startsWithSort method if the type is `start`', () => {
    sortData(['a', 'b', 'c'], [], 'start')
    expect(mockStartsWithSort).toBeCalled()
  })

  it('calls the endsWithSort method if the type is `end`', () => {
    sortData(['a', 'b', 'c'], [], 'end')
    expect(mockEndsWithSort).toBeCalled()
  })

  it('returns the provided data as-is if the type is not `start` or `end`', () => {
    const input = ['a', 'b', 'c']
    const result = sortData(input, [], 'any')

    expect(result).toEqual(input)
  })

  it('returns the provided data as-is if the indexes array is not empty', () => {
    const input = ['a', 'b', 'c']
    const result = sortData(input, ['name'], 'any')

    expect(result).toEqual(input)
  })
})
