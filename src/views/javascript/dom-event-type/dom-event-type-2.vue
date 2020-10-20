<template>
  <div class="dom-event-type-2">
    <Card shadow style="width:760px">
      <h3 slot="title">1.焦点事件</h3>
      <div>
        <p>焦点事件会在页面元素获得或失去焦点时触发。可以和 document.hasFocus() 方法及 document.activeElement 属性配合使用。焦点事件有以下几种：</p>
        <ul class="menu">
          <li>focus：元素获得焦点时触发。（不会冒泡）</li>
          <li>focusin：元素获得焦点时触发。（会冒泡）</li>
          <li>blur：元素失去焦点时触发。（不会冒泡）</li>
          <li>focusout：元素失去焦点时触发。（会冒泡）</li>
          <li>change：对于 &lt;input> 和 &lt;textarea> 元素，在它们失去焦点且 value 值改变时触发；对于 &lt;select> 元素时，在其选项改变时触发。</li>
        </ul>
        <div v-highlight>
          <pre>
            <code>
              // 默认焦点元素body元素
              document.activeElement => &lt;body>

              var btn1 = document.getElementById('myBtn1')
              var btn2 = document.getElementById('myBtn2')

              btn1.focus()

              // 文档是否已经获取焦点
              document.hasFocus() => true

              // btn1失去焦点时触发
              btn1.onblur = function() {
                alert('当前页面焦点：' + document.activeElement)
              }

              // btn2获得焦点时触发
              btn2.onfocus = function() {
                alert('当前页面焦点：' + document.activeElement)
              }
            </code>
          </pre>
        </div>
      </div>
    </Card>
    <Card shadow style="width:460px">
      <h3 slot="title">2.autofocus 自动获取焦点</h3>
      <div v-highlight>
        <pre>
          <code>
            &lt;input type="text" autofocus />
          </code>
        </pre>
      </div>
    </Card>
    <Card shadow style="width:640px">
      <h3 slot="title">3.焦点控制滚动条的行为</h3>
      <p>通过为某个元素设置焦点，来控制浏览器滚动条的滚动。</p>
      <div>
        <div v-highlight>
          <pre>
              <code>
                var btn1 = document.getElementById('btn1')
                var btn2 = document.getElementById('btn2')

                btn1.onclick= function() {
                  // 若btn2不在页面视口之中
                  // 则页面将滚动到获得焦点的元素位置
                  btn2.focus()
                }

                //使用scrollIntoView()方法
                //这个方法接受一个布尔值（可选）,
                //表示被调用元素与视口的位置关系
                btn1.onclick= function() {
                  btn2.scrollIntoView()
                }
              </code>
            </pre>
        </div>
      </div>
      <p>使用 scrollIntoView() 方法，这个方法接受一个布尔值（可选），表示被调用元素与视口的位置关系。</p>
      <div>
        <div v-highlight>
          <pre>
            <code>
              var btn1 = document.getElementById('btn1')
              var btn2 = document.getElementById('btn2')

              btn1.onclick= function() {
                btn2.scrollIntoView()
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
  name: 'dom-event-type-2',
  components: {
    Card
  }
}
</script>

<style scoped lang="stylus">
.dom-event-type-2
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
