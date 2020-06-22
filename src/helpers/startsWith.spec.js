const startsWith = require('./startsWith')

describe('startsWith', () => {
  it('returns true when the query is found at the beginning of the string', () => {
    const string = 'Hello world'
    const query = 'Hell'
    const expecation = true
    const result = startsWith(string, query)

    expect(result).toEqual(expecation)
  })

  it('returns undefined when the arguments are invalid data types', () => {
    const expecation = undefined
    const result = startsWith(null)

    expect(result).toEqual(expecation)
  })
})
