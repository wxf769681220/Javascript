<template>
  <div class="function-6">
    <div class="layout-content">
      <Card dis-hover shadow style="width:550px">
        <h3 slot="title">1.原型式继承</h3>
        <div>
          <p>设计思路：基于已有的对象创建新对象。缺陷：被继承对象包含引用类型值。</p>
          <div v-highlight>
            <pre>
              <code>
                //被继承对象
                var o = {
                  name: 'lee',
                  age: 24,
                  friends: ["tom", "Jerry", "Speike"],
                  say: function() {
                    return this.name + this.age
                  }
                }

                //创建继承函数
                function fn(o) {
                  function Person() {}

                  Person.prototype = o

                  return new Person()
                }

                var res = fn(o)
                res.say() => 'lee24'
              </code>
            </pre>
          </div>
          <p>ECMAScript5提供一个Object.create()方法规范化原型式继承。这个方法第二个参数可选，参数格式与Object.defineProperties()方法的第二个参数相同。即每个属性通过自己的描述符定义。</p>
          <div v-highlight>
            <pre>
              <code>
                var o = {
                  name: 'lee',
                  age: 24,
                  friends: ["tom", "Jerry", "Speike"],
                  say: function() {
                    return this.name + this.age
                  }
                }

                var res = Object.create(o, {
                  name: {
                    value: 'LEE'
                  }
                })

                //同名属性被覆盖
                res.name => 'LEE'
              </code>
            </pre>
          </div>
        </div>
      </Card>
      <Card dis-hover shadow style="width:550px">
        <h3 slot="title">2.寄生式继承</h3>
        <div>
          <p>设计思路：创建一个仅用于封装继承过程的函数，该函数内部以某种方式来增强对象，最后返回这个对象。</p>
          <div v-highlight>
            <pre>
              <code>
                //被继承对象
                var o = {
                  name: 'lee',
                  age: 24,
                  friends: ["tom", "Jerry", "Speike"],
                  say: function() {
                    return this.name + this.age
                  }
                }

                //继承函数
                function fn(o) {
                  //通过调用函数创建一个新对象
                  var clone = Object(o)

                  //通过某种方式增强这个对象
                  clone.name ='LEE'
                  clone.say = function() {
                    return this.name
                  }

                  //返回对象
                  return clone
                }

                var res = fn(o)

                res.say() => 'LEE'
                res.age => 24
                res.friends => ["tom", "Jerry", "Speike"]
              </code>
            </pre>
          </div>
          <p>Object()函数非必须的，任何能返回新对象的函数都适用于此模式。</p>
        </div>
      </Card>
      <Card dis-hover shadow style="width:650px">
        <h3 slot="title">3.寄生式组合式继承</h3>
        <div>
          <p>寄生式组合式继承是对组合继承的一种优化，设计思路：不必指定子类型的原型而调用超类型的构造函数，而是创建一个超类型原型的一个副本函数。</p>
          <div v-highlight>
            <pre>
              <code>
                //超类型
                function Person(name, age) {
                  this.name = name
                  this.age = age
                  this.friends = ["tom", "Jerry", "Speike"]
                }

                Person.prototype.say = function() {
                  return this.name + this.age
                }

                //子类型
                function Child(age) {
                  Person.call(this, 'lee', 24)
                  this.age = age
                }

                //创建超类型原型副本
                function inheritPrototype(subType, superType) {
                  var prototype = Object(superType.prototype) //创建对象
                  prototype.constructor = subType             //增强对象
                  subType.prototype = prototype               //指定对象
                }

                //实现继承
                inheritPrototype(Child, Person)

                Child.prototype.say = function() {
                  return this.name + this.age
                }

                var p = new Child(20)

                p.say() => 'lee20'
              </code>
            </pre>
          </div>
        </div>
      </Card>
    </div>
  </div>
</template>

<script>
import { Card } from 'view-design'

export default {
  name: 'function-6',
  created() {},
  components: {
    Card
  }
}
</script>

<style scoped lang="stylus">
.function-6
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
