/**
 * The base implementation of `findIndex` and `findLastIndex`.
 *
 * @private
 * @param {Array} array The array to inspect.
 * @param {Function} predicate ---> 自定义的赛选条件函数比如 ()=> value !== value
 * @param {number} fromIndex The index to search from.
 * @param {boolean} [fromRight] 从开始搜索的index向右还是向左遍历查找
 * @returns {number} Returns the index of the matched value, else `-1`.
 */
function baseFindIndex(array, predicate, fromIndex, fromRight) {
  const { length } = array
  let index = fromIndex + (fromRight ? 1 : -1)

  while (fromRight ? index-- : ++index < length) {
    if (predicate(array[index], index, array)) {
      return index
    }
  }
  return -1
}

export default baseFindIndex
