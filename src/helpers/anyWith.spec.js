const anyWith = require('./anyWith')

it('returns whether the string matches anything with the query or not', () => {
  const string = 'Hello world'
  const query = 'lo wo'
  const expecation = true
  const result = anyWith(string, query)

  expect(result).toEqual(expecation)
})
