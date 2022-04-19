### 源码

```js
// 27_last  25_isArrayLikeObject(array)  17_baseDifference  22_baseFlatten
function differenceWith(array, ...values) {
  let comparator = last(values)
  if (isArrayLikeObject(comparator)) {
    comparator = undefined
  }
  return isArrayLikeObject(array) ? baseDifference(array, baseFlatten(values, 1, isArrayLikeObject, true), undefined, comparator) : []
}
```

### 分析

differenceBy 可以指定迭代器，differenceWith 与 difference 不同的地方在于，differenceWith 可以自定义比较函数。如果不指定比较函数，则 differenceWith 的功能和 difference 完全相同。
