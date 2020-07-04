<template>
  <div class="client-2">
    <div class="layout-content">
      <Card dis-hover shadow style="width:400px">
        <h3 slot="title">1.变量</h3>
        <div>
          <p>使用delete操作符删除变量时抛出SyntaxError错误。</p>
          <div v-highlight>
            <pre>
              <code>
                //非严格模式
                var x = 1
                delete x => //返回false
                x => 1

                //'use strict'
                var y = 10
                delete y => //抛出SyntaxError错误
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
  name: 'client-2',
  created() {},
  components: {
    Card
  }
}
</script>

<style scoped lang="stylus">
.client-2
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
