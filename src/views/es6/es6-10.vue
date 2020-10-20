<template>
  <div class="es6-10">
    <Card shadow style="width:550px">
      <h3 slot="title">1.Set 数据类型</h3>
      <ul class="menu">
        <li>ES6 提供了新的数据结构 Set。它类似于数组，但是成员的值都是唯一的，没有重复的值。</li>
        <li>Set 本身是一个构造函数，用来生成 Set 数据结构。</li>
        <li>Set 函数可以接受一个数组（或者具有 iterable 接口的其他数据结构）作为参数，用来初始化。</li>
        <li>Set 函数不会发生类型转换。Set 内部判断两个值是否不同，使用的算法叫做“Same-value-zero equality”，它类似于精确相等运算符（===），
          主要的区别是向 Set 加入值时认为NaN等于自身，而精确相等运算符认为 NaN 不等于自身。</li>
      </ul>
      <div v-highlight>
        <pre>
          <code>
            const s1 = new Set([1, 2, 3, 3, 4, 4, 5]);

            typeof s1 => 'object';

            // 去重，保证成员的值都是唯一
            s1.add(6) => Set(6) { 1, 2, 3, 4, 5, 6 }
            s1.size   => 6
          </code>
        </pre>
      </div>
      <p>使用扩展运算符或Array.from()方法，都可以将其转换为一个真正的数组。</p>
      <div v-highlight>
        <pre>
          <code>
            const s = new Set([1, 2, 3, 3, 4, 4, 5]);

            const arr1 = [...s]
            arr1 => [1, 2, 3, 4, 5]
            arr1 instanceof Array => true

            const arr2 = Array.from(s);
            arr2 => [1, 2, 3, 4, 5]
          </code>
        </pre>
      </div>
      <p>还可以去除字符串里面的重复字符。</p>
      <div v-highlight>
        <pre>
          <code>
            const arr = [...new Set('ababbc')]
            arr.join('') => 'abc'
          </code>
        </pre>
      </div>
    </Card>
    <Card shadow style="width:500px">
      <h3 slot="title">2.Set 实例的属性和方法</h3>
      <ul class="menu">
        <li>Set.prototype.constructor：构造函数，默认就是 Set 函数。</li>
        <li>Set.prototype.size：返回 Set 实例的成员总数。</li>
        <li>Set.prototype.add(value)：添加某个值，返回 Set 结构本身。</li>
        <li>Set.prototype.delete(value)：删除某个值，返回一个布尔值，表示删除是否成功。</li>
        <li>Set.prototype.has(value)：返回一个布尔值，表示该值是否为 Set 的成员。</li>
        <li>Set.prototype.clear()：清除所有成员，没有返回值。</li>
      </ul>
      <div v-highlight>
        <pre>
          <code>
            let s = new Set();

            // 2被加入了两次
            s.add(1).add(2).add(2);
            s.size => 2

            s.has(1) => true
            s.has(2) => true
            s.has(3) => false

            s.delete(2);
            s.has(2) => false
          </code>
        </pre>
      </div>
    </Card>
    <Card shadow style="width:500px">
      <h3 slot="title">3.Set 与 Object 实例对象对比</h3>
      <p>看看在判断是否包括一个键上面，Object 结构和 Set 结构的写法不同。</p>
      <div v-highlight>
        <pre>
          <code>
            // 对象的写法
            const o = {
              'a': 1,
              'b': 2
            };

            if (o['a']) {
              // do something
            }

            // Set的写法
            const s = new Set();

            s.add('a');
            s.add('b');

            if (s.has('a')) {
              // do something
            }
          </code>
        </pre>
      </div>
    </Card>
    <Card shadow style="width:600px">
      <h3 slot="title">3.遍历操作</h3>
      <ul class="menu">
        <li>Set.prototype.keys()：返回键名的遍历器</li>
        <li>Set.prototype.values()：返回键值的遍历器</li>
        <li>Set.prototype.entries()：返回键值对的遍历器</li>
        <li>Set.prototype.forEach()：使用回调函数遍历每个成员</li>
      </ul>
      <div v-highlight>
        <pre>
          <code>
            let set = new Set(['red', 'green', 'blue']);

            // 由于 Set 结构没有键名，只有键值
            // 或者说键名和键值是同一个值
            // 所以keys方法和values方法的行为完全一致
            for (let item of set.keys()) {
              console.log(item);
            }
            // red
            // green
            // blue

            for (let item of set.values()) {
              console.log(item);
            }
            // red
            // green
            // blue

            // entries方法返回的遍历器
            // 同时包括键名和键值，所以每次输出一个数组
            // 它的两个成员完全相等
            for (let item of set.entries()) {
              console.log(item);
            }
            // ["red", "red"]
            // ["green", "green"]
            // ["blue", "blue"]
          </code>
        </pre>
      </div>
    </Card>
    <Card shadow style="width:600px">
      <h3 slot="title">5.Map 数据类型</h3>
      <ul class="menu">
        <li>javaScript 的对象（Object），本质上是键值对的集合（Hash 结构），但是传统上只能用字符串当作键。</li>
        <li>Map 数据结构。它类似于对象，也是键值对的集合。但是“键”的范围不限于字符串，各种类型的值（包括对象）都可以当作键。</li>
      </ul>
      <div v-highlight>
        <pre>
          <code>
            const m = new Map();
            const o = {
              text: 'Hello World'
            };

            // 将对象作为键名，并设置值
            m.set(o, 'content')

            // 访问键，并取值
            m.get(o) => "content"

            m.has(o) => true
            m.delete(o) => true
            m.has(o) => false
          </code>
        </pre>
      </div>
    </Card>
  </div>
</template>

<script>
import { Card } from 'view-design'

export default {
  name: 'es6-10',
  components: {
    Card
  }
}
</script>

<style scoped lang="stylus">
.es6-10
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
