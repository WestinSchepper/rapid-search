const isString = require('./isString')
const isArray = require('./isArray')
const isObject = require('./isObject')

/**
 * @param {Object} subject the object you want to insert into.
 * @param {String[]} validKeys the array of valid keys.
 * @param {String} key the new key.
 * @param {*} value the new value.
 * @description
 * This method will return an object with the added key value pair and optionally
 * remove all key that is not present in the valid keys array.
 * @example
 * //returns { a: 1 }
 * insertObject({}, ['a'], 'a', 1)
 * @example
 * // returns { b: 2, c: 3, d: 4 }
 * insertObject({ a: 1, b: 2, c: 3 }, ['b', 'c', 'd'], 'd', 4)
 */
function insertObject(subject, validKeys, key, value) {
  if (!isObject(subject) && !isArray(validKeys) && !isString(key)) return

  const result = validKeys.reduce((accumulator, key) => {
    if (subject.hasOwnProperty(key)) accumulator[key] = subject[key]

    return accumulator
  }, { [key]: value })

  return result
}

module.exports = insertObject
