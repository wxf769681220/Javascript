<template>
  <div class="api-5">
    <Card shadow style="width:650px">
      <h3 slot="title">1.拖放事件</h3>
      <div>
        <p>拖动某元素时，将依次触发下列事件：</p>
        <ul class="menu">
          <li>dragstart：元素被拖动时触发。</li>
          <li>drag：在 dragstart 事件触发之后，随即触发，且在元素被拖动期间持续触发该事件。</li>
          <li>dragend：拖动停止（无论被拖动元素是否被拖动到了有效的放置目标上，还是放到了无效的放置目标上）时触发。</li>
        </ul>
        <div v-highlight>
          <pre>
            <code>
              // draggable属性表示元素可拖动
              // &lt;button id="btn" draggable="true">button&lt;/button>

              var btn = document.getElementById("btn")

              EventUtil.addHandler(btn, 'dragstart', function (event) {
                //event
              })

              EventUtil.addHandler(btn, 'drag', function (event) {
                //event
              })

              EventUtil.addHandler(btn, 'dragend', function (event) {
                //event
              })
            </code>
          </pre>
        </div>
        <p>当某个元素被拖动到放置目标时，将依次触发下列事件：</p>
        <ul class="menu">
          <li>dragenter：元素被拖动到放置目标上时触发。</li>
          <li>dragover：在 dragenter 事件触发之后，随即触发，且被拖动元素在放置目标的范围内移动期间持续触发该事件。</li>
          <li>dragleave 或 drop：元素被拖出了放置目标时触发 dragleave 事件。元素</li>
          <li>drop：被拖动元素被放到了放置目标中时触发。</li>
        </ul>
        <div v-highlight>
          <pre>
            <code>
              // 自定义放置目标
              // &lt;div id="div">&lt;/div>

              var div = document.getElementById("div")

              // 可以将任何元素变成有效的放置目标
              // 方法是重写下列事件的默认行为
              EventUtil.addHandler(div, 'dragenter', function (event) {
                EventUtil.preventDefault(event)
              })
              EventUtil.addHandler(div, 'dragover', function (event) {
                EventUtil.preventDefault(event)
              })
              EventUtil.addHandler(div, 'drop', function (event) {
                EventUtil.preventDefault(event)
              })
            </code>
          </pre>
        </div>
      </div>
    </Card>
    <Card shadow style="width:450px">
      <h3 slot="title">2.dataTransfer对象</h3>
      <div>
        <p>拖动操作时实现数据交换。</p>
      </div>
    </Card>
    <Card shadow style="width:450px">
      <h3 slot="title">3.dataTransfer对象的属性和方法</h3>
      <div></div>
    </Card>
    <Card shadow style="width:450px">
      <h3 slot="title">4.dropEffect与effectAllowed</h3>
      <div>
        <p>确定被拖动的元素以及作为放置目标的元素能够接受什么操作。</p>
      </div>
    </Card>
    <Card shadow style="width:780px">
      <h3 slot="title">5.拖放元素</h3>
      <div>
        <p>创建一个绝对定位的元素，使其可以跟着鼠标移动。</p>
        <div v-highlight>
          <pre>
            <code>
              // &lt;div id="myDiv" style="position:absolute;width:10px; height:10px">&lt;/div>

              var myDiv = document.getElementById("myDiv")

              EventUtil.addHandler(document, "mousemove", function(event) {
                myDiv.style.left = event.
              })
            </code>
          </pre>
        </div>
        <p>创建一个绝对定位的元素，当鼠标点击它时，也可拖着它移动。</p>
        <div v-highlight>
          <pre>
            <code>
              // &lt;div class="draggable" style="position:absolute;width:10px; height:10px">&lt;/div>

              // 采用单例模式
              var dragDrop = function () {
                var dragging = null;

                function handleEvent(event) {
                  event = EventUtil.getEvent(event);
                  var target = EventUtil.getTarget(event);

                  switch (event.type) {
                    case "mousedown":
                      if (target.className.indexOf("draggable") > -1) {
                        dragging = target;
                      }
                      break;
                    case "mousemove":
                      if (dragging !== null) {
                        dragging.style.left = event.clientX + "px";
                        dragging.style.top = event.clientY + "px";
                      }
                      break;
                    case "mouseup":
                      dragging = null;
                      break;
                    default:
                    //...
                  }
                };

                return {
                  enable: function () {
                    EventUtil.addHandler(document, "mousedown", handleEvent)
                    EventUtil.addHandler(document, "mousemove", handleEvent)
                    EventUtil.addHandler(document, "mouseup", handleEvent)
                  },
                  disable: function () {
                    EventUtil.removeHandler(document, "mousedown", handleEvent)
                    EventUtil.removeHandler(document, "mousemove", handleEvent)
                    EventUtil.removeHandler(document, "mouseup", handleEvent)
                  }
                }
              }();

              // 启用拖动功能
              dragDrop.enable()

              // 禁用拖动功能
              //dragDrop.disable()
            </code>
          </pre>
        </div>
      </div>
    </Card>
    <Card shadow style="width:700px">
      <h3 slot="title">6.修缮拖动功能</h3>
      <div>
        <p>
          元素左上角总是和鼠标指针在一起，当鼠标移动时，元素好像是突然跳动了一下。理想状态是，当在拖动元素时，用户点击的那个点应该是保持不变的。
          （这个点的计算方式 event.clientX（当前鼠标指针距左侧屏幕的距离） - elenment.offsetLeft (元素距页面左侧的偏移量)）
        </p>
        <div v-highlight>
          <pre>
            <code>
              // 采用单例模式
              var dragDrop = function () {
                var dragging = null,
                diffX = 0,
                diffY = 0;

                function handleEvent(event) {
                  event = EventUtil.getEvent(event);
                  var target = EventUtil.getTarget(event);

                  switch (event.type) {
                    case "mousedown":
                      if (target.className.indexOf("draggable") > -1) {
                        dragging = target;
                        // 鼠标指针以元素为基准的x坐标
                        diffX =  event.clientX - target.offsetLeft;

                        // 鼠标指针以元素为基准的y坐标
                        diffY =  event.clientY - target.offsetTop;
                      }
                      break;
                    case "mousemove":
                      if (dragging !== null) {
                        // 在拖动过程中，鼠标指针始终位于元素的同一点上
                        dragging.style.left = (event.clientX - diffX) + "px";
                        dragging.style.top = (event.clientY - diffY) + "px";
                      }
                      break;
                    case "mouseup":
                      dragging = null;
                      break;
                    default:
                    //...
                  }
                };

                return {
                  enable: function () {
                    EventUtil.addHandler(document, "mousedown", handleEvent)
                    EventUtil.addHandler(document, "mousemove", handleEvent)
                    EventUtil.addHandler(document, "mouseup", handleEvent)
                  },
                  disable: function () {
                    EventUtil.removeHandler(document, "mousedown", handleEvent)
                    EventUtil.removeHandler(document, "mousemove", handleEvent)
                    EventUtil.removeHandler(document, "mouseup", handleEvent)
                  }
                }
              }();
            </code>
          </pre>
        </div>
      </div>
    </Card>
    <Card shadow style="width:700px">
      <h3 slot="title">7.结合自定义事件的重新封装</h3>
      <div>
        <p>
          元素左上角总是和鼠标指针在一起，当鼠标移动时，元素好像是突然跳动了一下。理想状态是，当在拖动元素时，用户点击的那个点应该是保持不变的。
          （这个点的计算方式 event.clientX（当前鼠标指针距左侧屏幕的距离） - elenment.offsetLeft (元素距页面左侧的偏移量)）
        </p>
        <div v-highlight>
          <pre>
            <code>
              // 采用单例模式
              var DragDrop = function () {
                // 添加自定义事件
                var dragdrop = new EventTarget(),
                  dragging = null,
                  diffX = 0,
                  diffY = 0;
                function handleEvent(event) {
                  event = EventUtil.getEvent(event);
                  var target = EventUtil.getTarget(event);

                  switch (event.type) {
                    case "mousedown":
                      if (target.className.indexOf("draggable") > -1) {
                        dragging = target;
                        diffX = event.clientX - target.offsetLeft;
                        diffY = event.clientY - target.offsetTop;
                        // 触发自定义事件
                        dragdrop.fire({ type: "dragstart", target: dragging, x: event.clientX, y: event.clientY })
                      }
                      break;
                    case "mousemove":
                      if (dragging !== null) {
                        dragging.style.left = (event.clientX - diffX) + "px";
                        dragging.style.top = (event.clientY - diffY) + "px";
                        dragdrop.fire({ type: "drag", target: dragging, x: event.clientX, y: event.clientY })
                      }
                      break;
                    case "mouseup":
                      dragdrop.fire({ type: "dragend", target: dragging, x: event.clientX, y: event.clientY })
                      dragging = null;
                      break;
                    default:
                    //...
                  }
                };

                // 公共接口
                dragdrop.enable = function () {
                  EventUtil.addHandler(document, "mousedown", handleEvent)
                  EventUtil.addHandler(document, "mousemove", handleEvent)
                  EventUtil.addHandler(document, "mouseup", handleEvent)
                };
                dragdrop.disable = function () {
                  EventUtil.removeHandler(document, "mousedown", handleEvent)
                  EventUtil.removeHandler(document, "mousemove", handleEvent)
                  EventUtil.removeHandler(document, "mouseup", handleEvent)
                };
                return dragdrop;
              }();

              DragDrop.enable();

              // 使用自定义事件
              DragDrop.addHandler("dragstart", function(event){
                //...
              });
              DragDrop.addHandler("drag", function(event){
                //...
              });
              DragDrop.addHandler("dragend", function(event){
                //...
              });
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
  name: 'api-5',
  components: {
    Card
  }
}
</script>

<style scoped lang="stylus">
.api-5
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
