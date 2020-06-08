<template>
  <div class="function-7">
    <div class="layout-content">
      <Card dis-hover shadow style="width:450px">
        <h3 slot="title">1.块级作用域</h3>
        <div>
          <p></p>
          <div v-highlight>
            <pre>
              <code>
                function fn() {
                  //没有块级作用域
                  for (var i = 0; i &lt; 10; i++) {
                    //...
                  }
                  i => 10
                }
                /************************/
                function fn() {
                  //块级作用域
                  (function() {
                    for (var i = 0; i &lt; 10; i++) {
                      //...
                    }
                  })();
                  i => error
                }
              </code>
            </pre>
          </div>
        </div>
      </Card>
      <Card dis-hover shadow style="width:450px">
        <h3 slot="title">2.私有变量</h3>
        <div>
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
          <div v-highlight>
            <pre>
              <code>
                (function{
                  //私有变量
                  var privateVariable = 10

                  //私有函数
                  function privateFn() {
                    return true
                  }

                  //构造函数
                  function Fn() {}

                  //特权方法
                  Fn.prototype.publicMethod = function() {
                    privateVariable++
                    return privateFn()
                  }
                })()
              </code>
            </pre>
          </div>
        </div>
      </Card>
      <Card dis-hover shadow style="width:500px">
        <h3 slot="title">4.单例模式</h3>
        <div>
          <p>单例，指的就是只有一个实例的对象。单例模式通过为单例添加私有变量、私有函数和特权方法能够使其得到增强。</p>
          <div v-highlight>
            <pre>
              <code>
                //通过对象字面量创建单例对象
                var o = {
                  name: 'lee',
                  say: function() {
                    return this.name
                  }
                }

                /****** 单例模式 *******/
                var o = function() {
                  //私有变量
                  var name = 'lee'

                  //私有函数
                  function privateFn() {
                    return true
                  }

                  //特权方法和属性
                  return {
                    name: name,
                    say: function() {
                      return this.name
                    }
                  }
                }

                o().say() => 'lee'
              </code>
            </pre>
          </div>
        </div>
      </Card>
      <Card dis-hover shadow style="width:500px">
        <h3 slot="title">5.单例模式增强</h3>
        <div>
          <p>返回对象之前对其增强，单例必须是某种类型的实例，同时还必须添加某些属性或方法对其加以增强。</p>
          <div v-highlight>
            <pre>
              <code>
                var o = function() {
                  //私有变量
                  var privateVariable = 10

                  //私有函数
                  function privateFn() {
                    return true
                  }

                  //创建自定义对象
                  var obj = new CustomType()

                  //增强
                  obj.name = 'lee'

                  obj.say = function() {
                    return this.name
                  }

                  //返回这个对象
                  return obj
                }
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
