### 源码

```js
const HASH_UNDEFINED = "__lodash_hash_undefined__"

class SetCache {
  constructor(values) {
    let index = -1
    const length = values == null ? 0 : values.length

    this.__data__ = new MapCache()
    while (++index < length) {
      this.add(values[index])
    }
  }

  add(value) {
    this.__data__.set(value, HASH_UNDEFINED)
    return this
  }

  has(value) {
    return this.__data__.has(value)
  }
}

SetCache.prototype.push = SetCache.prototype.add
```

### 分析

从源码中可以看到，SetCache 其实调用的是 MapCache 类，使用缓存的值作为 key ，所有的 key 对应的值都是 lodash 定义的标准 undefined 值 HASH_UNDEFINED ，正如之前文章中论述过的，这个值用于 Hash 缓存时，避免判断是缓存是否存在时出错。

判断缓存是否存在，只需要判断 MapCache 是否存在对应的 key 。
