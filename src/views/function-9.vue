<template>
  <div class="function-9">
    <div class="layout-content">
      <Card dis-hover shadow style="width:640px">
        <h3 slot="title">1.作用域安全的构造函数</h3>
        <div>
          <p>作用域安全的构造函数，首先要确认this对象是正确类型的实例。若不是，则会创建新的实例并返回。</p>
          <div v-highlight>
            <pre>
              <code>
                function Person(name, age) {
                  //确认this对象是正确类型的实例
                  if (this instanceof Person) {
                    this.username = name;
                    this.age = age;
                    this.friends = ["tom", "Jerry", "Speike"]
                  } else {
                    //创建新的实例并返回
                    return new Person(name, age)
                  }
                }

                //作为构造函数调用时
                var p = new Person("alex", 20)
                p.username => "alex"
                p.age => 20

                //作为普通函数调用
                var p = Person("alex", 20)
                p.username => "alex"
                p.age => 20

                //一般来讲，构造函数作为普通函数调用时，函数内部this指向window对象
                //由于构造函数中添加了一个检测确保this对象是Person类型实例的if语句，
                //因此，无论是作为构造函数调用还是作为普通函数调用，
                //都会返回一个Person的新实例，从而避免在全局对象上意外设置属性
                window.username => undefined
                window.age => undefined
              </code>
            </pre>
          </div>
          <p>作用域安全的构造函数并不影响继承的问题。</p>
          <div v-highlight>
            <pre>
              <code>
                //1.原型链继承
                Child.prototype = new Person()

                //2.原型链 + 借用构造函数的组合继承
                Person.call(this) //对实例属性的继承
                Child.prototype = new Person() //对原型属性的继承

                //3.寄生组合式继承
                Person.call(this) //对实例属性的继承
                inheritPrototype(Child, Person) //继承函数
              </code>
            </pre>
          </div>
        </div>
      </Card>
      <Card dis-hover shadow style="width:800px">
        <h3 slot="title">2.惰性载入函数</h3>
        <div>
          <p>
            惰性载入表示函数执行的分支只会发生一次。函数体中包含大量的if语句，每次调用函数时，都要对if语句的每个分支进行检查。实际上对于某些函数来说，在第一次调用时，if语句的某个分支可以决定结果的，
            就不需要每次调用函数时都去执行if语句再去检查各个分支。比如：createXHR()函数：
          </p>
          <div v-highlight>
            <pre>
              <code>
                //实现方式：if语句的每一个分支都会为createXHR变量赋值，
                //有效的覆盖了原有的函数，最后返回调用这个新赋函数。
                //当下次再调用createXHR()函数时，就会直接调用被if语句分支分配的函数，不用再执行if语句了
                function createXHR() {
                  if (typeof XMLHttpRequest !== "undefined") {
                    createXHR = function() {
                      return new XMLHttpRequest()
                    }
                  } else if (typeof activeXObject !== "undefined") {
                    createXHR = function() {
                      if (typeof arguments.callee.activeXString !== "string") {
                        var versions = ["MSXML2.XMLHttp", "MSXML2.XMLHttp.3.0", "MSXML2.XMLHttp.6.0"]
                        for (var i = 0, len = versions.length; i &lt; len; i++) {
                          try {
                            new  ActiveXObject(versions[i])
                            arguments.callee.activeXString = versions[i]
                            break
                          } catch (ex) {
                            //跳过
                          }
                        }
                      }
                      return new ActiveXObject(arguments.callee.activeXString)
                    }
                  } else {
                    createXHR = function() {
                      throw new Error("No XHR object available")
                    }
                  }
                  return createXHR()
                }
              </code>
            </pre>
          </div>
          <p>另一种实现惰性载入的方式：在声明函数时指定适当的函数。</p>
          <div v-highlight>
            <pre>
              <code>
                //这种方式在函数第一次调用时不会损失性能
                //但在代码首次加载时会损失一点性能
                var createXHR = (function() {
                  if (typeof XMLHttpRequest !== "undefined") {
                    return function() {
                      return new XMLHttpRequest()
                    }
                  } else if (typeof activeXObject !== "undefined") {
                    return function() {
                      if (typeof arguments.callee.activeXString !== "string") {
                        var versions = ["MSXML2.XMLHttp", "MSXML2.XMLHttp.3.0", "MSXML2.XMLHttp.6.0"]
                        for (var i = 0, len = versions.length; i &lt; len; i++) {
                          try {
                            new  ActiveXObject(versions[i])
                            arguments.callee.activeXString = versions[i]
                            break
                          } catch (ex) {
                            //跳过
                          }
                        }
                      }
                      return new ActiveXObject(arguments.callee.activeXString)
                    }
                  } else {
                    return function() {
                      throw new Error("No XHR object available")
                    }
                  }
                })()
              </code>
            </pre>
          </div>
        </div>
      </Card>
      <Card dis-hover shadow style="width:660px">
        <h3 slot="title">3.函数绑定</h3>
        <div>
          <p>当把某个对象的方法单独拿出来使用时，由于作用域发生了变化，函数中的this不再指向当前对象，此时我们可以使用原生bind()方法进行绑定。</p>
          <div v-highlight>
            <pre>
              <code>
                var person = {
                  age: 20,
                  say: function() {
                    return this.age;
                  }
                }

                var getAge = person.say;

                //由于是在全局作用域下调用，因此this指向window
                getAge() => undefined

                //使用原生bind()方法进行绑定
                getAge.bind(person)() => 20
              </code>
            </pre>
          </div>
          <p>函数绑定常常和回调函数与事件处理器一起使用，将函数作为变量传递的同时保留代码执行环境。</p>
          <div v-highlight>
            <pre>
              <code>
                /*
                 * var btn = document.getElementById("myBtn")
                **/

                var person = {
                  age: 20,
                  say: function() {
                    return console.log(this.age);
                  }
                }

                //将函数指针以值的形式进行传递，此时this指向myDiv元素
                //输出undefined
                EventUtil.addHandler(myDiv, 'click', person.say);

                //直接调用对象的方法
                //输出20
                EventUtil.addHandler(myDiv, 'click', function(event) {
                  person.say(event);
                });

                //使用函数绑定bind()方法，然后将函数指针以值的形式进行传递
                //此时this指向person对象
                //输出20
                EventUtil.addHandler(myDiv, 'click', person.say.bind(person));
              </code>
            </pre>
          </div>
        </div>
      </Card>
      <Card dis-hover shadow style="width:660px">
        <h3 slot="title">4.函数柯里化</h3>
        <div>
          <p>函数柯里化的基本方法与函数绑定时一样的，使用一个闭包返回一个函数。主要区别在于：当函数被调用时，返回的函数还需要设置一些传入的参数。</p>
          <div v-highlight>
            <pre>
              <code>
                function foo(num1, num2) {
                  return num1 + num2
                }

                function fn(a) {
                  return foo(5, a)
                }

                fn(5) => 10

                /********** 函数柯里化 ********************/
                function foo(num1, num2) {
                  return num1 + num2
                }

                function curry(fn) {
                  var args = Array.prototype.slice.call(arguments, 1)
                  return function() {
                    var innerArgs = Array.prototype.slice.call(arguments, 0)
                    var finalArgs = args.concat(innerArgs)
                    return fn.apply(null, finalArgs)
                  }
                }

                //对foo柯里化，绑定第一个参数
                var x = curry(foo, 5)

                //向foo传入第二个参数，并调用函数
                x(5) => 10

                //或者将参数一次性传入
                var y = curry(foo, 5, 5)
                y() => 10
              </code>
            </pre>
          </div>
          <p>函数柯里化还常常作为函数绑定的一部分包含在其中，构造出更为复杂的bind()函数。（ECMAScript中原生的bind()方法已经实现了函数柯里化）</p>
          <div v-highlight>
            <pre>
              <code>
                //扩展自定义bind()方法，加入函数柯里化
                function bind(fn, context) {
                  var args = Array.prototype.slice.call(arguments, 2);
                  return function () {
                    var innerArgs = Array.prototype.slice.call(arguments, 0);
                    var finalArgs = args.concat(innerArgs);
                    return fn.apply(context, finalArgs);
                  }
                }

                var obj = {
                  color: "red",
                  say: function() {
                    return name + "-" + age + "-" +  this.color;
                  }
                }

                var x = bind(obj.say, obj, "alex");
                x(24) => "alex-24-red"
              </code>
            </pre>
          </div>
        </div>
      </Card>
      <Card dis-hover shadow style="width:660px">
        <h3 slot="title">5.防篡改对象</h3>
        <div>
          <p>默认状况下，所有对象都是可自由扩展属性或方法的。Object.preventExtensions(object)方法可以改变这个行为，即不能再为对象添加属性和方法。对于对象已有属性则丝毫不受影响。</p>
          <div v-highlight>
            <pre>
              <code>
                var obj = {
                  color: "red"
                }

                //对象不可扩展
                Object.preventExtensions(obj);

                //静默失败
                obj.username = "alex";

                //抛出错误
                Object.defineProperty(obj, "name", {
                  writable: true,
                  value: "alex"
                })
              </code>
            </pre>
          </div>
          <p>检测对象是否可以扩展的方法：Object.isExtensible()。</p>
          <div v-highlight>
            <pre>
              <code>
                Object.isExtensible(obj) => false
              </code>
            </pre>
          </div>
        </div>
      </Card>
      <Card dis-hover shadow style="width:660px">
        <h3 slot="title">6.密封对象</h3>
        <div>
          <p>
            密封对象，即对象不可扩展，且已有属性[[Configurable]]特性将被设置为false，这意味着无法通过delete删除属性；不能把属性修改为访问器属性。（注意属性值是可以修改的）
            密封对象使用Object.seal()方法。
          </p>
          <div v-highlight>
            <pre>
              <code>
                var obj = {
                  color: "red"
                }

                //对象不可扩展，不可删除，不可将其修改为访问器属性
                Object.seal(obj);

                //属性值可以修改
                Object.defineProperty(obj, "color", {
                  writable: true,
                  value: "green"
                })

                obj.color => "green"
              </code>
            </pre>
          </div>
          <p>检测对象是否被密封了的方法：Object.isSealed()。</p>
          <div v-highlight>
            <pre>
              <code>
                Object.isSealed(obj) => true
              </code>
            </pre>
          </div>
        </div>
      </Card>
      <Card dis-hover shadow style="width:660px">
        <h3 slot="title">7.冻结对象</h3>
        <div>
          <p>
            冻结对象，即对象不可扩展，又是密封对象，且对象[[writable]]特性将被设置为false。（注意若定义[[set]]函数，访问器属性仍然是可写的）
            冻结对象使用Object.freeze()方法。
          </p>
          <div v-highlight>
            <pre>
              <code>
                var obj = {
                  color: "red"
                }

                Object.defineProperty(obj, "change", {
                  configurable: true,
                  enumerable: true,
                  get: function() {
                    return "yellow";
                  },
                  set: function (value) {
                    if (value === "green") {
                      console.log(value) => "green"
                      //修改属性值无效
                      this.color = "blue";
                    }
                  }
                })

                Object.freeze(obj);

                //访问器属性，属性值可写
                obj.change = "green"

                obj.color => "red"
                obj.change => "yellow"

                //数据属性，抛出错误
                Object.defineProperty(obj, "color", {
                  writable: true,
                  value: "green"
                })
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
  name: 'function-9',
  created() {},
  components: {
    Card
  }
}
</script>

<style scoped lang="stylus">
.function-9
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
