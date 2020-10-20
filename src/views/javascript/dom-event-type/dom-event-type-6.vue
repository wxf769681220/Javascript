<template>
  <div class="dom-event-type-6">
    <Card shadow style="width:520px">
      <h3 slot="title">1.orientationchange事件</h3>
      <div>
        <p>苹果公司为移动 safari 中添加 orientationchange 事件，可以让开发人员确定用户何时将设备由横向查看模式切换为纵向查看模式。window.orientation 属性中可能包含四个值： </p>
        <ul class="menu">
          <li>0：表示肖像模式；</li>
          <li>90：表示左旋转横向模式；</li>
          <li>-90：表示右旋转横向模式</li>
          <li>180：表示 iphone 头朝下</li>
        </ul>
        <div v-highlight>
          <pre>
            <code>
              // 默认肖像模式
              window.orientation => 0

              // 左旋转90
              window.onorientationchange = function() {
                //...
              }
            </code>
          </pre>
        </div>
      </div>
    </Card>
    <Card shadow style="width:540px">
      <h3 slot="title">2.MozOrientation事件（非标准事件或已弃用）</h3>
      <div>
        <p>firefox 为移动设备添加 MozOrientation 事件，当设备的加速针加测到设备方向改变时会触发这个事件。</p>
        <div v-highlight>
          <pre>
            <code>
              // Moz为特定浏览器前缀
              window.onMozOrientation = function(event) {
                // event.x
                // event.y
                // event.z
              }
            </code>
          </pre>
        </div>
      </div>
    </Card>
    <Card shadow style="width:940px">
      <h3 slot="title">3.deviceorientation事件</h3>
      <div>
        <p>
          设备上的加速针检测到设备方向发生变化时在 window 上触发。它的意图是告诉开发人员设备在空间中朝向哪儿，而不是移动。
          设备在空间中靠 x、y、z 轴来确定。触发 deviceorientation 事件时，事件对象包含着每个轴相对于设备静止状态下发生变化的信息。
        </p>
        <div v-highlight>
          <pre>
            <code>
              window.ondeviceorientation = function(event) {
                // 在围绕z轴旋转（即左右旋转）时，y轴的度数差；是一个介于0~360之间的浮点数
                event.alpha

                // 在围绕x轴旋转（即前后旋转）时，z轴的度数差；是一个介于-180~180之间的浮点数
                event.beta

                // 在围绕y轴旋转（即扭转设备）时，x轴的度数差；是一个介于-90~90之间的浮点数
                event.gamma

                // 布尔值,表示设备是否返回一个绝对值
                event.absolute

                // 布尔值,设备的指南针是否校准过
                event.compassCalibrated

                // 响应设备方向而旋转元素（指南针效果）
                // 只能在移动webkit浏览器中运行（专有属性webkitTransform）
                var arrow = docuemnt.getElementById("arrow")

                arrow.style.webkitTransform = "rotate(" + Math.round(event.alpha) + "deg)";
              }
            </code>
          </pre>
        </div>
      </div>
    </Card>
    <Card shadow style="width:740px">
      <h3 slot="title">4.devicemotion事件</h3>
      <div>
        <p>devicemotion 事件可以告诉开发人员设备是什么时候移动，而不仅仅是设备的方向发生变化。devicemotion 事件能够检测到设备是不是正在往下掉。或者是不是被走着的人拿在手里。</p>
        <div v-highlight>
          <pre>
            <code>
              window.ondevicemotion = function(event) {

                // 一个包含x、y和z属性的对象
                // 在不考虑重力的情况下，告诉你在每个方向上的加速度
                // 若读取不到值，则为null
                if (event.acceleration !== null) {
                    event.acceleration
                }

                // 一个包含x、y和z属性的对象
                // 在考虑z轴自然重力加速度的情况下，告诉你在每个方向上的加速度
                // 若读取不到值，则为null
                if (event.accelerationIncludingGravity !== null) {
                  event.accelerationIncludingGravity
                }

                // 以毫秒表示时间值，必须在另一个devicemotion事件触发前传入
                // 这个值在每个时间中应该是一个常量
                event.interval

                // 一个包含alpha、beta和gamma属性的对象
                // 若读取不到值，则为null
                if (event.rotationRate !== null) {
                  event.rotationRate
                }
              }
            </code>
          </pre>
        </div>
      </div>
    </Card>
    <Card shadow style="width:1400px">
      <h3 slot="title">5.触摸（touch）事件</h3>
      <div>
        <p>触摸事件会在用户手指放在屏幕上面时，在屏幕滑动时或从屏幕上移开时触发。触摸事件由以下几种：</p>
        <ul class="menu">
          <li>touchstart：当手指触摸屏幕时触发，即使已经有手指放在屏幕上了也会触发。</li>
          <li>touchmove：当手指在屏幕上滑动时连续触发。（若此操作是在滚动页面，则可以用 preventDefault() 来阻止滚动）</li>
          <li>touchend：当手指从屏幕上移开时触发。</li>
          <li>touchcancel：当系统停止跟踪触摸时触发。</li>
        </ul>
        <div v-highlight>
          <pre>
            <code>
              // 以下事件都会冒泡，也可以取消
              window.ontouchstart = function(event) {

                //当前跟踪的触摸操作的Touch对象的数组
                event.touches

                //特定于事件目标的Touch对象的数组
                event.targetTouchs

                //自上次触摸以来发生了什么改变的Touch对象的数组
                event.changedTouches

                //当前跟踪的触摸操作的Touch对象的数组
                event.touches
              }

              // Touch对象都包含以下属性：

              Touch: {
                // 触摸目标在视口中的x坐标
                clientX: ,

                // 触摸目标在视口中的y坐标
                clientY: ,

                // 触摸目标在页面中的x坐标
                pageX:  ,

                // 触摸目标在页面中的y坐标
                pageY: ,

                // 触摸目标在屏幕中的x坐标
                screenX: ,

                // 触摸目标在屏幕中的y坐标
                screenY: ,

                // 标识触摸的唯一ID
                identifier: ,

                // 触摸的DOM节点目标
                target:
              }
            </code>
          </pre>
        </div>
        <p>使用上述属性可以跟踪用户对屏幕的触摸操作。</p>
        <div v-highlight>
          <pre>
            <code>
              function handleTouchEvent(event) {
                event = EventUtil.getEvent(event)
                // 只跟踪一次触摸
                if (event.touches.length === 1) {
                  var output = document.getElementById("myDiv")
                  switch (event.type) {
                    case "touchstart":
                      output.innerHTML = "Touch started (" + event.touches[0].clientX + "," + event.touches[0].clientY + ")";
                      break;
                    case "touchend":
                      output.innerHTML = "Touch ended (" + event.changedTouches[0].clientX + "," + event.changedTouches[0].clientY + ")";
                      break;
                    case "touchmove":
                      // 阻止页面滚动操作
                      EventUtil.preventDefault(event)
                      output.innerHTML = "Touch moved (" + event.changedTouches[0].clientX + "," + event.changedTouches[0].clientY + ")";
                      break;
                    default:
                      //...
                  }
                }
              }
              // DOM2级
              EventUtil.addHandler(document, "touchstart", handleTouchEvent)
              EventUtil.addHandler(document, "tuchend", handleTouchEvent)
              EventUtil.addHandler(document, "touchmove", handleTouchEvent)

              /***********************************************************************/
              // chrome监听touch类事件报错：event.preventDefault()。
              // 两种解决方案：
              window.addEventListener(‘touchmove’, func, { passive: false })

              // 应用CSS属性touch-action: none;
              html {
                touch-action: none;
              }
            </code>
          </pre>
        </div>
      </div>
    </Card>
    <Card shadow style="width:1200px">
      <h3 slot="title">6.手势事件</h3>
      <div>
        <p>当两个手指触摸屏幕时就会产生手势，手势通常会改变显示项的大小、或者旋转显示项。手势事件与触摸事件之间存在某种关系，在手势事件触发前后会触发触摸事件。以下三个手势事件：</p>
        <ul class="menu">
          <li>gesturestart：当一个手指已经按在屏幕上而另一个手指又触摸屏幕时触发。</li>
          <li>gesturechange：当触摸屏幕的任何一个手指的位置发生变化时触发。</li>
          <li>gestureend：当任何一个手指从屏幕上移开时触发。</li>
        </ul>
        <div v-highlight>
          <pre>
            <code>
              // 只有当两个手指都触摸到事件的接收容器才会触发手势事件
              // 以下事件都会冒泡，因此将事件处理程序放在文档上也可以处理手势事件
              // 与触摸事件一样，每个手势事件的event事件对象都包含着标准的鼠标事件属性
              // 还包含有个额外的属性rotation和scale
              // rotation：表示手指变化引起的旋转角度，负值表示逆时针旋转，正值表示顺时针旋转（从0开始）
              // scale：表示两个手指之间距离的变化情况，这个值从1开始，随着距离拉大而增长，反之减小。
              function handleGestureEvent(event) {
                var output = document.getElementById("myDiv")
                switch (event.type) {
                  case "gesturestart":
                    output.innerHTML = "Gesture started (rotation=" + event.rotation + ",scale=" + event.scale + ")";
                    break;
                  case "gestureend":
                    output.innerHTML = "Gesture ended (rotation=" + event.rotation + ",scale=" + event.scale + ")";
                    break;
                  case "gesturechange":
                    output.innerHTML = "Gesture changed (rotation=" + event.rotation + ",scale=" + event.scale + ")";
                    break;
                  default:
                    //...
                }
              }

              // DOM2级
              docuemnt.addEventListener("gesturestart", handleGestureEvent, false)
              docuemnt.addEventListener("gestureend", handleGestureEvent, false)
              docuemnt.addEventListener("gesturechange", handleGestureEvent, false)
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
  name: 'dom-event-type-6',
  components: {
    Card
  }
}
</script>

<style scoped lang="stylus">
.dom-event-type-6
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
