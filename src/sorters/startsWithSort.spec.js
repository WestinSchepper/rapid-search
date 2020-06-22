const startsWithSort = require('./startsWithSort')

it('returns the array of strings sorted in ascending order', () => {
  const input = ['apple', 'cucumber', 'banana', 'banana']
  const expectation = ['apple', 'banana', 'banana', 'cucumber']
  const result = startsWithSort(input)

  expect(result).toEqual(expectation)
})
