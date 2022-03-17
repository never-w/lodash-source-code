import getTag from "./getTag.js"
import isObjectLike from "./isObjectLike.js"

/**
 * Checks if `value` is likely an `arguments` object.
 *
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an `arguments` object, else `false`.
 * @example
 *
 * isArguments(function() { return arguments }())
 * // => true
 *
 * isArguments([1, 2, 3])
 * // => false
 */
// 判断该value是对象且还是arguments参数，函数的arguments转为字符串形式是："[object Arguments]"
function isArguments(value) {
  return isObjectLike(value) && getTag(value) == "[object Arguments]"
}

export default isArguments
