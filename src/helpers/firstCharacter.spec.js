const firstCharacter = require('./firstCharacter')

it('returns the first letter of the provided string', () => {
  const input = 'Hello world'
  const expecation = 'H'
  const result = firstCharacter(input)

  expect(result).toEqual(expecation)
})
