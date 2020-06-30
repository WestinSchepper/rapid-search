const isFunction = require('./isFunction')

it('should return true if the value provided is a function', () => {
  const input = () => {}
  const expectation = true
  const result = isFunction(input)

  expect(result).toBe(expectation)
})
