//  判断该value是不是对象
function isObjectLike(value) {
  return typeof value === "object" && value !== null
}

export default isObjectLike
