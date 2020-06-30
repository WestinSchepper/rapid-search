const set = require('./set')

describe('set', () => {
  let user = {}

  beforeEach(() => {
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

  it('sets the value at the existing target string path', () => {
    const newWorkPhone = '777-777-7777'
    const path = 'contact.work.phone'

    set(user, path, newWorkPhone)

    expect(user.contact.work.phone).toEqual(newWorkPhone)
  })

  it('sets the value at the existing array path', () => {
    const newPersonalPhone = '999-999-9999'
    const path = ['contact', 'personal', 'phone']

    set(user, path, newPersonalPhone)

    expect(user.contact.personal.phone).toEqual(newPersonalPhone)
  })

  it('sets the value and creates missing paths at the specified target', () => {
    const newOtherEmail = 'jack@daniels.com'
    const path = 'contact.other.email'

    set(user, path, newOtherEmail)

    expect(user.contact.other.email).toEqual(newOtherEmail)
  })
})
