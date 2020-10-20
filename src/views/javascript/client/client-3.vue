<template>
  <div class="client-3">
    <Card shadow style="width:820px">
      <h3 slot="title">1.浏览器渲染</h3>
      <p>浏览器发送 http 请求，服务器接收请求并做出响应，浏览器引擎获取服务器响应文本。渲染引擎在取得内容之后的基本流程：</p>
      <div>
        <ol class="menu">
          <li>解析 HTML 文档 - 构建 DOM 树。</li>
          <li>解析 CSS - 构建 CSSOM 树。</li>
          <li>将 DOM 树与 CSSOM 树合并生成用于 render tree（渲染树）。</li>
          <li>渲染引擎遍历 render tree，然后对网页进行布局与绘制，最后渲染出来。</li>
          <li>若 DOM 树发生改变，渲染引擎会重新遍历 render tree，然后对网页进行重绘。</li>
        </ol>
        <h4 style="margin-top: 10px">在上述过程中，会同时进行网络资源的加载，如：css样式表、js脚本或图像。</h4>

        <h4 style="margin: 10px 0">在解析 html 文档时，若遇见&lt;link>标签，</h4>
        <ol class="menu">
          <li>浏览器会向服务器发送请求资源。在资源下载的过程中，不会阻塞对 html 的解析。</li>
          <li>若请求的资源是 css 样式表，会阻塞 render tree 的渲染。</li>
        </ol>
        <h4 style="margin: 10px 0">在解析 html 文档时，若遇见&lt;img>标签，</h4>
        <ol class="menu">
          <li>若请求的资源是图像，图像加载完毕后，不会直接渲染出来，它会等到 Render Tree 完成后一起渲染出来。</li>
        </ol>
        <h4 style="margin: 10px 0">在解析 html 文档时，若遇见 &lt;script> 标签，</h4>
        <ol class="menu">
          <li>遇到 script 标签，对 html 的解析将会停下来，然后去执行 js 代码，因此 script 标签通常建议放在&lt;/body>之前，能优化用户体验，减少白屏时间。</li>
        </ol>
      </div>
    </Card>
    <Card shadow style="width:1200px">
      <h3 slot="title">2.浏览器缓存</h3>
      <p>浏览器根据第一次 http 请求返回的响应头部信息来确定该资源要不要缓存，如何去缓存。我们将缓存过程分为强缓存和协商缓存。</p>
      <h4 style="margin: 10px 0">强缓存：</h4>
      <div>
        <ol class="menu">
          <li>强缓存：不会向服务器重新发送请求，直接从缓存中读取资源。</li>
          <li>
            强缓存是通过设置 Web 服务器响应头（HTTP Header）字段实现的：Expires 和 Cache-Control
            <ol class="menu">
              <li>Expires：表示缓存过期时间，浏览器在过期时间前可以直接从浏览器缓存取数据，而无需再次请求。</li>
              <li>Cache-Control：表示从请求成功返回的那个时间点开始，在某一时间内再次加载资源时，就会命中强缓存。</li>
              <li>两者同时存在的话，Cache-Control优先级高于Expires。</li>
            </ol>
          </li>
        </ol>
        <div v-highlight>
          <pre>
            <code>
               /* Expires是HTTP/1的产物，受限于本地时间，如果修改了本地时间，可能会造成缓存失效
                * 服务端设置：Expires = max-age + 请求时间
                * 响应头部信息：Expires: Wed, 22 Oct 2018 08:41:00 GMT
                */

              //////////////////////////////////////////////////////////////////////

               /* Cache-Control是HTTP/1的产物，也是一个最重要的字
                * 服务端设置：Cache-Control: max-age = 300
                * 响应头部信息：Cache-Control: max-age = 300
                * Cache-Control可以在请求头或者响应头中设置，并且可以组合使用多种指令：
                ** no-store：所有内容都不会被缓存，即不使用强制缓存，也不使用协商缓存
                ** no-cache：资源被缓存，但立即失效。下次会发起请求验证资源是否过期
                ** max-age：表示缓存内容将在xxx秒后失效
               */
            </code>
          </pre>
        </div>
        <h4 style="margin: 10px 0">协商缓存：</h4>
        <ol class="menu">
          <li>协商缓存：强缓存失效后，浏览器向服务器发起请求时，由服务器根据缓存标识决定是否使用缓存。协商缓存生效，http 状态码会返回 304（Not modified）；
            协商缓存失效，http 状态码会返回 200。</li>
          <li>
            协商缓存是通过设置 Web 服务器响应头（HTTP Header）字段实现的：Last-Modified 和 ETag
            <ol class="menu">
              <li>Last-Modified：表示资源在服务器上的最后修改时间。</li>
              <li>ETag：表示资源文件的一个唯一标识(由服务器生成)。</li>
              <li>Last-Modified与ETag对比：（1）精确度上，Etag要优于Last-Modified。（2）性能上，Etag（服务器要通过计算来计算出一个hash值）要逊于Last-Modified（只保存时间）。（3）
                在优先级上，服务器校验优先考虑Etag。
              </li>
            </ol>
          </li>
        </ol>
        <div v-highlight>
          <pre>
            <code>
               /* 服务器第一次响应请求时，在Web服务器响应头（Response Header）添加Last-Modified字段，
                * 浏览器接收后，缓存文件和Response Header；
                * 服务端设置：Last-Modified: Fri, 22 Jul 2016 01:47:00 GMT
                *
                * 浏览器下一次请求时，会检测到Request Header有Last-Modified字段时，
                * 会在Request Header中添加If-Modified-Since字段（其值就是Last-Modified中的值）
                * 服务器再次收到请求，会根据If-Modified-Since中的值与服务器中这个资源的最后修改时间对比，
                * 若没有变化，返回304，资源直接从缓存读取；
                * 若If-Modified-Since的时间小于服务器中这个资源的最后修改时间，说明文件有更新，于是返回200和新的资源文件
                */

              //////////////////////////////////////////////////////////////////////

              /* 服务器第一次响应请求时，在Web服务器响应头（Response Header）添加Etag字段，
                * 浏览器接收后，缓存文件和Response Header；
                * 服务端设置：Etag:

                * 浏览器下一次请求时，会检测到Request Header有Etag字段时，
                * 会在HTTP Header中添加If-None-Match字段（其值就是Etag中的值）
                * 服务器再次收到请求，会根据If-None-Match中的值与服务器上该资源的ETag值是否一致做判断，
                * 如果ETag是一致的，则直接返回304，资源直接从缓存读取；
                * 如果ETag不一致，则直接返回200和新的资源文件（当然也包括了新的ETag）；
              **/
            </code>
          </pre>
        </div>
        <h4 style="margin: 10px 0">缓存位置：</h4>
        <ol class="menu">
          <li>Service works：运行在浏览器后台的独立线程，一般可以用来实现缓存功能。</li>
          <li>Memory Cache：储存在内存中的缓存。</li>
          <li>Disk Cache：储存在磁盘中的缓存。</li>
          <li>Push Cache：推送缓存。是 HTTP/2 中的内容，当以上三种缓存都没有命中时，它才会被使用。</li>
        </ol>
      </div>
    </Card>
  </div>
</template>

<script>
import { Card } from 'view-design'

export default {
  name: 'client-3',
  components: {
    Card
  }
}
</script>

<style scoped lang="stylus">
.client-3
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
