-5<template>
  <div class="bom-5">
    <div class="layout-content">
      <Card dis-hover shadow style="width:600px">
        <h3 slot="title">1.history对象</h3>
        <div>
          <p>history对象保存着用户上网的历史记录。</p>
          <div v-highlight>
            <pre>
              <code>
                //后退一步
                history.go(-1)
                history.back()

                //前进一步
                history.go(1)
                history.forward()

                //前进两步
                history.go(2)

                //跳转至历史记录中包含该字符串的第一个位置
                //若历史记录中不包含该字符串,则什么也不做
                history.go('baidu.com')
              </code>
            </pre>
          </div>
        </div>
      </Card>
      <Card dis-hover shadow style="width:600px">
        <h3 slot="title">2.length属性</h3>
        <div>
          <p>history对象的length属性，保存着历史记录的数量。</p>
          <div v-highlight>
            <pre>
              <code>
                if (history.length === 0) {
                  //这里应该是用户打开窗口后的第一个页面
                }
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
  name: 'bom-5',
  created() {},
  components: {
    Card
  }
}
</script>

<style scoped lang="stylus">
.bom-5
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
