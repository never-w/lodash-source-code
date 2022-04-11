### 源码

```js
function isObjectLike(value) {
  return typeof value == "object" && value !== null
}
```

其实就是使用 typeof 操作符，如果返回值为 object ，并且值又不为 null 时，就认为是类对象。

这里需要简单地说一下 typeof 操作符，typeof 会遵循下面的规则来返回：
| 类型 | 结果 |
| ------------ | ------------------------------------------------------------------- |
| undefined | 'undefined' |
| null | 'object' |
| Boolean | 'boolean' |
| Number | 'number' |
| String | 'string' |
| Symbol | 'symbol' |
| 宿主对象 | 由宿主实现，但是不能为 'undefined', 'boolean', 'number' 和 'string' |
| 函数对象 | 'function' |
| 任意其它对象 | 'object' |

这里需要说一下的是 null ，也是 isObjectLike 的关键所在，使用 typeof 的操作符时，null 会返回 object ，为什么会这样呢，看 MDN 上的解释：

> 在 JavaScript 最初的实现中，JavaScript 中的值是由一个表示类型的标签和实际数据值表示的。对象的类型标签是 0。由于 null 代表的是空指针（大多数平台下值为 0x00），因此，null 的类型标签也成为了 0，typeof null 就错误的返回了"object"。（reference）。
> ECMAScript 提出了一个修复（通过 opt-in），但被拒绝。这将导致 typeof null === 'object'。
