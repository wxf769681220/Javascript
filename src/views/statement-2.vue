<template>
  <div class="statement-2">
    <div class="layout-content">
      <Card :dis-hover="true" shadow style="width:450px">
        <h3 slot="title">1.标签语句</h3>
      </Card>
       <Card :dis-hover="true" shadow style="width:450px">
        <h3 slot="title">2.其他语句类型</h3>
      </Card>
    </div>
  </div>
</template>

<script>
import { Card } from 'view-design'

export default {
  name: 'statement-2',
  components: {
    Card
  }
}
</script>

<style scoped lang="stylus">
.statement-2
  position relative
  .layout-content
    display flex
    flex-direction row
    flex-wrap wrap
.ivu-card
  align-self flex-start !important
  margin-top 20px
  margin-right 20px
</style>
