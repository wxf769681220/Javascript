<template>
  <div class="es6-14">
    <Card shadow style="width:600px">
      <h3 slot="title">1.Iterator（遍历器）</h3>
      <ul class="menu">
        <li>JavaScript 原有的表示“集合”的数据结构，主要是数组（Array）和对象（Object），ES6 又添加了 Map 和 Set。这样就有了四种数据集合。</li>
        <li>
          遍历器（Iterator）是一种接口，为各种不同的数据结构提供统一的访问机制。任何数据结构只要部署 Iterator 接口，
          就可以完成遍历操作（即依次处理该数据结构的所有成员）。
        </li>
        <li>
          遍历器（Iterator） 的作用：
          <ul class="menu">
            <li>为各种数据结构，提供一个统一的、简便的访问接口；</li>
            <li>使数据结构的成员能够按某种次序排列；</li>
            <li>为新的遍历命令 for...of 循环提供应用场景。</li>
          </ul>
        </li>
        <li>
          Iterator 的遍历过程：
          <ul class="menu">
            <li>创建一个指针对象，指向当前数据结构的起始位置。也就是说，遍历器对象本质上，就是一个指针对象。</li>
            <li>第一次调用指针对象的next方法，可以将指针指向数据结构的第一个成员。</li>
            <li>第二次调用指针对象的next方法，指针就指向数据结构的第二个成员。</li>
            <li>不断调用指针对象的next方法，直到它指向数据结构的结束位置。</li>
          </ul>
        </li>
      </ul>
      <p></p>
      <div v-highlight>
        <pre>
          <code>
            // Iterator的遍历过程
            var it = makeIterator(['a', 'b']);

            it.next() => { value: "a", done: false }
            it.next() => { value: "b", done: false }
            it.next() => { value: undefined, done: true }

            function makeIterator(array) {
              var nextIndex = 0;
              return {
                next: function() {
                  return nextIndex &lt; array.length ?
                    {value: array[nextIndex++], done: false} :
                    {value: undefined, done: true};
                }
              };
            }
          </code>
        </pre>
      </div>
    </Card>
    <Card shadow style="width:600px">
      <h3 slot="title">2.默认Iterator接口</h3>
      <ul class="menu">
        <li>默认的 Iterator 接口部署在数据结构的 Symbol.iterator 属性，或者说，一个数据结构只要具有 Symbol.iterator 属性，就可以认为是“可遍历的”。</li>
        <li>Symbol.iterator 属性本身是一个函数，就是当前数据结构默认的遍历器生成函数。执行这个函数，就会返回一个遍历器。</li>
        <li>至于属性名 Symbol.iterator，它是一个表达式，返回 Symbol 对象的 iterator 属性，这是一个预定义好的、类型为 Symbol 的特殊值。</li>
      </ul>
      <div v-highlight>
        <pre>
          <code>
            const obj = {
              [Symbol.iterator] : function () {
                return {
                  next: function () {
                    return {
                      value: 1,
                      done: true
                    };
                  }
                };
              }
            };
          </code>
        </pre>
      </div>
    </Card>
    <Card shadow style="width:600px">
      <h3 slot="title">3.原生具备 Iterator 接口的数据结构</h3>
      <p>
        ES6 的有些数据结构原生具备 Iterator 接口（比如数组），即不用任何处理，就可以被 for...of 循环遍历。
        原因在于，这些数据结构原生部署了 Symbol.iterator 属性，另外一些数据结构没有（比如对象）。
        凡是部署了 Symbol.iterator 属性的数据结构，就称为部署了遍历器接口。调用这个接口，就会返回一个遍历器对象。
      </p>
      <p style="margin: 10px 0">原生具备 Iterator 接口的数据结构有以下：</p>
      <ul class="menu">
        <li>Array</li>
        <li>arguments 对象</li>
        <li>NodeList 对象 和 HTMLCollection 对象</li>
        <li>String</li>
        <li>Map 和 Set</li>
        <li>TypedArray</li>
      </ul>
      <div v-highlight>
        <pre>
          <code>
            let arr = ['a', 'b', 'c'];
            let iter = arr[Symbol.iterator]();

            iter.next() => { value: 'a', done: false }
            iter.next() => { value: 'b', done: false }
            iter.next() => { value: 'c', done: false }
            iter.next() => { value: undefined, done: true }
          </code>
        </pre>
      </div>
    </Card>
    <Card shadow style="width:600px">
      <h3 slot="title">3.调用Iterator接口的场合</h3>
      <ul class="menu">
        <li>解构赋值</li>
        <li>扩展运算符</li>
        <li>yield*</li>
        <li>由于数组的遍历会调用遍历器接口，所以任何接受数组作为参数的场合，其实都调用了遍历器接口。比如：
          <ul class="menu">
            <li>for...of</li>
            <li>Array.from()</li>
            <li>Set()</li>
            <li>Map()</li>
          </ul>
        </li>
      </ul>
      <div v-highlight>
        <pre>
          <code>
            let set = new Set().add('a').add('b').add('c');

            let [x,y] = set;
            // x='a'; y='b'

            let [first, ...rest] = set;
          </code>
        </pre>
      </div>
    </Card>
  </div>
</template>

<script>
import { Card } from 'view-design'

export default {
  name: 'es6-14',
  components: {
    Card
  }
}
</script>

<style scoped lang="stylus">
.es6-14
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
