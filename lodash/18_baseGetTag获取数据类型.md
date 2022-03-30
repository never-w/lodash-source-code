### 源码

```js
const objectProto = Object.prototype
const hasOwnProperty = objectProto.hasOwnProperty
const toString = objectProto.toString
const symToStringTag = typeof Symbol != "undefined" ? Symbol.toStringTag : undefined

function baseGetTag(value) {
  if (value == null) {
    return value === undefined ? "[object Undefined]" : "[object Null]"
  }
  if (!(symToStringTag && symToStringTag in Object(value))) {
    return toString.call(value)
  }
  const isOwn = hasOwnProperty.call(value, symToStringTag)
  const tag = value[symToStringTag]
  let unmasked = false
  try {
    value[symToStringTag] = undefined
    unmasked = true
  } catch (e) {}

  const result = toString.call(value)
  if (unmasked) {
    if (isOwn) {
      value[symToStringTag] = tag
    } else {
      delete value[symToStringTag]
    }
  }
  return result
}

export default baseGetTag
```

作用：获取数据的类型

### 分析

```js
const objectProto = Object.prototype
const hasOwnProperty = objectProto.hasOwnProperty
const toString = objectProto.toString
const symToStringTag = typeof Symbol != "undefined" ? Symbol.toStringTag : undefined

function baseGetTag(value) {
  // 当value为null或undefined时返回对应的类型
  if (value == null) {
    return value === undefined ? "[object Undefined]" : "[object Null]"
  }
  // 当value转化为Object之后，有没有 Symbol 的 Symbol.toStringTag属性，没有就直接调用 toString 返回对应类型
  if (!(symToStringTag && symToStringTag in Object(value))) {
    return toString.call(value)
  }

  // 一下都是对 value时Symbol类型时的处理
  const isOwn = hasOwnProperty.call(value, symToStringTag) // 查看 Symbol.toStringTag 是原型链上的属性还是自己的
  const tag = value[symToStringTag]
  let unmasked = false
  try {
    value[symToStringTag] = undefined
    unmasked = true
  } catch (e) {}

  const result = toString.call(value) // 调用查看该 value的类型，详细的参考[Symbol.toStringTag]--->https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Symbol/toStringTag
  if (unmasked) {
    if (isOwn) {
      value[symToStringTag] = tag
    } else {
      delete value[symToStringTag]
    }
  }
  return result
}
//  但是现在es6可以直接Object.prototype.toString.call()方法去判断这些了。
```
