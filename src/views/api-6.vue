<template>
  <div class="api-6">
    <div class="layout-content">
      <Card dis-hover shadow style="width:650px">
        <h3 slot="title">1.页面可见性（Page visibility API）</h3>
        <div>
          <ul class="menu">
            <li>有时候，开发者需要知道，用户正在离开页面。常用的方法是监听以下三个事件：pagehide、beforeunload和unload。</li>
            <li>
              在手机上这些事件可能还没来及触发，页面就直接卸载了。（因为手机系统可以将一个进程直接转入后台，然后卸载页面，比如：
              <ul class="menu">
                <li>用户点击了一条系统通知，切换到另一个App。</li>
                <li>用户进入任务切换窗口，切换到另一个App。</li>
                <li>用户点击了Home按钮，切换回主屏幕。</li>
                <li>操作系统自动切换到另一个App（比如，收到一个电话）。</li>
              </ul>
            </li>
            <li>在以前，像上述情况，页面被系统切换，以及系统清除浏览器进程，是无法监听到的。为了解决这个问题，就诞生了Page Visibility API。</li>
            <li>不管手机或桌面电脑，这个API都会监听到页面的可见性发生变化。</li>
            <li>
              它的意义在于，通过监听网页的可见性，可以预判网页的卸载。还可以用来节省资源，减缓电能的消耗。比如，一旦用户不看网页（页面最小化或者隐藏在了其他标签页后面），
              那么下列功能是可以停下来的：
              <ul class="menu">
                <li>对服务器的轮询。</li>
                <li>网页动画。</li>
                <li>正在播放的音频或视频。</li>
              </ul>
            </li>
          </ul>
          <div v-highlight>
            <pre>
              <code>
                //返回一个布尔值，表示当前页面是否可见
                //该属性只是出于历史原因而保留的，只要有可能，
                //都应该使用document.visibilityState属性，而不是使用这个属性
                document.hidden
              </code>
            </pre>
          </div>
        </div>
      </Card>
      <Card dis-hover shadow style="width:750px">
        <h3 slot="title">2.document.visibilityState</h3>
        <div>
          <p>在document对象上，新增了一个document.visibilityState属性。该属性返回一个字符串，表示页面当前的可见性状态，共有三个可能的值：</p>
          <ul class="menu">
            <li>hidden：页面彻底不可见。</li>
            <li>visible：页面至少一部分可见。</li>
            <li>prerender：页面即将或正在渲染，处于不可见状态。</li>
          </ul>
          <div v-highlight>
            <pre>
              <code>
                document.visibilityState => "visible"

                //只有当浏览器出现以下情况时，才会返回"hidden"值
                //1.浏览器最小化
                //2.浏览器没有最小化，但是当前页面切换成了背景页
                //3.浏览器将要卸载（unload）页面
                //4.操作系统触发锁屏屏幕
                document.visibilityState => "hidden"
              </code>
            </pre>
          </div>
          <p>
            只要document.visibilityState属性发生变化，就会触发visibilitychange事件。因此，可以通过监听这个事件（通过document.addEventListener()方法或document.onvisibilitychange属性），
            跟踪页面可见性的变化。
          </p>
          <div v-highlight>
            <pre>
              <code>
                EventUtil.addHandler(document, "visibilitychange", function(event) {
                  //用户离开了当前页面
                  if (document.visibilityState === 'hidden') {
                    document.title = '页面不可见';
                    //暂停视频播放
                    video.pause();
                  }

                  //用户打开或回到页面
                  if (document.visibilityState === 'visible') {
                    document.title = '页面可见';
                    //开始播放视频
                    video.play();
                  }
                })
              </code>
            </pre>
          </div>
        </div>
      </Card>
      <Card dis-hover shadow style="width:740px">
        <h3 slot="title">3.页面卸载</h3>
        <div>
          <p>页面卸载可以分成下面几种情况。</p>
          <ul class="menu">
            <li>页面可见时，用户关闭Tab页或浏览器窗口。</li>
            <li>页面可见时，用户在当前窗口前往另一个页面。</li>
            <li>页面可见时，最小化窗口。</li>
            <li>页面不可见时，用户或系统关闭浏览器窗口。</li>
            <li>页面不可见时，最大化窗口。</li>
          </ul>
          <p>以上这些情况，都会触发visibilitychange事件。由此可见，visibilitychange事件比pagehide、beforeunload、unload事件更可靠。因此，优先选择使用visibilitychange事件。</p>
          <div v-highlight>
            <pre>
              <code>
                /*
                 * unload事件在任何情况下都不必监听
                 * beforeunload事件只有一种适用场景，就是用户修改了表单，没有提交就离开当前页面
                 * 指定了这两个事件的监听函数，浏览器就不会缓存当前页面。
                 */
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
  name: 'api-6',
  created() {},
  components: {
    Card
  }
}
</script>

<style scoped lang="stylus">
.api-6
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
