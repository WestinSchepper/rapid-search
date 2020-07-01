const slice = require('./slice')

describe('slice', () => {
  it('returns the sliced array without mutating the original array', () => {
    const input = [1, 2, 3, 4]
    const indexes = [0, 2]
    const result = slice(input, ...indexes)

    expect(result).toEqual([1, 2, 3])
    expect(input).toEqual([1, 2, 3, 4])
  })

  it('returns the original array if the start or end parameters are invalid types', () => {
    const input = [1, 2, 3, 4]
    const result = slice(input, 0, null)

    expect(result).toEqual([1, 2, 3, 4])
  })

  it('returns an empty array if the provided array parameter is not an array type', () => {
    const input = {}
    const result = slice(input, 0, 2)

    expect(result).toEqual([])
  })
})
