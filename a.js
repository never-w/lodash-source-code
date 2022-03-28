function bar(arr, value, fromIndex) {
  const { length } = arr
  let index = fromIndex - 1

  while (++index < length) {
    if (arr[index] === value) {
      return index
    }
  }
  return -1
}
