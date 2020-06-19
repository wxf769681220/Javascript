<template>
  <div class="ajax-1">
    <div class="layout-content">
      <Card dis-hover shadow style="width:550px">
        <h3 slot="title">1.XMLHttpRequest对象</h3>
        <div>
          <p></p>
          <ul class="menu">
            <li>基本类型值：字符串、数值、布尔值和null。（不支持undefined）</li>
            <li>对象：一组无序的键值对。</li>
            <li>数组：一组有序的值的列表。</li>
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
  </div>
</template>

<script>
import { Card } from 'view-design'

export default {
  name: 'ajax-1',
  created() {},
  methods: {},
  components: {
    Card
  }
}
</script>

<style scoped lang="stylus">
.ajax-1
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
