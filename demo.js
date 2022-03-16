// demo1：arrayIncludesWith
import arrayIncludesWith from "./lodash/base/arrayIncludesWith.js"
const arr = [1, 2, 3]
console.log(arrayIncludesWith(arr, 0, (a, b) => a > b))
