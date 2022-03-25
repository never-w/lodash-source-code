### 源码

```js
const HASH_UNDEFINED = "__lodash_hash_undefined__"

class Hash {
  constructor(entries) {
    let index = -1
    const length = entries == null ? 0 : entries.length

    this.clear()
    while (++index < length) {
      const entry = entries[index]
      this.set(entry[0], entry[1])
    }
  }
  clear() {
    this.__data__ = Object.create(null)
    this.size = 0
  }
  delete(key) {
    const result = this.has(key) && delete this.__data__[key]
    this.size -= result ? 1 : 0
    return result
  }
  get(key) {
    const data = this.__data__
    const result = data[key]
    return result === HASH_UNDEFINED ? undefined : result
  }
  has(key) {
    const data = this.__data__
    return data[key] !== undefined
  }
  set(key, value) {
    const data = this.__data__
    this.size += this.has(key) ? 0 : 1
    data[key] = value === undefined ? HASH_UNDEFINED : value
    return this
  }
}

export default Hash
```

### 分析

其实跟原生 Map 差不多

### clear 方法分析

```js
  clear() {
    this.__data__ = Object.create(null)
    this.size = 0
  }
```

这里想说的是 `clear` 方法它既可以清空缓存还可以初始化缓存对象，这里使用 `Object.create(null)`它目的是这样创建的对象跟 `this.__data__ = {}`区别是它不会继承原型，所以缓存不会被原型干扰这样用来做缓存更合适
