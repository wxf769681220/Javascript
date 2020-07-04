<template>
  <div class="api-1">
    <div class="layout-content">
      <Card dis-hover shadow style="width:480px">
        <h3 slot="title">1.早期动画循环</h3>
        <div>
          <p>使用setInterval()方法来控制所有的动画。</p>
          <div v-highlight>
            <pre>
              <code>
                (function() {
                  function updateAnimations() {
                    doAnimation1();
                    doAnimation1();
                    //其他的动画
                  }

                  setInterval(updateAnimations, 100)
                })();
              </code>
            </pre>
          </div>
        </div>
      </Card>
      <Card dis-hover shadow style="width:480px">
        <h3 slot="title">2.mozRequestAnimationFrame</h3>
        <div>
          <p></p>
          <div v-highlight>
            <pre>
              <code>
              </code>
            </pre>
          </div>
        </div>
      </Card>
      <Card dis-hover shadow style="width:600px">
        <h3 slot="title">3.webkitRequestAnimationFrame与msRequestAnimationFrame</h3>
        <div>
          <p></p>
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
  name: 'api-1',
  created() {},
  components: {
    Card
  }
}
</script>

<style scoped lang="stylus">
.api-1
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
