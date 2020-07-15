<template>
  <div class="function-5">
    <div class="layout-content">
      <Card dis-hover shadow style="width:500px">
        <h3 slot="title">1.原型链实现继承</h3>
        <div>
          <p>面向对象语言都支持两种继承方式：接口继承和实现继承；ECMAScript 只支持实现继承，继承主要依靠原型链来实现。</p>
          <h4 class="py-3">原型链基本概念：</h4>
          <ul class="menu">
            <li>所有函数都有一个 prototype（原型） 属性，其属性值是一个对象，即原型对象。</li>
            <li>在默认情况下，所有原型对象都会自动获取一个constructor（构造函数）属性，属性值是一个指向prototype属性所在函数的指针。</li>
            <li>所有对象都包含一个内部的[[prototype]]属性，属性值指向其构造函数的原型对象。</li>
            <li>
              如果让一个原型对象等于另一个类型的实例，那么这个原型对象上就会包含一个指向另一个类型实例的原型的指针，另一个类型的实例的原型上又包含一个指向其构造函数的指针。
              假如另一个原型又是另一个类型的实例，那么上述关系依然成立，如此层层递进，就构成了实例与原型之间的链条。
            </li>
          </ul>
        </div>
      </Card>
      <Card dis-hover shadow style="width:520px">
        <h3 slot="title">2.原型链的基本模式</h3>
        <div>
          <p>让一个原型对象等于另一个类型的实例。</p>
          <div v-highlight>
            <pre>
              <code>
                //超类型
                function Person() {
                  //实例属性
                  this.name = "lee"
                  this.age = 24
                  this.friends = ["tom", "Jerry", "Speike"]

                  //初始化原型
                  if (typeof this.say !== "function") {
                    Person.prototype.say = function() {
                      return this.name + this.age;
                    }
                  }
                }

                //子类型
                function Child() {}

                //继承
                Child.prototype = new Person()

                var p = new Child()

                p.say() => "lee24"
              </code>
            </pre>
          </div>
          <p>子类型中需要覆盖超类型或添加超类型中不存在的某个方法时，给原型添加的方法的代码一定放在继承语句之后。</p>
          <div v-highlight>
            <pre>
              <code>
                //继承
                Child.prototype = new Person()

                //必须在继承之后
                Child.prototype.say = function() {
                  //...
                }
              </code>
            </pre>
          </div>
          <p>不能使用对象字面量创建原型方法。</p>
          <div v-highlight>
            <pre>
              <code>
                //继承
                Child.prototype = new Person()

                //导致上面继承语句失效
                Child.prototype = {
                  say: function() {
                    //...
                  }
                }
              </code>
            </pre>
          </div>
        </div>
      </Card>
      <Card dis-hover shadow style="width:520px">
        <h3 slot="title">3.原型链继承的缺陷</h3>
        <div>
          <ul class="menu">
            <li>让一个原型对象等于另一个类型的实例，本质上重写了原型对象。因此，切断了实例对象与原型之间的联系，导致子类型的原型对象上的constructor指针不再指向子类型构造函数，而是指向超类型构造函数。</li>
            <li>在创建子类型实例时，切断了向超类型传递参数的可能。</li>
            <li>子类型在原型上继承了超类型的所有属性，如果超类型实例属性是一个引用类型值，那么该属性将被所有子类型的实例所共享（重现oop中原型模式的缺点）。</li>
          </ul>
          <div v-highlight>
            <pre>
              <code>
                Child.prototype.construtor === Child => false
                Child.prototype.construtor === Person => true

                var p1 = new Child()
                var p2 = new Child()

                p1.friends.push('alex')

                //原型属性被所有实例所共享
                p2.friends => ["tom", "Jerry", "Speike", "alex"]
              </code>
            </pre>
          </div>
        </div>
      </Card>
      <Card dis-hover shadow style="width:560px">
        <h3 slot="title">4.借用构造函数</h3>
        <div>
          <p>设计思路：子类型构造函数内部调用超类型构造函数。</p>
          <div v-highlight>
            <pre>
              <code>
                //超类型
                function Person() {
                  this.name = "lee"
                  this.age = 24
                  this.friends = ["tom", "Jerry", "Speike"]
                }

                Person.prototype.say = function() {
                  return this.name + this.age
                }

                //子类型
                function Child() {
                  Person.call(this)
                }

                var p = new Child()

                p.name => 'lee'
                p.age => 24
              </code>
            </pre>
          </div>
          <p>优点：可以向超类型传递参数。缺陷：在超类型原型中定义的方法，对于子类型时不可见得。</p>
          <div v-highlight>
            <pre>
              <code>
                //超类型
                function Person(name, age) {
                  this.name = name
                  this.age = age
                }

                Person.prototype.say = function() {
                  return this.name + this.age
                }

                //子类型
                function Child() {
                  Person.call(this, 'lee', 24)
                }

                var p = new Child()

                p.name => 'lee'
                p.age => 24
                p.say() => error
              </code>
            </pre>
          </div>
        </div>
      </Card>
      <Card dis-hover shadow style="width:600px">
        <h3 slot="title">5.组合继承</h3>
        <div>
          <p>设计思路：借用构造函数实现对实例属性的继承，而通过原型链实现对原型上定义的方法继承。</p>
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
                  //继承实例属性
                  Person.call(this, 'lee', 24) //第二次调用超类型构造函数
                  this.age = age
                }

                //继承原型属性
                Child.prototype = new Person() //第一次调用超类型构造函数

                //重设constructor指向
                Child.prototype.constructor = Child

                Child.prototype.say = function() {
                  return this.age
                }

                var p = new Child(20)

                //实例与原型出现同名属性时，原型属性被屏蔽
                p.name => 'lee'
                p.age => 20
                p.say() => 20

                var p1 = new Child()

                p.friends.push('alex')
                p.friends => ["tom", "Jerry", "Speike", "alex"]
                p1.friends => ["tom", "Jerry", "Speike"]
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
  name: 'function-5',
  created() {},
  components: {
    Card
  }
}
</script>

<style scoped lang="stylus">
.function-5
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
.py-3
  margin: 10px 0
</style>
