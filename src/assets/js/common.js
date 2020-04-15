// 计算阶乘函数
export function factorial1(n) {
  var x = 1
  while (n > 1) {
    x *= n
    n--
  }
  return x
}

export function factorial2(n) {
  if (n <= 1) return 1
  return n * factorial2(n - 1)
}

// 根据值类型转换为字符串
export function convert(x) {
  switch (typeof x) {
    case 'string':
      return '"' + x + '"'
    case 'number':
      return x.toString(16)
    default:
      return String(x)
  }
}
// 枚举对象属性并放进一个数组中
export function propsArr(o) {
  if (typeof o !== 'object') {
    return
  }
  var arr = []
  var i = 0
  for (arr[i++] in o) /* empty */ ;
  console.log(arr) //['x', 'y', 'z']
  return arr
}
