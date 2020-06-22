const endsWith = require('./endsWith')

describe('endsWith', () => {
  it('returns true when the query is found at the end of the string', () => {
    const string = 'Hello world'
    const query = 'orld'
    const expecation = true
    const result = endsWith(string, query)

    expect(result).toEqual(expecation)
  })

  it('returns undefined when the arguments are invalid data types', () => {
    const expecation = undefined
    const result = endsWith({})

    expect(result).toEqual(expecation)
  })
})
