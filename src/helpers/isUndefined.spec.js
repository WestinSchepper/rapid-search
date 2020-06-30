const isUndefined = require('./isUndefined')

it('should return true if the value provided is undefined', () => {
  const input = undefined
  const expectation = true
  const result = isUndefined(input)

  expect(result).toBe(expectation)
})
