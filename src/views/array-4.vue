<template>
  <div class="array-4">
    <div class="layout-content">
      <Card dis-hover shadow style="width:450px">
        <h3 slot="title">1.Iterator构造函数</h3>
        <div>
          <p></p>
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
  name: 'array-4',
  created() {},
  components: {
    Card
  }
}
</script>

<style scoped lang="stylus">
.array-4
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
