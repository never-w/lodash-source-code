### 源码

```js
function isArrayLikeObject(value) {
  return isObjectLike(value) && isArrayLike(value)
}
```

### 分析

```js
function isArrayLikeObject(value) {
  return isObjectLike(value) && isArrayLike(value) // 先判断该value是不是对象在判断是不是类数组，比如 Arguments对象满足
}
```
