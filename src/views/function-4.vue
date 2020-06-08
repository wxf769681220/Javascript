<template>
  <div class="function-4">
    <div class="layout-content">
      <Card dis-hover shadow style="width: 600px">
        <h3 slot="title">1.原型对象</h3>
        <div>
          <ol class="menu">
            <li>所有函数都有一个prototype（原型）属性，其属性值是一个对象，即原型对象。</li>
            <li>在默认情况下，所有原型对象都会自动获取一个constructor（构造函数）属性，属性值是一个指向prototype属性所在函数的指针。</li>
            <li>所有对象都包含一个内部的[[prototype]]属性，属性值指向其构造函数的原型对象。</li>
            <li>由于[[prototype]]属性是一个内部属性，对脚本不可见，因此不能直接访问。主流浏览器都支持一个__proto__属性，该属性可以用于替代访问[[prototype]]属性。</li>
          </ol>
          <div v-highlight>
            <pre>
              <code>
                //构造函数
                function Person(name, age) {
                  this.name = name
                  this.age = age
                }

                //定义原型属性
                Person.prototype.say = function() {
                  return this.name + this.age
                }

                //实例化对象
                var p = new Person("lee", 18)

                p.say() => 'lee18'

                Person.prototype.constructor => Person
                Function.prototype.constructor => Function
                Object.prototype.constructor => Object

                 p.__proto__ === Person.prototype => true
                 Person.prototype.__proto__ === Object.prototype => true
                 Person.__proto__ === Function.prototype => true
                 Function.prototype.__proto__ === Object.prototype => true

                 //原型上最初只包含的constructor属性也是共享的
                 p.constructor => Person
                 Person.constructor => Function
              </code>
            </pre>
          </div>
        </div>
      </Card>
      <Card dis-hover shadow style="width: 600px">
        <h3 slot="title">2.使用对象字面量重写整个原型对象</h3>
        <div>
        <p>使用对象字面量时，Person.prototype原型对象的constructor属性不再指向Person，需要重设其值。此时constructor属性由不可枚举属性变成了可枚举属性。</p>
          <div v-highlight>
            <pre>
              <code>
                Person.prototype =  {
                  //重设值
                  constructor: "Person",
                  say: function() {
                    return this.name + this.age
                  }
                }
              </code>
            </pre>
          </div>
          <p>使用Object.defineProperty()方法添加constructor属性，并使其成为不可枚举属性。</p>
          <div v-highlight>
            <pre>
              <code>
                Object.defineProperty(Person.prototype, 'constructor', {
                  enumerable: false,
                  value: Person
                })
              </code>
            </pre>
          </div>
        </div>
      </Card>
      <Card dis-hover shadow style="width: 600px">
        <h3 slot="title">3.确定对象与原型之间是否存在原型关系</h3>
        <div>
          <p>如果[[prototype]]指向调用isPrototypeOf()方法的对象（Person.prototype），那么该方法返回true。</p>
          <div v-highlight>
            <pre>
              <code>
                Person.prototype.isPrototypeOf(p) => true
              </code>
            </pre>
          </div>
          <p>ECMAScript5提供一个Object.getPrototypeOf()方法，这个方法返回[[Prototype]]的值。</p>
          <p></p>
          <div v-highlight>
            <pre>
              <code>
                Object.getPrototypeOf(p) === Person.prototype => true
              </code>
            </pre>
          </div>
        </div>
      </Card>
      <Card dis-hover shadow style="width: 600px">
        <h3 slot="title">4.向上搜索机制</h3>
        <div>
          <p>
            向上搜索机制：当需要读取对象的某个属性时，首先会从实例属性中搜索；若没找到，则继续搜索指针指向的原型对象。若实例属性中与原型对象上有同名的属性，
            则原型上的属性将被屏蔽阻止访问；再使用delete删除该实例属性后，可以重新访问原型上的同名属性。
          </p>
          <div v-highlight>
            <pre>
              <code>
                function Person(name, age) {
                  this.name = name
                  this.age = age
                }

                Person.prototype.age = 24
                Person.prototype.say = function() {
                  return this.name + this.age
                }

                var p = new Person("lee", 20)

                delete p.age

                p.say() => 'lee24'
              </code>
            </pre>
          </div>
        </div>
      </Card>
      <Card dis-hover shadow style="width: 680px">
        <h3 slot="title">5.检测属性是实例属性还是原型属性</h3>
        <div>
          <p>使用for-in操作符，可遍历对象所有属性，返回对象所有可枚举的属性（无论是实例属性还是原型属性）。</p>
          <div v-highlight>
            <pre>
              <code>
                function Person(name, age) {
                  this.name = name
                  this.age = age
                }

                Person.prototype.say = function() {
                  return this.name + this.age
                }

                var p = new Person("lee", 20)

                for (var prop in p) {
                  prop => name age say
                }
              </code>
            </pre>
          </div>
          <p>使用hasOwnProperty() 方法,只有是实例属性时才返回true。可以和in操作符配合使用，in操作符会在通过对象能够访问给定属性时返回true。</p>
          <div v-highlight>
            <pre>
              <code>
                //如果该函数返回true,表示给定属性属于原型属性,反之是实例属性
                function hasPrototypeProperty(object, name) {
                  return !object.hasOwnProperty(name) && (name in object)
                }
              </code>
            </pre>
          </div>
        </div>
      </Card>
      <Card dis-hover shadow style="width: 700px">
        <h3 slot="title">6.Object.keys和Object.getOwnPropertyNames()方法</h3>
        <p>ECMAScript5提供一个Object.keys()方法，它接收一个对象参数，可遍历定义在该对象上的所有属性，返回一个包含由所有可枚举属性构成的字符串数组。</p>
        <div v-highlight>
          <pre>
              <code>
                Object.keys(p) => ['name', 'age']
                Object.keys(Person.prototype) => ['say']
              </code>
            </pre>
        </div>
        <p>ECMAScript5还提供一个Object.getOwnPropertyNames()方法，该方法与Object.keys()方法一样，区别在于它忽略属性的可枚举性。</p>
        <div v-highlight>
          <pre>
              <code>
                Object.getOwnPropertyNames(p) => ['name', 'age']
                Object.getOwnPropertyNames(Person.prototype) => ['constructor','say']
              </code>
            </pre>
        </div>
      </Card>
    </div>
  </div>
</template>

<script>
import { Card } from 'view-design'

export default {
  name: 'function-4',
  created() {},
  components: {
    Card
  }
}
</script>

<style scoped lang="stylus">
.function-4
  position: relative
  .layout-content
    display: flex
    flex-direction: row
    flex-wrap: wrap
.ivu-card
  align-self: flex-start !important
  margin-top: 20px
  margin-right: 20px
.bg-gray
  background: rgb(245, 245, 245)
.bg-1
  background: rgb(235, 247, 255)
.bg-2
  background: rgb(248, 248, 248)
</style>
