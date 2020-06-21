const isString = require('./isString')

/**
 * @param {String} string the string you are testing against.
 * @param {String} query the query you are asserting with.
 * @description A boolean will be returned if the query matches any part of the string.
 *
 * This method uses `String.indexOf` as it proves to be the most performant.
 * https://jsperf.com/match-any-part-of-string
 */
function anyWith(string, query) {
  if (isString(string) && isString(query)) return string.indexOf(query) >= 0
}

module.exports = anyWith
