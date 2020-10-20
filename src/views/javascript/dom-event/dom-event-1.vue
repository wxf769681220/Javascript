<template>
  <div class="dom-event-1">
    <Card shadow style="width:650px">
      <h3 slot="title">1.事件流</h3>
      <div>
        <p>事件流：描述页面从接收事件的顺序。</p>
        <div v-highlight>
          <pre>
            <code>
              /* DOM 树
              &lt;html>
                &lt;head>
                  &lt;title>javascript&lt;/title>
                &lt;/head>
                &lt;body>
                  &lt;div>
                    &lt;button onclick="fn()">button&lt;/button>
                  &lt;/div>
                &lt;/body>
              &lt;/html>
              */
            </code>
          </pre>
        </div>
        <p>事件冒泡（IE）：即事件开始由最具体的元素接收，然后逐级向上传播。</p>
        <div v-highlight>
          <pre>
            <code>
              // 点击button,事件传播顺序依次是
              &lt;button> -> &lt;div> -> &lt;body> -> &lt;html> -> document
            </code>
          </pre>
        </div>
        <p>事件捕获（Netscape）：document 对象首先接收到 click 事件，然后事件沿着 DOM 树依次向下传播。</p>
        <div v-highlight>
          <pre>
            <code>
              // 点击button,事件传播顺序
              document-> &lt;html> -> &lt;body> -> &lt;div> -> &lt;button>
            </code>
          </pre>
        </div>
        <p>"DOM2级事件" 规定的事件流包括三个阶段，事件捕获阶段、处于目标阶段和事件冒泡阶段。</p>
        <div v-highlight>
          <pre>
            <code>
              /*
               * 1.事件捕获阶段,为截获事件提供机会
               * document-> &lt;html> -> &lt;body> -> &lt;div>
               */

              /*
               * 2.处于目标阶段,实际目标接收到事件
               * &lt;button>
               */

              /*
               * 3.事件冒泡阶段,对事件作出响应
               * &lt;div> -> &lt;body> -> &lt;html> -> document
               */
            </code>
          </pre>
        </div>
      </div>
    </Card>
    <Card shadow style="width:750px">
      <h3 slot="title">2.事件处理程序</h3>
      <div>
        <p>响应某个事件的函数就叫做事件处理程序（事件侦听器），事件处理程序以 "on" 开头。为事件指定处理程序有以下几种：</p>
        <p>HTML 事件处理程序如下：</p>
        <div v-highlight>
          <pre>
            <code>
              /* 在 HTML 中定义
               * &lt;button onclick="alert(this)">click&lt;/button>
               * &lt;button onclick="fn(event)">click&lt;/button>
               */
            </code>
          </pre>
        </div>
        <p>DOM0级：javascript 指定事件处理程序。</p>
        <div v-highlight>
          <pre>
            <code>
              // &lt;button id="myBtn">click&lt;/button>

              var btn = document.getElementById('myBtn')

              // DOM0级
              btn.onclick = function(event) {
                //event
              }
            </code>
          </pre>
        </div>
        <p>
          DOM2级：所有 DOM 节点都包含 addEventListener() 和 removeEventListener() 方法，用于处理和删除事件处理程序。
          这两个方法都接收三个参数，事件名、事件处理函数和表示在哪个阶段调用事件处理程序的布尔值。若第三个参数为 true，则捕获阶段；若为 false，则冒泡阶段，一般设置 false。
        </p>
        <div v-highlight>
          <pre>
            <code>
              var btn = document.getElementById('myBtn')

              var handler = function() {
                //...
              }

              // 绑定一个事件处理程序
              if (btn.addEventListener) {
                btn.addEventListener('click', handler, false)
              }

              // 删除事件处理程序
              if (btn.removeEventListener) {
                btn.removeEventListener('click', handler, false)
              }
            </code>
          </pre>
        </div>
      </div>
    </Card>
    <Card shadow style="width:750px">
      <h3 slot="title">3.跨浏览器的事件处理程序</h3>
      <div>
        <p>创建 EventUtil 对象，其中保存两个事件处理方法：添加事件处理程序 addHandler() 和删除事件处理程序 removeHandler() 方法。默认采用 DOM0 级方法。</p>
        <div v-highlight>
          <pre>
            <code>
              var EventUtil = {
                addHandler: function(element, type, handler) {
                  if (element.addEventListener) {
                    element.addEventListener(type, handler, false)
                  } else if (element.attachEvent) {
                    // 针对IE
                    element.attachEvent("on" + type, handler)
                  } else {
                    // DOM0级
                    element["on" + type] = handler
                  }
                },
                removeHandler: function() {
                  if (element.removeEventListener) {
                    element.removeEventListener(type, handler, false)
                    // 针对IE
                  } else if (element.detachEvent) {
                    element.detachEvent("on" + type, handler)
                  } else {
                    // DOM0级
                    element["on" + type] = null
                  }
                }
              }

              var btn = document.getElementById('myBtn')

              // 事件处理函数
              var handler = function(event) {
                // 指向调用事件处理程序的元素
                console.log(this)
                // 指向事件对象
                console.log(event)
              }

              // 添加事件处理程序
              EventUtil.addHandler(btn, "click", handler)

              // 删除事件处理程序
              EventUtil.removeHandler(btn, "click", handler)
            </code>
          </pre>
        </div>
      </div>
    </Card>
    <Card shadow style="width:680px">
      <h3 slot="title">4.移除事件处理程序</h3>
      <div>
        <p>通过 addEventListener() 添加的事件处理程序，只能通过 removeEventListener() 方法删除，并且这两个方法的参数必须一致，否则事件处理程序将无法被移除。</p>
        <div v-highlight>
          <pre>
            <code>
              var btn = document.getElementById('myBtn')

              EventUtil.addHandler(btn, "click", function() {})

              // 无法移除事件处理程序
              // 因为创建了两个不同的Function实例
              EventUtil.removeHandler(btn, "click", function() {})
            </code>
          </pre>
        </div>
        <ul class="menu">
          <li>移除或替换带有事件处理程序的 DOM 元素，是纯粹的 DOM 操作。</li>
          <li>而添加在 DOM 元素上的事件处理程序极有可能不会被当做垃圾回收。</li>
          <li>有些浏览器不会对此做出恰当的处理，它们有可能会对元素和对事件处理程序的引用都保存在内存中（内存无法释放）。</li>
          <li>若你知道某个元素即将被移除或被替换掉，最好手动移除事件处理器程序。</li>
        </ul>
        <div v-highlight>
          <pre>
            <code>
              /*
                &lt;div id="myDiv">
                  &lt;button id="myBtn" type="button">按钮&lt;/button>
                &lt;/div>
              */

              var btn = document.getElementById("myBtn");
              var div = document.getElementById("myDiv");

              EventUtil.addHandler(btn, "click", function() {
                // DOM元素被移除或替换之前
                // 移除事件处理器
                btn.onlick = null
                div.innHTML = "Process..."
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
  name: 'dom-event-1',
  components: {
    Card
  }
}
</script>

<style scoped lang="stylus">
.dom-event-1
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
