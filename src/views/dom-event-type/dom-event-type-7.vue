<template>
  <div class="dom-event-type-7">
    <Card shadow style="width:560px">
      <h3 slot="title">1.剪切板事件</h3>
      <div>
        <p>剪切板的6个事件：</p>
        <ul class="menu">
          <li>beforecopy：</li>
          <li>copy：</li>
          <li>beforecut：</li>
          <li>cut：</li>
          <li>beforepaste：</li>
          <li>paste：</li>
        </ul>
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
  name: 'dom-event-type-7',
  components: {
    Card
  }
}
</script>

<style scoped lang="stylus">
.dom-event-type-7
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
