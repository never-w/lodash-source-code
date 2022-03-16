const toString = Object.prototype.toString

/**
 * Gets the `toStringTag` of `value`.
 *
 * @private
 * @param {*} value The value to query.
 * @returns {string} Returns the `toStringTag`.
 */
// 获取该value转为字符串形式。。
function getTag(value) {
  if (value == null) {
    return value === undefined ? "[object Undefined]" : "[object Null]"
  }
  return toString.call(value)
}

export default getTag
