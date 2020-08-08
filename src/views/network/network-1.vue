<template>
  <div class="network-1">
    <Card shadow style="width:720px">
      <h3 slot="title">1.HTTP1.0的缺点</h3>
      <p>HTTP（Hyper Text Transfer Protocol）：超文本传输协议。传输控制协议（TCP，Transmission Control Protocol）是一种面向连接的、可靠的、基于字节流的传输层通信协议。</p>
      <div>
        <ul class="menu">
          <li>
            HTTP/1.0 一次只允许在一个 TCP 连接上发起一个请求，HTTP/1.1 使用的流水线技术也只能部分处理请求并发，仍然会存在队列头阻塞问题。
            因此客户端在需要发起多次请求时，通常会采用建立多连接来减少延迟。
          </li>
          <li>单向请求,只能由客户端发起。</li>
          <li>请求头部信息与响应头部信息冗余量大。</li>
          <li>数据未压缩，导致数据的传输量大。</li>
        </ul>
      </div>
    </Card>
    <Card shadow style="width:720px">
      <h3 slot="title">2.HTTP2.0特点</h3>
      <p>HTTP2.0 大幅度的提高了 web 性能，在 HTTP1.1 完全语义兼容的基础上，进一步减少了网络的延迟，实现低延迟高吞吐量。</p>
      <h4 style="margin: 10px 0">SPDY协议：</h4>
      <ul class="menu">
        <li>SPDY 是 Speedy 的昵音，意为"更快"。</li>
        <li>它是 Google 开发的基于 TCP 协议的应用层协议。</li>
        <li>它的目标是：优化 HTTP 协议的性能，通过压缩、多路复用和优先级等技术，缩短网页的加载时间并提高安全性。</li>
        <li>它的核心思想是：尽量减少 TCP 连接数。</li>
        <li>它并不是一种用于替代HTTP的协议，而是对 HTTP 协议的增强。</li>
      </ul>
      <p style="margin: 10px 0">------------------------------------- HTTP2.0 --------------------------------------</p>
      <div>
        <h4 style="margin: 10px 0">多路复用：</h4>
        <ul class="menu">
          <li>
            在 HTTP/1 协议中，浏览器客户端在同一时间，对同一域名下的请求有一定数量限制，超过限制数目的请求会被阻塞。
            这也是为何一些站点会有多个静态资源 CDN 域名的原因之一。
          </li>
          <li>而 HTTP/2 的多路复用(Multiplexing)，则允许在同一时间，通过单一的 HTTP/2 连接能够发起多重的请求。</li>
        </ul>
        <h4 style="margin: 10px 0">二进制编码：</h4>
        <ul class="menu">
          <li>在 HTTP/1 中，我们是通过文本的方式传输数据。</li>
          <li>
            而 HTTP/2 采用二进制格式的编码。它会将所有传输的数据分割为更小的消息和帧(frame)，并对它们采用二进制格式的编码。
            其中 HTTP1.x 的首部信息会被封装到 HEADER frame，而相应的 Request Body，则封装到 DATA frame里面。
          </li>
        </ul>
        <h4 style="margin: 10px 0">Header压缩：</h4>
        <ul class="menu">
          <li>在 HTTP/1 中，我们是通过文本的方式传输数据。如：在请求头部信息中携带 cookie 的话，每次都需要重复传输几百到几千的字节，这着实是一笔不小开支。</li>
          <li>而在 HTTP2.0 中，我们使用了 HPACK(HTTP2 头部压缩算法) 压缩格式对传输的请求头部信息进行编码，减少了传输请求头信息的数据量。</li>
        </ul>
        <h4 style="margin: 10px 0">服务器推送（Server Push）：</h4>
        <ul class="menu">
          <li>在 HTTP2.0，服务端可以在客户端某个请求后，主动推送其他资源。也就是说，服务器可以对客户端的一个请求发送多个响应。服务器推送有一个很大的优势，
            就是可以对将来需要用到的资源提前响应并缓存下来。
          </li>
        </ul>
      </div>
    </Card>
  </div>
</template>

<script>
import { Card } from 'view-design'

export default {
  name: 'network-1',
  components: {
    Card
  }
}
</script>

<style scoped lang="stylus">
.network-1
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
