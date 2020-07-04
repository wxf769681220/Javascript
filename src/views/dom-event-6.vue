<template>
  <div class="dom-event-6">
    <div class="layout-content">
      <Card dis-hover shadow style="width:680px">
        <h3 slot="title">1.事件委托（对内存和性能的一种优化）</h3>
        <div>
          <ul class="menu">
            <li>事件委托：即利用时间冒泡，指定一个事件处理程序，就可以管理某一类型的所有事件。</li>
            <li>使用事件委托，只需在DOM树中尽量高的层次上添加一个事件处理程序。</li>
            <li>可以考虑为document对象添加一个事件处理程序，用于页面上发生的某一特定类型的事件。</li>
            <li>
              docuement对象作为事件委托的对象有以下优点：
              <ul class="menu">
                <li>document对象访问速度快，在页面的生命周期内任何时间点上为它添加事件处理程序。（无需等待load事件或DOMContentLoaded事件）</li>
                <li>DOM引用更少，所花的时间也更少。</li>
                <li>整个页面占用的内存空间更少，能够提升整体性能。</li>
              </ul>
            </li>
          </ul>
          <div v-highlight>
            <pre>
              <code>
                //Document对象作为事件委托的对象
                //若不使用event.stopPropagation()阻止冒泡
                //页面中的所有click事件都会冒泡到该层
                EventUtil.addHandler(document, "click", function(event) {
                  event = EventUtil.getEvent(event)
                  var target = EventUtil.getTarget(event)

                  //根据指定的元素id执行相关的click操作
                  switch (target.id) {
                    case "item1":
                      console.log(target.innerText)
                      break;
                    case "item2":
                      console.log(target.innerText)
                      break;
                    case "item3":
                      console.log(target.innerText)
                      break;
                    default:
                      //...
                  }
                })
              </code>
            </pre>
          </div>
        </div>
      </Card>
      <Card dis-hover shadow style="width:680px">
        <h3 slot="title">2.移除事件处理程序（对内存和性能的一种优化）</h3>
        <div>
          <ul class="menu">
            <li>移除或替换带有事件处理程序的DOM元素，是纯粹的DOM操作。</li>
            <li>而添加在DOM元素上的事件处理程序极有可能不会被当做垃圾回收。</li>
            <li>有些浏览器不会对此做出恰当的处理，它们有可能会对元素和对事件处理程序的引用都保存在内存中（内存无法释放）。</li>
            <li>若你知道某个元素即将被移除或被替换掉，最好手动移除事件处理器程序。</li>
          </ul>
          <div v-highlight>
            <pre>
              <code>
                &lt;div id="myDiv">
                  &lt;button id="myBtn" type="button">按钮&lt;/button>
                &lt;/div>
              </code>
            </pre>
          </div>
          <div v-highlight>
            <pre>
              <code>
                //innHTML常用与替换页面中的某一部分
                var btn = document.getElementById("myBtn");
                btn.onlick = function() {
                  //DOM元素被移除或替换之前,移除事件处理器
                  btn.onlick = null;

                  //innHTML常用与替换页面中的某一部分
                  document.getElementById("myDiv").innHTML = "Process...";
                }
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
  name: 'dom-event-6',
  created() {},
  components: {
    Card
  }
}
</script>

<style scoped lang="stylus">
.dom-event-6
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
