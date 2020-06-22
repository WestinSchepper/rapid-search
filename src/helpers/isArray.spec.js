const isArray = require('./isArray')

it('should return true if the value provided is an array', () => {
  const input = [1, 2, 3]
  const expectation = true
  const result = isArray(input)

  expect(result).toBe(expectation)
})
