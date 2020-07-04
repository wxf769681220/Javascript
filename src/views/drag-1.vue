<template>
  <div class="drag-1">
    <div class="layout-content">
      <Card :dis-hover="true" shadow style="width:650px">
        <h3 slot="title">1.拖放事件</h3>
        <div>
          <p>拖动某元素时，将依次触发下列事件：</p>
          <ul class="menu">
            <li>dragstart：元素被拖动时触发。</li>
            <li>drag：在dragstart事件触发之后，随即触发，且在元素被拖动期间持续触发该事件。</li>
            <li>dragend：拖动停止（无论被拖动元素是否被拖动到了有效的放置目标上，还是放到了无效的放置目标上）时触发。</li>
          </ul>
          <div v-highlight>
            <pre>
              <code>
                /*draggable属性表示元素可拖动
                  &lt;button id="btn" draggable="true">button&lt;/button>
                **/

                var btn = document.getElementById("btn")

                EventUtil.addHandler(btn, 'dragstart', function (event) {
                  //event
                })

                EventUtil.addHandler(btn, 'drag', function (event) {
                  //event
                })

                EventUtil.addHandler(btn, 'dragend', function (event) {
                  //event
                })
              </code>
            </pre>
          </div>
          <p>当某个元素被拖动到放置目标时，将依次触发下列事件：</p>
          <ul class="menu">
            <li>dragenter：元素被拖动到放置目标上时触发。</li>
            <li>dragover：在dragenter事件触发之后，随即触发，且被拖动元素在放置目标的范围内移动期间持续触发该事件。</li>
            <li>dragleave或drop：元素被拖出了放置目标时触发dragleave事件。元素</li>
            <li>drop：被拖动元素被放到了放置目标中时触发。</li>
          </ul>
          <div v-highlight>
            <pre>
              <code>
                /*自定义放置目标
                  &lt;div id="div">&lt;/div>
                **/
                var div = document.getElementById("div")
                //可以将任何元素变成有效的放置目标
                //方法是重写下列事件的默认行为
                EventUtil.addHandler(div, 'dragenter', function (event) {
                  EventUtil.preventDefault(event)
                })
                EventUtil.addHandler(div, 'dragover', function (event) {
                  EventUtil.preventDefault(event)
                })
                EventUtil.addHandler(div, 'drop', function (event) {
                  EventUtil.preventDefault(event)
                })
              </code>
            </pre>
          </div>
        </div>
      </Card>
      <Card :dis-hover="true" shadow style="width:350px">
        <h3 slot="title">2.dataTransfer对象</h3>
        <div>
          <p>拖动操作时实现数据交换。</p>
        </div>
      </Card>
      <Card :dis-hover="true" shadow style="width:350px">
        <h3 slot="title">3.dataTransfer对象的属性和方法</h3>
        <div>
        </div>
      </Card>
      <Card :dis-hover="true" shadow style="width:350px">
        <h3 slot="title">4.dropEffect与effectAllowed</h3>
        <div>
          <p>确定被拖动的元素以及作为放置目标的元素能够接受什么操作。</p>
        </div>
      </Card>
    </div>
  </div>
</template>

<script>
import { Card } from 'view-design'

export default {
  name: 'drag-1',
  created() {},
  components: {
    Card
  }
}
</script>

<style scoped lang="stylus">
.drag-1
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
