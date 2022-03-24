### 源码

```js
function slice(array, start, end) {
  let length = array == null ? 0 : array.length
  if (!length) {
    return []
  }

  start = start == null ? 0 : start
  end = end == null ? length : end

  if (start < 0) {
    start = -start > length ? 0 : length + start
  }
  end = end > length ? length : end
  if (end < 0) {
    end += length
  }

  length = start > end ? 0 : (end - start) >>> 0

  start >>>= 0

  let index = -1
  const result = new Array(length)
  while (++index < length) {
    result[index] = array(start + index)
  }
  return result
}
```

js 数组内置了 `slice` 为什么 `lodash` 还实现一个 `slice`，因为原生的 `slice` 把数组当稀疏数组去对待，`lodash` 则是把数组当密集数组对待。[稀疏数组和密集数组解释](https://juejin.cn/post/6975531514444562462)

### 不传参数和传的的参数不是数组的情况

```js
let length = array == null ? 0 : array.length
if (!length) {
  return []
}
```

这种情况直接默认 `length = 0`，返回空数组

### 没有传 start 和 end 情况

```js
start = start == null ? 0 : start
end = end == null ? length : end
```

start 没有传入默认为 0 ，end 没有传入默认为数组长度

### 处理 start

```js
if (start < 0) {
  start = -start > length ? 0 : length + start
}
```

当`start`为负数时 `start = start+ length`，但是当 `start` 的绝对值大于 `length` 时 `start = 0`，`start >>>= 0`相当于取整数且 `start>=0`

### 处理 end

```js
end = end > length ? length : end
if (end < 0) {
  end += length
}

length = start > end ? 0 : (end - start) >>> 0
```

当 `end` 大于数组长度时 `end = length`，这里只判断 `end` 小于零的情况直接让 `end+=length`，是因为后面一行代码 `length = start > end ? 0 : (end - start) >>> 0`有限制，所以不怕 `end`的绝对值大于 `length`，`(end - start) >>> 0`取整数的意思

### 得到截取的数组

```js
let index = -1
const result = new Array(length)
while (++index < length) {
  result[index] = array(start + index)
}
return result
```
