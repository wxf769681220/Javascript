<template>
  <div class="object-1">
    <Card shadow style="width:780px">
      <h3 slot="title">1.JavaScript 中的对象</h3>
      <div>
        <ul class="menu">
          <li>宿主对象：由 JavaScript 解析器所嵌入的宿主环境(如：web 浏览器)定义的。客户端 javascript 中表示网页结构的 HTMLElement 对象均是宿主对象。</li>
          <li>内置对象：由 ECMAScript 规范定义的对象，如：数组、日期、正则表达式、函数等。</li>
          <li>自定义对象：运行中的 javascript 代码创建的对象。</li>
          <li>自有属性：直接在对象中定义的属性。</li>
          <li>继承属性：在对象的原型对象中定义的对象。</li>
        </ul>
        <div v-highlight>
          <pre>
            <code>
              // 创建对象
              // 通过new操作符 + Object构造函数
              var o = new Object()
              o.name = "lee"
              o.age = 20
              o.friends = ["f1", "f2", "f3"]
              o.say = function() {
                return this.name + this.age
              }

              // 创建对象
              // 通过对象字面量表示法
              var o = {
                name: "lee",
                age: 20,
                friends: ["f1", "f2", "f3"],
                say: function() {
                  return this.name + this.age
                },
                'first name': alex, // 含特殊字符使用字符串
                5: true             // 数字值属性自动转换为字符串
                '': null            // 即使是空字符串也是允许的
              }
            </code>
          </pre>
        </div>
        <p>对象的类属性是一个字符串，用以表示对象的类型信息。通过对象的默认的toString()方法，返回如下这种格式字符串：</p>
        <div v-highlight>
          <pre>
            <code>
              /**
               * 对象类属性
               * "[object Class]"
              */

              var obj = new Object()
              obj.toString() => "[object Object]"

              // 间接调用Function.call，再截取字符串
              Object.prototype.toString.call(obj).slice(8, -1) => "Object"
            </code>
          </pre>
        </div>
      </div>
    </Card>
    <Card shadow style="width:720px">
      <h3 slot="title">2.对象属性类型</h3>
      <div>
        <ul class="menu">
          <li>ECMA-262 在定义只有内部才用的特性（attribute）时，描述了属性（property）的各种特征。</li>
          <li>这些特性是为了实现 javascript 引擎用的，因此在 javascript 中不能直接访问它们。</li>
          <li>为了表示特性是内部值，通常将它们放在双括号中, 如：[[Enumerable]]。</li>
          <li>ECMAScript 中有两种属性：数据属性和访问器属性（存取器属性）。</li>
        </ul>
        <div v-highlight>
          <pre>
            <code>
              // for-in语句：遍历对象上所有可枚举的属性
              // 无论是实例属性还是原型属性
              for (var p in window) {
                //...
              }

              // 获取对象上所有可枚举的属性，
              // 返回对象属性名组成的数组
              Object.keys(obj)

              // hasOwnProperty()方法：检测属性存在于实例中还是原型中
              // 若存在于实例中，则返回 true
              var num = 1
              window.hasOwnProperty("num") => true

              // in操作符：检测给定属性能否在实例或是原型中找到
              var num = 1
              "num" in window => true

              // 结合 hasOwnProperty() 与 in 操作符
              // 下面函数只有在属性存在于原型中时才会返回 true
              function hasPrototypeProperty(object, name) {
                return !object.hasOwnProperty(name) && (name in object);
              }
            </code>
          </pre>
        </div>
      </div>
    </Card>
    <Card shadow style="width:680px">
      <h3 slot="title">3.数据属性</h3>
      <div>
        <p>它包含一个数据值的位置，这个位置可以读取或写入值；它有四个描述其行为的特性：</p>
        <ul class="menu">
          <li>[[Configurable]]：表示能否通过 delete 删除属性从而重新定义属性；能否修改属性的特性或者能否把属性修改为访问器属性；默认值为 true。</li>
          <li>[[Enumerable]]：表示能否通过 for-in 循环返回属性；默认值为 true。</li>
          <li>[[Writable]]：表示能否修改属性的值；默认值为 ture。</li>
          <li>[[Value]]：表示属性的数据值；读取属性时，从此位置读取，写入数据值时，把新值保存在这个位置；默认值为 undefined。</li>
        </ul>
        <div v-highlight>
          <pre>
            <code>
              var person = {
                name: "lee"
              }

              //获取给定属性的描述符
              var myName = Object.getOwnPropertyDescriptor(person, "name")

              myName.configurable => true
              myName.enumerable   => true
              myName.writable     => true
              myName.value        => "lee"
            </code>
          </pre>
        </div>
      </div>
    </Card>
    <Card shadow style="width:680px">
      <h3 slot="title">4.访问器属性</h3>
      <div>
        <p>
          访问器属性不包含数据值，它包含一对 getter 和 setter 函数；读取访问器属性时调用 getter 函数，它负责返回有效值；
          写入访问器属性时调用setter函数并传入新值，它决定如何去处理数据。访问器属性也有四个描述其行为的特性：
        </p>
        <ul class="menu">
          <li>[[Configurable]]：表示能否通过 delete 删除属性从而重新定义属性；能否修改属性的特性或者能否把属性修改为访问器属性； 默认值为 false。</li>
          <li>[[Enumerable]]：表示能否通过 for-in 循环返回属性；默认值为 false。</li>
          <li>[[Get]]：读取属性时调用的函数；默认值为 undefined。</li>
          <li>[[Set]]：写入属性时调用的函数；默认值为 undefined。</li>
        </ul>
        <div v-highlight>
          <pre>
            <code>
              var person = {
                name: "lee",
                age: 24
              }

              // 访问器访问器属性不能直接定义（不包含数据值位置）
              // 必须使用 Object.defineProperty() 方法来定义
              Object.defineProperty(person, "year", {
                get: function() {
                  return "this year"
                },
                set: function(value) {
                  if (value > 2000) {
                    this.age = value - 2000
                  }
                }
              })

              //写入属性值
              person.year = 2019

              person.year => "this year"
              person.age  => 19

              // 获取给定属性的描述符
              var myName = Object.getOwnPropertyDescriptor(person, "year")

              myName.configurable => false
              myName.enumerable   => false
              myName.get          => function
              myName.set          => function
            </code>
          </pre>
        </div>
        <p>定义访问器属性最简单的方法是：使用对象直接量语法的一种扩展写法：</p>
        <div v-highlight>
          <pre>
            <code>
              var person = {
                username: "alex",
                age: 24,
                get a() {
                  return this.username
                },
                set a(value) {
                  if (value > 2000) {
                    this.age = value - 2000
                  }
                },
                // b是只读访问器属性，因为它只有 getter 方法
                get b() {
                  return this.age
                }
              }

              // 写入属性值
              person.a = 2019

              person.age => 19
              person.a   => "alex"
              person.b   => 19
            </code>
          </pre>
        </div>
        <p>ECMAScript5还提供两个非标准的方法用来创建访问器属性：__defineGetter__() 和 __defineSetter()__。</p>
        <div v-highlight>
          <pre>
            <code>
              var person = {}
              person.__defineGetter__("year", function() {
                return "this year"
              })
              person.__defineSetter__("year", function(value) {
                //...
              })
            </code>
          </pre>
        </div>
      </div>
    </Card>
    <Card shadow style="width:680px">
      <h3 slot="title">5.Object.defineProperty()方法</h3>
      <div>
        <p>ECMAScript5 提供一个 Object.defineProperty() 方法用于修改已定义的属性的特性, 它接收三个参数：目标对象、属性名和一个描述符对象。</p>
        <div v-highlight>
          <pre>
            <code>
              // 修改属性默认的特性
              var person = {
                name: "lee"
              }
              Object.defineProperty(person, "name", {
                // configurable: true,
                // enumerable: true,
                // writable: true,
                value: "alex"
              })

              person.name =>"alex"

              // 若对象本身并没有事先定义此属性，则为该对象添加该属性
              var person = {}
              Object.defineProperty(person, "name", {
                //configurable: false,
                //enumerable: false,
                //writable: false,
                value: "lee"
              })

              person.name =>"lee"
            </code>
          </pre>
        </div>
        <p>Object.defineProperty() 方法的另一个作用是：为对象扩展属性。</p>
        <div v-highlight>
          <pre>
            <code>
              // 空对象
              var person = {}

              // 添加属性
              Object.defineProperty(person, "name", {
                // configurable: false,
                // enumerable: false,
                // writable: false,
                value: "lee"
              })

              person.name => "lee"
            </code>
          </pre>
        </div>
      </div>
    </Card>
    <Card shadow style="width:680px">
      <h3 slot="title">6.Object.defineProperties()方法</h3>
      <div>
        <p>ECMAScript5 提供一个 Object.defineProperties() 方法用于同时定义多个属性，它接收两个对象作为参数。其中第二个参数对象中的属性必须以描述符对象的形式存在。</p>
        <div v-highlight>
          <pre>
            <code>
              var person = {}

              Object.defineProperties(person, {
                //定义一个数据属性
                name: {
                  // configurable: false,
                  // enumerable: false,
                  // writable: false,
                  value: "lee"
                },
                //定义一个访问器属性
                year: {
                  // configurable: false,
                  // enumerable: false,
                  get: function() {
                    return "this year"
                  },
                  set: function(value) {
                    //...
                  }
                }
              })
            </code>
          </pre>
        </div>
      </div>
    </Card>
    <Card shadow style="width:720px">
      <h3 slot="title">7.复制属性的特性：extend()方法</h3>
      <div>
        <ul class="menu">
          <li>给 Object.prototype 添加一个不可枚举的extend()方法。</li>
          <li>这个方法继承自调用它的对象，将作为参数调用的对象的属性一一复制。</li>
          <li>除了值之外，也复制属性的所有特性，除非在目标对象中存在同名的属性。</li>
          <li>参数对象的所有自有对象（包括不可枚举的属性）也会一一复制。</li>
          <li></li>
        </ul>
        <div v-highlight>
          <pre>
            <code>
              Object.defineProperty(Object.prototype, "extend", {
                configurable: true,
                // 设置为不可枚举属性
                enumerable: false,
                writable: true,
                value: function(o) {
                  // 获取所有的自有属性
                  // 包括不可枚举的属性
                  var names = Object.getOwnPropertyNames(o);

                  // 遍历
                  for (var i = 0, len = names.length; i &lt; len; i++) {
                    // 若属性已经存在，则跳过
                    if (names[i] in this) {
                      continue
                    }

                    // 获取属性描述符
                    var desc = Object.getOwnPropertyDescriptor(o, names[i])

                    // 创建一个属性
                    Object.defineProperty(this, names[i], desc)
                  }
                }
              })

              var person = {
                name: "alex"
              }

              var o = {
                age: 24
              }

              person.extend(o)
              person => { name: "alex", age: 24 }
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
  name: 'object-1',
  components: {
    Card
  }
}
</script>

<style scoped lang="stylus">
.object-1
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
