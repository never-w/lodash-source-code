### 源码

```js
function strictIndexOf(array, value, fromIndex) {
  let index = fromIndex - 1
  const { length } = array

  while (++index < length) {
    if (array[index] === value) {
      return index
    }
  }
  return -1
}
```

作用：查看数组有没有与 `value` 相等的值，有就返回该对应的 `index` 没有返回 `-1`
