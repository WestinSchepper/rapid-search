const isInteger = require('./isInteger')
const isArray = require('./isArray')

/**
 * @param {Array} list the array you want to insert into.
 * @param {Number} limit the max length of the array.
 * @param {*} value the value you want to insert.
 * @description
 * This method will return the list with the added value and optionally
 * remove the first element if the list length would exceed the limit.
 * @example
 * //returns [1]
 * insert([], 3, 1)
 * @example
 * // returns [2, 3, 4]
 * insert([1, 2, 3], 3, 4)
 */
function insertArray(list, limit, value) {
  if (isArray(list) && isInteger(limit)) return [ ...list.slice(-Math.abs(limit - 1)), value ]
}

module.exports = insertArray
