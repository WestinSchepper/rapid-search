const isString = require('./isString')

/**
 * @param {String} string the string to be reversed.
 * @description Given a string, this method will return the string reversed and.
 */
function reverseString(string) {
  if (isString(string)) return [...string].reverse().join('')
}

module.exports = reverseString
