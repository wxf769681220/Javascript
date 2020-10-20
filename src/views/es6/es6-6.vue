<template>
  <div class="es6-6">
    <Card shadow style="width:700px">
      <h3 slot="title">1.1.箭头函数</h3>
      <p>ES6 允许使用“箭头”（=>）定义函数。</p>
      <div v-highlight>
        <pre>
          <code>
            var fn = a => a;

            // 等同于
            var fn = function (a) {
              return a;
            };
          </code>
        </pre>
      </div>
      <p>如果箭头函数不需要参数或需要多个参数，就使用一个圆括号代表参数部分。</p>
      <div v-highlight>
        <pre>
          <code>
            var sum = (num1, num2) => num1 + num2;

            // 等同于
            var sum = function(num1, num2) {
              return num1 + num2;
            };
          </code>
        </pre>
      </div>
      <p>如果箭头函数的代码块部分多于一条语句，就要使用大括号将它们括起来，并且使用return语句返回。下面是一种特殊情况，虽然可以运行，但会得到错误的结果。</p>
      <div v-highlight>
        <pre>
          <code>
            // 引擎认为大括号是代码块
            let foo = () => { a: 1 };

            foo() => undefined

            // 可以使用如下
            let foo = () => ({ id: 1 });
            foo() => { a: 1 }

            // 只有一条语句且不是返回值
            let foo = () => void console.log(foo.name); => // foo
            foo() => undefined
          </code>
        </pre>
      </div>
    </Card>
    <Card shadow style="width:700px">
      <h3 slot="title">1.2.箭头函数的局部变量</h3>
      <ul class="menu">
        <li>不可以当作构造函数，也就是说，不可以使用 new 命令，否则会抛出一个错误。</li>
        <li>函数体内的 this 对象，就是定义时所在的对象，而不是使用时所在的对象。</li>
        <li>不可以使用 arguments 对象，该对象在函数体内不存在。如果要用，可以用 rest 参数代替。</li>
        <li>不可以使用yield命令，因此箭头函数不能用作 Generator 函数。</li>
      </ul>
      <div v-highlight>
        <pre>
          <code>
            var count = 10;

            function foo() {
              this => { id: 20 }
              // 闭包
              setTimeout(function() {
                // this指向全局作用域
                this => window
                console.log(this.count); => 10
              }, 100);
            }

            foo.call({ id: 20 });

            // 箭头函数
            var count = 10;

            function foo() {
              this => { id: 20 }
              setTimeout(() => {
                this => { id: 20 }
                console.log(this.count); => 20
              }, 100);
            }

            foo.call({ id: 20 });
          </code>
        </pre>
      </div>
    </Card>
  </div>
</template>

<script>
import { Card } from 'view-design'

export default {
  name: 'es6-6',
  components: {
    Card
  }
}
</script>

<style scoped lang="stylus">
.es6-6
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
