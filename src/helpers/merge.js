const isArray = require('./isArray')

/**
 * @param  {(string[]|object)} validKeys an array of valid keys or the first object.
 * @param  {...object} objects the objects you want to merge.
 * @description
 * This method returns a new object containing all of the objects merged. The first
 * argument is an optional array of strings. When provided, this will act as the
 * list of valid keys and remove any non-matching keys.
 *
 * **Note:** The objects are merged in order, so the last object will overwrite all
 * previous objects passed. Make sure you pass them in the correct order.
 * @example
 * // returns { a: 2, b: 2 }
 * merge({ a: 1, b: 2 }, { a: 2 })
 *
 * // returns { a: 2, b: 2 }
 * merge(['a', 'b'], { a: 1, b: 2 }, { a: 2, c: 3 })
 *
 * // returns {}
 * merge()
 */
function merge(validKeys, ...objects) {
  const objectsToMerge = [ validKeys, ...objects ]

  if (isArray(validKeys)) {
    const validKeys = objectsToMerge.shift()
    const merged = Object.assign({}, ...objectsToMerge)

    const result = validKeys.reduce((accumulator, key) => {
      accumulator[key] = merged[key]
      return accumulator
    }, {})

    return result
  }

  return Object.assign({}, ...objectsToMerge)
}

module.exports = merge
