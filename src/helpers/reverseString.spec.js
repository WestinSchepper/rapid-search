const reverseString = require('./reverseString')

describe('reverseString', () => {
  it('returns the string reversed', () => {
    const input = 'Hello world'
    const expecation = 'dlrow olleH'
    const result = reverseString(input)

    expect(result).toEqual(expecation)
  })

  it('returns undefined when the argument provided is not a string', () => {
    const expecation = undefined
    const result = reverseString([])

    expect(result).toEqual(expecation)
  })
})
