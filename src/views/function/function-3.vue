<template>
  <div class="function-3">
    <Card shadow style="width:650px">
      <h3 slot="title">1.执行环境与作用域</h3>
      <ol class="menu">
        <li><span>javascript 中有两类执行环境：<strong>全局执行环境</strong>和<strong>局部执行环境</strong>（函数的执行环境）。</span></li>
        <li><span>每个执行环境中都有一个与之关联的<strong>变量对象</strong>，其作用是：<strong>保存着该执行环境中定义的所有变量和函数</strong>。</span></li>
        <li><span>当代码在一个执行环境中执行时，会创建变量对象的一个<strong>作用域链</strong>。其作用是：<strong>保证对执行环境有权访问的所有变量和函数的有序访问</strong>。</span></li>
        <li><span>作用域链的前端，始终是当前执行的代码所在执行环境的变量对象。若该执行环境是函数，则将其活动对象作为变量对象。活动对象最开始只包含一个 arguments 变量；
          作用域链的下一个变量对象来自包含的外部环境；再下一次的变量对象则来自下一个包含环境；这样一直延续到全局执行环境，全局执行环境的变量对象始终是作用域链中的最后一个对象。</span>
        </li>
        <li><span><strong>内部环境通过作用域链可以访问所有的外部环境，但外部环境不能访问内部环境中的任何变量和函数。</strong></span></li>
      </ol>
    </Card>
    <Card shadow style="width:560px">
      <h3 slot="title">1.什么是闭包？</h3>
      <ul class="menu">
        <li>闭包：实质上就是一个函数。</li>
        <li>该函数有权访问另一个函数（外部函数）作用域中定义的所有变量。</li>
        <li>创建闭包的常见方式：在一个函数体内创建另一个函数。</li>
      </ul>
      <div v-highlight>
        <pre>
          <code>
            // 创建闭包
            function fn() {
              // 有名字的闭包
              function foo() {
                return false
              }

              // 匿名闭包
              return function() {
                return true
              }
            }
          </code>
        </pre>
      </div>
    </Card>
    <Card shadow style="width:560px">
      <h3 slot="title">3.闭包的作用域链</h3>
      <p>作用域链是函数定义时创建的，闭包就定义在这个作用域链里。对于外部函数的局部变量而言，不管在何时调用闭包函数，这种绑定依然有效。</p>
      <div v-highlight>
        <pre>
            <code>
              var x = 1
              function fn() {
                var x = 2
                function foo() {
                  return x
                }
                // 在外部函数中调用闭包
                return foo()
              }
              fn() => 2

              ////////////////////////////
              var x = 1
              function fn() {
                var x = 2
                function foo() {
                  return x
                }
                return foo
              }

              // 获取闭包的引用
              var y = fn()

              // 在全局作用域下调用闭包
              y() => 2
            </code>
          </pre>
      </div>
    </Card>
    <Card shadow style="width:700px">
      <h3 slot="title">4.闭包的内存问题 / 内存泄漏</h3>
      <div>
        <ul class="menu">
          <li>在函数中访问一个变量时，就会从作用域链中搜索具有相应名字的变量。</li>
          <li>当函数执行完毕后，局部活动对象就会被销毁，此时内存中仅保存全局执行环境的变量对象。</li>
          <li>但闭包有所不同：外部函数的活动对象依然会留在内存中，因为闭包的作用域链仍然引用这个活动对象。</li>
          <li>直到闭包被销毁后，外部函数的活动对象才会被销毁。因此闭包会消耗一定的内存。</li>
        </ul>
        <div v-highlight>
          <pre>
            <code>
              function fn(a) {
                return function(b) {
                  return a + b
                }
              }

              // 获取对闭包的引用
              var f = fn(1)

              f(2) => 3

              // 销毁闭包，释放内存
              f = null
            </code>
          </pre>
        </div>
        <p>内存泄漏：如果闭包的作用域中保存着一个 HTML 元素，那就意味着该元素将无法被销毁，因此占用内存就永远不会被收回。解决的方法：手动取消对 HTML 元素的引用。</p>
        <div v-highlight>
          <pre>
            <code>

              function fn() {
                var element = documents.getElementById('myDiv')

                var id = element.id

                element.onclick = function() {
                  // 1.闭包中不存在对HTML元素的任何直接引用
                  // 2.实际上闭包中仍然存在对外部函数的活动对象的引用
                  console.log(id)
                }

                // 移除事件处理程序
                // 解除对 HTML 元素的引用
                element = null
              }
            </code>
          </pre>
        </div>
      </div>
    </Card>
    <Card shadow style="width:550px">
      <h3 slot="title">5.闭包的副作用</h3>
      <p>闭包只能取得外部函数中任何变量的最终值。因为它保存的是整个变量对象，而不是某个特殊的值。</p>
      <div v-highlight>
        <pre>
            <code>
              function fn() {
                var arr = []
                for (var i = 0; i &lt; 3; i++) {
                  arr[i] = function() {
                    // 只能取得i最终值10
                    return i
                  }
                }
                return arr
              }
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
                  // 自执行函数传入参数
                  arr[i] = function(a) {
                    return function() {
                      return a
                    }
                  }(i)
                }
                return arr
              }
            </code>
          </pre>
      </div>
    </Card>
    <Card shadow style="width:700px">
      <h3 slot="title">6.闭包中的this、arguments</h3>
      <div>
        <p>
          每个函数在被调用时都会获得两个特殊的变量：this 和 arguments 变量。闭包在搜索这两个变量时，只会搜索其自身的活动对象中的 this 和 arguments，
          永远不可能直接访问外部函数中的 this 和 arguments。因此闭包中的 this 具有全局性。
        </p>
        <div v-highlight>
          <pre>
            <code>
              var age = 30
              var o = {
                age: 20,
                say: function() {
                  // 函数作为某个对象的方法调用时，this指向该对象
                  // 保存外部函数this
                  var self = this

                  // 闭包
                  return function () {
                    self.age => 20

                    // this指向window
                    return this.age
                  }
                }
              }
              o.say()() => 30
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
  name: 'function-3',
  components: {
    Card
  }
}
</script>

<style scoped lang="stylus">
.function-3
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
