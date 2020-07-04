<template>
  <div class="dom-event-3">
    <div class="layout-content">
      <Card dis-hover shadow style="width:720px">
        <h3 slot="title">1.load事件与DOMContentLoaded事件</h3>
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
          <p>DOMContentLoaded事件：在形成完整的DOM树之后就会触发。不必考虑图像、JavaScript文件、CSS文件和其他资源是否已经下载完毕。</p>
          <div v-highlight>
            <pre>
              <code>
                //可以在window或document上添加该事件处理程序
                //尽管该事件会冒泡到window上,但实际上它的目标是document
                EventUtil.addHandler(document, "DOMContentLoaded", function(event) {
                  //event
                })
              </code>
            </pre>
          </div>
        </div>
      </Card>
      <Card dis-hover shadow style="width:650px">
        <h3 slot="title">2.unload事件与beforeunload事件</h3>
        <div>
          <p>unload事件：当文档被完全卸载后触发。利用这个事件最多的就是清除引用，以避免内存泄露。</p>
          <div v-highlight>
            <pre>
              <code>
                EventUtil.addHandler(window, "unload", function() {
                  //...
                })
              </code>
            </pre>
          </div>
          <p>beforeunload事件：在浏览器卸载页面时触发。让开发人员在页面被卸载前阻止这一行为。</p>
          <div v-highlight>
            <pre>
              <code>
                EventUtil.addHandler(window, "beforeunload", function (event) {
                  event = EventUtil.getEvent(event)
                  var message = "确定要离开吗？"
                  event.returnValue = message
                  return message
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
                var btn = document.getElementById("myBtn")

                EventUtil.addHandler(btn, "click", function(event) {
                  //event
                })
              </code>
            </pre>
          </div>
        </div>
      </Card>
      <Card dis-hover shadow style="width:600px">
        <h3 slot="title">7.键盘与文本事件</h3>
        <div>
          <p>DOM3级事件中定义了3个键盘事件：（在用户通过文本框输入文本常用到）</p>
          <ul class="menu">
            <li>keydown：当用户按下键盘上的任意键时触发，若用户按住不放，会重复触发此事件。</li>
            <li>keypress：当用户按下键盘上的字符键时触发（包括ESC键），若用户按住不放，会重复触发此事件。</li>
            <li>keyup：当用户释放键盘上的键时触发。</li>
          </ul>
          <div v-highlight>
            <pre>
              <code>
                var btn = document.getElementById('myBtn')

                //先将焦点移至该元素上
                btn.focus()

                EventUtil.addHandler(btn, "keydown", function(event) {
                  event = EventUtil.getEvent(event)
                  //键名
                  event.key
                  //与ASCII码中对应小写字母或数字的编码相同
                  event.keyCode
                })

                EventUtil.addHandler(btn, "keypress", function(event) {
                  //event
                })

                EventUtil.addHandler(btn, "keyup", function(event) {
                  //event
                })
              </code>
            </pre>
          </div>
          <p>textInput事件：当用户在可编辑区中输入字符时触发该事件。</p>
          <div v-highlight>
            <pre>
              <code>
                var input = document.getElementById('myInput')

                //只有可编辑区才能触发噶事件
                //只有用户按下能够输入实际字符的键才会触发
                EventUtil.addHandler(input, "textInput", function(event) {
                  event = EventUtil.getEvent(event)
                  //用于保存用户输入的值
                  event.data
                })
              </code>
            </pre>
          </div>
        </div>
      </Card>
      <Card dis-hover shadow style="width:750px">
        <h3 slot="title">8.HTML DOM变动事件</h3>
        <div>
          <p>DOM2级变动事件能在DOM中的某个部分发生变化时给出提示。DOM2级事件中定义了如下变动事件：</p>
          <ul class="menu">
            <li>DOMSubtreeModified：DOM解构发生任何变化时触发。（这个事件在任何事件触发后都会触发）</li>
            <li>DOMNodeInserted：在一个节点作为子节点被插入到另一个节点中时触发。</li>
            <li>DOMNodeInsertedIntoDocument：在一个节点被直接插入文档或通过子树间接插入文档时触发。（在DOMNodeInserted事件之后触发）</li>
            <li>DOMNodeRemoved：在节点在其父节点中被移除时触发。</li>
            <li>DOMNodeRemovedFromDocument：在一个节点被直接从文档移除或通过子树间接从文档移除时触发。（在DOMNodeRemoved事件之后触发）</li>
            <li>DOMAttrModified：特性被修改之后触发。</li>
            <li>DOMCharacterDataModified：在文本节点值发生变化时触发。</li>
          </ul>
          <div v-highlight>
            <pre>
              <code>
                //检测浏览器是否支持变动事件
                var isSupported = document.implementation.hasFeature("MutationEvents", "2.0")
                if (!isSupported) {
                  alert("浏览器尚且不支持DOM变动事件!")
                }
              </code>
            </pre>
          </div>
        </div>
      </Card>
      <Card dis-hover shadow style="width:560px">
        <h3 slot="title">8.剪切板事件</h3>
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
