<template>
  <div class="dom-event-type-4">
    <Card shadow style="width:750px">
      <h3 slot="title">1.键盘事件</h3>
      <div>
        <p>DOM3级事件中定义了 3 个键盘事件：（在用户通过文本框输入文本常用到）</p>
        <ul class="menu">
          <li>keydown：当用户按下键盘上的任意键时触发，若用户按住不放，会重复触发此事件。</li>
          <li>keypress：当用户按下键盘上的字符键时触发（包括 ESC 键），若用户按住不放，会重复触发此事件。</li>
          <li>keyup：当用户释放键盘上的键时触发。</li>
        </ul>
        <div v-highlight>
          <pre>
            <code>
              var btn = document.getElementById('myBtn')

              // 先将焦点移至该元素上
              btn.focus()

              btn.onkeydown = function() {
                event = EventUtil.getEvent(event)
                // 键名
                event.key
                // 与ASCII码中对应小写字母或数字的编码相同
                event.keyCode
              }

              btn.onkeypress = function() {
                //...
              }

              btn.onkeyup = function() {
                //...
              }
            </code>
          </pre>
        </div>
      </div>
    </Card>
    <Card shadow style="width:750px">
      <h3 slot="title">2.文本事件</h3>
      <div>
        <p>textInput 事件：当用户在可编辑区中使用键盘输入字符时触发该事件。</p>
        <div v-highlight>
          <pre>
            <code>
              var input = document.getElementById('myInput')

              // 只有可编辑区才能触发该事件
              // 只有用户按下能够输入实际字符的键才会触发
              input.ontextInput = function() {
                event = EventUtil.getEvent(event)
                // 用于保存用户输入的值
                event.data
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
  name: 'dom-event-type-4',
  components: {
    Card
  }
}
</script>

<style scoped lang="stylus">
.dom-event-type-4
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
