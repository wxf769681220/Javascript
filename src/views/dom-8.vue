<template>
  <div class="dom-8">
    <div class="layout-content">
      <Card dis-hover shadow style="width:600px">
        <h3 slot="title">1.DOM2和DOM3</h3>
        <div>
          <p>DOM1级主要定义了HTML和XML文档的底层结构。DOM2和DOM3级则在这个解构上引入了耕读ode交互能力。</p>
          <!-- <div v-highlight>
            <pre>
              <code>

              </code>
            </pre>
          </div> -->
        </div>
      </Card>
    </div>
  </div>
</template>

<script>
import { Card } from 'view-design'

export default {
  name: 'dom-8',
  created() {},
  components: {
    Card
  }
}
</script>

<style scoped lang="stylus">
.dom-8
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
