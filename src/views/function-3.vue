<template>
  <div class="function-3">
    <div class="layout-content">
      <Card :dis-hover="true" shadow style="width:400px">
        <h3 slot="title">1.什么是闭包？</h3>
        <div>
          <ol class="menu">
            <li>闭包：有权访问另一个函数作用域中变量的函数。</li>
            <li>创建闭包的常见方式：在一个函数体内创建另一个函数。</li>
          </ol>
          <div v-highlight>
            <pre>
              <code>
                function fn(x) {

                  //一个函数作为另一个函数的返回值
                  return function() {
                    var y = x + 1
                    return y
                  }

                }

                fn(10)() => 11
              </code>
            </pre>
          </div>
        </div>
      </Card>
      <Card :dis-hover="true" shadow style="width:450px">
        <h3 slot="title">2.作用域链</h3>
        <div>
          <ol class="menu">
            <li>当某个函数被调用时，会创建一个执行环境及相应的作用域链。</li>
            <li>arguments和其他形参的值来初始化函数的活动对象（变量对象）。</li>
            <li>若是嵌套函数，在其作用域链中，外部活动对象始终处于第二位，外部的外部函数处于第三位，直到作为作用域链终点的全局执行环境。</li>
            <li>在函数执行过程中，为读取和写入变量的值，需要在作用域链中查找变量（最终值非某个特定值）。</li>
            <li>作用域链本质上是一个指向变量对象的指针列表，它只引用但不实际包含变量对象。</li>
          </ol>
        </div>
      </Card>
      <Card :dis-hover="true" shadow style="width:450px">
        <h3 slot="title">3.闭包的作用域链</h3>
        <p>作用域链是函数定义时创建的，嵌套函数（闭包）就定义在这个作用域链里。对于外部函数的局部变量而言，不管在何时执行闭包函数，这种绑定在执行闭包时依然有效。</p>
        <div v-highlight>
          <pre>
              <code>
                var x = 1
                function fn() {
                  var x = 2
                  function foo() {
                    return x
                  }
                  return foo()
                  //return foo
                }

                fn() => 2
                //fn()() => 2
              </code>
            </pre>
        </div>
      </Card>
      <Card :dis-hover="true" shadow style="width:700px">
        <h3 slot="title">4.内存问题</h3>
        <div>
          <p>
            函数访问一个变量时，就会从作用域链中搜索具有相应名字的变量，当函数执行完毕后，局部活动对象就会被销毁，内存中仅保存全局作用域（全局执行环境的变量对象）。
            但闭包有所不同。
          </p>
          <div v-highlight>
            <pre>
              <code>
                function fn(a) {
                  return function(b) {
                    return a + b
                  }
                }

                fn(1)(2) => 3

                //fn()函数在执行完毕后，其执行环境的作用域链会被销毁，
                //但其活动对象依然会留在内存中。因为匿名函数的作用域链仍然在引用这个活动对象，
                //直到匿名函数被销毁后，fn()函数的活动对象才会被销毁。
              </code>
            </pre>
          </div>
          <p>销毁匿名函数，释放内存。</p>
          <div v-highlight>
            <pre>
              <code>
                //创建匿名函数的一个引用
                var x = fn(1)

                //调用函数
                var y = x(2)

                //解除对匿名函数的引用
                x = null

                y => 3
              </code>
            </pre>
          </div>
        </div>
      </Card>
      <Card :dis-hover="true" shadow style="width:550px">
        <h3 slot="title">5.闭包副作用</h3>
        <p>闭包只能取得外部函数中任何变量的最终值。它保存的是整个变量对象，而不是某个特殊的变量。</p>
        <div v-highlight>
          <pre>
              <code>
                function fn() {
                  var arr = []
                  for (var i = 0; i &lt; 10; i++) {
                    arr[i] = function() {
                      return i //只能取得i最终值10
                    }
                  }
                  return arr
                }

                fn()[0]() => 10
                fn()[0]() => 10
              </code>
            </pre>
        </div>
        <p>创建另一个匿名函数强制让闭包的行为符合预期。</p>
        <div v-highlight>
          <pre>
              <code>
                function fn() {
                  var arr = []
                  for (var i = 0; i &lt; 10; i++) {
                    arr[i] = function(a) {
                      return function() {
                        return a
                      }
                    }(i)
                  }
                  return arr
                }

                fn()[0]() => 0
                fn()[0]() => 9
              </code>
            </pre>
        </div>
        <p>一般函数在取得全局加变量时，也是获取任何变量的最终值。</p>
        <div v-highlight>
          <pre>
              <code>
                  var arr= []
                  var i = 0
                  for (; i &lt; 10; i++) {
                    arr[i] = function() {
                      return i //只能取得全局变量i的最终值10
                    }
                  }
                  arr[0]() => 10
                  arr[9]() => 10
              </code>
            </pre>
        </div>
      </Card>
      <Card :dis-hover="true" shadow style="width:700px">
        <h3 slot="title">6.闭包访问外部函数中的this和arguments</h3>
        <div>
          <p>嵌套函数中this关键字的作用域。</p>
          <div v-highlight>
            <pre>
              <code>
              var o = {
                'name': function(a) {
                  this === o => true
                  var self = this    //保存到变量self
                  var outerArguments = arguments

                  //闭包
                  function foo(b) {
                    self === o => true  //变量self指向外部函数this
                    this === o => false //this指向全局对象

                    outerArguments[0] === 1 //true
                    arguments[0] === 2      //true
                  }
                  foo(2)
                }
              }
              o.name(1)
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
  name: 'function-3',
  created() {},
  components: {
    Card
  }
}
</script>

<style scoped lang="stylus">
.function-3
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
