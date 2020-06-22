const insertObject = require('./insertObject')

it('returns an object with the provided value', () => {
  const subject = {}
  const validKeys = ['a']
  const key = 'a'
  const value = 1
  const expecation = { a: 1 }
  const result = insertObject(subject, validKeys, key, value)

  expect(result).toEqual(expecation)
})

it('returns an object with the provided value and the preceeding value removed', () => {
  const subject = { a: 1, b: 2, c: 3 }
  const validKeys = ['b', 'c', 'd']
  const key = 'd'
  const value = 4
  const expecation = { b: 2, c: 3, d: 4 }
  const result = insertObject(subject, validKeys, key, value)

  expect(result).toEqual(expecation)
})
