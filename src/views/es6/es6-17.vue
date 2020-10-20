<template>
  <div class="es6-17">
    <Card shadow style="width:800px">
      <h3 slot="title">1.Class（类）</h3>
      <ul class="menu">
        <li>ES6 通过 class 关键字，可以定义类。</li>
        <li>Class（类）中有一个 constructor 方法，即构造方法。而 this 关键字则代表实例对象。</li>
        <li>Class（类）中除了构造方法，还可以定义其他方法。（不可用逗号分隔）</li>
        <li>实际上类的所有方法都定义在类的 prototype 属性上面。</li>
        <li>类的内部所有定义的方法，都是不可枚举的（non-enumerable）。</li>
        <li>类必须使用 new 操作符调用，否则会报错。</li>
      </ul>
      <div v-highlight>
        <pre>
          <code>
            class Person {
              constructor(x, y) {
                this.x = x;
                this.y = y;
              }

              toString() {
                // ...
              }
            }

            // 等同于
            Person.prototype = {
              constructor() {},
              toString() {}
            };

            // 枚举性
            Object.keys(Person.prototype) =>[]
            Object.getOwnPropertyNames(Person.prototype) => ["constructor","toString"]
          </code>
        </pre>
      </div>
      <p>由于类的方法都定义在 prototype 对象上面，所以类的新方法可以添加在 prototype 对象上面。Object.assign 方法可以很方便地一次向类添加多个方法。</p>
      <div v-highlight>
        <pre>
          <code>
            class Person {
              constructor(){
                // ...
              }
            }

            Object.assign(Person.prototype, {
              toString(){},
              toValue(){}
            });
          </code>
        </pre>
      </div>
    </Card>
    <Card shadow style="width:600px">
      <h3 slot="title">2.constructor方法</h3>
      <p>constructor 方法是类的默认方法，通过 new 命令生成对象实例时，自动调用该方法。一个类必须有 constructor 方法，如果没有显式定义，一个空的 constructor 方法会被默认添加。</p>
      <div v-highlight>
        <pre>
          <code>
            class Person {
              // 若没定义，自动生成
              constructor() {}
            }
          </code>
        </pre>
      </div>
      <p>constructor 方法默认返回实例对象（即 this），完全可以指定返回另外一个对象。</p>
      <div v-highlight>
        <pre>
          <code>
            class Person {
              constructor() {
                return Object.create(null);
              }
            }

            new Person() instanceof Person => false
          </code>
        </pre>
      </div>
    </Card>
    <Card shadow style="width:600px">
      <h3 slot="title">3.含存取器的类</h3>
      <p>与 ES5 一样，在“类”的内部可以使用 get 和 set 关键字，对某个属性设置存值函数和取值函数，拦截该属性的存取行为。</p>
      <div v-highlight>
        <pre>
          <code>
            class MyClass {
              constructor() {}
              get s1() {
                return 'getter';
              }
              set s1(value) {
                console.log('setter: '+ value);
              }
            }

            let inst = new MyClass();

            inst.prop = 123;
            // setter: 123

            inst.prop
            // 'getter'
          </code>
        </pre>
      </div>
    </Card>
    <Card shadow style="width:600px">
      <h3 slot="title">4.Class 表达式</h3>
      <p>与函数一样，类也可以使用表达式的形式定义。</p>
      <div v-highlight>
        <pre>
          <code>
            const MyClass = class Me {
              getClassName() {
                return Me.name;
              }
            };

            let inst = new MyClass();
            inst.getClassName() => Me

            // Me只在Class的内部可用，指代当前类
            Me.name // ReferenceError: Me is not defined
          </code>
        </pre>
      </div>
      <p>采用 Class 表达式，可以写出立即执行的 Class。</p>
      <div v-highlight>
        <pre>
          <code>
            const MyClass = new class Me {
              getClassName() {
                return Me.name;
              }
            }()

            inst.getClassName() => Me
          </code>
        </pre>
      </div>
    </Card>
    <Card shadow style="width:600px">
      <h3 slot="title">5.Class的静态属性和方法</h3>
      <p>类相当于实例的原型，所有在类中定义的方法，都会被实例继承。如果在一个方法前，加上 static 关键字，就表示该方法不会被实例继承，而是直接通过类来调用，这就称为“静态方法”。</p>
      <div v-highlight>
        <pre>
          <code>
          class Foo {
            // 静态方法
            static classMethod() {
              return 'hello';
            }
          }

          // 直接通过类调用
          Foo.classMethod() => 'hello'

          // 不能通过实例调用
          var foo = new Foo();
          foo.classMethod() // TypeError
          </code>
        </pre>
      </div>
      <p>实例属性除了定义在 constructor() 方法里面的 this 上面，也可以定义在类的最顶层。</p>
      <div v-highlight>
        <pre>
          <code>
            class Foo {
              // 相当于 this.count = 1;
              count = 1;

              // 定义在class实例上的静态属性
              static age = 24;

              constructor(){
                // ...
              }

              // 静态方法
              static classMethod() {
                return 'hello';
              }
            }

            // 定义在class类上的静态属性
            Foo.prop = 2;
          </code>
        </pre>
      </div>
    </Card>
    <Card shadow style="width:600px">
      <h3 slot="title">6.Class 的特性</h3>
      <ul class="menu">
        <li>类和模块的内部，默认就是严格模式，所以不需要使用 use strict 指定运行模式。</li>
        <li>类不存在变量提升（hoist），这一点与 ES5 完全不同。</li>
        <li>由于本质上，ES6 的类只是 ES5 的构造函数的一层包装，所以函数的许多特性都被 Class 继承，包括 name 属性。</li>
      </ul>
      <div v-highlight>
        <pre>
          <code>
            new Foo(); // ReferenceError
            class Foo {}

            class Point {}
            Point.name // "Point"
          </code>
        </pre>
      </div>
    </Card>
  </div>
</template>

<script>
import { Card } from 'view-design'

export default {
  name: 'es6-17',
  components: {
    Card
  }
}
</script>

<style scoped lang="stylus">
.es6-17
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
