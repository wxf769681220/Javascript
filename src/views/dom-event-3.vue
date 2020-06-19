<template>
  <div class="dom-event-3">
    <div class="layout-content">
      <Card dis-hover shadow style="width:560px">
        <h3 slot="title">1.load事件</h3>
        <div>
          <p>在页面完全加载后（包括所有的图像、javascript文件、css文件等外部资源），就会在window上面触发load事件。</p>
          <div v-highlight>
            <pre>
              <code>
                EventUtil.addHandler(window, "load", function() {
                  //loaded
                })
              </code>
            </pre>
          </div>
          <p>图像上面也可以触发load事件。当图像加载完毕后，调用事件处理函数。</p>
          <div v-highlight>
            <pre>
              <code>
                var img = document.getElementById('myImg')
                EventUtil.addHandler(img, "load", function(event) {
                  //...
                })
              </code>
            </pre>
          </div>
          <p>&lt;script>也可以触发load事件，以便确定动态加载的javascript文件是否加载完毕。</p>
          <div v-highlight>
            <pre>
              <code>
                var script = document.createElement('script')
                EventUtil.addHandler(script, "load", function(event) {
                  //...
                })
                script.src = 'example.js'
                document.body.appendChild(script)
              </code>
            </pre>
          </div>
        </div>
      </Card>
      <Card dis-hover shadow style="width:560px">
        <h3 slot="title">2.unload事件</h3>
        <div>
          <p>文档被完全卸载后触发。利用这个事件最多的就是清除引用，以避免内存泄露。</p>
          <div v-highlight>
            <pre>
              <code>
                EventUtil.addHandler(window, "unload", function() {
                  //...
                })
              </code>
            </pre>
          </div>
        </div>
      </Card>
      <Card dis-hover shadow style="width:560px">
        <h3 slot="title">3.resize事件</h3>
        <div>
          <p>调整窗口大小就会触发resize事件。（最大化窗口和最小化窗口也会触发）</p>
          <div v-highlight>
            <pre>
              <code>
                EventUtil.addHandler(window, "resize", function() {
                  //...
                })
              </code>
            </pre>
          </div>
        </div>
      </Card>
      <Card dis-hover shadow style="width:560px">
        <h3 slot="title">4.scroll事件</h3>
        <div>
          <p>该事件实在window对象上发生，但它实际表示页面中相应元素的变化。</p>
          <div v-highlight>
            <pre>
              <code>
                EventUtil.addHandler(window, "scroll", function() {
                  if (document.compatMode === 'CSS1Compat') {
                    alert(document.documentElement.scrollTop)
                  } else {
                    alert(document.body.scrollTop)
                  }
                })
              </code>
            </pre>
          </div>
        </div>
      </Card>
      <Card dis-hover shadow style="width:560px">
        <h3 slot="title">5.焦点事件</h3>
        <div>
          <p>焦点事件会在页面元素获得或失去焦点时触发。可以和document.hasFocus()方法及document.activeElement属性配合使用。焦点事件有以下几种：</p>
          <ul class="menu">
            <li>focus：元素获得焦点时触发。（不会冒泡）</li>
            <li>focusin：元素获得焦点时触发。（会冒泡）</li>
            <li>blur：元素失去焦点时触发。（不会冒泡）</li>
            <li>focusout：元素失去焦点时触发。（会冒泡）</li>
            <li>change：对于&lt;input>和&lt;textarea>元素，在它们失去焦点且value值改变时触发；对于&lt;select>元素时，在其选项改变时触发。</li>
          </ul>
          <div v-highlight>
            <pre>
              <code>
                document.activeElement => 默认焦点元素body元素

                var btn1 = document.getElementById('myBtn1')
                var btn2 = document.getElementById('myBtn2')

                //设置btn1为当前页面的焦点
                btn1.focus()

                //btn1失去焦点时触发
                EventUtil.addHandler(btn1, "blur", function(event) {
                  alert('当前页面焦点：' + document.activeElement)
                })

                //btn2获得焦点时触发
                EventUtil.addHandler(btn2, "focus", function(event) {
                  alert('hi')
                })

                /************************************/
                //自动获取焦点
                &lt;input type="text" autofocus />
              </code>
            </pre>
          </div>
        </div>
      </Card>
      <Card dis-hover shadow style="width:560px">
        <h3 slot="title">6.鼠标与滚轮事件</h3>
        <div>
          <p>DOM3级事件中定义了9个鼠标事件：</p>
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
                document.activeElement => 默认焦点元素body元素

                var btn1 = document.getElementById('myBtn1')
                var btn2 = document.getElementById('myBtn2')

                //设置btn1为当前页面的焦点
                btn1.focus()

                //btn1失去焦点时触发
                EventUtil.addHandler(btn1, "blur", function(event) {
                  alert('当前页面焦点：' + document.activeElement)
                })

                //btn2获得焦点时触发
                EventUtil.addHandler(btn2, "focus", function(event) {
                  alert('hi')
                })
              </code>
            </pre>
          </div>
        </div>
      </Card>
      <Card dis-hover shadow style="width:560px">
        <h3 slot="title">7.剪切板事件</h3>
        <div>
          <p>剪切板的6个事件：</p>
          <ul class="menu">
            <li>beforecopy：</li>
            <li>copy：</li>
            <li>beforecut：</li>
            <li>cut：</li>
            <li>beforepaste：</li>
            <li>paste：</li>
          </ul>
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
  name: 'dom-event-3',
  created() {},
  components: {
    Card
  }
}
</script>

<style scoped lang="stylus">
.dom-event-3
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
