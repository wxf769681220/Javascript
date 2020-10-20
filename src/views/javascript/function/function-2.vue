<template>
  <div class="function-2">
    <Card shadow style="width:500px">
      <h3 slot="title">1.arguments对象</h3>
      <ul class="menu">
        <li>arguments 本质上是函数的一个局部变量。（在全局中访问会抛出 ReferenceError 错误）</li>
        <li>arguments 在函数中会自动声明并初始化。</li>
        <li>arguments 是指向函数实参对象的引用，它是一个类数组对象。</li>
      </ul>
      <div v-highlight>
        <pre>
          <code>
            function fn() {
              // arguments
            }
          </code>
        </pre>
      </div>
      <p>arguments 对象的数组项与形参是等同的，即修改其中一个值会影响到另一个值。</p>
      <div v-highlight>
        <pre>
          <code>
            fn(1, 2, 3)

            function fn(a,b) {
              arguments[0] => 1

              // 改变形参的值
              a = true

              arguments[0] => true
            }
          </code>
        </pre>
      </div>
    </Card>
    <Card shadow style="width:500px">
      <h3 slot="title">2.arguments.length</h3>
      <p>arguments 对象的 length 属性表示实参个数。由于 arguments 是一个类数组对象，因此改变其 length 属性值并不会影响到数组项。</p>
      <div v-highlight>
        <pre>
          <code>
            fn(1,2,3)

            function fn() {
              // 实参长度
              arguments.length => 3

              // 重设length
              arguments.length = 0

              // 正常访问
              arguments[2] => 3
            }
          </code>
        </pre>
      </div>
    </Card>
    <Card shadow style="width:650px">
      <h3 slot="title">3.arguments.callee</h3>
      <div>
        <ul class="menu">
          <li>arguments 对象的 callee 属性指向当前正在执行的函数。</li>
          <li>在严格模式访问 arguments.callee 会抛出 TypeError 错误。</li>
        </ul>
        <div v-highlight>
          <pre>
            <code>
              // 阶乘函数
              function factorial(n) {
                if (!this) {
                  throw new Error('在严格模式下，arguments.callee未定义')
                } else {
                  if (n &lt; 2) {
                    return 1
                  } else {
                    return n * arguments.callee(n - 1)
                  }
                }
              }
              factorial(5) => 120
            </code>
          </pre>
        </div>
        <p>使用 callee 属性检测函数实参个数与期望实参个数是否一致。</p>
        <div v-highlight>
          <pre>
            <code>
              function check(arg) {
                var a = arg.length
                var b = arg.callee.length
                if (a !== b) {
                  return false
                } else {
                  return true
                }
              }

              // 期望参数三个
              function foo(a, b, c) {
                check(arguments)
                return a + b + c
              }

              // 传入两个参数
              foo(1, 2) => false
            </code>
          </pre>
        </div>
        <p>callee 属性上包含一个非标准属性 caller，指向调用当前函数的函数。</p>
        <div v-highlight>
          <pre>
            <code>
            function factorial() {
              arguments.callee.caller => fn
            }

            ;(fn() {
              factorial()
            })()
            </code>
          </pre>
        </div>
      </div>
    </Card>
    <Card shadow style="width:500px">
      <h3 slot="title">4.对象属性作为实参。</h3>
      <div>
        <p>对象属性作为实参，可以忽略函数传入实参的顺序。</p>
        <div v-highlight>
          <pre>
            <code>
              function result(a, b, c) {
                // 逻辑代码
                return a + b + c
              }

              function bridge(o) {
                // 对象属性作为实参传入
                return result(o.x, o.y, o.z)
              }

              // 对象属性是无序的
              bridge({ x: 1, y: 2, z: 3 }) => 6
            </code>
          </pre>
        </div>
      </div>
    </Card>
    <Card shadow style="width:500px">
      <h3 slot="title">5.剩余参数</h3>
      <div>
        <p>剩余参数语法。</p>
        <div v-highlight>
          <pre>
            <code>
              // 剩余参数
              function sum(a, b, ...nums) {
                // 实参关联类数组
                arguments.length => 5
                arguments[0] => 1
                arguments[4] => 5

                nums instanceof Array => true
                nums => [3,4,5]
              }

              sum(1, 2, 3, 4, 5)
            </code>
          </pre>
        </div>
      </div>
    </Card>
    <Card shadow style="width:500px">
      <h3 slot="title">6.分布参数</h3>
      <div>
        <p>分布参数语法。</p>
        <div v-highlight>
          <pre>
            <code>
              // 分布参数
              function sum(a, b, ...nums) {
                // 实参关联类数组
                arguments.length => 5
                arguments[0] => 1
                arguments[4] => 5

                nums instanceof Array => true
                nums => [3,4,5]
              }

              // 分布参数语法
              sum(...[1, 2, 3, 4, 5])
            </code>
          </pre>
        </div>
        <p>另一种情形：</p>
        <div v-highlight>
          <pre>
            <code>
              function sum(a, b, ...nums) {
                // 实参关联类数组
                arguments.length => 6
                arguments[0] => 1
                arguments[1] => 1
                arguments[5] => 5

                nums instanceof Array => true
                nums => [2,3,4,5]
              }

              // 分布参数语法
              sum(1, ...[1, 2, 3, 4, 5])
            </code>
          </pre>
        </div>
      </div>
    </Card>
    <Card shadow style="width:500px">
      <h3 slot="title">7.参数默认值</h3>
      <p>分布参数语法。</p>
      <div v-highlight>
        <pre>
          <code>
            var x = 1;

            // y 是函数的局部变量
            // x 是一个指向全局作用域的变量
            function fn(y = x) {
              return y;
            }

            fn() => 1
          </code>
        </pre>
      </div>
    </Card>
  </div>
</template>

<script>
import { Card } from 'view-design'

export default {
  name: 'function-2',
  components: {
    Card
  }
}
</script>

<style scoped lang="stylus">
.function-2
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
