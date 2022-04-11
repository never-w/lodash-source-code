### 源码

```js
const spreadableSymbol = Symbol.isConcatSpreadable

function isFlattenable(value) {
  return Array.isArray(value) || isArguments(value) || !!(spreadableSymbol && value && value[spreadableSymbol])
}
```

用 isFlattenable 内部函数来判断某个值是否可以被展平。
[具体分析 MDN](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Symbol/isConcatSpreadable)
