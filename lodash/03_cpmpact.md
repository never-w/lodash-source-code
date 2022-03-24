### 源码

```js
function compact(array) {
  let resIndex = 0
  let result = []
  if (array == null) {
    return result
  }

  for (const value of array) {
    if (value) {
      result[resIndex++] = value
    }
  }

  return result
}
```

### 源码分析

这里是一个很普通的筛选函数，里面要说的就是为什么用 `for of`去遍历数组，不用 `for in` 和 `for` 循环。

### for 循环

```js
for (let i = 0; i < array.length; i++) {
  const value = array[i]
  if (value) {
    result[resIndex++] = value
  }
}
```

这样是可以的但是这样代码不够简洁和优美

### for of 循环

使用`for of`的条件是这个被循环的东西它是可迭代的，意思是就是被循环的东西内部实现了 `Symbol.iterator`接口，这样依赖函数里面就不需要判断它是不是数组还是字符串还是对象，因为对象不能被 `for of`去解决，它自己会自动报错在控制台。

### for in 循环

```js
var arr = [1, 2, 3]
arr.foo = "foo"
for (let index in arr) {
  console.log(index)
}
```

`for in`循环的规则是，遍历的对象的可枚举属性，包括原型继承的属性，使用 `for in`去遍历对象不能保证是顺序去遍历。在上面例子中，你期望输出的是` 0,1,2`，但是最后输出的可能是 `0,1,2,foo` （`for...in` 不能保证顺序）。因为 `foo` 也是可枚举属性，在 `for..in` 会被遍历出来。
