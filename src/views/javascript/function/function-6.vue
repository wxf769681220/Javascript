<template>
  <div class="function-6">
    <Card shadow style="width:750px">
      <h3 slot="title">1.原型式继承</h3>
      <div>
        <p>设计思路：基于已有的对象创建新对象。缺陷：被继承对象包含引用类型值。</p>
        <div v-highlight>
          <pre>
            <code>
              // 被继承对象
              var o = {
                name: 'lee',
                age: 24,
                friends: ["tom", "Jerry", "Speike"],
                say: function() {
                  return this.name + this.age
                }
              }

              // 创建继承函数
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
        <p>ECMAScript5 提供一个 Object.create() 方法规范化原型式继承。这个方法第二个参数可选，参数格式与 Object.defineProperties() 方法的第二个参数相同。即每个属性通过自己的描述符定义。</p>
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

              // 同名属性被覆盖
              res.name => 'LEE'
            </code>
          </pre>
        </div>
      </div>
    </Card>
    <Card shadow style="width:750px">
      <h3 slot="title">2.寄生式继承</h3>
      <div>
        <p>设计思路：创建一个仅用于封装继承过程的函数，该函数内部以某种方式来增强对象，最后返回这个对象。</p>
        <div v-highlight>
          <pre>
            <code>
              // 被继承对象
              var o = {
                name: 'lee',
                age: 24,
                friends: ["tom", "Jerry", "Speike"],
                say: function() {
                  return this.name + this.age
                }
              }

              // 继承函数
              function fn(o) {
                // 通过调用函数创建一个新对象
                // Object()函数非必须的
                // 任何能返回新对象的函数都适用于此模式
                var clone = Object(o)

                // 通过某种方式增强这个对象
                clone.name ='LEE'

                clone.say = function() {
                  return this.name
                }

                // 返回对象
                return clone
              }

              var res = fn(o)

              res.say() => 'LEE'
              res.age => 24
              res.friends => ["tom", "Jerry", "Speike"]
            </code>
          </pre>
        </div>
      </div>
    </Card>
  </div>
</template>

<script>
import { Card } from 'view-design'

export default {
  name: 'function-6',
  components: {
    Card
  }
}
</script>

<style scoped lang="stylus">
.function-6
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
