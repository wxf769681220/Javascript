<template>
  <div class="api-4">
    <div class="layout-content">
      <Card dis-hover shadow style="width:1200px">
        <h3 slot="title">1.performance对象</h3>
        <div>
          <ul class="menu">
            <li>页面性能一直都是Web开发人员比较关注的领域。但在实际应用中，度量页面性能的指标，是javascript的Date对象。</li>
            <li>Web Timing API改变了这个局面，让开发人员通过javascript就能使用浏览器内部的度量结果，给出了页面加载和渲染过程的很多信息，对性能优化非常有价值。</li>
            <li>Web计时机制的核心是window.performance对象。</li>
            <li>performance对象的属性：navigation、timing、memory等。</li>
          </ul>
          <div v-highlight>
            <pre>
              <code>
                //包含页面所有的度量信息
                window.performance

                //包含页面导航有关的多个属性
                var n = performance.navigation

                //表示页面加载前的重定向次数
                n.redirectCount

                //刚刚发生的导航类型
                //0：页面第一次加载
                //1：页面重载过；
                //2：页面是通过"后退"或"前进"按钮打开的
                n.type

                /***************************************************************

                //这个对象的属性都是时间戳，不同的事件会产生不同的时间值
                var t = performance.timing

                t.connectStart: 1593701592776 //浏览器尝试连接服务器的时间
                t.secureConnectionStart: 0    //浏览器尝试以SSL方式连接服务器的时间。不使用SSL方式连接时，这个属性的值为0
                t.connectEnd: 1593701592776   //浏览器成功连接到服务器的时间

                t.domLoading: 1593701592779                  //document.readyState变为"loading"的时间，即开始解析DOM树的时间
                t.domInteractive: 1593701592782              //document.readyState变为"interactive"的时间，即完成完成解析DOM树的时间
                t.domComplete: 1593701592782                 //document.readyState变为"complete"的时间，即DOM树解析完成、网页内资源准备就绪的时间

                t.domContentLoadedEventStart: 1593701592782  //发生DOMContentloaded事件的时间，即开始加载网页内资源的时间
                t.domContentLoadedEventEnd: 1593701592782    //DOMContentLoaded事件已经发生且执行完所有事件处理程序的时间，网页内资源加载完成的时间

                t.domainLookupStart: 1593701592776 //开始査询当前页面DNS的时间，如果使用了本地缓存或持久连接，则与fetchStart值相等
                t.domainLookupEnd: 1593701592776   //査询当前页面DNS结束的时间，如果使用了本地缓存或持久连接，则与fetchStart值相等

                t.loadEventEnd: 1593701592783   //发生load事件的时间，也就是load回调函数开始执行的时间
                t.loadEventStart: 1593701592782 //发生load事件的时间，也就是load回调函数开始执行的时间

                t.redirectEnd: 0   //到当前页面的重定向结束的时间。但只有在重定向的页面来自同一个域时这个属性才会有值；否则，值为0
                t.redirectStart: 0 //到当前页面的重定向开始的时间。但只有在重定向的页面来自同一个域时这个属性才会有值；否则，值为0

                t.requestStart: 1593701592776  //浏览器开始请求页面的时间
                t.responseStart: 1593701592776 //浏览器接收到页面第一字节的时间
                t.responseEnd: 1593701592776   //浏览器接收到页面所有内容的时间

                t.unloadEventStart: 1593701592777 //前一个页面的unload事件开始的时间。但只有在前一个页面与当前页面来自同一个域时这个属性才会有值；否则，值为0
                t.unloadEventEnd: 1593701592777   //前一个页面的unload事件结束的时间。但只有在前一个页面与当前页面来自同一个域时这个属性才会有值；否则，值为0

                t.navigationStart: 1593701592776 //开始导航到当前页面的时间，即在地址栏输入地址后按下回车时的时间

                t.fetchStart: 1593701592776 //开始通过HTTP GET取得页面的时间

                /******************************************************************************************/

                //chrome扩展的对象，只有chrome浏览器支持
                var m = performance.memory

                m.jsHeapSizeLimit  //表示内存大小限制
                m.totalJSHeapSize  //表示可使用的内存
                m.usedJSHeapSize   //表示javascript对象占用的内存
              </code>
            </pre>
          </div>
        </div>
      </Card>
      <Card dis-hover shadow style="width:900px">
        <h3 slot="title">2.performance对象的方法</h3>
        <div>
          <p>performance对象还包括两个方法：getEntries()和now()两个方法。</p>
          <div v-highlight>
            <pre>
              <code>
                //getEntries()方法将返回一个数组，包含了页面中所有的HTTP资源请求
                performance.getEntries()

                //performance.now()方法返回从页面初始化到调用该方法时的毫秒数
                //performance.now()与Date.now()不同的是：
                //1.它返回了以微秒为单位的时间，更加精准
                //2.Date.now()会受系统程序执行阻塞的影响，而performance.now()的时间是以恒定速率递增的，
                //不受系统时间的影响(系统时间可被人为或软件调整)
                //3.Date.now()输出的是UNIX时间，即距离1970年1月1日0点的时间，
                //而performance.now()输出的是相对于performance.timing.navigationStart(页面初始化)的时间
                performance.now()
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
  name: 'api-4',
  created() {},
  components: {
    Card
  }
}
</script>

<style scoped lang="stylus">
.api-4
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
