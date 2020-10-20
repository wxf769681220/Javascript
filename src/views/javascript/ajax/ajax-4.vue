<template>
  <div class="ajax-4">
    <Card shadow style="width:650px">
      <h3 slot="title">1.同源策略</h3>
      <div>
        <ul class="menu">
          <li>浏览器处于安全方面的考虑，只允许本域名下的接口交互。对于其他访问域中的资源时，会受到同源策略的限制。同源：即使用相同的协议、域名和端口号。</li>
          <li>当试图访问上其他域中的资源时，都会引发安全错误，除非采用被认可的跨域解决方案。这个解决方案叫做 CORS（Cross-Origin Resource Sharing，跨域源资源共享）。</li>
          <li>CORS 基本思想是：使用自定义的 HTTP 头部让浏览器与服务器进行沟通，从而决定请求或响应是应该成功还是失败。</li>
          <li>IE8通过 XDomainRequest 对象支持 CORS，其他浏览器通过 XHR 对象原生支持 CORS。</li>
        </ul>
        <div v-highlight>
          <pre>
            <code>
              /**
                * 客户端配置
                * 一个简单的使用GET或POST发送的请求
                * 没有自定义的头部信息
                * 主体内容是text/pain
                * 发送请求时，需要给它附加一个额外的Origin头部
                */

              Origin: "http://www.example.com"

              /**
                * 服务器配置
                * 如果没有这个头部，或者有这个头部但源信息不匹配
                * 浏览器就会驳回这个请求
                */

              Access-Control-Allow-Origin: *
              Access-Control-Allow-Origin: "http://www.example.com"
            </code>
          </pre>
        </div>
      </div>
    </Card>
    <Card shadow style="width:650px">
      <h3 slot="title">2.IE对CORS的实现</h3>
      <div>
        <p>IE8 通过 XDomainRequest 对象支持 CORS。该类型与 XHR 类似，但能实现安全可靠的跨域通信。区别在于：</p>
        <ul class="menu">
          <li>cookie 不会随请求发送，也不会随响应返回</li>
          <li>只能设置头部信息中 Content-Type 字段。</li>
          <li>不能访问响应的头部信息。</li>
          <li>只支持 GET 和 POST 请求。</li>
        </ul>
        <div v-highlight>
          <pre>
            <code>
              var xdr = new XDomainRequest()

              // 只要响应有效就会触发load事件
              // 只能访问到响应文本,无法确定响应的状态
              xdr.onload = function() {
                console.log(xdr.responseText)
              }

              // 若失败（响应中缺少Access-Control-Allow-Origin头部）
              // 触发error事件
              xdr.onerror = function() {
                console.log("An error occurred")
              }

              // 超时设定
              xdr.timeout = 1000
              xdr.ontimeout = function() {
                console.log("Request took too long")
              }

              // 只接收两个参数
              // 因此所有请求都是异步执行的
              xdr.open("POST", "www.misfish.com/api/test.php")

              // 为了支持POST请求
              // XDR对象提供了contentType属性,用来表示发送数据的格式
              xdr.contentType = "application/x-www-form-urlencoded"

              xdr.send(null)

              // 终止请求
              xdr.abort()
            </code>
          </pre>
        </div>
      </div>
    </Card>
    <Card shadow style="width:780px">
      <h3 slot="title">3.其他浏览器对CORS的实现</h3>
      <div>
        <p>Firefox、Safari、Chrome、IOS等浏览器通过 XHR 对象原生支持 CORS。跨域XHR对象也有一些限制：</p>
        <ul class="menu">
          <li>cookie 不会随请求发送，也不会随响应返回。</li>
          <li>不能通过 setRequestHeader() 设置自定义头部。</li>
          <li>调用 getAllResponeseHeaders() 方法总是返回空字符串。</li>
        </ul>
        <div v-highlight>
          <pre>
            <code>
              var xhr = createXHR()

              xhr.onload = function() {
                if (xhr.status === 200 && xhr.status &lt; 300 || xhr.status === 304) {
                  console.log(xhr.responseText)
                } else {
                  console.log("Request was unsuccessful：" + xhr.status)
                }
              }

              /**
               * 无论是同源请求,还是跨源请求都使用相同的数据接口
               * 因此对于本地资源时,最好使用相对URL
               * 再在访问远程资源时使用绝对URL
               */

              xhr.open("GET", "http://www.example.com/api/", true)
              xhr.send(null)
            </code>
          </pre>
        </div>
      </div>
    </Card>
    <Card shadow style="width:800px">
      <h3 slot="title">4.跨浏览器的CORS</h3>
      <div>
        <p>即使浏览器对 CROS 的支持程度并不都一样，但所有的浏览器都支持简单的（非 Preflight 和不带凭据的）请求。下列实现一个跨浏览器解决方案：</p>
        <div v-highlight>
          <pre>
            <code>
              function createCORSRequest(methed, url) {
                var xhr = createXHR()

                // 检测XHR是否支持CORS,即withCredentials属性是否存在
                if ("withCredentials" in xhr) {
                  xhr.open(methed, url, true)
                } else if (typeof XDomainRequest !== "undefined") {
                  xhr = new XDomainRequest()
                  xhr.open(methed, url)
                } else {
                  xhr = null
                }
                return xhr
              }

              var request = createCORSRequest("GET", "http://www.example.com/api/")

              if (request) {
                request.onload = function() {
                  if (xhr.status === 200 && xhr.status &lt;300 || xhr.status === 304) {
                    console.log(xhr.responseText)
                  } else {
                    console.log("Request was unsuccessful：" + xhr.status)
                  }
                }
                request.send(null)
              }
            </code>
          </pre>
        </div>
        <p>
          Firefox、Safari、Chrome、IOS 等浏览器中的 XMLHttpRequest 对象与 IE 中的 XMomainRequest 对象类似，都提供了足够用的接口，因此以上模式还是相当有用的。
          这两个对象共同的属性与方法：
        </p>
        <ul class="menu">
          <li>onload：用于替代 onreadystatechange 检测成功。</li>
          <li>onerror：用于替代 onreadystatechange 检测失败。</li>
          <li>responseText：用于获取响应内容。</li>
          <li>send()：用于发送请求。</li>
          <li>abort()：用于停止正在进行的请求。</li>
        </ul>
      </div>
    </Card>
    <Card shadow style="width:700px">
      <h3 slot="title">5.预检请求（Preflight Request）</h3>
      <div>
        <p>Preflighted Requests 是 CORS 中一种透明服务器验证机制。</p>
        <ul class="menu">
          <li>它支持开发人员使用自定义头部。</li>
          <li>支持除了GET 或 POST 之外的方法。</li>
          <li>不同数据类型作为主体内容。</li>
        </ul>
        <hr style="margin: 15px 0">
        <p>使用下列高级选项来发送请求时，就会向服务器发送一个 Preflight 请求。这种请求使用 OPTIONS 方法，发送下列头部：</p>
        <ul class="menu">
          <li>Origin：与简单的请求相同。</li>
          <li>Access-Control-Request-Method：请求自身使用的方法。</li>
          <li>Access-Control-Request-Headers：自定义头部信息，多个头部以逗号分隔。（可选）</li>
        </ul>
        <div v-highlight>
          <pre>
            <code>
              // 客户端配置
              Origin: http://www.example.com
              Access-Control-Request-Method: POST
              Access-Control-Request-Headers: NCZ

              /*
               * 服务端配置
               * 发送以上请求后,服务器可以决定是否允许这种类型的请求
               * 服务器通过在响应中发送如下头部与浏览器沟通
               */

              Access-Control-Request-Origin: http://www.example.com
              Access-Control-Request-Method: POST, GET
              Access-Control-Request-Headers: NCZ

              /*
               * 表示此Preflight请求应该缓存多长时间（以秒表示）
               * Preflight请求结束后，结果将按照响应中指定的时间缓存起来,
               * 而为此付出的代价只是第一次发送这种请求时会多一次HTTP请求
               */

              Access-Control-Max-Age: 172800

            </code>
          </pre>
        </div>
      </div>
    </Card>
    <Card shadow style="width:650px">
      <h3 slot="title">6.带凭据的请求</h3>
      <div>
        <p>默认情况下，跨域请求不提供凭据（cookie、HTTP认证及客户端SSL证明等），但可以通过将 withCredentials 属性设置为 true，来指定某个请求应该发送凭证。
          如果服务器接受带凭据的请求，会使用下面的 HTTP 头部来响应。（在 Preflight 响应中发送这个 HTTP 头部，表示允许源发送带凭据的请求）</p>
        <div v-highlight>
          <pre>
            <code>
              // 服务端配置
              Access-Control-Request-Credentials: true

              /**
               * 如果发送的是带凭据的请求
               * 而服务器响应中没有包含这个头部
               * 浏览器就不会把响应交给javascript进行解析
               * 此时responseText将是一个空字符串
               * status的值为 0
               * 此时会调用onerror事件处理函数
               */
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
  name: 'ajax-4',
  components: {
    Card
  }
}
</script>

<style scoped lang="stylus">
.ajax-4
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
