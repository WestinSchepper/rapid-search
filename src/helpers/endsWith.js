const isString = require('./isString')

/**
 * @param {String} string the string you are testing against.
 * @param {String} query the query you are asserting with.
 * @description A boolean will be returned if the query matches the end of the string.
 *
 * This method uses `String.substring` as it proves to be the most performant.
 * https://jsperf.com/match-end-of-string
 */
function endsWith(string, query) {
  if (isString(string) && isString(query)) return string.substring(string.length - query.length) === query
}

module.exports = endsWith
