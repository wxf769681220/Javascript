<template>
  <div class="supplement-1">
    <div class="layout-content">
      <Card :dis-hover="true" shadow style="width:650px">
        <h3 slot="title">常量和局部变量</h3>
        <div>
          <p>const关键字用来定义常量。即不可重复赋值的变量，任何尝试修改这个值的操作，都会抛出一个异常。</p>
          <div v-highlight>
            <pre>
              <code>
                const x = 10
                x = 1 //抛出一个异常
              </code>
            </pre>
          </div>
          <p>let关键字的使用方式。若出现两个变量同名，则会抛出一个异常。</p>
          <div v-highlight>
            <pre>
              <code>
                //同名变量
                let x = 1
                let x = 10 //这段代码会抛出一个异常

                //函数内部
                function fn() {
                  let x = 0, result = [] //x、result在函数内部都有定义

                  for (let i = 0; i &lt; 10; i++) { //i仅在循环体中有定义
                    let y = x * i //y仅在循环体中有定义
                    x += y
                    result.push(x)
                  }

                  return result
                }

                //for-in循环
                var o = {x: 1, y:2}
                for (let p in o) { //仅在循环体中有定义
                  p => x y
                }
                p => error
              </code>
            </pre>
          </div>
        </div>
      </Card>
      <Card :dis-hover="true" shadow style="width:650px">
        <h3 slot="title">解构赋值</h3>
        <div>
          <p>解构赋值要求左侧与右侧的数组或对象直接量在语法上保持格式一致。</p>
          <p>在解构过程中，右侧的数组和对象中的一个或多个值会被提取出来，并赋值给左侧对应的变量名。解构赋值还用于初始化用var或let新声明的变量。</p>
          <div v-highlight>
            <pre>
              <code>
                let [x, y] = [1, 2]

                //等价于
                let x = 1, y = 2
              </code>
            </pre>
          </div>
          <p>右侧数组包含的元素与左侧变量一一对应，但数量上并不需要一致。左侧多余变量使用undeifned值填充，右侧多余值会被忽略。</p>
          <div v-highlight>
            <pre>
              <code>
                let [x, y] = [1]                 //let x = 1, y = undefined
                let [x] = [1, 2]                 //let x = 1
                let [,x,,y] = [1, 2, 3, 4]       //let x = 2, y = 4
                let [x, [y,z]] = [1, [2,3]]      //let x = 1, y = 2, z = 3
              </code>
            </pre>
          </div>
          <p>链式解构赋值。</p>
          <div v-highlight>
            <pre>
              <code>
                let sum1, sum2, arr;
                arr = [sum1, sum2] = [1,2,3,4]

                //等价于
                let sum1 = 1, sum2 = 2, arr = [1,2,3,4];
              </code>
            </pre>
          </div>
          <p>解构赋值在对象上的应用。</p>
          <div v-highlight>
            <pre>
              <code>
                //对象
                let o = {x:1, y:2, z:3}

                //解构赋值
                let {x:a, y:b, z:c} = o

                a => 1
                b => 2
                c => 3
              </code>
            </pre>
          </div>
        </div>
      </Card>
      <Card dis-hover shadow style="width:550px">
        <h3 slot="title">2.eval()方法</h3>
        <div>
          <p>eval()方法就像一个完整的javascript解析器，它接收一个参数，即要执行的代码字符串。</p>
          <div v-highlight>
            <pre>
            <code>
              eval("alert('hello!')")

              //等价于
              alert("hello!")
            </code>
          </pre>
          </div>
          <p>eval()执行的代码被认为是包含该次调用的执行代码的一部分，因此被执行的代码具有与该执行环境相同的作用域链。</p>
          <div v-highlight>
            <pre>
            <code>
              var x = 1

              eval("alert(x + 1)") => 2

              eval("function fn() {return x + 1}")

              fn() => 2

              //严格模式下，外部无法访问eval()中创建的任何变量或函数
              'user strict'
              fn() => error
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
  name: 'supplement-1',
  components: {
    Card
  }
}
</script>

<style scoped lang="stylus">
.supplement-1
  position: relative
  .layout-content
    display: flex
    flex-direction: row
    flex-wrap: wrap
.ivu-card
  align-self: flex-start !important
  margin-top: 20px
  margin-right: 20px
</style>
