<template>
  <div class="dom-event-1">
    <div class="layout-content">
      <Card dis-hover shadow style="width:540px">
        <h3 slot="title">1.事件流</h3>
        <div>
          <p>事件流：描述页面从接收事件的顺序。</p>
          <div v-highlight>
            <pre>
              <code>
                &lt;html>
                  &lt;head>
                    &lt;title>javascript&lt;/title>
                  &lt;/head>
                  &lt;body onclick="fn()">
                    &lt;div id="myDiv" onclick="fn()">
                      &lt;button onclick="fn()">button&lt;/button>
                    &lt;/div>
                  &lt;/body>
                &lt;/html>
              </code>
            </pre>
          </div>
          <p>事件冒泡（IE）：即事件开始由最具体的元素接收，然后逐级向上传播。</p>
          <div v-highlight>
            <pre>
              <code>
                //点击button,事件传播顺序
                &lt;button> -> &lt;div> -> &lt;body> -> &lt;html> -> document
              </code>
            </pre>
          </div>
          <p>事件捕获（Netscape）：document对象首先接收到click事件，然后事件沿着DOM树依次向下传播。</p>
          <div v-highlight>
            <pre>
              <code>
                //点击button,事件传播顺序
                document-> &lt;html> -> &lt;body> -> &lt;div> -> &lt;button>
              </code>
            </pre>
          </div>
          <p>"DOM2级事件"规定的事件流包括三个阶段，事件捕获阶段、处于目标阶段和事件冒泡阶段。</p>
          <div v-highlight>
            <pre>
              <code>
                //1.事件捕获阶段,为截获事件提供机会
                document-> &lt;html> -> &lt;body> -> &lt;div> ↓

                //2.处于目标阶段,实际目标接收到事件
                &lt;button> ↓

                //3.事件冒泡阶段,对事件作出响应
                -> &lt;div> -> &lt;body> -> &lt;html> -> document
              </code>
            </pre>
          </div>
        </div>
      </Card>
      <Card dis-hover shadow style="width:650px">
        <h3 slot="title">2.事件处理程序</h3>
        <div>
          <p>响应某个事件的函数就叫做事件处理程序（事件侦听器），事件处理程序以"on"开头。为事件指定处理程序有以下几种：</p>
          <p>HTML事件处理程序如下：</p>
          <div v-highlight>
            <pre>
              <code>
                &lt;button onclick="alert(this)">click&lt;/button>
                &lt;button onclick="fn(event)">click&lt;/button>
              </code>
            </pre>
          </div>
          <p>DOM0级：javascript指定事件处理程序。</p>
          <div v-highlight>
            <pre>
              <code>
                &lt;button id="myBtn">click&lt;/button>

                var btn = document.getElementById('myBtn')
                btn.onclick = function(event) {
                  //event
                }
              </code>
            </pre>
          </div>
          <p>
            DOM2级：所有DOM节点都包含addEventListener()和removeEventListener()方法，用于处理和删除事件处理程序。
            这两个方法都接收三个参数，事件名、事件处理函数和表示在哪个阶段调用事件处理程序的布尔值。若第三个参数为true，则捕获阶段；若为false，则冒泡阶段，一般设置false。
          </p>
          <div v-highlight>
            <pre>
              <code>
                var btn = document.getElementById('myBtn')

                var handler = function() {
                  //...
                }

                //绑定一个事件处理程序
                btn.addEventListener('click', handler, false)

                //删除事件处理程序
                btn.removeEventListener('click', handler, false)

                /*************************************************/
                //通过addEventListener()添加的事件处理程序,只能通过
                //removeEventListener()方法删除，这两个方法的参数必须一致，
                //不然通过addEventListener()添加的事件处理程序将无法删除
                btn.addEventListener('click', function() {
                  //...
                }, false)

                //无法移除事件处理程序
                //因为产生了两个不同的Function实例
                btn.removeEventListener('click', function() {
                  //...
                }, false)
              </code>
            </pre>
          </div>
        </div>
      </Card>
      <Card dis-hover shadow style="width:650px">
        <h3 slot="title">3.跨浏览器的事件处理程序</h3>
        <div>
          <p>创建EventUtil对象，其中保存两个事件处理方法：添加事件处理程序addHandler()和删除事件处理程序removeHandler()方法。默认采用DOM0级方法。</p>
          <div v-highlight>
            <pre>
              <code>
                var EventUtil = {
                  addHandler: function(element, type, handler) {
                    if (element.addEventListener) {
                      element.addEventListener(type, handler, false)
                    } else if (element.attachEvent) { //针对IE
                      element.attachEvent("on" + type, handler)
                    } else {
                      element["on" + type] = handler //DOM0级
                    }
                  },
                  removeHandler: function() {
                    if (element.removeEventListener) {
                      element.removeEventListener(type, handler, false)
                    } else if (element.detachEvent) { //针对IE
                      element.detachEvent("on" + type, handler)
                    } else {
                      element["on" + type] = null //DOM0级
                    }
                  }
                }

                var btn = document.getElementById('myBtn')

                //事件处理函数
                var handler = function(event) {
                  this => //指向调用事件处理程序的元素
                  event => //指向事件对象
                }

                //添加事件处理程序
                EventUtil.addHandler(btn, "click", handler)

                //删除事件处理程序
                EventUtil.removeHandler(btn, "click", handler)
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
  name: 'dom-event-1',
  created() {},
  components: {
    Card
  }
}
</script>

<style scoped lang="stylus">
.dom-event-1
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
