<template>
  <div class="function-7">
    <div class="layout-content">
      <Card dis-hover shadow style="width:450px">
        <h3 slot="title">1.模仿块级作用域</h3>
        <div>
          <p>javascript中没有块级作用域。</p>
          <div v-highlight>
            <pre>
              <code>
                //没有块级作用域
                for (var i = 0; i &lt; 10; i++) {
                  //...
                }
                i => 10

                //定义一个私有作用域，来仿块级作用域
                (function() {
                  var i;
                  for (i = 0; i &lt; 10; i++) {
                    //...
                  }
                })();
                i => error
              </code>
            </pre>
          </div>
        </div>
      </Card>
      <Card dis-hover shadow style="width:450px">
        <h3 slot="title">2.私有变量</h3>
        <div>
          <p>任何在函数中定义的变量，都可以认为是私有变量。因为不能在函数的外部访问这些变量。</p>
          <div v-highlight>
            <pre>
              <code>
                function Fn() {
                  //私有变量
                  var privateVariable = 10

                  //私有函数
                  function privateFn() {
                    return true
                  }

                  //特权方法
                  this.publicMethod = function() {
                    privateVariable++
                    return privateFn()
                  }
                }
              </code>
            </pre>
          </div>
        </div>
      </Card>
      <Card dis-hover shadow style="width:500px">
        <h3 slot="title">3.静态私有变量</h3>
        <div>
          <p>在私有作用域中定义私有变量、函数或特权方法。</p>
          <div v-highlight>
            <pre>
              <code>
                //创建一个私有作用域
                (function() {
                  //私有变量
                  var privateVariable = 10

                  //私有函数
                  function privateFn() {
                    //...
                  }

                  //构造函数
                  //没有使用var声明函数的函数表达式
                  //这样就可以在全局调用该构造函数了
                  Fn = function() {
                    this.name = "alex"
                  }

                  //特权方法
                  Fn.prototype.publicMethod = function () {
                    privateFn()
                    return privateVariable++
                  }
                })();

                //实例化对象（全局调用）
                var x = new Fn("alex")
                x.name = "alex"
                x.publicMethod() => 10
              </code>
            </pre>
          </div>
        </div>
      </Card>
      <Card dis-hover shadow style="width:500px">
        <h3 slot="title">4.单例模式（singleton pattern）</h3>
        <div>
          <p>单例，指的就是只有一个实例的对象。单例模式：保证某个类型仅有一个实例，并提供一个访问它的全局访问点。</p>
          <div v-highlight>
            <pre>
              <code>
                //单例
                var o = {
                  username: "lee",
                  age: 24,
                  getUsername: function() {
                    return this.username
                  },
                  getAge: function() {
                    return this.age
                  }
                }

                //单例模式
                var o = (function() {
                  //私有变量
                  var username = 'lee';
                  var age = 24;

                  //私有函数
                  function privateFn() {
                    //...
                  }

                  //公共方法
                  return {
                    getUsername: function() {
                      return username
                    },
                    getAge: function() {
                      return age
                    }
                  }
                })();

                //只能通过公共方法获取私有变量
                o.getUsername() => 'lee'
                o.getAge() => 24
              </code>
            </pre>
          </div>
        </div>
      </Card>
      <Card dis-hover shadow style="width:560px">
        <h3 slot="title">5.单例模式增强</h3>
        <div>
          <p>返回对象之前对其增强，单例必须是某种类型的实例，同时还必须添加某些属性或方法对其加以增强。</p>
          <div v-highlight>
            <pre>
              <code>
                var o = (function () {
                  //私有变量
                  var username = 'lee';
                  var age = 24;

                  //创建自定义类型对象
                  function CustomType() {
                    //...
                  }

                  //添加原型属性增强
                  CustomType.prototype.getUsername = function () {
                    return username;
                  }
                  CustomType.prototype.getAge = function () {
                    return age;
                  }

                  //实例化对象
                  var user = new CustomType()

                  //添加实例属性增强
                  user.username = username;
                  user.age = age;

                  //返回这个对象
                  return user
                })();

                o.username      => "lee"
                o.age           => 24
                o.getUsername() => "lee"
                o.getAge()     => 24
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
  name: 'function-7',
  created() {},
  components: {
    Card
  }
}
</script>

<style scoped lang="stylus">
.function-7
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
