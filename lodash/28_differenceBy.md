### 源码

```js
// 27_last  25_isArrayLikeObject(array)  17_baseDifference  22_baseFlatten
function differenceBy(array, ...values) {
  let iteratee = last(values)
  if (isArrayLikeObject(iteratee)) {
    iteratee = undefined
  }
  return isArrayLikeObject(array) ? baseDifference(array, baseFlatten(values, 1, isArrayLikeObject, true), iteratee) : []
}
```

differenceBy 和 difference 的功能差不多，执行后，会返回一个新数组，新数组中的每一项都包含在第一个数组中，但是不包含在后面指定的数组中,differenceBy 和 difference 的唯一不同是可以指定迭代器，如果有指定迭代器，则比较的是迭代器返回的值，并不是直接比较数组中的原始值。如果没有指定迭代器，则和 difference 完成相同。

### 分析

```js
function differenceBy(array, ...values) {
  let iteratee = last(values) // 取参数最后一项
  if (isArrayLikeObject(iteratee)) {
    // 如果参数最后一项是数组则iteratee就设置为undefined
    iteratee = undefined
  }
  // 进行计算不同
  return isArrayLikeObject(array) ? baseDifference(array, baseFlatten(values, 1, isArrayLikeObject, true), iteratee) : []
}
```
