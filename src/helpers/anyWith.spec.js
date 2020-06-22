const anyWith = require('./anyWith')

describe('anyWith', () => {
  it('returns true when the query is found anywhere in the string', () => {
    const string = 'Hello world'
    const query = 'lo wo'
    const expecation = true
    const result = anyWith(string, query)

    expect(result).toEqual(expecation)
  })

  it('returns undefined when the arguments are invalid data types', () => {
    const expecation = undefined
    const result = anyWith(true)

    expect(result).toEqual(expecation)
  })
})
