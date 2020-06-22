const isInteger = require('./isInteger')

it('should return true if the value provided is an integer', () => {
  const input = 10
  const expectation = true
  const result = isInteger(input)

  expect(result).toBe(expectation)
})
