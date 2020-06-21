const lastCharacter = require('./lastCharacter')

it('returns the last letter of the provided string', () => {
  const input = 'Hello world'
  const expecation = 'd'
  const result = lastCharacter(input)

  expect(result).toEqual(expecation)
})
