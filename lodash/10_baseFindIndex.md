### 源码

```js
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

// demo
baseFindIndex(
  [3, 1, 2],
  function (val, index, array) {
    return val > 1
  },
  1
) // 从前向后查找，从索引1开始查找，返回2
baseFindIndex(
  [3, 1, 2],
  function (val, index, array) {
    return val > 1
  },
  1,
  true
) // 从后向前查找，从索引1开始查找，返回3
```

该函数作用相当于 `es6` 数组的 `findIndex`

### 分析

```js
let index = fromIndex + (fromRight ? 1 : -1)

while (fromRight ? index-- : ++index < length) {
  if (predicate(array[index], index, array)) {
    return index
  }
}
```

这里看 `fromRight` 传入没有，如果传入则先让 `index` `+1` 没有就 `-1`，`+1` 的目的是防止使用时让下标为 `0` 开始从右向做查找，这样才不会产生 `-1 bug`。
