const insertArray = require('./insertArray')

describe('insertArray', () => {
  it('returns an array with the provided value', () => {
    const list = []
    const limit = 3
    const value = 1
    const expecation = [1]
    const result = insertArray(list, limit, value)

    expect(result).toEqual(expecation)
  })

  it('returns an array with the provided value and the first value removed', () => {
    const list = [1, 2, 3]
    const limit = 3
    const value = 4
    const expecation = [2, 3, 4]
    const result = insertArray(list, limit, value)

    expect(result).toEqual(expecation)
  })

  it('returns undefined when the arguments are invalid data types', () => {
    const expecation = undefined
    const result = insertArray()

    expect(result).toEqual(expecation)
  })
})
