<template>
  <div class="offline-app-1">
    <div class="layout-content">
      <Card dis-hover shadow style="width:600px">
        <h3 slot="title">1.离线检测</h3>
        <div>
          <p>开发离线应用的第一步是要知道设备是在线还是离线。HTML5为此定义了一个navigator.onLine属性，该属性值为true，表示设备能上网；值为false，表示设备离线。</p>
          <div v-highlight>
            <pre>
              <code>
                if (navigator.onLine) {
                  //正常工作
                } else {
                  //执行离线状态时的任务
                }
              </code>
            </pre>
          </div>
          <p>由于浏览器的兼容问题，为了更好地确定网络是否可用，HTML5还定义了了两个事件：online和offline。当网络从离线变为在线或从在线变为离线时，分别触发这两个事件。</p>
          <div v-highlight>
            <pre>
              <code>
                //在window上触发
                EventUtil.addHandler(window, "online", function(event) {
                  //alert("online!")
                })

                EventUtil.addHandler(window, "offline", function(event) {
                  //alert("offline!")
                })
              </code>
            </pre>
          </div>
        </div>
      </Card>
      <Card dis-hover shadow style="width:820px">
        <h3 slot="title">2.应用缓存</h3>
        <div>
          <p>
            HTML5的应用缓存（application-cache），简称appcache，是专门为开发离线应用而设计的。appcache就是从浏览器的缓存中分出来的一块缓存。
            要想在这个缓存中保存数据，可以使用一个描述文件，列出要下载和缓存的资源。
          </p>
          <div v-highlight>
            <pre>
              <code>
                //描述文件
                //描述文件的扩展名的MIME类型必须是text/cache-manifest
                //描述文件的扩展名现在推荐的是appcache
                CACHE MANIFEST
                #COMMENT
                file.js
                file.css

                //描述文件与页面关联
                &lt;html manifest="/offline.appcache">
              </code>
            </pre>
          </div>
          <p>应用缓存的目的是确保离线时资源可用。应用缓存的javascript API可以让你知道它都在做什么。这个API的核心对象是applicationCache对象。</p>
          <div v-highlight>
            <pre>
              <code>
                //status属性表示应用缓存当前的状态
                applicationCache.status

                //状态描述
                switch(applicationCache.status) {
                  case 0:
                    //无缓存,即没有与页面相关的应用缓存
                  break;
                  case 1:
                    //闲置,即应用缓存未得到更新
                  break;
                  case 2:
                    //检测中,即正在下载描述文件并检查更新
                  break;
                  case 3:
                    //下载中,即应用缓存正在下载描述文件中的指定资源
                  break;
                  case 4:
                    //更新完成,即应用缓存已经更新了资源，并且所有资源都已下载完毕可以通过swapCache()来使用了
                  break;
                  case 5:
                    //废弃,即应用缓存的描述文件已经不存在了,因此页面无法再访问应用缓存
                  break;
                  default:
                    //...
                }
              </code>
            </pre>
          </div>
          <p>一般来讲，随着页面的加载会触发以下一系列事件：</p>
          <div v-highlight>
            <pre>
              <code>
                //在浏览器为应用查找更新时触发
                EventUtil.addHandler(applicationCache, "checking", function(event) {
                  //...
                })

                //在检查更新或下载资源期间发生错误时触发
                EventUtil.addHandler(applicationCache, "error", function(event) {
                   //...
                })

                //在检查描述文件发现文件无变化时触发
                EventUtil.addHandler(applicationCache, "noupdate", function(event) {
                   //...
                })

                //在开始下载应用缓存资源时触发
                EventUtil.addHandler(applicationCache, "download", function(event) {
                   //...
                })
                //在文件下载应用缓存的过程中持续不断的触发
                EventUtil.addHandler(applicationCache, "progress", function(event) {
                   //...
                })

                //在页面新的应用缓存下载完毕且可以通过swapCache()使用时触发
                EventUtil.addHandler(applicationCache, "updateready", function(event) {
                   //...
                })

                //在应用缓存完整可用时触发
                EventUtil.addHandler(applicationCache, "cached", function(event) {
                   //...
                })
              </code>
            </pre>
          </div>
          <p>通过调用applicationCache对象的update()方法，也可以手动触发应用缓存的更新。一旦调用update()方法,应用缓存就会去检查描述文件是否更新(触发checking事件)，
           然后就像页面刚刚加载一样，继续执行后续的操作。若触发了updateready事件，说明新版本的已经可用，此时你需要调用swapCache()方法来开启新应用缓存。
           若触发了cached事件，说明应用缓存已经准备就绪，不会再执行其他操作了</p>
          <div v-highlight>
            <pre>
              <code>
                applicationCache.update()
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
  name: 'offline-app-1',
  created() {},
  components: {
    Card
  }
}
</script>

<style scoped lang="stylus">
.offline-app-1
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
