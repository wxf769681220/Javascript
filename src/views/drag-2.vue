<template>
  <div class="drag-2">
    <div class="layout-content">
      <Card :dis-hover="true" shadow style="width:780px">
        <h3 slot="title">1.拖放元素</h3>
        <div>
          <p>创建一个绝对定位的元素，使其可以跟着鼠标移动。</p>
          <div v-highlight>
            <pre>
              <code>
                /* html结构
                  &lt;div id="myDiv" style="position:absolute;width:10px; height:10px">&lt;/div>
                **/

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
                /* html结构
                  &lt;div class="draggable" style="position:absolute;width:10px; height:10px">&lt;/div>
                **/

                //采用单例模式
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

                //启用拖动功能
                dragDrop.enable()

                //禁用拖动功能
                //dragDrop.disable()
              </code>
            </pre>
          </div>
        </div>
      </Card>
      <Card :dis-hover="true" shadow style="width:700px">
        <h3 slot="title">2.修缮拖动功能</h3>
        <div>
          <p>元素左上角总是和鼠标指针在一起，当鼠标移动时，元素好像是突然跳动了一下。理想状态是，当在拖动元素时，用户点击的那个点应该是保持不变的。
            （这个点的计算方式event.clientX（当前鼠标指针距左侧屏幕的距离） - elenment.offsetLeft(元素距页面左侧的偏移量)）</p>
          <div v-highlight>
            <pre>
              <code>
                //采用单例模式
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
                          //鼠标指针以元素为基准的x坐标
                          diffX =  event.clientX - target.offsetLeft;

                          //鼠标指针以元素为基准的y坐标
                          diffY =  event.clientY - target.offsetTop;
                        }
                        break;
                      case "mousemove":
                        if (dragging !== null) {
                          //在拖动过程中，鼠标指针始终位于元素的同一点上
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
      <Card :dis-hover="true" shadow style="width:700px">
        <h3 slot="title">3.结合自定义事件的重新封装</h3>
        <div>
          <p>元素左上角总是和鼠标指针在一起，当鼠标移动时，元素好像是突然跳动了一下。理想状态是，当在拖动元素时，用户点击的那个点应该是保持不变的。
            （这个点的计算方式event.clientX（当前鼠标指针距左侧屏幕的距离） - elenment.offsetLeft(元素距页面左侧的偏移量)）</p>
          <div v-highlight>
            <pre>
              <code>
                //采用单例模式
                var DragDrop = function () {
                  //添加自定义事件
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
                          //触发自定义事件
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

                  //公共接口
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

                //使用自定义事件
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
  </div>
</template>

<script>
import { Card } from 'view-design'

export default {
  name: 'drag-2',
  created() {},
  components: {
    Card
  }
}
</script>

<style scoped lang="stylus">
.drag-2
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
