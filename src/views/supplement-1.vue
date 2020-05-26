<template>
  <div class="supplement-1">
    <div class="layout-content">
      <Card :dis-hover="true" shadow style="width:450px">
        <h3 slot="title">1.语法结构-可选的分号</h3>
         <div>
          <p>如果当前语句和随后的非空格字符不能当做一个整体来解析的话，javascript就在当前语句行结束处填补分号。</p>
          <div v-highlight>
            <pre>
              <code>
                var a
                a
                =
                10
                console.log(a)

                //解析
                var a; a = 10; console.log(a);
              </code>
            </pre>
          </div>
          <p>语句分隔，省略分号会导致一些意想不到的情形。</p>
          <div v-highlight>
            <pre>
              <code>
                var x = 1

                (function(){
                  //...
                }())

                //解析
                var x = 1(function(){
                  //...
                }())
              </code>
            </pre>
          </div>
          <p>在语句前添加一个分号，哪怕之前的语句被修改了，分号被误删了，当前语句还是会正确的解析。</p>
          <div v-highlight>
            <pre>
              <code>
                var x = 1

                //以下代码可正常执行
                ;(function(){
                  //...
                }())
              </code>
            </pre>
          </div>
          <p>像"++"，"--"运算符，可作为表达式的前缀或后缀。若用于后缀，它应当与表达式同行。否则行尾将自动填补分号，"++"或"--"，将会被作为下一行代码的前缀使用。</p>
          <div v-highlight>
            <pre>
              <code>
                x
                ++
                y

                //解析
                x;
                ++y;
              </code>
            </pre>
          </div>
        </div>
      </Card>
       <Card :dis-hover="true" shadow style="width:450px">
        <h3 slot="title">2.八进制与十六进制数</h3>
      </Card>
      <Card :dis-hover="true" shadow style="width:450px">
        <h3 slot="title">3.eval()方法</h3>
      </Card>
      <Card :dis-hover="true" shadow style="width:450px">
        <h3 slot="title">4.Function构造函数</h3>
         <div>
          <p>Function构造函数所创建的函数，函数体代码的编译总是在顶层函数执行。</p>
          <div v-highlight>
            <pre>
              <code>
                var x = 1
                function fn() {
                  var x = 2
                  return new Function('return x')
                }

                fn()() => 1
              </code>
            </pre>
          </div>
        </div>
      </Card>
          <Card :dis-hover="true" shadow style="width:450px">
        <h3 slot="title">5.函数式编程- 高价函数</h3>
         <div>
          <p>高价函数：操作函数的函数，它接收一个或多个函数作为参数，并返回一个新函数。</p>
          <div v-highlight>
            <pre>
              <code>
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
  name: 'supplement-2',
  components: {
    Card
  }
}
</script>

<style scoped lang="stylus">
.supplement-1
  position relative
  .layout-content
    display flex
    flex-direction row
    flex-wrap wrap
.ivu-card
  align-self flex-start !important
  margin-top 20px
  margin-right 20px
</style>
