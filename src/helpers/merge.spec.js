const merge = require('./merge')

describe('merge', () => {
  it('returns the merged object', () => {
    const user = { id: 1, name: 'Jack', age: 21 }
    const updatedUser = { name: 'Jackson' }
    const expectation = { id: 1, name: 'Jackson', age: 21 }
    const result = merge(user, updatedUser)

    expect(result).toEqual(expectation)
  })

  it('returns the a merged object with only the valid keys', () => {
    const user = { id: 1, name: 'Jack', age: 21 }
    const updatedUser = { name: 'Jackson', nickName: 'Jacky' }

    const expectation = { name: 'Jackson', nickName: 'Jacky' }
    const result = merge(['name', 'nickName'], user, updatedUser)

    expect(result).toEqual(expectation)
  })

  it('returns an empty object when no arguments are provided', () => {
    const expectation = {}
    const result = merge()

    expect(result).toEqual(expectation)
  })
})
