const startsWithIndexMapFactory = require('./startsWithIndexMapFactory')

it('returns an object representing the index map of provided array of strings', () => {
  const input = ['apple', 'banana', 'broccoli', 'blueberry', 'cucumber', 'celery']
  const expectation = { a: [0, 0], b: [1, 3], c: [4, 5] }
  const result = startsWithIndexMapFactory(input)

  expect(result).toEqual(expectation)
})
