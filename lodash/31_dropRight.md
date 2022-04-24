### 源码

```js
function dropRight(array, n = 1) {
  const length = array == null ? 0 : array.length
  return length ? slice(array, 0, n < 0 ? 0 : -n) : []
}
```

### 分析

从源码中可以看出，dropRight 依然调用的是 slice 。只是第三个参数为负数，其实返回的就是数组中 0 到 array.length - n 之间的元素。
