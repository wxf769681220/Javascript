<template>
  <div class="object-3">
    <Card shadow style="width:540px">
      <h3 slot="title">1.对象序列化</h3>
      <p>ECMAScript5 提供了内置函数 JSON.stringify() 和 JSON.parse() 用来序列化和还原 javascript 对象，这些方法都使用 JSON 作为数据交换格式。</p>
      <div v-highlight>
        <pre>
          <code>
            var o = { x: 1, y: 2, z: 3 }

            // 对象转字符串
            var s = JSON.stringify(o)
            s => => '{ x: 1, y: 2, z: 3 }'

            // 字符串转对象
            var p = JSON.parse(s)
            p => { x: 1, y: 2, z: 3 }
          </code>
        </pre>
      </div>
    </Card>
  </div>
</template>

<script>
import { Card } from 'view-design'

export default {
  name: 'object-3',
  components: {
    Card
  }
}
</script>

<style scoped lang="stylus">
.object-3
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
