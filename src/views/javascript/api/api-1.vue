<template>
  <div class="api-1">
    <Card shadow style="width:480px">
      <h3 slot="title">1.早期动画循环</h3>
      <div>
        <p>使用 setInterval() 方法来控制所有的动画。</p>
        <div v-highlight>
          <pre>
            <code>
              (function() {
                function updateAnimations() {
                  doAnimation1();
                  doAnimation1();
                  // 其他的动画
                }

                setInterval(updateAnimations, 100)
              })();
            </code>
          </pre>
        </div>
      </div>
    </Card>
    <Card shadow style="width:480px">
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
    <Card shadow style="width:680px">
      <h3 slot="title">3.webkitRequestAnimationFrame 与 msRequestAnimationFrame</h3>
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
</template>

<script>
import { Card } from 'view-design'

export default {
  name: 'api-1',
  components: {
    Card
  }
}
</script>

<style scoped lang="stylus">
.api-1
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
