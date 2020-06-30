const clone = require('./clone')

describe('clone', () => {
  it('returns the a cloned array', () => {
    const input = [1, 2, 3]
    const result = clone(input)

    expect(result).not.toBe(input)
    expect(result).toEqual(input)
  })

  it('returns a cloned object', () => {
    const input = { foo: 'bar' }
    const result = clone(input)

    expect(result).not.toBe(input)
    expect(result).toEqual(input)
  })

  it('returns the provided value if it is not an array or object', () => {
    const input = 'hello world'
    const result = clone(input)

    expect(result).toEqual(input)
  })
})
