### 源码

```js
function drop(array, n = 1) {
  const length = array == null ? 0 : array.length
  return length ? slice(array, n < 0 ? 0 : n, length) : [] // 01slice
}
```

### 分析

从源码中可以看出，如果没有指定个数，则默认移除 1 个元素。如果 array 没有传递，返回的是空数组。看源码可知，drop 其实调用的是 slice ，将 n 到 array.length 之间的元素返回。
