### 源码

```js
function assocIndexOf(array, key) {
  let { length } = array
  while (length--) {
    if (eq(array[length][0], key)) {
      return length
    }
  }
  return -1
}
```

用于 `var caches = [['test1', 1],['test2',2],['test3',3]]` 对二维数组寻找对应要找的 `key`的`index`

### 分析

函数比较简单。。。。。。。
