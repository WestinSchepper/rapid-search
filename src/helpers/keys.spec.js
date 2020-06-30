const keys = require('./keys')

describe('keys', () => {
  it('returns the keys from the object', () => {
    const user = {
      name: 'Jack',
      age: 21,
      online: true,
    }

    const expectation = ['name', 'age', 'online']
    const result = keys(user)

    expect(result).toEqual(expectation)
  })

  it('returns an empty array when a non-object is provided', () => {
    const expectation = []
    const result = keys()

    expect(result).toEqual(expectation)
  })
})
