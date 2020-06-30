const get = require('./get')

describe('get', () => {
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

  it('gets the value at the existing target string path', () => {
    const path = 'contact.work.phone'
    const result = get(user, path)

    expect(result).toEqual('123-456-7890')
  })

  it('gets the value at the existing array path', () => {
    const path = ['contact', 'personal', 'phone']
    const result = get(user, path)

    expect(result).toEqual('123-456-7890')
  })

  it('returns undefined if the path is invalid', () => {
    const otherEmailPath = 'contact.other.email'
    const workEmailPath = 'contact.work.email'
    const otherResult = get(user, otherEmailPath)
    const workResult = get(user, workEmailPath)

    expect(otherResult).toBe(undefined)
    expect(workResult).toBe(undefined)
  })
})
