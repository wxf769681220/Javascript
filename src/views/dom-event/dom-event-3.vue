<template>
  <div class="dom-event-3">
    <Card shadow style="width:500px">
      <h3 slot="title">1.模拟事件</h3>
      <div>
        <ul class="menu">
          <li>javascript 可以在任意时刻触发特定的事件，即模拟事件。模拟事件就如同浏览器创建的事件一样。</li>
          <li>模拟事件可以冒泡。</li>
          <li>模拟事件能够导致浏览器执行已经制定的处理它们的事件处理程序。</li>
        </ul>
      </div>
    </Card>
    <Card shadow style="width:780px">
      <h3 slot="title">2.DOM中模拟事件</h3>
      <div>
        <p>可以在 document 对象上使用 createEvent() 方法创建 event 对象。该方法接收一个表示要创建的事件类型的字符串。该字符串可以是下列几种：</p>
        <ul class="menu">
          <li>UIEvents（DOM2级）：一般化的 UI 事件。鼠标和键盘事件都继承自 UI 事件。（DOM3级是 UIEvents）</li>
          <li>MouseEvents（DOM2级）：一般化的鼠标事件。（DOM3级是 MouseEvent）</li>
          <li>MutationEvents（DOM2级）：一般化的 DOM 变动事件。（DOM3级是 MutationEvent）</li>
          <li>HTMLEvents（DOM2级）：一般化的 HTM L事件。（没有对应的DOM3级事件，HTM L事件被分散到其他类型中）</li>
        </ul>
        <div v-highlight>
          <pre>
            <code>
              // 模拟一个鼠标单击事件
              var btn = document.getElementById("myBtn")

              // 1.首先创建一个鼠标事件类型的对象
              var event = document.createEvent("MouseEvents")

              // 2.初始化事件对象
              // 每种类型的event对象都有一个特殊的方法
              // 为其传入适当的数据就可以初始化该event对象
              // initMouseEvent()方法，接收15个参数分别与鼠标事件中每个经典的属性一一对应
              event.initMouseEvent("click", true, true, document,defaultView,
              0, 0, 0, 0, 0, false, false, false, false, 0, null);

              // 3.触发事件
              btn.dispatchEvent(event)
            </code>
          </pre>
        </div>
      </div>
    </Card>
    <Card shadow style="width:720px">
      <h3 slot="title">3.自定义DOM事件（尚未得到支持）</h3>
      <div>
        <p>
          自定义事件不是由 DOM 原生触发的，它的目的是让开发人员创建自己的事件。创建自定义事件可以调用 createEvent("CustomEvent")。
          返回的对象有一个 initCustomEvent() 方法，该方法接收以下4各参数：
        </p>
        <ul class="menu">
          <li>type（字符串）：表示触发的事件类型。</li>
          <li>bubbles（布尔值）：表示事件是否应该冒泡。</li>
          <li>cancelable（布尔值）：表示事件是否可以取消。</li>
          <li>detail（对象）：任意值，保存在 event 对象的 detail 属性中。</li>
        </ul>
        <div v-highlight>
          <pre>
            <code>
              // 检测浏览器是否支持自定义事件
              if (document.implementation.hasFeature("MyEvents", "3.0")) {
                var event = document.createEvent("MyEvent")
                event.initMyEvent("click", true, true, "hello world!")
                btn.dispatchEvent(event)
              }

              var btn = document.getElementById("myBtn")
              EventUtil.addHandler(btn, "MyEvent", function(event) {
                // event
              })
            </code>
          </pre>
        </div>
      </div>
    </Card>
    <Card shadow style="width:720px">
      <h3 slot="title">4.非DOM代码中自定义事件</h3>
      <div>
        <p>事件与 DOM 交互是最常见的方式，但也可以通过实现自定义事件应用于非 DOM 代码中。思路是：创建一个用于管理事件的对象，让其他对象监听那些事件。基本模式：</p>
        <div v-highlight>
          <pre>
            <code>
              // 构造函数
              function EventTarget() {
                // 用于储存事件处理程序
                this.handlers = {};
              }

              EventTarget.prototype = {
                constructor: EventTarget,

                // 用于注册给定类型事件的事件处理程序
                // 它接收两个参数：事件类型和处理该事件的函数
                addHandler: function (type, handler) {
                  if (typeof this.handlers[type] === "undefined") {
                    this.handlers[type] = [];
                  }
                  this.handlers[type].push(handler)
                },

                // 触发一个事件
                fire: function (event) {
                  if (!event.target) {
                    event.target = this
                  }
                  if (this.handlers[event.type] instanceof Array) {
                    var handlers = this.handlers[event.type];
                    for (var i = 0, len = handlers.length; i &lt; len; i++) {
                      handlers[i](event)
                    }
                  }
                },

                // 用于注销某个事件类型的事件处理程序
                removeHandler: function (type, handler) {
                  if (this.handlers[type] instanceof Array) {
                    var handlers = this.handlers[type];
                    for (var i = 0, len = handlers.length; i &lt; len; i++) {
                      if (handlers[i] === handler) {
                        break;
                      }
                    }
                    handlers.splice(i, 1)
                  }
                }
              }
            </code>
          </pre>
        </div>
        <p>使用 EventTarget 类型的自定义事件。</p>
        <div v-highlight>
          <pre>
            <code>
              // 事件处理程序（回调函数）
              function handlerMessage(event) {
                console.log(event.myMessage)
              }

              var target = new EventTarget()

              // 添加事件，并绑定事件处理程序
              target.addHandler("massage", handlerMessage);

              // 触发事件，并调用事件处理程序
              target.fire({type: "massage", myMessage: "hello world!"});

              // 移除事件处理程序
              target.removeHandler("massage", handlerMessage);

              // 再次触发事件，此时应没有处理程序了
              target.fire({type: "massage", myMessage: "hello world!"});
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
  name: 'dom-event-3',
  components: {
    Card
  }
}
</script>

<style scoped lang="stylus">
.dom-event-3
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
