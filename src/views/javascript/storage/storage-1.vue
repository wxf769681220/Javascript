<template>
  <div class="storage-1">
    <Card shadow style="width:900px">
      <h3 slot="title">1.HTTP Cookie</h3>
      <p>
        HTTP Cookie，通常直接叫做 cookie，用于在客户端储存会话信息。HTTP Cookie 要求服务器对任意 HTTP 请求发送 Set-Cookie HTTP 头部信息作为响应的一部分，其中包含会话信息。
      </p>
      <ul class="menu">
        <li>cookie 在性质上是绑定在某个指定的域名下的。</li>
        <li>为了确保 cookie 不被恶意使用，每个域的 cookie 数量是有限的（超过限制，会清除以前设置的 cookie）。</li>
        <li>cookie 的尺寸也是有限制的。</li>
      </ul>
      <div v-highlight>
        <pre>
          <code>
            /**
              * 服务器端
              * HTTP Cookie要求服务器对任意HTTP请求发送Set-Cookie HTTP头部信息作为响应的一部分
              * 其中包含会话信息（以name为名称、以value为值的一个cookie)
              * 其中name名称和value值在传送时必须是经过URL编码的
              */

            // 浏览器会储存以下会话信息：
            HTTP/1.1 200 OK
            Content-type: text/html
            Set-Cookie: name=value
            other-header: other-header-value

            /**
              * 客户端
              * 浏览器会储存上述代码中的信息。在此之后,
              * 通过为每个HTTP请求添加Cookie HTTP头部信息将信息发送回服务器
              */
            GET /index.html HTTP/1.1
            cookie: name=value
            other-header: other-header-value
          </code>
        </pre>
      </div>
    </Card>
    <Card shadow style="width:1200px">
      <h3 slot="title">2.HTTP Cookie会话信息构成</h3>
       <ul class="menu">
        <li>名称：一个唯一确定 cookie 的名称。不区分大小写，且必须是经过 URL 编码的。</li>
        <li>值：储存在 cookie 中的字符串的值。值必须被 URL 编码的。</li>
        <li>域：cookie 被绑定在哪个指定域下（包含子域）。</li>
        <li>
          路径：对于指定域中的那个路径，应该向服务器发送cookie。如：指定该（http://www.example.com/test/）应该路径应该向服务器发送cookie，那么
          （http://www.example.com）的页面就不会发送cookie。
        </li>
        <li>
          失效时间：表示 cookie 应该何时被删除的时间戳。默认情况下是，会话结束时即将所有 cookie 删除，也可以自己设置删除时间。
          若设置了准确的删除时间，cookie可以在浏览器关闭后依然保存在用户的机器上。若该时间是一个过去的时间，则cookie会被立即删除。
        </li>
        <li>
          安全标志：指定后，cookie 只有在使用SSL（Secure Socket Layer）连接的时候才发送到服务器。
          如：https://www.example.com（SSL加密传输协议）可以发送cookie，而http://www.example.com不能发送cookie。secure是cookie中唯一一个非名值对的部分。
        </li>
      </ul>
      <div v-highlight>
        <pre>
          <code>
            /*
             * 对于所有example.com的子域（由domain参数指定的）
             * 及域名下（由path参数指定的）的所有页面都有效的cookie
             *
             * HTTP/1.1 200 OK
             * Content-type: text/html
             * Set-Cookie: name=value; expires=Mon, 22-Jan-07 07:10:24 GMT; domain=.example.com; path=/; secure
             * other-header: other-header-value
             */
          </code>
        </pre>
      </div>
    </Card>
    <Card shadow style="width:1200px">
      <h3 slot="title">3.Javascript Cookie</h3>
      <div>
        <ul class="menu">
          <li>
            通过 document.cookie 属性可以获取当前页面可用的所有 cookie 的字符串，一系列由分号隔开的名值对。所有名字和值都是经过 URL 编码的，所以
            必须使用 decodeURLComponent() 来解码。
          </li>
          <li>通过 document.cookie 属性可以设置一个新的 cookie 字符串。这个字符串会被解释并添加到现有的 cookie 集合中（不会覆盖 cookie，除非 cookie 的名字已经存在）。</li>
          <li></li>
        </ul>
        <div v-highlight>
          <pre>
            <code>
              // 获取cookie
              document.cookie

              // 设置cookie,并添加额外的信息
              document.cookie = encodeURIComponent("name") + "=" +
              encodeURIComponent("alex") + "; domain=.example.com; path=/"
            </code>
          </pre>
        </div>
        <p>由于 javascript 中读写 cookie 不是很直观，常常需要写一些函数来简化 cookie 的功能。</p>
        <div v-highlight>
          <pre>
            <code>
              // 封装cookie的读取、写入和删除操作
              var CookieUtil = {
                get: function (name) {
                  var cookieName = encodeURIComponent(name) + "=";
                  var cookieStart = document.cookie.indexOf(cookieName);
                  var cookieValue = null;

                  if (cookieStart > -1) {
                    var cookieEnd = document.cookie.indexOf(";", cookieStart);
                    if (cookieEnd === -1) {
                      cookieEnd = document.cookie.length;
                    }
                    cookieValue = decodeURIComponent(document.cookie.substring(cookieStart + cookieName.length, cookieEnd));
                  }

                  return cookieValue;
                },
                set: function (name, value, domain, path, expires, secure) {
                  var cookieText = encodeURIComponent(name) + "=" + encodeURIComponent(value);
                  var split = "; ";
                  if (domain) {
                    cookieText += split + "domain=" + domain;
                  }
                  if (path) {
                    cookieText += split + "path=" + path;
                  }
                  if (expires instanceof Date) {
                    cookieText += split + "expires=" + expires.toGMTString();
                  }
                  if (secure) {
                    cookieText += split + secure;
                  }
                  document.cookie = cookieText;
                },
                unset: function (name, domain, path, secure) {
                  this.set(name, "", domain, path, new Date(0), secure)
                }
              }

              CookieUtil.set("name", "alex")

              // 注意：使用的Chrome或者FF内核的浏览器在本地测试时，
              // document.cookie始终返回空字符串。
              // 上传到服务器就好了,本地文件不允许记录cookie
              CookieUtil.get("name") => "alex"
            </code>
          </pre>
        </div>
      </div>
    </Card>
    <Card shadow style="width:600px">
      <h3 slot="title">4.Cookie的局限性</h3>
      <div>
        <p>由于所有的 cookie 都会由浏览器作为请求头发送，所以在 cookie 中储存大量信息会影响到特定域的请求性能。cookie 信息越大，完成对服务器请求的时间就越长。
          尽管浏览器对 cookie 的大小进行了限制，不过最好是尽可能在 cookie 中少存储信息，以避免影响性能。
        </p>
      </div>
    </Card>
  </div>
</template>

<script>
import { Card } from 'view-design'

export default {
  name: 'storage-1',
  components: {
    Card
  }
}
</script>

<style scoped lang="stylus">
.storage-1
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
