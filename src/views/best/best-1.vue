<template>
  <div class="best-1">
    <Card shadow style="width:500px">
      <h3 slot="title">1.避免全局量</h3>
      <div>
        <p>减少全局量的数量。</p>
        <div v-highlight>
          <pre>
            <code>
              // 定义两个全局变量 ----避免
              var color = "red";
              function getColor() {
                return color;
              }

              // 一个全局变量 ----推荐
              var myColor = {
                color: "red",
                getColor: function(){
                  return this.color;
                }
              }
            </code>
          </pre>
        </div>
      </div>
    </Card>
    <Card shadow style="width:450px">
      <h3 slot="title">2.避免余null进行比较</h3>
      <div>
        <p>可能会由于不充分的类型检测导致发生错误。</p>
        <div v-highlight>
          <pre>
            <code>
              // 避免
              function sortArray(values) {
                if (values !== null) {
                  //...
                }
              }

              // 推荐
              function sortArray(values) {
                if (values instanceof Array) {
                  //...
                }
              }
            </code>
          </pre>
        </div>
      </div>
    </Card>
    <Card shadow style="width:650px">
      <h3 slot="title">3.使用常量</h3>
      <div>
        <p>可能会由于不充分的类型检测导致发生错误。</p>
        <div v-highlight>
          <pre>
            <code>
              // 避免
              function hasMediaSupport() {
                if (!video.canPlayType("video/mp4")) {
                  alert("Video player not available")
                }
              }

              // 推荐
              var Constants = {
                INVALID_VALUE_MSG: "Video player not available",
                INVALID_VALUE_FORMAT: "video/mp4"
              }

              function hasMediaSupport() {
                if (!video.canPlayType(Constants.INVALID_VALUE_FORMAT)) {
                  alert(Constants.INVALID_VALUE_MSG)
                }
              }
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
  name: 'best-1',
  components: {
    Card
  }
}
</script>

<style scoped lang="stylus">
.best-1
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
