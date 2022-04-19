### 源码

```js
function last(array) {
  const length = array == null ? 0 : array.length
  return length ? array[length - 1] : undefined
}
```

last 函数用来获取数组的最后一项

### 分析

```js
function last(array) {
  const length = array == null ? 0 : array.length
  return length ? array[length - 1] : undefined
}
// 如果有传递数组，则用 array.length 获取数组的长度，没有传递数组，则 length 赋值为 0 。
// 如果数组长度存在，则返回数组最后一项，否则返回 undefined 。
```
