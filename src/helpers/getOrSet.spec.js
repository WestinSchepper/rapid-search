const getOrSet = require('./getOrSet')

describe('getOrSet', () => {
  const path = 'contact.work.phone'
  let user = {}

  beforeAll(() => {
    user = {
      contact: {
        personal: {
          phone: '123-456-7890',
        },
        work: {
          phone: '123-456-7890',
        },
      },
    }
  })

  it('gets the value at the existing target path', () => {
    const result = getOrSet(user, path)

    expect(result).toEqual(user.contact.work.phone)
  })

  it('sets the value at the existing target path', () => {
    const input = '777-777-7777'
    getOrSet(user, path, input)

    expect(user.contact.work.phone).toEqual(input)
  })

  it('sets the value at the existing target path if the validator function passes', () => {
    const newValue = '999-999-9999'
    const validator = (value) => value.length <= 12
    getOrSet(user, path, newValue, validator)

    expect(user.contact.work.phone).toEqual(newValue)
  })

  it('sets the value at the existing target path if the validator value is true', () => {
    const newValue = '999-999-9999'
    const validator = () => newValue.length <= 12
    getOrSet(user, path, newValue, validator())

    expect(user.contact.work.phone).toEqual(newValue)
  })

  it('gets the value at the existing target path if the validator function fails', () => {
    const newValue = '999-999-9999'
    const validator = (value) => value.length <= 1
    getOrSet(user, path, newValue, validator)

    expect(user.contact.work.phone).toEqual(newValue)
  })
})
