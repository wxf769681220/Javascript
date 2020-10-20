<template>
  <div class="dom-event-type-3">
    <Card shadow style="width:760px">
      <h3 slot="title">1.鼠标与滚轮事件</h3>
      <div>
        <p>DOM3级事件中定义了 9 个鼠标事件：</p>
        <ul class="menu">
          <li>click：单击。</li>
          <li>dblclick：双击。</li>
          <li>mousedown：按下鼠标按钮时触发。</li>
          <li>mouseup：释放鼠标按钮时触发。</li>
          <li>mouseover：鼠标指针移入某个元素时触发</li>
          <li>mouseout：鼠标指针移出某个元素时触发。</li>
          <li>mouseenter：鼠标指针移入某个元素时触发。（与mouseover区别）</li>
          <li>mouseleave：鼠标指针移出某个元素时触发。（与mouseouter区别）</li>
          <li>mousemove：鼠标指针在元素内部移动时重复的触发。</li>
        </ul>
        <div v-highlight>
          <pre>
            <code>
              var btn = document.getElementById("myBtn")

              // click事件
              EventUtil.addHandler(btn, "click", function(event) {
                //event
              })
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
  name: 'dom-event-type-3',
  components: {
    Card
  }
}
</script>

<style scoped lang="stylus">
.dom-event-type-3
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
