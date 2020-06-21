const isString = require('./isString')

it('should return true if the value provided is a string literal', () => {
  const input = 'hello world'
  const expectation = true
  const result = isString(input)

  expect(result).toBe(expectation)
})

it('should return true if the value provided is a string object', () => {
  const input = new String('hello world')
  const expectation = true
  const result = isString(input)

  expect(result).toBe(expectation)
})
