const assertMatch = require('./assertMatch')

describe('assertMatch', () => {
  let user = {}

  beforeAll(() => {
    user = {
      name: 'Westin',
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

  it('returns true if the value provided is a string with no indexes', () => {
    const result = assertMatch('Westin', [], 'Wes', () => true)

    expect(result).toEqual(true)
  })

  it('returns true if the value provided is a string with indexes and has at least one match', () => {
    const indexes = ['name', 'user.contact.personal.phone']
    const result = assertMatch(user, indexes, '123-456', () => true)

    expect(result).toEqual(true)
  })

  it('returns false if the value provided is a string with indexes and has no matches', () => {
    const indexes = ['user.contact.work.email']
    const result = assertMatch(user, indexes, '@gmail', () => true)

    expect(result).toEqual(true)
  })
})
