const isString = require('./isString')

/**
 * @param {String} string the string you are testing against.
 * @param {String} query the query you are asserting with.
 * @description A boolean will be returned if the query matches the start of the string.
 *
 * This method uses `String.substring` as it proves to be the most performant.
 * https://jsperf.com/match-start-of-string
 */
function startsWith(string, query) {
  if (isString(string) && isString(query)) return string.substring(0, query.length) === query
}

module.exports = startsWith
