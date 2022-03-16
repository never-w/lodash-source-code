/** Used as references for various `Number` constants. */
const MAX_SAFE_INTEGER = 9007199254740991

/** 无符号整数. */
const reIsUint = /^(?:0|[1-9]\d*)$/

/**
 * Checks if `value` is a valid array-like index.
 *
 * @private
 * @param {*} value The value to check.
 * @param {number} [length=MAX_SAFE_INTEGER] The upper bounds of a valid index.
 * @returns {boolean} Returns `true` if `value` is a valid index, else `false`.
 */
// 判断该value是不是数组的index下标
function isIndex(value, length) {
  const type = typeof value
  length = length == null ? MAX_SAFE_INTEGER : length

  return (
    !!length &&
    (type === "number" || (type !== "symbol" && reIsUint.test(value))) &&
    value > -1 &&
    value % 1 == 0 &&
    value < length
  )
}

export default isIndex
