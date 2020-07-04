<template>
  <div class="dom-event-5">
    <div class="layout-content">
      <Card dis-hover shadow style="width:400px">
        <h3 slot="title">1.模拟事件</h3>
        <div>
          <ul class="menu">
            <li>javascript可以在任意时刻触发特定的事件，即模拟事件。模拟事件就如同浏览器创建的事件一样。</li>
            <li>模拟事件可以冒泡。</li>
            <li>模拟事件能够导致浏览器执行已经制定的处理它们的事件处理程序。</li>
          </ul>
        </div>
      </Card>
      <Card dis-hover shadow style="width:750px">
        <h3 slot="title">2.DOM中模拟事件</h3>
        <div>
          <p>可以在document对象上使用createEvent()方法创建event对象。该方法接收一个表示要创建的事件类型的字符串。该字符串可以是下列几种：</p>
          <ul class="menu">
            <li>UIEvents（DOM2级）：一般化的UI事件。鼠标和键盘事件都继承自UI事件。（DOM3级是UIEvents）</li>
            <li>MouseEvents（DOM2级）：一般化的鼠标事件。（DOM3级是MouseEvent）</li>
            <li>MutationEvents（DOM2级）：一般化的DOM变动事件。（DOM3级是MutationEvent）</li>
            <li>HTMLEvents（DOM2级）：一般化的HTML事件。（没有对应的DOM3级事件，HTML事件被分散到其他类型中）</li>
          </ul>
          <div v-highlight>
            <pre>
              <code>
                //模拟一个鼠标单击事件
                var btn = document.getElementById("myBtn")

                //1.首先创建一个鼠标事件类型的对象
                var event = document.createEvent("MouseEvents")

                //2.初始化事件对象
                //每种类型的event对象都有一个特殊的方法
                //为其传入适当的数据就可以初始化该event对象
                //initMouseEvent()方法，接收15个参数分别与鼠标事件中每个经典的属性一一对应
                event.initMouseEvent("click", true, true, document,defaultView,
                0, 0, 0, 0, 0, false, false, false, false, 0, null);

                //3.触发事件
                btn.dispatchEvent(event)
              </code>
            </pre>
          </div>
        </div>
      </Card>
      <Card dis-hover shadow style="width:750px">
        <h3 slot="title">3.自定义DOM事件（尚未得到支持）</h3>
        <div>
          <p>自定义事件不是由DOM原生触发的，它的目的是让开发人员创建自己的事件。创建自定义事件可以调用createEvent("CustomEvent")。
            返回的对象有一个initCustomEvent()方法，该方法接收以下4各参数：</p>
          <ul class="menu">
            <li>type（字符串）：表示触发的事件类型。</li>
            <li>bubbles（布尔值）：表示事件是否应该冒泡。</li>
            <li>cancelable（布尔值）：表示事件是否可以取消。</li>
            <li>detail（对象）：任意值，保存在event对象的detail属性中。</li>
          </ul>
          <div v-highlight>
            <pre>
              <code>
                //检测浏览器是否支持自定义事件
                if (document.implementation.hasFeature("MyEvents", "3.0")) {
                  var event = document.createEvent("MyEvent")
                  event.initMyEvent("click", true, true, "hello world!")
                  btn.dispatchEvent(event)
                }

                var btn = document.getElementById("myBtn")
                EventUtil.addHandler(btn, "MyEvent", function(event) {
                  //event
                })
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
  name: 'dom-event-5',
  created() {},
  components: {
    Card
  }
}
</script>

<style scoped lang="stylus">
.dom-event-5
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
