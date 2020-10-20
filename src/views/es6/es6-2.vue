<template>
  <div class="es6-2">
    <Card shadow style="width:500px">
      <h3 slot="title">1.let</h3>
      <p>使用 let 声明的变量只在 let 所在的的代码块内有效。for 循环有一个特别之处，就是设置循环变量的那部分是一个父作用域，而循环体内部是一个单独的子作用域。</p>
      <div v-highlight>
        <pre>
          <code>
            for (let i = 0; i &lt; 3; i++) {
              let i = 'abc';
              console.log(i); // 'abc'
            }
          </code>
        </pre>
      </div>
      <p>不存在变量提升。</p>
      <div v-highlight>
        <pre>
          <code>
            console.log(bar); // 报错ReferenceError
            let bar;
          </code>
        </pre>
      </div>
      <p>暂时性死区。使用 let 声明变量时，只要变量在还没有声明完成前使用，就会报错</p>
      <div v-highlight>
        <pre>
          <code>
            // y并未声明
            function bar(x = y, y = x) {
              return [x, y];
            }
            bar();
          </code>
        </pre>
      </div>
      <p>let 不允许在相同作用域内，重复声明同一个变量。（在不重新赋值的的情况下，var 会忽略重复声明的变量）</p>
      <div v-highlight>
        <pre>
          <code>
            {
              let a = 10;
              let a = 1; // 报错
            }

            function func(arg) {
              let arg;
            }
            func() // 报错
          </code>
        </pre>
      </div>
      <p>ES5 规定，函数只能在顶层作用域和函数作用域之中声明，不能在块级作用域声明。浏览器没有遵守这个规定，为了兼容以前的旧代码，还是支持在块级作用域之中声明函数。
        ES6 引入了块级作用域，明确允许在块级作用域之中声明函数。考虑到环境导致的行为差异太大，应该避免在块级作用域内声明函数。如果确实需要，也应该写成函数表达式，而不是函数声明语句。
      </p>
      <div v-highlight>
        <pre>
          <code>
            // 块级作用域内部，优先使用函数表达式
            {
              let a = 'secret';
              let f = function () {
                return a;
              };
            }
          </code>
        </pre>
      </div>
      <p>从 ES6 开始，全局变量将逐步与顶层对象的属性脱钩。</p>
      <div v-highlight>
        <pre>
          <code>
            var a = 1;
            window.a => 1

            let b = 1;
            window.b => undefined
          </code>
        </pre>
      </div>
    </Card>
    <Card shadow style="width:500px">
      <h3 slot="title">2.const</h3>
      <p>const 的本质：const 实际上保证的，并不是变量的值不得改动，而是变量指向的那个内存地址所保存的数据不得改动。
        对于简单类型的数据（数值、字符串、布尔值），值就保存在变量指向的那个内存地址，因此等同于常量。
        但对于复合类型的数据（主要是对象和数组），变量指向的内存地址，保存的只是一个指向实际数据的指针，
        const 只能保证这个指针是固定的（即总是指向另一个固定的地址），至于它指向的数据结构是不是可变的，就完全不能控制了。因此，将一个对象声明为常量必须非常小心。</p>
      <div v-highlight>
        <pre>
          <code>
            const foo = {};

            // 为 foo 添加一个属性，可以成功
            foo.prop = 123;
            foo.prop => 123

            // 将 foo 指向另一个对象，就会报错
            foo = {};
          </code>
        </pre>
      </div>
      <p>const 的其他表现行为与 let 基本相似。
        <ul class="menu">
          <li>只在声明所在的块级作用域内有效。</li>
          <li>不存在变量提升。</li>
          <li>暂时性死区。</li>
          <li>重复声明。</li>
        </ul>
      </p>
      <div v-highlight>
        <pre>
          <code>
            const NUM = 1;
            NUM++ => // TypeError

            {
              const MAX = 1;
            }
            MAX => // ReferenceError

            {
              MIN => // SyntaxError
              const MIN = 1;
            }
          </code>
        </pre>
      </div>
    </Card>
  </div>
</template>

<script>
import { Card } from 'view-design'
const num = 1

export default {
  name: 'es6-2',
  created() {
    console.log(num)
  },
  methods: {

  },
  components: {
    Card
  }
}
</script>

<style scoped lang="stylus">
.es6-2
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
