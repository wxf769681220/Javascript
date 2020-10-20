<template>
  <div class="es6-16">
    <Card shadow style="width:600px">
      <h3 slot="title">1.</h3>
      <p></p>
      <div v-highlight>
        <pre>
          <code>
          </code>
        </pre>
      </div>
    </Card>
  </div>
</template>

<script>
import { Card } from 'view-design'

export default {
  name: 'es6-16',
  components: {
    Card
  }
}
</script>

<style scoped lang="stylus">
.es6-16
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
