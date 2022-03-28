### 源码

```js
function arrayIncludes(array, value) {
  const length = array == null ? 0 : array.length
  return !!length && baseIndexOf(array, value, 0) > -1
}
```

### 分析

如果 `length` 为 `0` ，则返回 `false` ，否则调用 `baseIndexOf` 查找元素 `value` 在数组中的索引，如果索引大于 `-1` ，表示元素在数组中存在，返回 `true` ，否则返回 `false` 。
