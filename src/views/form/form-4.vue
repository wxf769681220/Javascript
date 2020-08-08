<template>
  <div class="form-4">
    <Card shadow style="width:500px">
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
</template>

<script>
import { Card } from 'view-design'

export default {
  name: 'form-4',
  components: {
    Card
  }
}
</script>

<style scoped lang="stylus">
.form-4
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
