const startsWith = require('./startsWith')

describe('startsWith', () => {
  it('returns true when the query is found at the beginning of the string', () => {
    const string = 'Hello world'
    const query = 'Hell'
    const expecation = true
    const result = startsWith(string, query)

    expect(result).toEqual(expecation)
  })

  it('returns false when the arguments are invalid data types', () => {
    const expecation = false
    const result = startsWith(null, 7)

    expect(result).toEqual(expecation)
  })

  it('returns false when query is an empty string', () => {
    const expecation = false
    const result = startsWith('hello', '')

    expect(result).toEqual(expecation)
  })
})
