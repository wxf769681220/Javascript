-5<template>
  <div class="bom-7">
    <div class="layout-content">
      <Card dis-hover shadow style="width:400px">
        <h3 slot="title">1.能力检测</h3>
      </Card>
      <Card dis-hover shadow style="width:400px">
        <h3 slot="title">2.怪癖检测</h3>
      </Card>
      <Card dis-hover shadow style="width:400px">
        <h3 slot="title">3.用户代理检测</h3>
      </Card>
    </div>
  </div>
</template>

<script>
import { Card } from 'view-design'

export default {
  name: 'bom-7',
  created() {},
  components: {
    Card
  }
}
</script>

<style scoped lang="stylus">
.bom-7
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
