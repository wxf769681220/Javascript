<template>
  <div class="es6-9">
    <Card shadow style="width:600px">
      <h3 slot="title">1.Symbol类型</h3>
      <ul class="menu">
        <li>ES6 引入了一种新的原始数据类型 Symbol，表示独一无二的值。它是 JavaScript 语言的第七种数据类型。</li>
        <li>Symbol 值通过 Symbol 函数生成。它是一种类似于字符串的数据类型。</li>
        <li>Symbol 函数可以接受一个字符串作为参数，表示对 Symbol 实例的描述（仅用于描述，对 symbol 值不产生任何影响）。若参数是一个对象，则调用toString()方法转换，再生成 symbol 类型值。</li>
      </ul>
      <div v-highlight>
        <pre>
          <code>
            let s1 = Symbol('a');
            let s2 = Symbol('a');

            s1 => Symbol('a')
            s2 => Symbol('a')

            // 表示独一无二的值
            // 与传入的参数没有任何关系
            s1 === s2 => false

            // 返回symbol类型
            typeof s1 => symbol
          </code>
        </pre>
      </div>
      <p>Symbol 值不能与其他类型的值进行运算，会报错。</p>
      <div v-highlight>
        <pre>
          <code>
            let name = Symbol('My name');

            "my name is " + name // TypeError
            `my name is ${name}` // TypeError
          </code>
        </pre>
      </div>
      <p>Symbol 值可以显式转为字符串。</p>
      <div v-highlight>
        <pre>
          <code>
            let name = Symbol('My name');

            String(name)    // 'Symbol(My name)'
            name.toString() // 'Symbol(My name)'
          </code>
        </pre>
      </div>
      <p>Symbol 值也可以转为布尔值，但是不能转为数值。</p>
      <div v-highlight>
        <pre>
          <code>
            let sym = Symbol();

            Boolean(sym) // true
            Number(sym)  // TypeError

            if (sym) {
              // ...
            }
          </code>
        </pre>
      </div>
    </Card>
    <Card shadow style="width:500px">
      <h3 slot="title">2.Symbol.prototype.description</h3>
      <p>读取 symbol 类型的描述字符串。</p>
      <div v-highlight>
        <pre>
          <code>
            const sym = Symbol('s1');

            sym.description => "s1"
          </code>
        </pre>
      </div>
    </Card>
    <Card shadow style="width:600px">
      <h3 slot="title">3.作为属性名</h3>
      <p>由于每一个 Symbol 值都是不相等的，这意味着 Symbol 值可以作为标识符，用于对象的属性名，就能保证不会出现同名的属性。
        这对于一个对象由多个模块构成的情况非常有用，能防止某一个键被不小心改写或覆盖。</p>
      <div v-highlight>
        <pre>
          <code>
            let sym = Symbol();

            // 第一种写法
            let a = {};
            a[sym] = 'Hello!';

            // 第二种写法
            let a = {
              [sym]: 'Hello!'
            };

            // 第三种写法
            let a = {};
            Object.defineProperty(a, sym, { value: 'Hello!' });

            // 以上写法都得到同样结果
            a[sym] => "Hello!"
          </code>
        </pre>
      </div>
      <p>用于属性名时不能使用点运算符。</p>
      <div v-highlight>
        <pre>
          <code>
            const sym = Symbol();
            const o = {};

            // 此时sym被当做一个字符串处理
            // 而不是一个symbol值
            o.sym = 'Hello!';

            o[sym]   => undefined
            o['sym'] => "Hello!"
          </code>
        </pre>
      </div>
    </Card>
  </div>
</template>

<script>
import { Card } from 'view-design'

export default {
  name: 'es6-9',
  components: {
    Card
  }
}
</script>

<style scoped lang="stylus">
.es6-9
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
