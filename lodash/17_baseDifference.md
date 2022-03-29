### 源码

```js
const LARGE_ARRAY_SIZE = 200
function baseDifference(array, values, iteratee, comparator) {
  let includes = arrayIncludes
  let isCommon = true
  const result = []
  const valuesLength = values.length

  if (!array.length) {
    return result
  }
  if (iteratee) {
    values = map(values, (value) => iteratee(value))
  }
  if (comparator) {
    includes = arrayIncludesWith
    isCommon = false
  } else if (values.length >= LARGE_ARRAY_SIZE) {
    includes = cacheHas
    isCommon = false
    values = new SetCache(values)
  }

  outer: for (let value of array) {
    const computed = iteratee == null ? value : iteratee(value)

    value = comparator || value !== 0 ? value : 0
    if (isCommon && computed === computed) {
      let valuesIndex = valuesLength
      while (valuesIndex--) {
        if (values[valuesIndex] === computed) {
          continue outer
        }
      }
      result.push(value)
    } else if (!includes(values, computed, comparator)) {
      result.push(value)
    }
  }

  return result
}
```

作用：用于两个数组比较的差值

### 分析

```js
const LARGE_ARRAY_SIZE = 200
function baseDifference(array, values, iteratee, comparator) {
  let includes = arrayIncludes // 使用13_arrayIncludes方法
  let isCommon = true // 使用普通模式
  const result = [] // 先声明结果为空数组
  const valuesLength = values.length // 求values数组的length

  if (!array.length) {
    return result // 当array传入为空数组和不存在length直接返回 []
  }
  if (iteratee) {
    values = map(values, (value) => iteratee(value)) // 当有迭代器传入时先把 values先通过迭代器返回新的 values，这样就不会再下面 for of里面嵌套调用 iteratee两次，优化性能
  }
  if (comparator) {
    includes = arrayIncludesWith // 当有比较函数传入时使用 14_arrayIncludesWith的比较函数版本的includes
    isCommon = false // 模式改为不是普通模式
  } else if (values.length >= LARGE_ARRAY_SIZE) {
    includes = cacheHas // 当values数组长度很大时进行缓存处理，且模式变为不是普通模式
    isCommon = false
    values = new SetCache(values) // 9_SetCache
  }

  // outer: 为js的label语法，不懂的自行查资料
  outer: for (let value of array) {
    const computed = iteratee == null ? value : iteratee(value) // 这里页通过迭代器把 array的每个值都迭代出新的computed

    value = comparator || value !== 0 ? value : 0 // 这里是为了看array里面的值为 +0 -0 0 时都返回 0，因为 9_SetCache 不能识别 +0 -0
    // 一下代码就是循环比较，符合结果push到result里面去返回
    if (isCommon && computed === computed) {
      let valuesIndex = valuesLength
      while (valuesIndex--) {
        if (values[valuesIndex] === computed) {
          continue outer // outer: 为js的label语法，不懂的自行查资料
        }
      }
      result.push(value)
    } else if (!includes(values, computed, comparator)) {
      result.push(value)
    }
  }

  return result
}
```
