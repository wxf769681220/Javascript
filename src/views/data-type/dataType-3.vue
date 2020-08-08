<template>
  <div class="dataType-3">
    <Card shadow style="width:550px">
      <h3 slot="title">1.typeof 操作符</h3>
      <div>
        <p>typeof 操作符用于检测数据类型时，可能返回以下字符串：</p>
        <div v-highlight>
          <pre>
            <code>
              // 基本类型值
              typeof "hi"        => "string"
              typeof 10          => "number"
              typeof false       => "boolean"
              typeof undefined   => "undefined"
              typeof null        => "object"

              // 引用类型值
              typeof new Function()     => "function"
              typeof new Object()       => "object"
              typeof new Array()        => "object"
              typeof new Date()         => "object"
              typeof new RegExp()       => "object"
            </code>
          </pre>
        </div>
      </div>
    </Card>
    <Card shadow style="width:650px">
      <h3 slot="title">2.instanceof 操作符</h3>
      <div>
        <p>instanceof 操作符用于检测引用类型的值（对象）的类型。若对象是给定引用类型的实例，则返回 true。</p>
        <div v-highlight>
          <pre>
              <code>
                  // 检测基本类型值时，始终返回 false
                  null instanceof Object    => false

                  // 检测基本包装类型
                  Object('') instanceof String     => true
                  Object(0) instanceof Number      => true
                  Object(true) instanceof Boolean  => true

                  // 检测引用类型
                  new Object() instanceof Object      => true
                  new Function() instanceof Function  => true
                  new Array() instanceof Array        => true
                  new Date() instanceof Date          => true
                  new RegExp() instanceof RegExp      => true

                  // 检测自定义类型
                  new Person() instanceof Person      => true
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
  name: 'dataType-3',
  components: {
    Card
  }
}
</script>

<style scoped lang="stylus">
.dataType-3
  display: flex
  flex-direction: row
  flex-wrap: wrap
  >>>.ivu-card
    display: block
    margin-top: 20px
    margin-right: 20px
    font-size: 16px !important
    color: #000 !important
</style>
