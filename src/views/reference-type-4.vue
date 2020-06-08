<template>
  <div class="reference-type-4">
    <div class="layout-content">
      <Card dis-hover shadow style="width:560px">
        <h3 slot="title">1.Global全局对象</h3>
        <div>
          <p>事实上没有全局变量和全局函数，所有在全局作用域定义的属性和函数，都是global对象的属性。</p>
          <p>特殊值undefined、NaN以及infinity，还有一些原生引用类型的构造函数：如：Object、Array、Function、String等，实际上都是global对象的属性。</p>
          <p>还有一些方法，如：isNaN()、isFinite()、parseInt()和parseFloat()，实际上都是global对象的方法。</p>
          <div v-highlight>
            <pre>
              <code>
                var color = 'red'

                global.color => error

                //web浏览器将global对象作为window对象的一部分加以实现
                window.color => 'red'
              </code>
            </pre>
          </div>
          <p>取得global对象的方法。</p>
          <div v-highlight>
            <pre>
              <code>
                var global = function() {
                  return this
                }()

                global => window对象
              </code>
            </pre>
          </div>
        </div>
      </Card>
      <Card dis-hover shadow style="width:750px">
        <h3 slot="title">2.URI编码方法</h3>
        <div>
          <p>
            global对象的encodeURI和encodeURIComponent()方法可以对URI(通用资源标识符)进行编码。有效的URI中不能包含某些字符，如空格。这两个方法
            就可以对URI进行编码，他们使用特殊的utf-8编码替代无效的字符，从来让浏览器能够接受和理解。
          </p>
          <div v-highlight>
            <pre>
              <code>
                var uri = 'https://www.baidu.com/pag e1#start'

                //对整个URI进行编码，
                //并且不会对本身属于URI的特殊字符进行编码，如：冒号、正斜杠、问号和井字号
                encodeURI(uri) => https://www.baidu.com/pag%20e1#start

                //对URI中的某一片段进行编码，
                //会对URI任何非标准字符进行编码
                encodeURIComponent(uri) => https%3A%2F%2Fwww.baidu.com%2Fpag%20e1%23start
              </code>
            </pre>
          </div>
          <p>encodeURI()和encodeURIComponent()相应的两个解码方法分别是：decodeURI()和decodeURIComponent()。</p>
          <div v-highlight>
            <pre>
              <code>
                decodeURI('https://www.baidu.com/pag%20e1#start')

                decodeURIComponent('https%3A%2F%2Fwww.baidu.com%2Fpag%20e1%23start')
              </code>
            </pre>
          </div>
        </div>
      </Card>
      <Card dis-hover shadow style="width:550px">
        <h3 slot="title">3.eval()方法</h3>
        <div>
          <p>eval()方法就像一个完整的javascript解析器，它接收一个参数，即要执行的代码字符串。</p>
          <div v-highlight>
            <pre>
              <code>
                eval("alert('hello!')")

                //等价于
                alert("hello!")
              </code>
            </pre>
          </div>
          <p>eval()执行的代码被认为是包含该次调用的执行代码的一部分，因此被执行的代码具有与该执行环境相同的作用域链。</p>
          <div v-highlight>
            <pre>
              <code>
                var x = 1

                eval("alert(x + 1)") => 2

                eval("function fn() {return x + 1}")

                fn() => 2

                //严格模式下，外部无法访问eval()中创建的任何变量或函数
                'user strict'
                fn() => error
              </code>
            </pre>
          </div>
        </div>
      </Card>
      <Card dis-hover shadow style="width:450px">
        <h3 slot="title">4.1Math对象</h3>
        <div>
          <p>Math对象的属性：数学计算中可能用到的特殊值。</p>
          <table class="table-bordered">
            <thead>
              <tr class="bg-gray">
                <th>属性</th>
                <th>描述</th>
              </tr>
            </thead>
            <tbody>
              <tr class="bg-1">
                <td>Math.E</td>
                <td>自然对数的底数，即常量e的值</td>
              </tr>
              <tr class="bg-2">
                <td>Math.LN10</td>
                <td>10的自然对数</td>
              </tr>
              <tr class="bg-2">
                <td>Math.LN2</td>
                <td>2的自然对数</td>
              </tr>
              <tr class="bg-1">
                <td>Math.LOG2E</td>
                <td>以2为底e的对数</td>
              </tr>
              <tr class="bg-1">
                <td>Math.LOG10E</td>
                <td>以10为底e的对数</td>
              </tr>
              <tr class="bg-2">
                <td>Math.PI</td>
                <td>π的值</td>
              </tr>
              <tr class="bg-1">
                <td>Math.SQRT1_2</td>
                <td>1/2的平方根(2的平方根的倒数)</td>
              </tr>
              <tr class="bg-1">
                <td>Math.SQRT2</td>
                <td>2的平方根</td>
              </tr>
              <tr class="bg-2">
                <td>Math.abs(num)</td>
                <td>返回num的绝对值</td>
              </tr>
              <tr class="bg-2">
                <td>Math.exp(num)</td>
                <td>返回Math.E的num次幂</td>
              </tr>
              <tr class="bg-2">
                <td>Math.log(num)</td>
                <td>返回num的自然对数</td>
              </tr>
              <tr class="bg-2">
                <td>Math.pow(num, power)</td>
                <td>返回num的power次幂</td>
              </tr>
              <tr class="bg-2">
                <td>Math.sqrt(num)</td>
                <td>返回num的平方根</td>
              </tr>
              <tr class="bg-1">
                <td>Math.acos(x)</td>
                <td>返回x的反余弦值</td>
              </tr>
              <tr class="bg-1">
                <td>Math.asin(x)</td>
                <td>返回x的反正弦值</td>
              </tr>
              <tr class="bg-1">
                <td>Math.atan(x)</td>
                <td>返回x的反正切值</td>
              </tr>
              <tr class="bg-1">
                <td>Math.atan2(y, x)</td>
                <td>返回y/x的反正切值</td>
              </tr>
              <tr class="bg-1">
                <td>Math.cos(x)</td>
                <td>返回x余弦值</td>
              </tr>
              <tr class="bg-1">
                <td>Math.sin(x)</td>
                <td>返回x的正弦值</td>
              </tr>
              <tr class="bg-1">
                <td>Math.tan(x)</td>
                <td>返回x的正切值</td>
              </tr>
            </tbody>
          </table>
        </div>
      </Card>
      <Card dis-hover shadow style="width:450px">
        <h3 slot="title">4.2.max()和min()方法</h3>
        <div>
          <p>接收任何数量的参数，确定数值中的最大值或最小值。</p>
          <div v-highlight>
            <pre>
              <code>
                Math.max(11,2,3,4,15) => 15
                Math.min(11,2,3,4,15) => 2
              </code>
            </pre>
          </div>
          <p>确定数组中的最大值或最小值。</p>
          <div v-highlight>
            <pre>
              <code>
                var arr = [11,2,3,4,15]

                Math.max.apply(Math, arr) => 15
                Math.min.apply(Math, arr) => 2
              </code>
            </pre>
          </div>
        </div>
      </Card>
      <Card dis-hover shadow style="width:500px">
        <h3 slot="title">4.3.舍入方法</h3>
        <div>
          <ul class="menu">
            <li>Math.ceil()：向上舍入，数值舍入为最近的整数。</li>
            <li>Math.floor()：向下舍入，数值舍入为最近的整数。</li>
            <li>Math.round()：标准舍入，数值四舍五入为最近的整数。</li>
          </ul>
          <div v-highlight>
            <pre>
              <code>
                //清除小数位，整数位+1
                Math.ceil(1.1) => 2
                Math.ceil(1.5) => 2
                Math.ceil(1.9) => 2

                //清除小数位
                Math.floor(1.1) => 1
                Math.floor(1.5) => 1
                Math.floor(1.9) => 1

                Math.round(1.1) => 1
                Math.round(1.5) => 2
                Math.round(1.9) => 2
              </code>
            </pre>
          </div>
        </div>
      </Card>
      <Card dis-hover shadow style="width:650px">
        <h3 slot="title">4.4.random()方法</h3>
        <div>
          <p>random()方法始终返回大于等于0小于1的随机数。</p>
          <div v-highlight>
            <pre>
              <code>
                //从某个范围内随机选择一个数
                result = Math.floor(Math.random() * 可能值的总数 + 第一个可能的值)

                //从0-10之间随机一个数，0-10总共有11个可能值，第一个可能值时0
                result = Math.floor(Math.random() * 11 + 0)

                //封装函数
                function randomValueFrom(lowerValue, upperValue) {
                  var choices = upperValue - lowerValue + 1
                  return Math.floor(Math.random() * choices + lowerValue)
                }

                randomValueFrom(0, 10) => 0-10中的一个随机数
              </code>
            </pre>
          </div>
          <p>从数组中随机抽取一个数组项。</p>
          <div v-highlight>
            <pre>
              <code>
                var arr = ['red', 'green', 'black', 'blue']
                arr[randomValueFrom(0, arr.length-1)]
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
  name: 'reference-type-4',
  created() {},
  components: {
    Card
  }
}
</script>

<style scoped lang="stylus">
.reference-type-4
  position: relative
  .layout-content
    display: flex
    flex-direction: row
    flex-wrap: wrap
.ivu-card
  align-self: flex-start !important
  margin-top: 20px
  margin-right: 20px
.bg-gray
  background: rgb(245, 245, 245)
.bg-1
  background: rgb(235, 247, 255)
.bg-2
  background: rgb(248, 248, 248)
</style>
