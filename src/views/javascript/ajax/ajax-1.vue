<template>
  <div class="ajax-1">
    <Card shadow style="width:660px">
      <h3 slot="title">1.JS如何实现异步操作？</h3>
      <div>
        <p>JS 的事件循环机制(Event Loop)：</p>
        <ul class="menu">
          <li>当 JS 解析执行时，会被引擎分为两类任务，同步任务（synchronous）和异步任务（asynchronous）。</li>
          <li>对于同步任务来说，会被推到执行栈按顺序去执行这些任务。</li>
          <li>对于异步任务来说，会被放到一个任务队列（task queue）里等待 JS 引擎去执行。</li>
          <li>当执行栈中的所有同步任务完成后，JS 引擎才会去任务队列里查看是否有任务存在，若存在，则将任务放到执行栈中去执行。</li>
          <li>当执行栈中的任务被清空之后，JS 引擎会再次进入任务队列里查看是否有任务存在。</li>
          <li>这种循环检查的机制，就叫做事件循环机制。</li>
        </ul>
        <div v-highlight>
          <pre>
            <code>
              /*
                常见的异步操作：
                1：回调函数
                2: 定时器
                3: 事件处理程序
                4. ajax
                5: promiss
              */
            </code>
          </pre>
        </div>
      </div>
    </Card>
    <Card shadow style="width:650px">
      <h3 slot="title">2.XMLHttpRequest对象</h3>
      <div>
        <p>Ajax 技术，即能够通过异步的方式，无需刷新页面即可从服务器获取数据。Ajax 技术的核心是 XMLHttpRequest 对象，简称 XHR。</p>
        <div v-highlight>
          <pre>
            <code>
              // XMLHttpRequest 封装
              function createXHR() {
                if (typeof XMLHttpRequest !== "undefined") {
                  return new XMLHttpRequest()
                } else if (typeof activeXObject !== "undefined") {
                    if (typeof arguments.callee.activeXString !== "string") {
                      var versions = ["MSXML2.XMLHttp", "MSXML2.XMLHttp.3.0", "MSXML2.XMLHttp.6.0"]
                      for (var i = 0, len = versions.length; i &lt; len; i++) {
                        try {
                          new  ActiveXObject(versions[i])
                          arguments.callee.activeXString = versions[i]
                          break
                        } catch (ex) {
                          //跳过
                        }
                      }
                    }
                  return new ActiveXObject(arguments.callee.activeXString)
                } else {
                  throw new Error("No XHR object available")
                }
              }
            </code>
          </pre>
        </div>
      </div>
    </Card>
    <Card shadow style="width:800px">
      <h3 slot="title">3.XHR的用法</h3>
      <div>
        <p>open()方法，它接收三个参数：要发送请求的类型（get、post等）、请求 URL 和表示是否异步发送请求布尔值。该方法并不会真正的发送请求，而只是启动一个请求已备发送。</p>
        <p>send()方法，它接收一个参数，即要作为请求主体发送的数据。如果不需要通过请求主体发送数据，则可传入 null。调用 send() 方法之后，请求就会被派发到服务器中。</p>
        <div v-highlight>
          <pre>
            <code>
              var xhr = createXHR()

              // 请求预备（同步请求）
              xhr.open("get", "example.php", false)

              // 请求发送
              xhr.send(null)
            </code>
          </pre>
        </div>
        <p>在服务器收到响应后，响应数据会自动填充 XHR 对象的属性，相关属性如下：</p>
        <ul class="menu">
          <li>status：响应的 HTTP 状态。一般来说，状态码 200 作为成功的标志。</li>
          <li>responseText：作为响应主体被返回的文本。</li>
          <li>responseXML：若响应的内容类型是 text/xml 或 application/xml，这个属性中将保存包含着响应数据的 XML DOM 文档。对于非 XML 数据而言，该属性值为 null。</li>
          <li>statusText：HTTP 状态说明。</li>
        </ul>
        <div v-highlight>
          <pre>
            <code>
              // 状态码304表示请求资源并未被修改
              // 可以直接使用浏览器缓存中的版本
              if (xhr.status === 200 && xhr.status &lt; 300 || xhr.status === 304) {
                console.log(xhr.responseText)
              } else {
                console.log("Request was unsuccessful：" + xhr.status)
              }
            </code>
          </pre>
        </div>
        <p>异步请求，让 javascript 继续执行下面的代码而不需要等待服务器响应。此时，可以检测 XHR 对象的 readyState 属性，该属性表示请求/响应过程的当前活动阶段。</p>
        <ul class="menu">
          <li>0：未初始化。尚未调用 open() 方法。</li>
          <li>1：启动。已经调用 open() 方法，尚未调用 send() 方法。</li>
          <li>2：发送。已经调用 send() 方法，尚未接收到响应。</li>
          <li>3：接收。已经接收到部分响应数据。</li>
          <li>4：完成。已经接受到全部响应数据，可以在客户端使用了。</li>
        </ul>
        <p>
          只要 readyState 属性的值发生变化，都会触发一次 onreadystatechange 事件，可以利用这个事件监测每次状态变化后 readyState 的值。通常我们只检测值为4的阶段，
          因为此时数据已经全部接收完毕。在接收响应之前还可以调用 abort() 方法来取消异步请求。
        </p>
        <div v-highlight>
          <pre>
            <code>
              var xhr = createXHR()

              // 因为是通过异步发送请求
              // 因此可以在 open() 方法之前侦听 readyState 属性的变化，
              // 确保跨浏览器兼容性
              xhr.onreadystatechange = function() {
                if (xhr.readyState === 4) {
                  if (xhr.status === 200 && xhr.status &lt; 300 || xhr.status === 304) {
                    console.log(xhr.responseText)
                  } else {
                    console.log("Request was unsuccessful：" + xhr.status)
                  }
                }
              }

              // 请求预备（异步请求）
              xhr.open("get", "example.php", true)

              // 请求发送
              xhr.send(null)

              // 取消异步请求
              // xhr.abort()
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
  name: 'ajax-1',
  components: {
    Card
  }
}
</script>

<style scoped lang="stylus">
.ajax-1
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
