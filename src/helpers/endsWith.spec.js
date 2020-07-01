const endsWith = require('./endsWith')

describe('endsWith', () => {
  it('returns true when the query is found at the end of the string', () => {
    const string = 'Hello world'
    const query = 'orld'
    const expecation = true
    const result = endsWith(string, query)

    expect(result).toEqual(expecation)
  })

  it('returns false when the arguments are invalid data types', () => {
    const expecation = false
    const result = endsWith({}, undefined)

    expect(result).toEqual(expecation)
  })

  it('returns false when the query is an empty string', () => {
    const expecation = false
    const result = endsWith('hello', '')

    expect(result).toEqual(expecation)
  })
})
