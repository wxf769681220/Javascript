<template>
  <div class="es6-8">
    <Card shadow style="width:600px">
      <h3 slot="title">1.对象属性的简洁表示法</h3>
      <p>ES6 允许在大括号里面，直接写入变量和函数，作为对象的属性和方法。这样的书写更加简洁。</p>
      <div v-highlight>
        <pre>
          <code>
            module.exports = { getItem, setItem, clear };

            // 等同于
            module.exports = {
              getItem: getItem,
              setItem: setItem,
              clear: clear
            };
          </code>
        </pre>
      </div>
      <p>除了属性简写，方法也可以简写。</p>
      <div v-highlight>
        <pre>
          <code>
            const o = {
              say() {
                return "Hello!";
              }
            };

            // 等同于
            const o = {
              say: function() {
                return "Hello!";
              }
            };
          </code>
        </pre>
      </div>
      <p>存取器属性，事实上也是采用这种写法。。</p>
      <div v-highlight>
        <pre>
          <code>
            const cart = {
              get wheels () {},
              set wheels (value) {}
            }
          </code>
        </pre>
      </div>
    </Card>
    <Card shadow style="width:600px">
      <h3 slot="title">2.属性名表达式</h3>
      <p>JavaScript 定义对象的属性，有两种方法。ES6 允许字面量定义对象时，用方法二（表达式）作为对象的属性名，即把表达式放在方括号内。</p>
      <div v-highlight>
        <pre>
          <code>
            // 方法一
            obj.a = 1;

            // 方法二
            obj['b'] = 2;

            // es6
            obj['a' + 'b'] = 3;
          </code>
        </pre>
      </div>
      <p>表达式还可以用于定义方法名。</p>
      <div v-highlight>
        <pre>
          <code>
            let obj = {
              ['h' + 'ello']() {
                return 'hi';
              }
            };

            obj.hello() => hi
          </code>
        </pre>
      </div>
    </Card>
    <Card shadow style="width:700px">
      <h3 slot="title">3.对象的扩展运算符</h3>
      <p>JavaScript 定义对象的属性，有两种方法。ES6 允许字面量定义对象时，用方法二（表达式）作为对象的属性名，即把表达式放在方括号内。</p>
      <div v-highlight>
        <pre>
          <code>
            let { x, y, ...z } = { x: 1, y: 2, a: 3, b: 4 };
            x => 1
            y => 2
            z => { a: 3, b: 4 }

            // 特殊值
            let { ...z } = null; // 运行时错误
            let { ...z } = undefined; // 运行时错误

            // 必须是最后一个参数
            let { ...x, y, z } = someObject; // 句法错误
            let { x, ...y, ...z } = someObject; // 句法错误
          </code>
        </pre>
      </div>
      <p>由于数组是特殊的对象，所以对象的扩展运算符也可以用于数组。</p>
      <div v-highlight>
        <pre>
          <code>
            let foo = { ...['a', 'b', 'c'] };
            foo => { 0: "a", 1: "b", 2: "c" }
          </code>
        </pre>
      </div>
      <p>如果扩展运算符后面是字符串，它会自动转成一个类似数组的对象，因此返回的不是空对象。</p>
      <div v-highlight>
        <pre>
          <code>
            {...'hello'} => { 0: "h", 1: "e", 2: "l", 3: "l", 4: "o" }
          </code>
        </pre>
      </div>
      <p>对象的扩展运算符等同于使用 Object.assign() 方法。</p>
      <div v-highlight>
        <pre>
          <code>
            let aClone = { ...a };

            // 等同于
            let aClone = Object.assign({}, a);
          </code>
        </pre>
      </div>
    </Card>
    <Card shadow style="width:700px">
      <h3 slot="title">4.链判断运算符</h3>
      <p>编程实务中，如果读取对象内部的某个属性，往往需要判断一下该对象是否存在。比如，要读取 message.body.user.firstName，安全的写法是写成下面这样。</p>
      <div v-highlight>
        <pre>
          <code>
            // 错误的写法
            const  firstName = message.body.user.firstName;

            // 正确的写法
            const firstName = (message
              && message.body
              && message.body.user
              && message.body.user.firstName) || 'default';

            // es6链判断运算符
            const firstName = message?.body?.user?.firstName || 'default';
          </code>
        </pre>
      </div>
      <p>下面是判断对象方法是否存在，如果存在就立即执行的例子。</p>
      <div v-highlight>
        <pre>
          <code>
            iterator.return?.()
          </code>
        </pre>
      </div>
    </Card>
  </div>
</template>

<script>
import { Card } from 'view-design'

export default {
  name: 'es6-8',
  components: {
    Card
  }
}
</script>

<style scoped lang="stylus">
.es6-8
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
