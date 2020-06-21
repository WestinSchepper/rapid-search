const isString = require('./isString')

/**
 * @param {String} string the string to retrieve the last character from.
 * @description Given a string, this method will return the last character.
 */
function lastCharacter(string) {
  if (isString(string)) return string.substring(string.length - 1)
}

module.exports = lastCharacter
