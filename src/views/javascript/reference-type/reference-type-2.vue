<template>
  <div class="reference-type-2">
    <div class="layout-content">
      <Card dis-hover shadow style="width:auto">
        <h3 slot="title">1.RegExp类型</h3>
        <div>
          <div v-highlight>
            <pre>
              <code>
                //匹配空格
                /\s+/

                //匹配非数字值
                /[^\d]/.test(value)
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
  name: 'reference-type-2',
  created() {},
  components: {
    Card
  }
}
</script>

<style scoped lang="stylus">
.reference-type-2
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
