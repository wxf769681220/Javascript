<template>
  <div class="es6-3">
    <Card shadow style="width:600px">
      <h3 slot="title">1.数组的解构赋值</h3>
      <p>本质上，这种写法属于“模式匹配”，只要等号两边的模式相同，左边的变量就会被赋予对应的值。</p>
      <div v-highlight>
        <pre>
          <code>
            let [a, b, c] = [1, 2, 3];

            // 等价于
            let a = 1;
            let b = 2;
            let c = 3;

            ///////////////////////////////////
            // 数组嵌套
            let [foo, [[bar], baz]] = [1, [[2], 3]];
            foo => 1
            bar => 2
            baz => 3

            let [ , , third] = ["foo", "bar", "baz"];
            third => "baz"

            let [x, , y] = [1, 2, 3];
            x => 1
            y => 3

            let [head, ...tail] = [1, 2, 3, 4];
            head => 1
            tail => [2, 3, 4]

            let [x, y, ...z] = ['a'];
            x => "a"
            y => undefined
            z => []
          </code>
        </pre>
      </div>
      <p>如果等号的右边不是数组（或者严格地说，不是可遍历的结构（Iterator），那么将会报错。</p>
      <div v-highlight>
        <pre>
          <code>
            // 报错
            // 转为对象以后不具备 Iterator 接口
            let [foo] = 1;
            let [foo] = false;
            let [foo] = NaN;
            let [foo] = undefined;
            let [foo] = null;

            // 本身就不具备 Iterator 接口
            let [foo] = {};
          </code>
        </pre>
      </div>
    </Card>
    <Card shadow style="width:800px">
      <h3 slot="title">2.对象的解构赋值</h3>
      <p>对象的属性没有次序，变量必须与属性同名，才能取到正确的值。</p>
      <div v-highlight>
        <pre>
          <code>
            // 对象的解构赋值的内部机制
            // 是先找到同名属性，然后再赋给对应的变量。
            // 真正被赋值的是后者，而不是前者（前者是一个匹配模式）
            let { x: x, y: y, z: z, color: c } = { x: 1, y: 2, z: 3, color: "#fff" }
            x => 1
            y => 2
            z => 3
            c => "#fff"
            color => // ReferenceError

            // 实际上是对上面代码的一种简写形式
            let { x, y, z, color } = { x: 1, y: 2, z: 3, color: "#fff" }
            x => 1
            y => 2
            z => 3
            color => "#fff"
          </code>
        </pre>
      </div>
      <p>对象的解构赋值，可以很方便地将现有对象的方法，赋值到某个变量。</p>
      <div v-highlight>
        <pre>
          <code>
            let { max, min } = Math
            max(1, 2, 3) => 3
            min(1, 2, 3) => 1
          </code>
        </pre>
      </div>
      <p>与数组一样，解构也可以用于嵌套结构的对象。</p>
      <div v-highlight>
        <pre>
          <code>
            let obj = {
              p: [
                'Hello',
                { y: 'World' }
              ]
            };

            // 嵌套
            let { p: [x, { y }] } = obj;
            x => "Hello"
            y => "World"

            ////////////////////////////////////
            let { p, p: [x, { y }] } = obj;
            p => ['Hello', { y: 'World' }]
            x => "Hello"
            y => "World"
          </code>
        </pre>
      </div>
      <p>由于数组本质是特殊的对象，因此可以对数组进行对象属性的解构。</p>
      <div v-highlight>
        <pre>
          <code>
            let arr = [1, 2, 3];
            let { 0 : first, [arr.length - 1] : last } = arr;
            first => 1
            last => 3
          </code>
        </pre>
      </div>
    </Card>
    <Card shadow style="width:600px">
      <h3 slot="title">3.字符串的解构赋值</h3>
      <p>字符串也可以解构赋值。这是因为此时，字符串被转换成了一个类似数组的对象。</p>
      <div v-highlight>
        <pre>
          <code>
            const [a, b, c, d, e] = 'hello';
            a => "h"
            b => "e"
            c => "l"
            d => "l"
            e => "o"
          </code>
        </pre>
      </div>
      <p>类似数组的对象都有一个length属性，因此还可以对这个属性解构赋值。</p>
      <div v-highlight>
        <pre>
          <code>
            let { length : len } = 'hello';
            len => 5
          </code>
        </pre>
      </div>
    </Card>
    <Card shadow style="width:600px">
      <h3 slot="title">4.数组与布尔值的解构赋值</h3>
      <p>解构赋值时，如果等号右边是数值和布尔值，则会先转为对象。</p>
      <div v-highlight>
        <pre>
          <code>
            let { toString: s } = 123;
            s === Number.prototype.toString => true

            let {toString: s} = true;
            s === Boolean.prototype.toString => true
          </code>
        </pre>
      </div>
      <p>由于 undefined 和 null 无法转为对象，所以对它们进行解构赋值，都会报错。</p>
      <div v-highlight>
        <pre>
          <code>
            let { prop: x } = undefined; // TypeError
            let { prop: y } = null; // TypeError
          </code>
        </pre>
      </div>
    </Card>
    <Card shadow style="width:600px">
      <h3 slot="title">5.函数参数的解构赋值</h3>
      <p>函数的参数也可以使用解构赋值。</p>
      <div v-highlight>
        <pre>
          <code>
            function add([x, y]){
              return x + y;
            }

            add([1, 2]); => 3
          </code>
        </pre>
      </div>
    </Card>
    <Card shadow style="width:600px">
      <h3 slot="title">6. Set结构的解构赋值。</h3>
      <p>本质上，这种写法属于“模式匹配”，只要等号两边的模式相同，左边的变量就会被赋予对应的值。</p>
      <div v-highlight>
        <pre>
          <code>
            let [x, y, z] = new Set(['a', 'b', 'c']);
            x => "a"
            y => "b"
            z => "c"
          </code>
        </pre>
      </div>
    </Card>
    <Card shadow style="width:600px">
      <h3 slot="title">7. 遍历Map结构。</h3>
      <p>任何部署了 Iterator 接口的对象，都可以用 for...of 循环遍历。Map 结构原生支持 Iterator 接口，配合变量的解构赋值，获取键名和键值就非常方便。</p>
      <div v-highlight>
        <pre>
          <code>
            const map = new Map();
            map.set('first', 'hello');
            map.set('second', 'world');

            for (let [key, value] of map) {
              console.log(key + " is " + value);
            }
          </code>
        </pre>
      </div>
      <p>如果只想获取键名，或者只想获取键值，可以写成下面这样。</p>
      <div v-highlight>
        <pre>
          <code>
            // 获取键名
            for (let [key] of map) {
              // ...
            }

            // 获取键值
            for (let [,value] of map) {
              // ...
            }
          </code>
        </pre>
      </div>
    </Card>
    <Card shadow style="width:600px">
      <h3 slot="title">8.解构赋值的默认值</h3>
      <p>解构赋值允许指定默认值。ES6 内部使用严格相等运算符（===），判断一个位置是否有值。所以，只有当一个数组成员严格等于 undefined，默认值才会生效。</p>
      <div v-highlight>
        <pre>
          <code>
            let [x = 1] = [];
            x => 1

            let [x = 1] = [undefined];
            x => 1

            let [x = 1] = [null];
            x => null
          </code>
        </pre>
      </div>
      <p>如果默认值是一个表达式，那么这个表达式是惰性求值的，即只有在用到的时候，才会求值。</p>
      <div v-highlight>
        <pre>
          <code>
            function f() {
              console.log('hi');
            }

            // x可以取到值
            // 因此f函数不会执行
            let [x = f()] = [1];
            x = > 1
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
  name: 'es6-3',
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
.es6-3
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
