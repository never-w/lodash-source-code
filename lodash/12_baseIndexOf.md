### 源码

```js
function baseIndexOf(array, value, fromIndex) {
  return value === value ? strictIndexOf(array, value, fromIndex) : baseFindIndex(array, baseIsNaN, fromIndex) //baseIsNaN 是 05_eq函数
}
```

### 分析

`baseIndexOf` 与 原生的 `indexOf` 区别在于，它可以查找 `NaN` 和它不支持 负数的查找，在三元表达式中， `value === value` 的结果为 `false` 时，则该值是 `NaN，调用` `baseFindIndex` 函数来查找索引，使用 `baseIsNaN` 函数来作为 `baseFindIndex` 的比较函数。
