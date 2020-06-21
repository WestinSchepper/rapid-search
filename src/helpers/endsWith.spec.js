const endsWith = require('./endsWith')

it('returns whether the string ends with the query or not', () => {
  const string = 'Hello world'
  const query = 'orld'
  const expecation = true
  const result = endsWith(string, query)

  expect(result).toEqual(expecation)
})
