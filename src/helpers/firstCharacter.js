const isString = require('./isString')

/**
 * @param {String} string the string to retrieve the first character from.
 * @description Given a string, this method will return the first character.
 */
function firstCharacter(string) {
  if (isString(string)) return string.substring(0, 1)
}

module.exports = firstCharacter
