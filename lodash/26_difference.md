### 源码

```js
function difference(array, ...values) {
  return isArrayLikeObject(array) ? baseDifference(array, baseFlatten(values, 1, isArrayLikeObject, true)) : []
}
// 25_isArrayLikeObject(array) 17_baseDifference 22_baseFlatten
```

### 分析

```js
function difference(array, ...values) {
  return isArrayLikeObject(array) ? baseDifference(array, baseFlatten(values, 1, isArrayLikeObject, true)) : []
}
// 这个函数的参数数量并不固定，每个参数都是数组，作用是找出第一个数组中，都不存在于后面所有数组中的项，并组成新的数组返回。先看是不是数组不是数组直接返回 []，如果是则调用baseDifference()
```
