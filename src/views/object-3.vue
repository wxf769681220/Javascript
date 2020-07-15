<template>
  <div class="object-3">
    <div class="layout-content">
      <Card dis-hover shadow style="width:540px">
        <h3 slot="title">1.对象序列化</h3>
        <div>
          <p>ECMAScript5提供了内置函数JSON.stringify()和JSON.parse()用来序列化和还原javascript对象，这些方法都使用JSON作为数据交换格式。</p>
          <div v-highlight>
            <pre>
              <code>
                var o = {x:1, y:2, z:3}

                //对象转字符串
                var s = JSON.stringify(o)
                s => => '{x:1, y:2, z:3}'

                //字符串转对象
                var p = JSON.parse(s)
                p => {x:1, y:2, z:3}
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
  name: 'object-3',
  created() {},
  components: {
    Card
  }
}
</script>

<style scoped lang="stylus">
.object-3
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
