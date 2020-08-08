<template>
  <div class="object-2">
    <Card shadow style="width:540px">
      <h3 slot="title">1.工厂模式</h3>
      <p>工厂模式的优点：解决了使用同一接口创建多个对象, 从而产生大量重复代码的问题；缺点：无法识别对象的具体类型。</p>
      <div v-highlight>
        <pre>
          <code>
            function person(name, age) {
              // 创建一个新对象
              var o = new Object()

              // 添加属性
              o.name = name
              o.age = age
              o.friends = ["tom", "Jerry", "Speike"]
              o.say = function() {
                return this.name + this.age
              }

              // 返回这个新对象
              return o
            }

            // 普通函数的调用
            var p1 = person("alex", 24)
            var p2 = person("lee", 18)

            p1.say() => "alex"
            p2.say() => "lee18"
            p1.say === p2.say => false
            p1.friends === p2.friends => false
          </code>
        </pre>
      </div>
    </Card>
    <Card shadow style="width:710px">
      <h3 slot="title">2.构造函数模式</h3>
      <div>
        <p>构造函数模式的优点：可以用来创建特定类型的对象；缺点：如果该类型对象的属性值是一个引用类型值，那么不同实例上的同名属性均不相等。</p>
        <div v-highlight>
          <pre>
            <code>
              // 构造函数
              function Person(name, age) {
                this.name = name
                this.age = age
                this.friends = ["tom", "Jerry", "Speike"]

                this.say = function() {
                  return this.name + this.age
                }

                /**
                 * 上面代码等价于：
                 * this.say = new Function('return this.name + this.age')
                 * 每次实例化一个新对象都会创建一个不同的Function的实例
                 * 因此不同实例上的同名函数是不相等的
                */
              }

              // 构造函数调用
              var p1 = new Person("alex", 24)
              var p2 = new Person("lee", 20)

              p1.say() => "alex24"
              p2.say() => "lee20"
              p1.say === p2.say => false
              p1.friends === p2.friends => false
            </code>
          </pre>
        </div>
      </div>
    </Card>
    <Card shadow style="width:720px">
      <h3 slot="title">3.原型模式</h3>
      <div>
        <p>
          所有函数都有一个 prototype（原型）属性，其属性值是一个对象，即原型对象。原型模式模式的优点：原型对象可以让所有实例对象共享它所包含的属性和方法。
          缺点：原型上的属性其值是一个引用类型值时，修改某个实例得值也会立即反映在其他实例上。
        </p>
        <div v-highlight>
          <pre>
            <code>
                // 构造函数
                function Person() {
                  //...
                }

                // 定义原型
                Person.prototype.name = "lee"
                Person.prototype.age = 20
                Person.prototype.friends = ["tom", "Jerry", "Speike"]
                Person.prototype.say = function() {
                  return this.name + this.age
                }

                // 构造函数调用
                var p1 = new Person()
                var p2 = new Person()

                p1.say() => "lee20"
                p2.say() => "lee20"
                p1.say === p2.say => true
                p1.friends === p2.friends => true

                /**
                 * 原型属性被所有实例共享
                 * 若原型属性是一个引用类型值，则在一个实例上所做的修改
                 * 也会立即映射到其他的实例上
                 */
                p1.friends.push("alen")
                p1.friends => ["tom", "Jerry", "Speike", "alen"]
                p2.friends => ["tom", "Jerry", "Speike", "alen"]
            </code>
          </pre>
        </div>
      </div>
    </Card>
    <Card shadow style="width:600px">
      <h3 slot="title">4.构造 + 原型模式的组合模式</h3>
      <p>
        这种模式只是一种设计思路，即：构造函数用于定义实例属性，原型模式用于定义共享的属性或方法。优点：既可以为构造函数传值，实现函数的复用。
        又可以保证每个实例对象拥有独有的属性和所有实例共享的属性和方法。缺点：没有封装性。
      </p>
      <div v-highlight>
        <pre>
          <code>
            // 构造函数
            function Person(name, age) {
              // 定义实例属性
              this.name = name
              this.age = age
              this.friends = ["tom", "Jerry", "Speike"]
            }

            // 定义原型属性
            Person.prototype.say = function() {
              return this.name + this.age
            }

            var p1 = new Person("javascript", 24)
            var p2 = new Person("lee", 18)

            // 不同实例拥有独有的属性
            p1.friends.push("alen")
            p1.friends => ["tom", "Jerry", "Speike", "alen"]
            p2.friends => ["tom", "Jerry", "Speike"]
          </code>
        </pre>
      </div>
    </Card>
    <Card shadow style="width:600px">
      <h3 slot="title">5.动态原型模式（最佳实践）</h3>
      <div>
        <p>
          动态原型模式是对构造+原型模式的进一步优化，主要思路是：将原型对象封装进构造函数中。它通过检查某个应该存在的方法是否有效，来决定是否初始化原型。
          其中if语句只需检查一个方法是否存在即可。
        </p>
        <div v-highlight>
          <pre>
            <code>
              // 构造函数
              function Person(name, age) {
                // 定义实例属性
                this.name = name
                this.age = age
                this.friends = ["tom", "Jerry", "Speike"]

                // 初始化原型
                if (typeof this.say !== "function") {
                  //定义原型属性
                  Person.prototype.say = function() {
                    return this.name + this.age
                  }
                }
              }

              var p1 = new Person("alex", 24)
              var p2 = new Person("lee", 18)

              p1.say() => "alex24"
              p2.say() => "lee18"
              p1.say === p2.say => true

              p1.friends.push("alen")
              p1.friends => ["tom", "Jerry", "Speike", "alen"]
              p2.friends => ["tom", "Jerry", "Speike"]
            </code>
          </pre>
        </div>
      </div>
    </Card>
    <Card shadow style="width:600px">
      <h3 slot="title">6.寄生构造函数模式</h3>
      <div>
        <p>设计思路：创建一个函数，该函数仅用于封装创建对象的代码，然后返回这个对象。其与工厂模式十分类似，区别在于：1.使用的是构造函数，2.用new关键字调用。</p>
        <div v-highlight>
          <pre>
            <code>
              function Person(name, age) {
                // 定义一个对象
                var o = new Object()

                // 扩展属性
                o.name = name
                o.age = age
                o.friends = ["tom", "Jerry", "Speike"]
                o.say = function() {
                  return this.name + this.age
                }

                // 返回这个对象
                return o
              }

              var p1 = new Person("alex", 24)
              var p2 = new Person("lee", 18)

              p1.say() => "alex"
              p2.say() => "lee18"
              p1.say === p2.say => false
              p1.friends === p2.friends => false
            </code>
          </pre>
        </div>
        <p>使用场景举例：为对象创建创建构造函数。</p>
        <div v-highlight>
          <pre>
            <code>
              function SpecialArray() {

                var arr = new Array()

                arr.push.apply(arr, arguments)

                arr.toPipedString = function() {
                  return this.join('|')
                }

                return arr
              }

              var color = new SpecialArray('red', 'blue','green')

              color.toPipedString() => "red|blue|green"
            </code>
          </pre>
        </div>
      </div>
    </Card>
    <Card shadow style="width:600px">
      <h3 slot="title">7.稳妥构造函数模式</h3>
      <div>
        <p>稳妥对象：没有公共属性，其属性不引用this。稳妥对象何时最一些安全的环境中(这些环境会禁止使用 this 和 new)。</p>
        <div v-highlight>
          <pre>
            <code>
              function Person(name, age) {
                var o = new Object()

                // 在这里可以定义私有变量
                o.say = function() {
                  return name
                }

                return o
              }

              var p = Person('lee', 20)
              p.say() => 'lee'
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
  name: 'object-2',
  components: {
    Card
  }
}
</script>

<style scoped lang="stylus">
.object-2
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
