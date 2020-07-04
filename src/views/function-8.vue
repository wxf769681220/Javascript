<template>
  <div class="function-8">
    <div class="layout-content">
      <Card dis-hover shadow style="width:530px">
        <h3 slot="title">1.call()方法</h3>
        <div>
          <ul class="menu">
            <li>在JavaScript中，函数实际上就是某个对象的方法。</li>
            <li>某个对象的属性的值是一个函数，那么就称这个函数是该对象的一个方法。</li>
            <li>全局函数实际上就是window对象的一个方法。</li>
          </ul>
          <div v-highlight>
            <pre>
              <code>
                //全局函数
                function fn() {}

                //调用window对象上的一个方法
                wnidow.fn()
              </code>
            </pre>
          </div>
          <p>函数作为window对象的一个方法调用call()方法：window.someFunction.call(obj)。（window可省略）</p>
          <div v-highlight>
            <pre>
              <code>
                var obj = {
                  name: "alex",
                  age: 24
                }

                function fn() {
                  return this.name + this.age
                }

                //间接调用函数
                //该函数内部this指向obj
                fn.call(obj) => "alex24"
              </code>
            </pre>
          </div>
          <p>函数作为某个对象的一个方法调用call()方法：Object.property.call(obj)</p>
          <div v-highlight>
            <pre>
              <code>
                var obj = {
                  name: "alex",
                  age: 24,
                  say: function() {
                    return this.name + this.age
                  }
                }

                var o = {
                  name: "lee",
                  age: 20
                }

                //间接调用函数
                //该函数内部this指向o
                obj.say.call(o) => "lee20"
              </code>
            </pre>
          </div>
          <p>带参数的call()方法。</p>
          <div v-highlight>
            <pre>
              <code>
                var obj = {
                  name: "alex",
                  age: 24,
                  say: function(a, b) {
                    return this.name + this.age + "-" + (a + b)
                  }
                }

                var o = {
                  name: "lee",
                  age: 20
                }

                //间接调用函数
                //该函数内部this指向o
                obj.say.call(o,10,11) => "lee20-21"
              </code>
            </pre>
          </div>
        </div>
      </Card>
      <Card dis-hover shadow style="width:530px">
        <h3 slot="title">2.apply()方法</h3>
        <div>
          <ul class="menu">
            <li>apply()方法与call()方法非常相似。</li>
            <li>apply()方法与call()方法的区别：apply()方法接受数组形式的参数。</li>
            <li>如果要使用数组而不是参数列表，则apply()方法非常方便。</li>
          </ul>
          <div v-highlight>
            <pre>
              <code>
                var obj = {
                  name: "alex",
                  age: 24,
                  say: function(a, b) {
                    return this.name + this.age + "-" + (a + b)
                  }
                }

                var o = {
                  name: "lee",
                  age: 20
                }

                //间接调用函数
                //该函数内部this指向o
                //参数以数组的形式传入
                obj.say.apply(o,[10, 11]) => "lee20-21"
              </code>
            </pre>
          </div>
          <p>若apply()的第一个参数不是对象，在非严格模式下与严格模式下的行为不一样。</p>
          <div v-highlight>
            <pre>
              <code>
                var obj = {
                  name: "alex",
                  age: 24,
                  say: function (a,b) {
                    //非严格模式与严格模式下有所区别
                    console.log(this)
                    return this.name + this.age + "-" + (a + b)
                  }
                }

                var o = 1

                obj.say.apply(o, [10,11]) => "NaN-21"
              </code>
            </pre>
          </div>
          <p>使用apply()方法，在数组上模拟max方法。</p>
          <div v-highlight>
            <pre>
              <code>
                //获取最大值
                Math.max(1,2,3) => 3

                //第一个参数可以是任意值
                var arr = [1,2,3]
                Math.max.apply(Math, arr) => 3
                Math.max.apply(null, arr) => 3
              </code>
            </pre>
          </div>
        </div>
      </Card>
      <Card dis-hover shadow style="width:600px">
        <h3 slot="title">3.bind()方法</h3>
        <div>
          <ul class="menu">
            <li>bind()方法创建一个新函数。</li>
            <li>这个新函数的this被指定为bind()的第一个参数。而其余参数将作为新函数的参数，供调用时使用。</li>
            <li>返回一个原函数的拷贝，并拥有指定的this值和初始参数。</li>
          </ul>
          <div v-highlight>
            <pre>
              <code>
                //注意：bind()方法返回的是一个新函数
                var obj = {
                  name: "alex",
                  age: 24,
                  say: function(a, b) {
                    return this.name + this.age + "-" + (a + b)
                  }
                }

                var o = {
                  name: "lee",
                  age: 20
                }

                var copyFn = obj.say.bind(o,10,11)
                copyFn() => "lee20-21"
              </code>
            </pre>
          </div>
          <p>创建绑定函数的应用。</p>
          <div v-highlight>
            <pre>
              <code>
                //全局变量
                var color = "red";

                var obj = {
                  color: "green",
                  getColor: function() {
                    return this.color
                  }
                }

                //将一个方法从对象中拿出来，然后再调用
                //由于函数是在全局作用域中调用的,因此函数中的this指向的window
                var x = obj.getColor
                x() => "red"

                //创建绑定函数
                var y = x.bind(obj)
                y() => "green"
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
  name: 'function-8',
  created() {},
  components: {
    Card
  }
}
</script>

<style scoped lang="stylus">
.function-8
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
