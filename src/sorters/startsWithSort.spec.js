const startsWithSort = require('./startsWithSort')

it('returns the array of strings sorted in ascending order', () => {
  const input = ['apple', 'cucumber', 'banana']
  const expectation = ['apple', 'banana', 'cucumber']
  const result = startsWithSort(input)

  expect(result).toEqual(expectation)
})
