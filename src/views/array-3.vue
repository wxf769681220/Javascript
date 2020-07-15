<template>
  <div class="array-3">
    <div class="layout-content">
      <Card dis-hover shadow style="width:450px">
        <h3 slot="title">1.构建类数组对象</h3>
        <div>
          <p>为一个常规对象增加一些属性使其变成一个类数组对象。(以从0开始的连续整数数字值作为对象的属性名, 另外还需设置一个length属性)</p>
          <div v-highlight>
            <pre>
              <code>
                //创建一个常规对象
                var obj = {}

                //以0开始的连续数字值作为对象的属性名
                var i = 0
                var len = 3
                while (i &lt; len) {
                  obj[i] = i * i
                  i++
                }

                //添加length属性
                obj.length = i

                //类数组对象
                obj => {0: 0, 1: 1, 2: 4, length: 3}

                //遍历类数组
                var total = 0
                for (var j = 0; j &lt; obj.length; j++) {
                  total+= obj[j]
                }
                total => 5
              </code>
            </pre>
          </div>
        </div>
      </Card>
      <Card dis-hover shadow style="width:500px">
        <h3 slot="title">2.检测类数组对象</h3>
        <div>
          <p>函数中argument对象就是一个类数组对象，在客户端javascript中，如document.getElementsByTagName返回的也是一个类数组。</p>
          <div v-highlight>
            <pre>
              <code>
                function isArrayLike(obj) {
                  if (obj &&
                    typeof obj === 'object' &&
                    isFinite(obj.length) &&
                    obj.length >= 0 &&
                    obj.length === Math.floor(obj.length) &&
                    obj.length &lt; 4294967296) {
                    return true
                  } else {
                    return fasle
                  }
                }
              </code>
            </pre>
          </div>
        </div>
      </Card>
      <Card dis-hover shadow style="width:640px">
        <h3 slot="title">3.类数组对象的方法</h3>
        <div>
          <p>类数组对象没有继承自Array.prototype，因此不能在他们的上面直接调用数组方法。尽管如此，我们可以间接的使用Function.call方法调用。</p>
          <div v-highlight>
            <pre>
              <code>
                var obj = {0: 0, 1: 1, 2: 4, 3: 9, length: 4}

                Array.prototype.join.call(obj, '+') => '0+1+4+9'

                Array.prototype.slice.call(obj, 0)  => [0, 1, 4, 9]

                Array.prototype.map.call(obj, function(item) {
                  return item + 1
                }) => [1, 2, 5, 10]

                //firefox直接在Array构造函数上定义为函数（特定浏览器特定版本，非标准）

                Array.join(obj, '+')  => '0+1+4+9'

                Array.slice(obj, 0) => [0, 1, 4, 9]

                Array.map(obj, function(item){
                  return item + 1
                }) => [1, 2, 5, 10]
              </code>
            </pre>
          </div>
          <p>表示网页结构的HTMLCollection对象就是一个类数组对象。</p>
          <div v-highlight>
            <pre>
              <code>
                var els = document.getElementsByTagName("li")

                //类数组对象使用常规数组的方法
                Array.prototype.forEach.call(els, function (item) {
                  item.onclick = function () {
                    alert(item.innerHTML)
                  }
                })

                //执行相同的操作
                for (var i = 0, len = els.length; i &lt; len; i++) {
                  els[i].onclick = function(a) {
                    return function() {
                      alert(els[a].innerHTML)
                    }
                  }(i)
                }
              </code>
            </pre>
          </div>
          <p>NodeList对象是一个类数组对象，可以将其转换成常规数组，以便对其进行操作。</p>
          <div>
            <div v-highlight>
              <pre>
              <code>
                function convertToArray(el) {
                  //首先判断其是否是元素节点
                  if (el.ELEMENT_NODE !== 1) return

                  var array = null

                  try {
                    //非IE
                    array = Array.prototype.slice.call(el.children, 0)
                  } catch (ex) {
                    array = new Array()
                    //手动枚举所有项
                    for (var i = 0, len = el.length; i &lt; len; i++) {
                      array.push(el[i])
                    }
                  }
                  return array
                }

                convertToArray(someElementNode)
              </code>
            </pre>
            </div>
          </div>
        </div>
      </Card>
      <Card dis-hover shadow style="width:640px">
        <h3 slot="title">4.作为数组的字符串</h3>
        <div>
          <p>字符串的行为类似于只读的数组。除了用charAt()方法来访问单个字符以外，还可以使用方括号。</p>
          <div v-highlight>
            <pre>
              <code>
                var t = "text"
                t.charAt(0) => 't'
                t[0]        => 't'
              </code>
            </pre>
          </div>
        </div>
      </Card>
    </div>
  </div>
</template>

<script>
import { Card } from 'view-design'

export default {
  name: 'array-3',
  created() {},
  components: {
    Card
  }
}
</script>

<style scoped lang="stylus">
.array-3
  position: relative
  .layout-content
    display: flex
    flex-direction: row
    flex-wrap: wrap
.ivu-card
  align-self: flex-start !important
  margin-top: 20px
  margin-right: 20px
</style>
