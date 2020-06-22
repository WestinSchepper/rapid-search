const isObject = require('./isObject')

it('should return true if the value provided is an object', () => {
  const input = {}
  const expectation = true
  const result = isObject(input)

  expect(result).toBe(expectation)
})
