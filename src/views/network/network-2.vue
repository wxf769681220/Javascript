<template>
  <div class="network-2">
    <Card shadow style="width:520px">
      <h3 slot="title">1.SSL</h3>
    </Card>
  </div>
</template>

<script>
import { Card } from 'view-design'

export default {
  name: 'network-2',
  components: {
    Card
  }
}
</script>

<style scoped lang="stylus">
.network-2
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
