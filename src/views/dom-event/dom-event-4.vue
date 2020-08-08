<template>
  <div class="dom-event-4">
    <Card shadow style="width:680px">
      <h3 slot="title">1.事件委托（对内存和性能的一种优化）</h3>
      <div>
        <ul class="menu">
          <li>事件委托：即利用时间冒泡，指定一个事件处理程序，就可以管理某一类型的所有事件。</li>
          <li>使用事件委托，只需在 DOM 树中尽量高的层次上添加一个事件处理程序。</li>
          <li>可以考虑为 document 对象添加一个事件处理程序，用于页面上发生的某一特定类型的事件。</li>
          <li>
            docuement 对象作为事件委托的对象有以下优点：
            <ul class="menu">
              <li>document 对象访问速度快，在页面的生命周期内任何时间点上为它添加事件处理程序。（无需等待 load 事件或 DOMContentLoaded 事件）</li>
              <li>DOM 引用更少，所花的时间也更少。</li>
              <li>整个页面占用的内存空间更少，能够提升整体性能。</li>
            </ul>
          </li>
        </ul>
        <div v-highlight>
          <pre>
            <code>
              // Document对象作为事件委托的对象
              // 若不使用event.stopPropagation()阻止冒泡
              // 页面中的所有click事件都会冒泡到该层
              EventUtil.addHandler(document, "click", function(event) {
                event = EventUtil.getEvent(event)
                var target = EventUtil.getTarget(event)

                // 根据指定的元素id执行相关的click操作
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
  </div>
</template>

<script>
import { Card } from 'view-design'

export default {
  name: 'dom-event-4',
  components: {
    Card
  }
}
</script>

<style scoped lang="stylus">
.dom-event-4
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
