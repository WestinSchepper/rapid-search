const endsWithSort = require('./endsWithSort')

it('returns the array of strings sorted in ascending order', () => {
  const input = ['strawberry', 'banana', 'pineapple']
  const expectation = ['banana', 'pineapple', 'strawberry']
  const result = endsWithSort(input)

  expect(result).toEqual(expectation)
})
