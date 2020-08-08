<template>
  <div class="array-3">
    <Card shadow style="width:650px">
      <h3 slot="title">1.构建类数组对象</h3>
      <ul class="menu">
        <li>为一个常规对象增加一些属性使其变成一个类数组对象。其构成包括：</li>
        <li>以从 0 开始的连续整数数字值作为对象的属性名。</li>
        <li>另外还需设置一个 length 属性。</li>
      </ul>
      <div v-highlight>
        <pre>
          <code>
            var obj = {}

            var i = 0
            var len = 3
            while (i &lt; len) {
              obj[i] = i * i
              i++
            }

            obj.length = i

            // 类数组对象
            obj => {0: 0, 1: 1, 2: 4, length: 3}
          </code>
        </pre>
      </div>
    </Card>
    <Card shadow style="width:650px">
      <h3 slot="title">2.检测类数组对象</h3>
      <p>函数中 argument 对象就是一个类数组对象，在客户端 javascript 中，如 document.getElementsByTagName 返回的也是一个类数组。</p>
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
    </Card>
    <Card shadow style="width:780px">
      <h3 slot="title">3.类数组对象的方法</h3>
      <div>
        <p>类数组对象没有继承自 Array.prototype，因此不能在他们的上面直接调用数组方法。尽管如此，我们可以间接的使用 Function.call 方法调用。</p>
        <div v-highlight>
          <pre>
            <code>
              var obj = { 0: 0, 1: 1, 2: 4, 3: 9, length: 4 }

              Array.prototype.join.call(obj, '+') => '0+1+4+9'

              Array.prototype.slice.call(obj, 0)  => [0, 1, 4, 9]

              Array.prototype.map.call(obj, function(item) {
                return item + 1
              }) => [1, 2, 5, 10]

              // firefox直接在Array构造函数上定义为函数（特定浏览器特定版本，非标准）

              Array.join(obj, '+')  => '0+1+4+9'

              Array.slice(obj, 0) => [0, 1, 4, 9]

              Array.map(obj, function(item){
                return item + 1
              }) => [1, 2, 5, 10]
            </code>
          </pre>
        </div>
        <p>表示网页结构的 HTMLCollection 对象就是一个类数组对象。</p>
        <div v-highlight>
          <pre>
            <code>
              var els = document.getElementsByTagName("li")

              // 对类数组对象使用常规数组的方法
              Array.prototype.forEach.call(els, function (item) {
                item.onclick = function () {
                  alert(item.innerHTML)
                }
              })

              // 执行相同的操作
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
        <p>NodeList 对象是一个类数组对象，可以将其转换成常规数组，以便对其进行操作。</p>
        <div>
          <div v-highlight>
            <pre>
            <code>
              function convertToArray(el) {
                //首先判断其是否是元素节点
                if (el.ELEMENT_NODE !== 1) return

                var array = null

                try {
                  // 非IE
                  array = Array.prototype.slice.call(el.children, 0)
                } catch (ex) {
                  array = new Array()
                  // 手动枚举所有项
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
  </div>
</template>

<script>
import { Card } from 'view-design'

export default {
  name: 'array-3',
  components: {
    Card
  }
}
</script>

<style scoped lang="stylus">
.array-3
  display: flex
  flex-direction: row
  flex-wrap: wrap
  .ivu-card
    display: block
    margin-top: 20px
    margin-right: 20px
    font-size: 16px !important
    color: #000 !important
</style>
