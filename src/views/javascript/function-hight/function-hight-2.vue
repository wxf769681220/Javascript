<template>
  <div class="function-hight-2">
    <Card shadow style="width:600px">
      <h3 slot="title">1.作用域安全的构造函数</h3>
      <div>
        <p>作用域安全的构造函数，首先要确认 this 对象是正确类型的实例。若不是，则会创建新的实例并返回。作用域安全的构造函数不会影响原型链的继承。</p>
        <div v-highlight>
          <pre>
            <code>
              /**
               * 无论是作为构造函数调用还是作为普通函数调用
               * 都会返回一个 Person 的新实例
               * 从而避免在全局对象上意外设置属性
               */
              function Person(name, age) {
                if (this instanceof Person) {
                  this.username = name;
                  this.age = age;
                  this.friends = ["tom", "Jerry", "Speike"]
                } else {
                  return new Person(name, age)
                }
              }
            </code>
          </pre>
        </div>
      </div>
    </Card>
    <Card shadow style="width:900px">
      <h3 slot="title">2.惰性载入函数</h3>
      <div>
        <p>
          函数体中包含大量的 if 语句，每次调用函数时，都要对 if 语句的每个分支进行检查。实际上对于某些函数来说，在第一次调用时，if 语句的某个分支可以决定结果的，
          就不需要每次调用函数时都去执行 if 语句再去检查各个分支。比如：createXHR()函数：
        </p>
        <div v-highlight>
          <pre>
            <code>
              /**
               * 惰性载入函数的实现
               * if语句的每一个分支都会为createXHR变量赋值
               * 若某个分支可以决定结果，则用新赋值的createXHR变量覆盖了原有的函数
               * 最后返回调用这个新赋 createXHR 函数
               */
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
      </div>
    </Card>
    <Card shadow style="width:660px">
      <h3 slot="title">3.防篡改对象</h3>
      <div>
        <p>默认状况下，所有对象都是可自由扩展属性或方法的。Object.preventExtensions(object)方法可以改变这个行为，即不能再为对象添加属性和方法。对于对象已有属性则丝毫不受影响。</p>
        <div v-highlight>
          <pre>
            <code>
              var obj = {
                color: "red"
              }

              // 对象不可扩展
              Object.preventExtensions(obj);

              // 静默失败
              obj.username = "alex";

              // 抛出错误
              Object.defineProperty(obj, "username", {
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
    <Card shadow style="width:660px">
      <h3 slot="title">4.密封对象</h3>
      <div>
        <p>
          密封对象，即对象不可扩展，且已有属性 [[Configurable]] 特性将被设置为 false，这意味着无法通过 delete 操作符删除属性；不能把属性修改为访问器属性。（注意属性值是可以修改的）
          密封对象使用 Object.seal() 方法。
        </p>
        <div v-highlight>
          <pre>
            <code>
              var obj = {
                color: "red"
              }

              // 对象不可扩展，
              // 对象不可删除
              // 不可将其修改为访问器属性
              Object.seal(obj);

              // 属性值可以修改
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
    <Card shadow style="width:660px">
      <h3 slot="title">5.冻结对象</h3>
      <div>
        <p>
          冻结对象，即对象不可扩展，又是密封对象，且对象 [[writable]] 特性将被设置为 false。（注意若定义 [[set]] 函数，访问器属性仍然是可写的）
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
                    // 修改属性值无效
                    this.color = "blue";
                  }
                }
              })

              Object.freeze(obj);

              // 访问器属性，属性值可写
              obj.change = "green"

              obj.color => "red"
              obj.change => "yellow"

              // 数据属性，抛出错误
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
</template>

<script>
import { Card } from 'view-design'

export default {
  name: 'function-hight-2',
  created() {},
  components: {
    Card
  }
}
</script>

<style scoped lang="stylus">
.function-hight-2
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
