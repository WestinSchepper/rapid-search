const reverseString = require('./reverseString')

it('returns the string reversed', () => {
  const input = 'Hello world'
  const expecation = 'dlrow olleH'
  const result = reverseString(input)

  expect(result).toEqual(expecation)
})
