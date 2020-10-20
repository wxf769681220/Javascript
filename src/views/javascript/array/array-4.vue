<template>
  <div class="array-4">
    <Card shadow style="width:450px">
      <h3 slot="title">1.Iterator 构造函数</h3>
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
</template>

<script>
import { Card } from 'view-design'

export default {
  name: 'array-4',
  components: {
    Card
  }
}
</script>

<style scoped lang="stylus">
.array-4
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
