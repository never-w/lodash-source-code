### 空余时间分析 lodash 源码

##### @param {Function} comparator 比较器函数

##### @param {Function} iteratee 自定用于遍历的函数比如：`(m,n) => m+n`

```js
var users = [1, 2, 3, 4]

_.reduce(
  users,
  function (sum, n) {
    return sum + n
  },
  0
)
// 该函数第二个参数都是 iteratee
```
