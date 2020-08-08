<template>
  <div class="function-hight-3">
    <Card shadow style="width:630px">
      <h3 slot="title">1.call()方法</h3>
      <div>
        <ul class="menu">
          <li>在 JavaScript 中，函数实际上就是某个对象的方法。</li>
          <li>某个对象的属性的值是一个函数，那么就称这个函数是该对象的一个方法。</li>
          <li>全局函数实际上就是 window 对象的一个方法。</li>
        </ul>
        <div v-highlight>
          <pre>
            <code>
              // 全局函数
              function fn() {}

              // 调用window对象上的一个方法
              wnidow.fn()
            </code>
          </pre>
        </div>
        <p>函数作为 window 对象的一个方法调用call()方法：window.someFunction.call(obj)。（window可省略）</p>
        <div v-highlight>
          <pre>
            <code>
              var obj = {
                name: "alex",
                age: 24
              }

              function fn() {
                return this.name + this.age
              }

              // 间接调用函数
              // 该函数内部this指向obj
              fn.call(obj) => "alex24"
            </code>
          </pre>
        </div>
        <p>函数作为某个对象的一个方法调用 call() 方法：Object.property.call(obj)</p>
        <div v-highlight>
          <pre>
            <code>
              var obj = {
                name: "alex",
                age: 24,
                say: function() {
                  return this.name + this.age
                }
              }

              var o = {
                name: "lee",
                age: 20
              }

              // 间接调用函数
              // 该函数内部this指向o
              obj.say.call(o) => "lee20"
            </code>
          </pre>
        </div>
        <p>带参数的call()方法。</p>
        <div v-highlight>
          <pre>
            <code>
              var obj = {
                name: "alex",
                age: 24,
                say: function(a, b) {
                  return this.name + this.age + "-" + (a + b)
                }
              }

              var o = {
                name: "lee",
                age: 20
              }

              // 间接调用函数
              // 该函数内部this指向o
              obj.say.call(o, 10, 11) => "lee20-21"
            </code>
          </pre>
        </div>
      </div>
    </Card>
    <Card shadow style="width:630px">
      <h3 slot="title">2.apply()方法</h3>
      <div>
        <ul class="menu">
          <li>apply()方法与 call() 方法非常相似。</li>
          <li>apply()方法与 call() 方法的区别：apply() 方法接受数组形式的参数。</li>
          <li>如果要使用数组而不是参数列表，则 apply() 方法非常方便。</li>
        </ul>
        <div v-highlight>
          <pre>
            <code>
              var obj = {
                name: "alex",
                age: 24,
                say: function(a, b) {
                  return this.name + this.age + "-" + (a + b)
                }
              }

              var o = {
                name: "lee",
                age: 20
              }

              // 间接调用函数
              // 该函数内部this指向o
              // 参数以数组的形式传入
              obj.say.apply(o,[10, 11]) => "lee20-21"
            </code>
          </pre>
        </div>
        <p>若apply()的第一个参数不是对象，在非严格模式下与严格模式下的行为不一样。</p>
        <div v-highlight>
          <pre>
            <code>
              var obj = {
                name: "alex",
                age: 24,
                say: function (a,b) {
                  // 非严格模式与严格模式下有所区别
                  console.log(this)
                  return this.name + this.age + "-" + (a + b)
                }
              }

              var o = 1

              obj.say.apply(o, [10,11]) => "NaN-21"
            </code>
          </pre>
        </div>
        <p>使用apply()方法，在数组上模拟max方法。</p>
        <div v-highlight>
          <pre>
            <code>
              // 获取最大值
              Math.max(1,2,3) => 3

              // 第一个参数可以是任意值
              var arr = [1,2,3]
              Math.max.apply(Math, arr) => 3
              Math.max.apply(null, arr) => 3
            </code>
          </pre>
        </div>
      </div>
    </Card>
    <Card shadow style="width:780px">
      <h3 slot="title">3.1bind()方法</h3>
      <div>
        <ul class="menu">
          <li>ECMAScript5 为所有函数定义了一个 bind() 方法，该方法创建一个新函数。</li>
          <li>这个新函数的 this 被指定为 bind() 的第一个参数。而其余参数将作为新函数的参数，供调用时使用。</li>
          <li>返回一个原函数的拷贝（新函数），并拥有指定的 this 值和初始参数。</li>
        </ul>
        <div v-highlight>
          <pre>
            <code>
              /**
              * 有的时候我们需要将一个对象的某个方法单独拿出来使用
              * 由于作用域发生了变化，函数中的 this 不再指向当前对象
              * 若函数在全局作用域下被调用，则函数中的 this 指向 window
              * 这时我们需要将其绑定到特定对象上
              */
              var name = 'alex';
              var age = 24;

              var person = {
                name: "lee",
                age: 20
              }

              var obj = {
                name: "alex",
                age: 24,
                say: function(a) {
                  return this.name + this.age + "-" + a
                }
              }

              // 获取对象某个方法的引用
              var f = obj.say

              // 在全局作用域调用
              f(2) => "alex24-2"

              // 创建一个新函数
              // 将新函数的作用域绑定到特定对象
              var copySay = f.bind(person, 1)
              copySay() => "lee20-1"
            </code>
          </pre>
        </div>
        <p>函数绑定常常与回调函数、事件处理器一起使用，将函数作为变量传递的同时保留代码执行环境。</p>
        <div v-highlight>
          <pre>
          <code>
            var person = {
              age: 20,
              say: function() {
                return console.log(this.age);
              }
            }

            // 将函数指针以值的形式进行传递
            // 此时this指向myDiv元素
            // 因此输出undefined
            EventUtil.addHandler(myDiv, 'click', person.say);

            // 使用函数绑定bind()方法，然后将函数指针以值的形式进行传递
            // 此时this指向person对象
            // 输出20
            EventUtil.addHandler(myDiv, 'click', person.say.bind(person));
          </code>
        </pre>
        </div>
      </div>
    </Card>
    <Card shadow style="width:700px">
      <h3 slot="title">3.2自定义绑定函数与函数柯里化</h3>
      <div>
        <p>自定义bind()方法，它接收一个函数和一个环境，并返回一个在给定环境中调用给定函数的函数，并且将所有参数原封不动的传递过去。</p>
        <div v-highlight>
          <pre>
            <code>
              function bind(fn, context) {
                // 返回一个新函数
                return function() {
                  return fn.apply(context, arguments);
                }
              }

              var person = {
                age: 24,
                say: function(name) {
                  return name + this.age;
                }
              }

              var obj = {
                age: 20
              }

              var x = bind(person.say, obj)
              x("alex") => "alex20"
            </code>
          </pre>
        </div>
        <p>函数柯里化的基本方法与函数绑定时一样的，使用一个闭包返回一个函数。主要区别在于：当函数被调用时，返回的函数还需要设置一些传入的参数。
          原生 bind() 方法已实现函数柯里化。
        </p>
        <div v-highlight>
          <pre>
            <code>
              function foo(num1, num2) {
                return num1 + num2
              }

              function curry(fn) {
                var args = Array.prototype.slice.call(arguments, 1)
                return function() {
                  var innerArgs = Array.prototype.slice.call(arguments, 0)
                  var finalArgs = args.concat(innerArgs)
                  return fn.apply(null, finalArgs)
                }
              }

              // 对foo柯里化，绑定第一个参数
              var x = curry(foo, 5)

              // 向foo传入第二个参数，并调用函数
              x(5) => 10

              // 或者将参数一次性传入
              var y = curry(foo, 5, 5)
              y() => 10
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
  name: 'function-8',
  components: {
    Card
  }
}
</script>

<style scoped lang="stylus">
.function-hight-3
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
