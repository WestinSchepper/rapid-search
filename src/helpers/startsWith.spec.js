const startsWith = require('./startsWith')

it('returns whether the string starts with the query or not', () => {
  const string = 'Hello world'
  const query = 'Hell'
  const expecation = true
  const result = startsWith(string, query)

  expect(result).toEqual(expecation)
})
