<template>
  <div class="statement-1">
    <div class="layout-content">
      <Card :dis-hover="true" shadow style="width:450px">
        <h3 slot="title">1.表达式语句</h3>
        <div>
          <p>原始表达式：表达式的最小单位，包括：常量或直接量、关键字或保留字和变量（注意：undefined是一个全局变量，它不是一个关键字）。</p>
          <div v-highlight>
            <pre>
              <code>
                //常量或直接量
                1.23 'hello' /pattern/

                //关键字或保留字
                true / false / null / this

                //变量
                i
                sum
                undefined
              </code>
            </pre>
          </div>
          <p>其他表达式（初始化表达式会各自计算一次）</p>
          <div v-highlight>
            <pre>
              <code>
                //对象创建表达式
                new Object()

                //对象初始化表达式
                {x:1, y:2} [1,2]

                //属性访问表达式
                o.name
                o['x']

                //函数表达式
                var fn = function() {}

                //函数调用表达式
                fn()
              </code>
            </pre>
          </div>
        </div>
      </Card>
      <Card dis-hover shadow style="width:450px">
        <h3 slot="title">2.复合语句</h3>
        <div>
          <p>用花括号将多条语句括起来，形成一条复合语句。语句块结尾不需要分号。语句块没有作用域，即其中声明的变量并不是语句块私有的。</p>
          <div v-highlight>
            <pre>
              <code>
                {
                  var x = 1;
                  var y = 2;
                  console.log(x + y);
                }
              </code>
            </pre>
          </div>
        </div>
      </Card>
      <Card :dis-hover="true" shadow style="width:450px">
        <h3 slot="title">3.空语句</h3>
        <div>
          <p>允许包含0条语句的语句。</p>
          <div v-highlight>
            <pre>
              <code>
                var arr = [1, 2, 3];
                var i = 0;
                for ( ; i &lt; arr.length; a[i++] = 0) ;
              </code>
            </pre>
          </div>
          <p>在此循环中，所有的操作都在表达式a[i++]中完成，这里不需要任何循环体，然而javascript需要循环体中至少包含一条语句，因此，这里使用一个单独的分号来表示一条空语句。</p>
          <div v-highlight>
            <pre>
              <code>
                //空语句加注释说明
                if ((a == 0) || (b == 0)) /* empty */ ;
                c = 0; //总是会执行
              </code>
            </pre>
          </div>
        </div>
      </Card>
      <Card :dis-hover="true" shadow style="width:450px">
        <h3 slot="title">4.声明语句</h3>
        <div>
          <p>var语句用来声明一个或多个变量。通过var声明的变量是无法通过delete删除的。</p>
          <div v-highlight>
            <pre>
              <code>
                var x = 1;
                var y, z;

                delete x;
                x => 1
              </code>
            </pre>
          </div>
          <p>关键字function用于声明函数。和var语句一样，函数声明语句创建的变量也是无法删除的，但是可以重新赋值。</p>
          <div v-highlight>
            <pre>
              <code>
                function fn() {
                  return true;
                }

                delete fn;
                fn() => true

                var x = fn;
                x() => true
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
  name: 'statement-1',
  created() {},
  components: {
    Card
  }
}
</script>

<style scoped lang="stylus">
.statement-1
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
