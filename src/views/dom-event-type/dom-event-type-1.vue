<template>
  <div class="dom-event-type-1">
    <Card shadow style="width:620px">
      <h3 slot="title">1.load事件</h3>
      <div>
        <p>在页面完全加载后（包括所有的图像、javascript 文件、css 文件等外部资源），就会在 window 上面触发 load 事件。</p>
        <div v-highlight>
          <pre>
            <code>
              window.onload = function() {
                //...
              }
            </code>
          </pre>
        </div>
        <p>图像加载完成时也会触发 load 事件。</p>
        <div v-highlight>
          <pre>
            <code>
              var img = document.getElementById('myImg')

              img.onload = function() {
                //...
              }
            </code>
          </pre>
        </div>
        <p>动态样式表加载完成时也会触发 load 事件。</p>
        <div v-highlight>
          <pre>
            <code>
              var link = document.createElement("link")
              link.rel = "stylesheet"
              link.type = "text/css"
              link.href = 'client.css'
              var head = document.getElementsByTagName("head")[0]
              head.appendChild(link)

              link.onload = function() {
                //...
              }
            </code>
          </pre>
        </div>
        <p>动态脚本加载完成时也会触发 load 事件。</p>
        <div v-highlight>
          <pre>
            <code>
              var script = document.createElement("script")
              script.type = "text/javascript"
              script.src = 'client.js'
              document.body.appendChild(script)

              script.onload = function() {
                //...
              }
            </code>
          </pre>
        </div>
      </div>
    </Card>
    <Card shadow style="width:620px">
      <h3 slot="title">2.DOMContentLoaded事件</h3>
        <p>DOMContentLoaded 事件：在形成完整的 DOM 树之后就会触发。不必考虑图像、JavaScript 文件、CSS 文件和其他资源是否已经下载完毕。</p>
        <div v-highlight>
          <pre>
            <code>
              /*
               * 可以在window或document上添加该事件处理程序
               * 尽管该事件会冒泡到window上
               * 但实际上它的目标是document
               */

              document.onDOMContentLoaded = function() {
                //...
              }
          </code>
        </pre>
      </div>
    </Card>
    <Card shadow style="width:650px">
      <h3 slot="title">3.unload事件</h3>
      <div>
        <p>unload 事件：当文档被完全卸载后触发。利用这个事件最多的就是清除引用，以避免内存泄露。</p>
        <div v-highlight>
          <pre>
            <code>
              window.onunload = function() {
                //...
              }
            </code>
          </pre>
        </div>
      </div>
    </Card>
    <Card shadow style="width:650px">
      <h3 slot="title">4.beforeunload事件</h3>
      <div>
        <p>beforeunload 事件：在浏览器卸载页面时触发。让开发人员在页面被卸载前阻止这一行为。</p>
        <div v-highlight>
          <pre>
            <code>
              window.onbeforeunload = function(event) {
                event = EventUtil.getEvent(event)
                var msg = "确定要离开吗？"
                event.returnValue = msg
                return msg
              }
            </code>
          </pre>
        </div>
      </div>
    </Card>
    <Card shadow style="width:560px">
      <h3 slot="title">5.resize事件</h3>
      <div>
        <p>调整浏览器窗口大小就会触发 resize 事件。如：手动缩放浏览器窗口或点击最大化窗口和最小化窗口。</p>
        <div v-highlight>
          <pre>
            <code>
              // 该事件会在一定时间内持续不断的被触发
              window.onresize = function() {
                //...
              }
            </code>
          </pre>
        </div>
      </div>
    </Card>
    <Card shadow style="width:650px">
      <h3 slot="title">4.scroll事件</h3>
      <div>
        <p>scroll 事件：虽然是在 window 对象上发生触发的，但它实际表示页面中相应元素的变化。</p>
        <div v-highlight>
          <pre>
            <code>
              window.onscroll = function() {
                if (document.compatMode === 'CSS1Compat') {
                  alert(document.documentElement.scrollTop)
                } else {
                  alert(document.body.scrollTop)
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
  name: 'dom-event-type-1',
  components: {
    Card
  }
}
</script>

<style scoped lang="stylus">
.dom-event-type-1
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
