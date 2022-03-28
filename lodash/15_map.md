### 源码

```js
function map(array, iteratee) {
  let index = -1
  const length = array == null ? 0 : array.length
  const result = new Array(length)

  while (++index < length) {
    result[index] = iteratee(array[index], index, array)
  }
  return result
}
```

类似于原生的 `map`，但是比较于简单一些。遍历将数组中的每项依次取出，作为第一个参数传递给 `iteratee` 处理函数。`iteratee` 的第二个参数为当前项的索引，第三个参数为原数组。然后将 `iteratee` 返回的结果放入新数组 `result` 中。遍历完毕后，将新的数组返回，即实现了 `map` 函数。
