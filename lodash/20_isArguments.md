### 源码

```js
function isArguments(value) {
  return isObjectLike(value) && getTag(value) == "[object Arguments]"
}
```

isArguments 用来判断某个值是否为类 arguments 对象。
