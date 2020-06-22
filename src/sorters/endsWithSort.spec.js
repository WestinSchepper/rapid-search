const endsWithSort = require('./endsWithSort')

it('returns the array of strings sorted in ascending order', () => {
  const input = ['strawberry', 'banana', 'banana', 'pineapple']
  const expectation = ['banana', 'banana', 'pineapple', 'strawberry']
  const result = endsWithSort(input)

  expect(result).toEqual(expectation)
})
