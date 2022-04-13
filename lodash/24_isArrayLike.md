### 源码

```js
function isArrayLike(value) {
  return value != null && typeof value != "function" && isLength(value.length)
}
```

### 分析

```js
function isArrayLike(value) {
  return value != null && typeof value != "function" && isLength(value.length) // 为什么要判断值是不是函数呢？其实是因为函数上也会有 length 的属性，用来表示函数的形参个数。
}
```
