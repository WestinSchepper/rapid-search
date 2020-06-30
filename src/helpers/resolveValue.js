const isFunction = require('./isFunction')

/**
 * @param {*} value The value to be returned or retrieved.
 * @description
 * If the given value is a function, this function will recursively call itself
 * until a value can be resolved that is not a function.
 * @example
 * const UserName = (first, last) => {
 *   const name = () => {
 *     return `${first} ${last}`
 *   }
 *
 *   return { first, last, name }
 * }
 *
 * const makeGetName = (user) => user.name
 * const getName = makeGetName(UserName('Jack', 'Frost'))
 *
 * // calls getName(), then user.name(), returns 'Jack Frost'
 * resolveValue(getName)
 */
function resolveValue(value) {
  if (isFunction(value)) {
    return resolveValue(value())
  } else {
    return value
  }
}

module.exports = resolveValue
