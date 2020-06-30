const isBoolean = require('./isBoolean')

it('should return true if the value provided is a boolean', () => {
  const input = false
  const expectation = true
  const result = isBoolean(input)

  expect(result).toBe(expectation)
})
