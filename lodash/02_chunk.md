### 源码

```js
function chunk(array, size) {
  size = Math.max(size, 0)
  const length = array == null ? 0 : array.length
  if (!length || size < 1) {
    return []
  }
  let index = 0
  let resIndex = 0
  const result = new Array(Math.ceil(length / size))

  while (index < length) {
    result[resIndex++] = slice(array, index, (index += size))
  }
  return result
}
// demo
// _.chunk(['a', 'b', 'c', 'd'], 2);
// => [['a', 'b'], ['c', 'd']]
```

它用于当数据过于庞大，比如数据有 1w 条，则需要把数组切割成一块一块的。

### 参数处理

```js
size = Math.max(size, 0)
const length = array == null ? 0 : array.length
if (!length || size < 1) {
  return []
}
```

参数 `array` 为空或者是不是数组判断，`size` 必须大于等于 `1` ，不满足该条件返回空数组

### 切割解析

```js
const result = new Array(Math.ceil(length / size))
```

加入该数组有 9 条数据，我要每块都的 size = 4 ，所以 `length/size` 就有余数但是从数学角度讲余数其实就是最后一块的东西，所以利用 `Math.ceil`向上取整，则三块的`size`为 `4，4，1`。

### 取得结果

```js
let index = 0
let resIndex = 0
const result = new Array(Math.ceil(length / size))

while (index < length) {
  result[resIndex++] = slice(array, index, (index += size))
}
return result
```

`resIndex`为每块的序号，`index`则是每快去每次截取的 `start` 值
