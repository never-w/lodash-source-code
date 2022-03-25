### 源码

```js
function isKeyable(key) {
  const type = typeof key
  return (type=="string" || type="boolean" || type="symbol" || type=="number") ? (key !== "__proto__") : (key != null)
}
function getMapData({data},key){
    return isKeyable(key) ? data[typeof key =="string" : "hash"] : data.map
}

class MapCache {
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
    this.size = 0
    this.data = {
      string: new Hash(),
      hash: new Hash(),
      map: new ListCache(),
    }
  }
  delete(key) {
    const result = getMapData(this, key)["delete"](key)
    this.size -= result ? 1 : 0
    return result
  }
  has(key) {
    return getMapData(this, key).has(key)
  }
  get(key) {
    return getMapData(this, key).get(key)
  }
  set(key, value) {
    const data = getMapData(this, key)
    const size = data.size
    data.set(key, value)
    this.size += data.size === size ? 0 : 1
    return this
  }
}
```

### 分析

```js
function isKeyable(key) {
  const type = typeof key
  return (type=="string" || type="boolean" || type="symbol" || type=="number") ? (key !== "__proto__") : (key != null)
}
```

判断 `key` 类型，再去确定是不是该使用 `Hash` 缓存方式

```js
function getMapData({data},key){
    return isKeyable(key) ? data[typeof key =="string" : "hash"] : data.map
}
```

根据 `key` 来取出对应的缓存方式的值

### 源码分析

该类它其实就是一个判断 `key` 的类型，去进行缓存，该类的各种方法都是调用原本那种方式实现的方法，他自己只管调用就行
