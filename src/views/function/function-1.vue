<template>
  <div class="function-1">
    <Card shadow style="width:560px">
      <h3 slot="title">1.函数声明</h3>
      <div>
        <p>函数声明具有函数声明提升的特性，即解析器会率先读取函数声明，并使其在执行任何代码之前可用。区别于函数表达式。</p>
        <div v-highlight>
          <pre>
            <code>
              // 函数声明
              function fn() {
                // 函数体
              }
            </code>
          </pre>
        </div>
        <p>定义一个函数就相当于实例化了一次 Function 构造函数。</p>
        <div v-highlight>
          <pre>
            <code>
              var fn = new Function('a', 'b', 'return a + b')
              fn(1,2) => 3
            </code>
          </pre>
        </div>
        <p>Function 构造函数所创建的函数，函数体代码的编译总是在顶层函数执行。</p>
        <div v-highlight>
          <pre>
            <code>
              var x = 1

              function fn() {
                var x = 2
                return new Function('return x')
              }

              fn()() => 1
            </code>
          </pre>
        </div>
      </div>
    </Card>
    <Card shadow style="width:540px">
      <h3 slot="title">2.函数表达式</h3>
      <div>
        <p>函数表达式不具有函数声明提升的特性，因此为了调用它，必须把它赋值给一个变量。（变量声明具有变量声明提升特性，但给变量赋值是不会被提前的。）</p>
        <div v-highlight>
          <pre>
            <code>
              // 函数表达式
              var fn = function() {
                // 函数体
              }
            </code>
          </pre>
        </div>
        <p>函数表达式可以包含名称。若函数表达式包含名称，则函数名称将成为函数体内部的一个局部变量，并指向该函数对象。</p>
        <div v-highlight>
          <pre>
            <code>
              var fn = function factorial(n) {
                console.log(factorial)        => Function
                console.log(fn)               => Function
                console.log(fn === factorial) => true
              }
              fn()
            </code>
          </pre>
        </div>
      </div>
    </Card>
    <Card shadow style="width:500px">
      <h3 slot="title">3.自执行函数</h3>
      <div>
        <p>立即调用的函数表达式。自执行函数是某个一个值而不是一个引用，因此自执行函数不能通过函数名再调用。</p>
        <div v-highlight>
          <pre>
            <code>
              // 常用圆括号方式
              (function() {}())
              (function() {})()

              // 赋值操作符
              var fn = function() {}()

              // 逻辑操作符或逗号操作符
              true && function() {}()
              false || function() {}()
              0, function() {}()

              // 一元操作符
              !function() {}()
              ~function() {}()
              -function() {}()
              +function() {}()

              // new操作符
              new function() {}
            </code>
          </pre>
        </div>
        <p>使用自执行函数的注意事项。语句分隔，省略分号会导致一些意想不到的情形。</p>
        <div v-highlight>
          <pre>
            <code>
              var x = 1

              // 若上一行代码没有使用分号结尾
              // 可以在自执行函数前添加一个分号
              // 以下代码可正常执行
              ;(function(){
                //...
              }())
            </code>
          </pre>
        </div>
      </div>
    </Card>
    <Card shadow style="width:540px">
      <h3 slot="title">4.嵌套函数(闭包)</h3>
      <div>
        <p>函数可以嵌套在其他函数里。</p>
        <div v-highlight>
          <pre>
            <code>
              function fn() {
                return function() {
                  // ...
                }
              }
            </code>
          </pre>
        </div>
        <p>嵌套函数中 this 关键字的作用域。</p>
        <div v-highlight>
          <pre>
            <code>
              var o = {
                'name': function() {
                  // 保存到变量self
                  var self = this

                  ;(function foo() {
                    // 变量self指向外部函数this
                    self === o      => true
                    // this指向window
                    this === window => true
                  }())

                  return this
                }
              }
              o.name() => o
            </code>
          </pre>
        </div>
      </div>
    </Card>
    <Card shadow style="width:420px">
      <h3 slot="title">5.作为值的函数（回调函数）</h3>
      <p>函数A指针(引用地址)作为参数传递到另一个函数B中，并且在函数B中执行函数A。我们就说函数A叫做回调函数。如果没有名称(函数表达式)，就叫做匿名回调函数。</p>
      <div v-highlight>
        <pre>
          <code>
            // 回调函数
            function A() {
              return 1
            }

            function B(a) {
              return a() + 2
            }

            B(A) => 3
          </code>
        </pre>
      </div>
      <p>如果是匿名函数，就叫做匿名回调函数。</p>
      <div v-highlight>
        <pre>
          <code>
            // 匿名回调函数
            B(function() {
              return 1
            }) => 3

            function B(callback) {
              return callback() + 2
            }
          </code>
        </pre>
      </div>
    </Card>
    <Card shadow style="width:500px">
      <h3 slot="title">6.调用函数</h3>
      <div>
        <p>函数作为普通函数调用时，一般不使用 this 关键字，不过 this 可以用来判断当前是否是严格模式。</p>
        <div v-highlight>
          <pre>
            <code>
              function strict() {
                return !this
              }

              // 作为普通函数调用
              if (strict()) {
                alert("javascript已启用严格模式!")
              } else {
                alert("javascript使用非严格模式!")
              }
            </code>
          </pre>
        </div>
        <p>函数作为某个对象的方法调用。当对象某个方法不需要返回值时，最好直接返回 this 。在 API 设计中常采用这种方式来实现 API 的'链式调用。</p>
        <div v-highlight>
          <pre>
            <code>
              // 作为某个对象的方法调用
              var o = {
                x: function() {
                  return this
                },
                y: function() {
                  return this
                }
              }

              // 链式调用
              o.x().y() => o
            </code>
          </pre>
        </div>
        <p>函数作为构造函数调用。</p>
        <div v-highlight>
          <pre>
            <code>
              // 构造函数
              function Fn() {
                //...
              }

              // 实例化
              var x = new Fn()
            </code>
          </pre>
        </div>
        <p>通过 apply 和 call 方法实现函数的间接调用。</p>
        <div v-highlight>
          <pre>
            <code>
              var o = {
                name: 'lee',
                age: 20
              }

              function fn() {
                return this.name + '-' + this.age
              }

              fn.call(o) => 'lee-20'
            </code>
          </pre>
        </div>
      </div>
    </Card>
    <Card shadow style="width:500px">
      <h3 slot="title">7.函数属性</h3>
      <div>
        <p>函数的 length 属性。（在严格模式访问 arguments.callee 会导致错误）</p>
        <div v-highlight>
          <pre>
            <code>
              // 检测实参个数与期望实参个数是否一致
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
        <p>函数的 prototype（原型）属性。</p>
        <div v-highlight>
          <pre>
            <code>
              // 构造函数
              function Fn() {
                //...
              }

              // 指向函数的原型对象
              Fn.prototype
            </code>
          </pre>
        </div>
      </div>
    </Card>
    <Card shadow style="width:680px">
      <h3 slot="title">8.函数对象检测</h3>
      <div>
        <p>检测对象具体类型。</p>
        <div v-highlight>
          <pre>
            <code>
              // 是否是一个函数
              function isFunction(o) {
                return Object.prototype.toString.call(o) === "[object Function]"
              }

              // 是否是一个数组，类似于Array.isArray()
              function isArray(o) {
                return Object.prototype.toString.call(o) === "[object Array]"
              }
            </code>
          </pre>
        </div>
      </div>
    </Card>
  </div>
</template>

<script>
import { Card } from 'view-design'

export default {
  name: 'function-1',
  components: {
    Card
  }
}
</script>

<style scoped lang="stylus">
.function-1
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
