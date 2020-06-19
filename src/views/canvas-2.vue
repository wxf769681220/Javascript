<template>
  <div class="canvas-2">
    <div class="layout-content">
      <Card dis-hover shadow style="width:500px">
        <h3 slot="title">1.富文本编辑</h3>
        <div>
          <p>所间即所得</p>
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
  name: 'canvas-2',
  created() {},
  components: {
    Card
  }
}
</script>

<style scoped lang="stylus">
.canvas-2
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
