<template>
  <div class="dataType-2">
    <div class="layout-content">
      <Card :dis-hover="true" shadow style="width:550px">
        <h3 slot="title">1.typeof 操作符</h3>
        <div>
          <p>typeof操作符用于检测数据类型时，可能返回以下字符串：</p>
          <div v-highlight>
            <pre>
              <code>
                  //基本类型值
                  typeof undefined   => "undefined"
                  typeof false       => "boolean"
                  typeof "hello"     => "string"
                  typeof 10          => "number"
                  typeof null        => "object"

                  //引用类型值
                  typeof new Object()         => "object"
                  typeof new Function()       => "function"
                  typeof new Array()          => "object"
                  typeof new Date()           => "object"
                  typeof new RegExp()         => "object"
              </code>
            </pre>
          </div>
        </div>
      </Card>
      <Card :dis-hover="true" shadow style="width:550px">
        <h3 slot="title">2.instanceof 操作符</h3>
        <div>
          <p>instanceof操作符用于测试引用类型的值（对象）的类型。若对象是给定引用类型的实例，那么就返回true。</p>
          <div v-highlight>
            <pre>
              <code>
                  //用于检测基本类型值时,始终返回false
                  null instanceof Object    => false

                  //测试基本包装类型时
                  new String() instanceof String    => true
                  new Number() instanceof Number    => true
                  new Boolean() instanceof Boolean  => true

                  //基本用法
                  new Object() instanceof Object      => true
                  new Function() instanceof Function  => true
                  new Array() instanceof Array        => true
                  new Date() instanceof Date          => true
                  new RegExp() instanceof RegExp      => true

                  //自定义类型
                  new Person() instanceof Person      => true
              </code>
            </pre>
          </div>
        </div>
      </Card>
      <Card :dis-hover="true" shadow style="width:620px">
        <h3 slot="title">3.数据检测方法</h3>
        <div>
          <ul class="menu">
            <li>isFinite(value)：当value位于javascript所能保存的数值在最小与最大值之间时，返回true。</li>
            <li>isNaN(value)：对于任何不能被转换为数值的值时，返回true。</li>
            <li>Array.isArray(arr)：检测arr是否是一个数组，若是数组，则返回true。</li>
          </ul>
          <div v-highlight>
            <pre>
              <code>
                isFinite(Number.MAX_VALUE + Number.MAX_VALUE) => false

                isNaN(NaN) => true
                isNaN("red") => true

                Array.isArray(arr)    => true
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
  name: 'dataType-2',
  created() {},
  components: {
    Card
  }
}
</script>

<style scoped lang="stylus">
.dataType-2
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
