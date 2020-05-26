// 计算阶乘函数1
export function factorial1(n) {
  var x = 1
  while (n > 1) {
    x *= n
    n--
  }
  return x
}
// 计算阶乘函数2
export function factorial2(n) {
  if (n <= 1) return 1
  return n * factorial2(n - 1)
}

// 计算阶乘函数3
export function factorial3(n) {
  if (n <= 1) return 1
  return n * arguments.callee(n - 1)
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
  if (typeof o !== 'object') return
  var arr = []
  var i = 0
  for (arr[i++] in o) /* empty */;
  return arr
}

//在一个数组中匹配指定的数组项，返回包含所有匹配的数组索引的一个数组
export function findAllIndex(arr, el) {
  var results = []
  var len = arr.length
  var pos = 0

  while (pos < len) {
    pos = arr.indexOf(el, pos)
    if (pos === -1) break
    results.push(pos)
    pos = pos + 1
  }
  return results
}

//判断是不是一个类数组对象
function isArrayLike(o) {
  if (o &&
    typeof o === 'object' &&
    isFinite(o.length) &&
    o.length >= 0 &&
    o.length === Math.floor(o.length) &&
    o.length < 4294967296) {
    return true
  } else {
    return fasle
  }
}
//计算两个笛卡尔坐标之间的距离
function distance(x1, y1, x2, y2) {
  var dx = x2 - x1
  var dy = y2 - y1
  return Math.sqrt(dx * dx + dy * dy)
}

//判断当前脚本是否使用严格模式
function strictJS() {
  return !this
}

/**
 * 格式化日期
 *  param format : 'yyyy-MM-dd hh:mm:ss'
 */
export function formatDate(date, format) {
  var currentDate = new Date(date)
  var o = {
    'M+': currentDate.getMonth() + 1,
    'd+': currentDate.getDate(),
    'h+': currentDate.getHours(),
    'm+': currentDate.getMinutes(),
    's+': currentDate.getSeconds(),
    'q+': Math.floor((currentDate.getMonth() + 3) / 3),
    'S': currentDate.getMilliseconds()
  }
  if (/(y+)/.test(format)) {
    format = format.replace(RegExp.$1, (currentDate.getFullYear() + '').substr(4 - RegExp.$1.length))
  }
  for (var k in o) {
    if (new RegExp('(' + k + ')').test(format)) {
      format = format.replace(RegExp.$1, (RegExp.$1.length === 1) ? (o[k]) : (('00' + o[k]).substr(('' + o[k]).length)))
    }
  }
  return format
}

//如果该函数返回true,表示给定属性属于原型属性,反之是实例属性
export function hasPrototypeProperty(object, name) {
  return !object.hasOwnProperty(name) && (name in object)
}

//类数组对象转换成数组对象,进而可以使用数组的slice方法
function convertToArray(similarArray, n) {
  var array = null
  try {
    array = Array.prototype.slice.call(similarArray, n || 0) //非ie
  } catch (ex) {
    array = new Array()
    //手动枚举所有所有项
    for (var i = 0, len = similarArray.length; i < len; i++) {
      array.push(similarArray[i])
    }
  }
  return array
}
//获取传入函数的实参列表中最大的值
function max() {
  var max = Number.NEGATIVE_INFINITY
  for (var i = 0, len = arguments.length; i < len; i++) {
    if (arguments[i] > max) max = arguments[i]
  }
  return max
}

//检测一个对象是否是函数对象。
function isFunction(a) {
  return Object.prototype.toString.call(a) === "[object Function]"
}

//////////////////////////DOM/////////////////////////////////
export function hasClass(el, className) {
  return el.classList.contains(className)
}

export function addClass(el, className) {
  el.classList.add(className)
}

export function sibling(elem) {
  var r = []
  var n = elem.parentNode.firstChild
  for (; n; n = n.nextSibling) {
    if (n.nodeType === 1 && n !== elem) {
      r.push(n)
    }
  }
  return r
}

export function removeClass(ele, cls) {
  if (hasClass(ele, cls)) {
    var reg = new RegExp('(\\s|^)' + cls + '(\\s|$)')
    ele.className = ele.className.replace(reg, '')
  }
}

/**
 * 瀑布流双栏布局
 * @param {*} wrapper
 */
export function reflower(wrapper) {
  let gutter = wrapper.offsetWidth * 0.02
  let list = wrapper.children

  let columnHeight = []

  for (let i = 0; i < list.length; i++) {
    if (i < 2) {
      columnHeight[i] = list[i].offsetHeight + gutter
    } else {
      let minHeight = Math.min.apply(null, columnHeight)
      let minHeightIndex = columnHeight.indexOf(minHeight)

      list[i].style.position = 'absolute'
      list[i].style.top = `${minHeight}px`

      if (minHeightIndex !== 0) {
        list[i].style.left = '49%'
      }

      columnHeight[minHeightIndex] += list[i].offsetHeight + gutter
    }
  }
  wrapper.style.minHeight = `${Math.max.apply(null, columnHeight)}px`
}

