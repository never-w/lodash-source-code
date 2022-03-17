// demo1：arrayIncludesWith
// import arrayIncludesWith from "./lodash/base/arrayIncludesWith.js"
// const arr = [1, 2, 3]
// console.log(arrayIncludesWith(arr, 0, (a, b) => a > b))

import reduce from "./lodash/base/arrayReduce.js"
var users = [1, 2, 3, 4]

// Use of _.reduce() method

let gfg = reduce(
  users,
  function (sum, n) {
    return sum + n
  },
  0
)

// Printing the output
console.log(gfg)

function arrayReduceRight(array, iteratee, accumulator, initAccum) {
  let index = -1
  const length = array == null ? 0 : array.length

  if (initAccum && length) {
    accumulator = array[++index]
  }

  while (++index) {
    accumulator = iteratee(accumulator, array[index], index)
  }

  return accumulator
}
