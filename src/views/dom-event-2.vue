<template>
  <div class="dom-event-2">
    <div class="layout-content">
      <Card dis-hover shadow style="width:540px">
        <h3 slot="title">1.事件对象</h3>
        <div>
          <p>在触发DOM上的某个元素时，会产生一个事件对象event，该对象包含所有的与事件有关的信息。</p>
          <div v-highlight>
            <pre>
              <code>
                var btn = document.getElementById('myBtn')

                //DOM0级
                btn.onclick = function(event) {
                  //event
                }

                //DOM2级
                var handler = function(event) {
                  //event
                }
                btn.addEventListener('click', handler, false)
              </code>
            </pre>
          </div>
        </div>
      </Card>
      <Card dis-hover shadow style="width:780px">
        <h3 slot="title">2.事件对象属性</h3>
        <div>
          <p>event对象只有在事件处理程序执行期间存在，一旦事件处理程序执行完成，event对象就会被销毁。</p>
          <table class="table-bordered">
            <thead>
              <tr>
                <th>属性/方法</th>
                <th>类型</th>
                <th>描述</th>
              </tr>
            </thead>
            <tbody>
              <tr class="bg-1">
                <td>type</td>
                <td>String</td>
                <td>被触发的事件的类型</td>
              </tr>
              <tr class="bg-2">
                <td>target</td>
                <td>Element</td>
                <td>事件的目标元素</td>
              </tr>
              <tr class="bg-2">
                <td>currentTarget</td>
                <td>Element</td>
                <td>事件处理程序当前正在处理事件的元素</td>
              </tr>
              <tr class="bg-1">
                <td>bubbles</td>
                <td>Boolean</td>
                <td>表明事件是否冒泡</td>
              </tr>
              <tr class="bg-1">
                <td>stopPropagation</td>
                <td>Function</td>
                <td>取消事件进一步捕获或冒泡，同时阻止任何事件处理程序被调用（DOM3新增）</td>
              </tr>
              <tr class="bg-1">
                <td>stopImmediatePropagation</td>
                <td>Function</td>
                <td>取消事件进一步捕获或冒泡（前提是bubbles为true）</td>
              </tr>
              <tr class="bg-2">
                <td>cancelable</td>
                <td>Boolean</td>
                <td>是否可以取消事件的默认行为</td>
              </tr>
              <tr class="bg-2">
                <td>preventDefault</td>
                <td>Function</td>
                <td>取消事件的默认行为（前提是cancelable为true）</td>
              </tr>
              <tr class="bg-2">
                <td>defaultPrevented</td>
                <td>Boolean</td>
                <td>为true时表示已经调用了preventDefault()（DOM3新增）</td>
              </tr>
              <tr class="bg-2">
                <td>eventPhase</td>
                <td>Integer</td>
                <td>调用事件处理程序的阶段。1：表示捕获阶段；2：表示"处于目标"；3：表示冒泡阶段</td>
              </tr>
              <tr class="bg-1">
                <td>view</td>
                <td>Abstractive</td>
                <td>与事件关联的抽象视图。等同于发生事件的window对象</td>
              </tr>
              <tr class="bg-2">
                <td>relatedTarget</td>
                <td>Abstractive/null</td>
                <td>提供相关元素信息。只对于鼠标事件中的mouseover和mouseout事件才包含值；对于其他事件，返回null值</td>
              </tr>
            </tbody>
          </table>
          <div v-highlight>
            <pre>
              <code>
                var btn = document.getElementById('myBtn')

                btn.onclick = function (event) {
                  //事件类型
                  event.type => 'click'

                  //事件目标
                  this => //指向&lt;button>元素
                  event.currentTarget === this => true
                  event.target === this => true

                  //阻止默认行为
                  event.preventDefault()

                  //阻止事件冒泡
                  event.stopPropagation()
                }
              </code>
            </pre>
          </div>
        </div>
      </Card>
      <Card dis-hover shadow style="width:600px">
        <h3 slot="title">3.跨浏览器的事件对象</h3>
        <div>
          <p>对前面的创建的EventUtil对象的增强。</p>
          <div v-highlight>
            <pre>
              <code>
                var EventUtil = {
                  addHandler: function(element, type, handler) {
                    //省略...
                  },
                  removeHandler: function() {
                    //省略...
                  },
                  getEvent: function(event) {
                    return event ? event : window.event //IE
                  },
                  getTarget: function(event) {
                    return event.target || event.srcElement //IE
                  },
                  preventDefault: function(event) {
                    if (event.preventDefault) {
                      event.preventDefault()
                    } else {
                      event.returnValue = false //IE
                    }
                  },
                  stopPropagation: function(event) {
                    if (stopPropagation) {
                      stopPropagation()
                    } else {
                      event.cancelBubble = true //IE
                    }
                  },
                  getRelatedTarget: function(event) {
                    if (event.relatedTarget) {
                      return event.relatedTarget
                    } else if (event.toElement) {
                      return event.toElement
                    } else if (event.fromElement) {
                      return event.fromElement
                    } else {
                      return null
                    }
                  },
                  getCharCode: function(event) {
                    if (typeof event.charCode === 'number') {
                      return event.charCode
                    } else {
                      return event.keyCode
                    }
                  }
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
  name: 'dom-event-2',
  created() {},
  components: {
    Card
  }
}
</script>

<style scoped lang="stylus">
.dom-event-2
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
