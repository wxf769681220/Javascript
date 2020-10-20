<template>
  <div class="es6-7">
    <Card shadow style="width:500px">
      <h3 slot="title">1.1.扩展运算符</h3>
      <p>扩展运算符（spread）是三个点（...）。它好比 rest 参数的逆运算，将一个数组转为用逗号分隔的参数序列。该运算符主要用于函数调用。</p>
      <div v-highlight>
        <pre>
          <code>
            // 注意：...args 必须是最后一个参数
            // 表示剩余的参数
            function fn(a, ...args) {
              console.log(args) => [2,3,4]
            }

            fn(1, 2, 3, 4);

            //////////////////////
            function fn(a, b ...args) {
              console.log(args) => [3, 4, 5]
            }

            // 表示分布的参数
             fn(1, ...[2, 3, 4], 5);
          </code>
        </pre>
      </div>
      <p>只有函数调用时，扩展运算符才可以放在圆括号中，否则会报错。</p>
      <div v-highlight>
        <pre>
          <code>
            console.log((...[1, 2])) // SyntaxError
            console.log(...[1, 2]) => [1, 2]
          </code>
        </pre>
      </div>
      <p>扩展运算符后面还可以放置表达式。</p>
      <div v-highlight>
        <pre>
          <code>
            const x = 1;

            const arr = [
              ...(x > 0 ? ['a'] : []),
              'b',
            ];

            arr => ['a', 'b']
          </code>
        </pre>
      </div>
    </Card>
    <Card shadow style="width:500px">
      <h3 slot="title">1.2.扩展运算符替代函数apply方法</h3>
      <p>由于扩展运算符可以展开数组，所以不再需要apply方法，将数组转为函数的参数了。</p>
      <div v-highlight>
        <pre>
          <code>
            const arr = [1, 2, 3]

            // ES5的写法
            Math.max.apply(null, arr) => 3

            // ES6 的写法
            Math.max(...arr) => 3

            // 等同于
            Math.max(1, 2, 3); =>  3
          </code>
        </pre>
      </div>
      <p>通过 push 方法，将一个数组添加到另一个数组的尾部。。</p>
      <div v-highlight>
        <pre>
          <code>
            // ES5的 写法
            var arr1 = [0, 1, 2];
            var arr2 = [3, 4, 5];
            Array.prototype.push.apply(arr1, arr2);
            arr1 => [0, 1, 2, 3, 4, 5]

            // ES6 的写法
            let arr1 = [0, 1, 2];
            let arr2 = [3, 4, 5];
            arr1.push(...arr2);
            arr1 => [0, 1, 2, 3, 4, 5]
          </code>
        </pre>
      </div>
    </Card>
    <Card shadow style="width:500px">
      <h3 slot="title">2.扩展运算的应用</h3>
      <p>数组是复合的数据类型，直接复制的话，只是复制了指向底层数据结构的指针，而不是克隆一个全新的数组。</p>
      <div v-highlight>
        <pre>
          <code>
            // 复制指针
            const a1 = [1, 2];
            const a2 = a1;

            // es5使用变通方法克隆一个新数组
            const a2 = a1.concat();
            const a2 = a1.slice();

            // es6使用扩展运算符克隆一个新数组
            const a2 = [...a1];
          </code>
        </pre>
      </div>
      <p>扩展运算符提供了数组合并的新写法。</p>
      <div v-highlight>
        <pre>
          <code>
            const arr1 = ['a', 'b'];
            const arr2 = ['c'];
            const arr3 = 'd';

            // ES5的合并数组
            var arr = arr1.concat(arr2, arr3);
            arr => [ 'a', 'b', 'c', 'd']

            // ES6 的合并数组
            var arr = [...arr1, ...arr2, arr3]
            arr => [ 'a', 'b', 'c', 'd']
          </code>
        </pre>
      </div>
      <p>扩展运算符可以与解构赋值结合起来，用于生成数组。</p>
      <div v-highlight>
        <pre>
          <code>
            const list = [1, 2, 3, 4, 5]

            // ES5
            const a = list[0],
            const rest = list.slice(1)

            // ES6
            var [a, ...rest] = list
          </code>
        </pre>
      </div>
    </Card>
    <Card shadow style="width:500px">
      <h3 slot="title">3.扩展运算用于字符串</h3>
      <p>扩展运算符还可以将字符串转为真正的数组。</p>
      <div v-highlight>
        <pre>
          <code>
            var arr = [...'hello']
            arr => [ "h", "e", "l", "l", "o" ]
            arr.length => 5
          </code>
        </pre>
      </div>
    </Card>
    <Card shadow style="width:600px">
      <h3 slot="title">4.扩展运算符与Iterator</h3>
      <p>任何定义了遍历器（Iterator）接口的对象，都可以用扩展运算符转为真正的数组。</p>
      <div v-highlight>
        <pre>
          <code>
            // 虽然是一个类数组对象
            // 但并未实现Iterator接口的对象
            let arrayLike = {
              '0': 'a',
              '1': 'b',
              '2': 'c',
              length: 3
            };

            let arr = [...arrayLike]; // TypeError

            // nodeList是一个类数组对象
            // nodeList实现了Iterator接口的对象
            let nodeList = document.querySelectorAll('div');
            let arr = [...nodeList];

            // Map结构
            let map = new Map([
              [1, 'one'],
              [2, 'two'],
              [3, 'three'],
            ]);

            [...map.keys()];  => [1, 2, 3]

            // Set结构
            let arr = new Set(['a', 'b', 'c']);
            [...arr]; => [1, 2, 3]

            // Generator 函数运行后
            // 返回一个遍历器对象，因此也可以使用扩展运算符。
            const go = function*(){
              yield 1;
              yield 2;
              yield 3;
            };

            [...go()]; => [1, 2, 3]
          </code>
        </pre>
      </div>
    </Card>
    <Card shadow style="width:700px">
      <h3 slot="title">5.Array.from()</h3>
      <p>Array.from方法用于将两类对象转为真正的数组：类似数组的对象（array-like object）和可遍历（iterable）的对象（包括 ES6 新增的数据结构 Set 和 Map）。</p>
      <div v-highlight>
        <pre>
          <code>
            let arrayLike = {
                '0': 'a',
                '1': 'b',
                '2': 'c',
                length: 3
            };

            // ES5的写法
            var arr1 = [].slice.call(arrayLike); => ['a', 'b', 'c']

            // ES6的写法
            let arr2 = Array.from(arrayLike); => ['a', 'b', 'c']

            // arguments对象
            function foo() {
              var args = Array.from(arguments);
              // ...
            }
          </code>
        </pre>
      </div>
    </Card>
    <Card shadow style="width:700px">
      <h3 slot="title">6.Array.of()</h3>
      <p>Array.of方法用于将一组值，转换为数组。该方法主要用来弥补数组构造函数Array()的不足。</p>
      <div v-highlight>
        <pre>
          <code>
            // 可以用来替换
            Array.of(1) => [1]
            Array.of(1).length => 1
            Array.of(1, 2, 3) => [1, 2, 3]

            // 注意与Array构造函数的区别
            new Array(1) => [,]
          </code>
        </pre>
      </div>
    </Card>
  </div>
</template>

<script>
import { Card } from 'view-design'

export default {
  name: 'es6-7',
  components: {
    Card
  }
}
</script>

<style scoped lang="stylus">
.es6-7
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
