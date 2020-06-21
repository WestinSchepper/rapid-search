const endsWithIndexMapFactory = require('./endsWithIndexMapFactory')

it('returns an object representing the index map of provided array of strings', () => {
  const input = ['papaya', 'banana', 'apple', 'pineapple', 'strawberry', 'blueberry', 'raspberry']
  const expectation = { a: [0, 1], e: [2, 3], y: [4, 6] }
  const result = endsWithIndexMapFactory(input)

  expect(result).toEqual(expectation)
})
