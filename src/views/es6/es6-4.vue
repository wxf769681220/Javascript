<template>
  <div class="es6-4">
    <Card shadow style="width:500px">
      <h3 slot="title">1.字符的 Unicode 表示法</h3>
      <p>ES6 加强了对 Unicode 的支持，允许采用\uxxxx形式表示一个字符，其中xxxx表示字符的 Unicode 码点。</p>
      <div v-highlight>
        <pre>
          <code>
            "\u0061" => "a"
          </code>
        </pre>
      </div>
    </Card>
    <Card shadow style="width:500px">
      <h3 slot="title">2.遍历器接口</h3>
      <p>ES6 为字符串添加了遍历器接口（Iterator），使得字符串可以被 for...o 循环遍历。</p>
      <div v-highlight>
        <pre>
          <code>
            for (let i of text) {
              console.log(i);
            }
          </code>
        </pre>
      </div>
    </Card>
    <Card shadow style="width:600px">
      <h3 slot="title">3.模板字符串</h3>
      <p>模板字符串（template string）是增强版的字符串，用反引号（`）标识。它可以当作普通字符串使用，也可以用来定义多行字符串，或者在字符串中嵌入变量。
        大括号内部可以放入任意的 JavaScript 表达式，可以进行运算，以及引用对象属性，甚至还能调用函数，若大括号内部不是一个字符串值，将按照一般的规则转为字符串。
      </p>
      <div v-highlight>
        <pre>
          <code>
            // 普通字符串
            `In JavaScript '\n' is a line-feed.`

            // 多行字符串
            `In JavaScript this is
            not legal.`

            // 嵌入变量
            let msg = "world"
            `hello ${msg}!` => "hello world!"

            // 嵌入函数
            function fn() {
              return "Hello World";
            }

            `foo ${fn()} bar`
          </code>
        </pre>
      </div>
    </Card>
    <Card shadow style="width:600px">
      <h3 slot="title">4.标签模板</h3>
      <p>模板字符串的功能，不仅仅是上面这些。它可以紧跟在一个函数名后面，该函数将被调用来处理这个模板字符串。这被称为“标签模板”功能（tagged template）</p>
      <div v-highlight>
        <pre>
          <code>
            alert`hello`
            // 等同于
            alert(['hello'])

            ////////////////////////////////////////
            let a = 5;
            let b = 10;

            tag`Hello ${ a + b } world ${ a * b }`;

            // 等同于
            tag(['Hello ', ' world ', ''], 15, 50);
          </code>
        </pre>
      </div>
    </Card>
    <Card shadow style="width:600px">
      <h3 slot="title">5.字符串新增方法</h3>
      <ul class="menu">
        <li>includes()：返回布尔值，表示是否找到了参数字符串。</li>
        <li>startsWith()：返回布尔值，表示参数字符串是否在原字符串的头部。</li>
        <li>endsWith()：返回布尔值，表示参数字符串是否在原字符串的尾部。</li>
      </ul>
      <div v-highlight>
        <pre>
          <code>
            let s = 'Hello world!';

            s.startsWith('Hello') => true
            s.endsWith('!') => true
            s.includes('o') => true
          </code>
        </pre>
      </div>
      <p>repeat() 方法返回一个新字符串，表示将原字符串重复n次。</p>
      <div v-highlight>
        <pre>
          <code>
            'x'.repeat(3) => "xxx"
            'x'.repeat(2.9) => "xx"
            'x'.repeat(Infinity) => // RangeError
            'x'.repeat(-1) => // RangeError
          </code>
        </pre>
      </div>
      <p>ES2017 引入了字符串补全长度的功能。如果某个字符串不够指定长度，会在头部或尾部补全。padStart()用于头部补全，padEnd()用于尾部补全。
        如果原字符串的长度，等于或大于最大长度，则字符串补全不生效，返回原字符串。如果用来补全的字符串与原字符串，两者的长度之和超过了最大长度，则会截去超出位数的补全字符串。</p>
      <div v-highlight>
        <pre>
          <code>
          'x'.padStart(5, 'ab') => 'ababx'
          'x'.padStart(4, 'ab') => 'abax'

          'x'.padEnd(5, 'ab') => 'xabab'
          'x'.padEnd(4, 'ab') => 'xaba'

          // 返回原字符串
          'xxxx'.padStart(4, 'ab') => 'xxxx'

          // 截取超出位数的补全字符串
          'x'.padStart(4, 'abcde') => 'abcx'
          </code>
        </pre>
      </div>
      <p>ES2019 对字符串实例新增了trimStart()和trimEnd()这两个方法。它们的行为与 trim() 一致，trimStart() 消除字符串头部的空格，trimEnd() 消除尾部的空格。它们返回的都是新字符串，不会修改原始字符串。</p>
      <div v-highlight>
        <pre>
          <code>
            const s = '  abc  ';

            s.trim() => "abc"
            s.trimStart() => "abc  "
            s.trimEnd() => "  abc"
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
  name: 'es6-4',
  created() {
    console.log(num)
  },
  methods: {},
  components: {
    Card
  }
}
</script>

<style scoped lang="stylus">
.es6-4
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
