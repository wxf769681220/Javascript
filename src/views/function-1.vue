<template>
  <div class="function-1">
    <div class="layout-content">
      <Card dis-hover shadow style="width:400px">
        <h3 slot="title">1.函数声明（语句）</h3>
        <div>
          <p>函数声明具有函数声明提升的特性，即解析器会率先读取函数声明，并使其在执行任何代码之前可用。区别于函数表达式。</p>
          <div v-highlight>
            <pre>
              <code>
                //函数声明
                function fn() {
                  //函数体
                }
              </code>
            </pre>
          </div>
          <p>定义一个函数就相当于实例化了一次Function构造函数。</p>
          <div v-highlight>
            <pre>
              <code>
                new Function('//函数体')
              </code>
            </pre>
          </div>
          <p>Function构造函数所创建的函数，函数体代码的编译总是在顶层函数执行。</p>
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
      <Card dis-hover shadow style="width:450px">
        <h3 slot="title">2.函数表达式</h3>
        <div>
          <p>函数表达式不具有函数声明提升的特性，因此为了调用它，必须把它赋值给一个变量。（变量声明具有变量声明提升特性，但给变量赋值是不会被提前的。）</p>
          <div v-highlight>
            <pre>
              <code>
                //函数表达式
                var fn = function() {
                  //函数体
                }
              </code>
            </pre>
          </div>
          <p>函数表达式可以包含名称。若函数表达式包含名称，则函数名称将成为函数体内部的一个局部变量，并指向该函数对象。</p>
          <div v-highlight>
            <pre>
              <code>
                //乘阶递归函数
                var fn = function factorial(n) {
                  if (n &lt;= 1) return 1
                  return n * factorial(n - 1)
                  // return n * fn(n - 1)
                }
                fn(4) => 24
              </code>
            </pre>
          </div>
        </div>
      </Card>
      <Card dis-hover shadow style="width:450px">
        <h3 slot="title">3.自执行函数</h3>
        <div>
          <p>立即调用的函数表达式。自执行函数是某个一个值而不是一个引用，因此自执行函数不能通过函数名再调用。</p>
          <div v-highlight>
            <pre>
              <code>
                //常用圆括号方式
                (function() {}())
                (function() {})()

                //赋值操作符
                var fn = function() {}()

                // 逻辑操作符或逗号操作符
                true && function() {}()
                false || function() {}()
                0, function() {}()

                //一元操作符
                !function() {}()
                ~function() {}()
                -function() {}()
                +function() {}()

                //new操作符
                new function() {}
              </code>
            </pre>
          </div>
        </div>
      </Card>
      <Card dis-hover shadow style="width:530px">
        <h3 slot="title">4.嵌套函数</h3>
        <div>
          <p>函数可以嵌套在其他函数里。</p>
          <div v-highlight>
            <pre>
              <code>
                function fn() {
                  function foo() {}
                  return true
                }
              </code>
            </pre>
          </div>
          <p>嵌套函数中this关键字的作用域。</p>
          <div v-highlight>
            <pre>
              <code>
                var o = {
                  'name': function() {
                    this === o => true
                    var self = this    //保存到变量self

                    function foo() {
                      self === o => true  //变量self指向外部函数this
                      this === o => false //this指向全局对象
                    }
                    foo()
                  }
                }
                o.name()
              </code>
            </pre>
          </div>
        </div>
      </Card>
      <Card dis-hover shadow style="width:530px">
        <h3 slot="title">5.调用函数</h3>
        <div>
          <p>作为普通函数调用，一般不使用this关键字，不过this可以用来判断当前是否是严格模式。</p>
          <div v-highlight>
            <pre>
              <code>
                strict()
                function strict() {
                  return !this
                }
                strict() => false / true(严格模式)
              </code>
            </pre>
          </div>
          <p>作为某个对象的方法调用。</p>
          <div v-highlight>
            <pre>
              <code>
                var sum = 1
                var o = {
                  x: function() {
                    sum = sum + 1
                    return this
                  },
                  y: function() {
                    sum = sum + 10
                    return this
                  }
                }

                o.x() => o

                //使用方括号
                o['x']() => o

                //当方法不需要返回值时，最好直接返回this。
                //若在api设计中采用这种方式，则可以实现API的'链式调用'
                o.x().y() => o
                sum => 12
              </code>
            </pre>
          </div>
          <p>作为构造函数调用。</p>
          <div v-highlight>
            <pre>
              <code>
                //构造函数
                function Fn() {
                  //...
                }

                //实例化
                var x = new Fn()
              </code>
            </pre>
          </div>
          <p>通过apply和call方法实现函数的间接调用。</p>
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
      <Card dis-hover shadow style="width:530px">
        <h3 slot="title">6.作为值的函数</h3>
        <div>
          <p>函数不只是一种语法，也是值。也就是说可以将函数赋值给一个变量。存储在对象的属性或数组项中，或作为参数传给另一个函数。</p>
          <div v-highlight>
            <pre>
              <code>
                //函数名本身也是一个变量
                function person() {
                  return true
                }

                //函数名赋值给另一个变量
                var p = person

                person() => true
                p()      => true
              </code>
            </pre>
          </div>
          <p>函数作为参数传给另一个函数。</p>
          <div v-highlight>
            <pre>
              <code>
                function f1(o) {
                  return o()
                }

                function f2() {
                  return 100
                }

                f1(f2) => 100
              </code>
            </pre>
          </div>
        </div>
      </Card>
      <Card dis-hover shadow style="width:530px">
        <h3 slot="title">7.函数属性</h3>
        <div>
          <p>函数的length属性。</p>
          <div v-highlight>
            <pre>
              <code>
                //检测实参个数与期望实参个数是否一致
                function check(arg) {
                  var a = arg.length
                  var b = arg.callee.length
                  if (a !== b) {
                    throw Error('实参与期望实参的个数不同')
                  }
                }

                //期望传入3个参数
                function foo(a, b, c) {
                  check(arguments)
                  return a + b + c
                }

                //传入两个参数
                foo(1,2) =>'实参与期望实参的个数不同'
              </code>
            </pre>
          </div>
          <p>函数的prototype属性（原型属性）。</p>
          <div v-highlight>
            <pre>
              <code>
                //构造函数
                function Fn() {
                  //...
                }

                Fn.prototype //指向函数的原型对象
              </code>
            </pre>
          </div>
        </div>
      </Card>
      <Card dis-hover shadow style="width:530px">
        <h3 slot="title">8.函数方法</h3>
        <div>
          <p>call和apply方法。</p>
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
          <p>bind方法。</p>
          <div v-highlight>
            <pre>
              <code>
                //构造函数
                function Fn() {
                  //...
                }

                Fn.prototype //指向函数的原型对象
              </code>
            </pre>
          </div>
          <p>toString()方法。</p>
          <div v-highlight>
            <pre>
              <code>
                //构造函数
                function Fn() {
                  //...
                }

                Fn.prototype //指向函数的原型对象
              </code>
            </pre>
          </div>
        </div>
      </Card>
      <Card dis-hover shadow style="width:700px">
        <h3 slot="title">9.函数对象检测</h3>
        <div>
          <p>检测一个对象是否是函数对象。</p>
          <div v-highlight>
            <pre>
              <code>
                //类似于isArray()
                function isFunction(a) {
                  return Object.prototype.toString.call(a) === "[object Function]"
                }
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
  name: 'function-1',
  created() {},
  components: {
    Card
  }
}
</script>

<style scoped lang="stylus">
.function-1
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
