### 源码

```js
function arrayIncludesWith(array, target, comparator) {
  if (array == null) {
    return false
  }

  for (const value of array) {
    if (comparator(target, value)) {
      return true
    }
  }
  return false
}
```

### 分析

`arrayIncludesWith` 中判断交由调用者自己来判断所以传入 `comparator`，遍历数组中的元素，将元素 `value` 和比较值 `target` 作为参数，交由 `comparator` 处理，如果 `comparator` 返回的是真值，则返回 `true` 。遍历完毕，如果都没有返回真值，则返回 `false` ，表示没有找到。
