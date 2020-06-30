const resolveValue = require('./resolveValue')

describe('resolveValue', () => {
  it('returns the non-function value provided immediately', () => {
    const input = 'hello world'
    const expecation = 'hello world'
    const result = resolveValue(input)

    expect(result).toEqual(expecation)
  })

  it('returns the value found by recursively calling the provided functions', () => {
    const UserName = (first, last) => {
      const name = () => {
        return `${first} ${last}`
      }
      return { first, last, name }
    }

    const makeGetName = (user) => user.name
    const getName = makeGetName(UserName('Jack', 'Frost'))

    const expecation = 'Jack Frost'
    const result = resolveValue(getName)

    expect(result).toEqual(expecation)
  })
})
