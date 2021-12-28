function chunk(array, size = 1) {
  // 对拆分的size长度去整数
  size = Math.max(parseInt(size), 0)
  // 当array为null或者undefined时长度为0，反之就是取他自己的长度
  const length = array == null ? 0 : array.length
  // 当长度没有或者小于0时返回空数组
  if (!length || length < 0) {
    return []
  }

  let index = 0
  let resIndex = 0
  const result = new Array(Math.ceil(length / size))

  // 当累加的index值 >= array的length停止循环
  while (index < length) {
    // 依次设置区块的值
    result[resIndex++] = array.slice(index, (index += size))
  }
  return result
}
