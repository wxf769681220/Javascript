<template>
  <div class="ajax-5">
    <Card shadow style="width:620px">
      <h3 slot="title">1.图像Ping</h3>
      <div>
        <p>图像 Ping 最常用于跟踪用户点页面或动态广告曝光次数。我们将图片的 src 属性指向请求的地址，通过监听 load 和 error 事件，就能知道响应什么时候接受了，
          响应的数据可以是任意内容，但通常是像素图或 204 响应。</p>
        <div v-highlight>
          <pre>
            <code>
              /**
               * 图像PING技术
               * 只能发送GET请求
               * 无法访问服务器的响应文本
               * 只能用于浏览器与服务器间的单向通信
               */
              function logError(baseUrl, sev, msg) {
                // 任何浏览器都支持Image对象
                var img = new Image();

                // 使用绝对路径，追加查询字符串参数
                img.src= "http://www.example.php" +
                "?sev=" + encodeURIComponent(sev) +
                "&msg=" + encodeURIComponent(msg);
              }

              //////////////////////////////////////////////////
              // 将错误信息记录到服务器
              try {
                // 可能会导致错误的代码
              }
              catch(error) {
                logError("nonfatal", "failed：" + error.message);
              }
            </code>
          </pre>
        </div>
      </div>
    </Card>
    <Card shadow style="width:720px">
      <h3 slot="title">2.JSONP</h3>
      <div>
        <ul class="menu">
          <li>JSONP 是通过动态 &lt;script> 元素来使用的，使用时可以为 src 属性指定一个跨域 URL。</li>
          <li>JSONP 与 JSON 看起来差不多，只不过它是被包含在函数调用中的 JSON。</li>
          <li>JSONP 由两部分组成：回调函数和数据。回调函数指的是：当响应到来时，应该在页面中调用的函数；数据指的是：传入回调函数中的 JSON 数据。</li>
        </ul>
        <div v-highlight>
          <pre>
            <code>
              // 动态加载一个脚本
              function loadScript(url) {
                var script = document.createElement("script")
                script.type = "text/javascript"
                script.src = url
                document.body.appendChild(script)
              }

              // 发送一个典型的JSONP请求
              // 与服务器约定应该返回的回调函数名称
              loadScript("http://freegeoip.net/json/?callback=handleResponse")

              // 服务器在接收到JSONP请求之后,作出响应
              // 当响应到来时,在页面中调用这个回调函数
              function handleResponse(response) {
                console.log(response)
              }

              // 服务端如下配置
              header('Content-type: application/json')

              $callbackName = htmlspecialchars($_REQUEST ['callback'])

              // 创建Json数据格式字符串
              $data = "['customername1','customername2']"

              echo $callbackName . "(" . $data . ")"
            </code>
          </pre>
        </div>
        <ul class="menu">
          <li>JSONP 是从其他域中加载代码执行，若其他域不安全，很可能会导致响应中夹杂着恶意代码。</li>
          <li>确定 JSONP 请求是否失败并不容易。</li>
          <li>虽然 HTML5给 &lt;script> 元素新增了 onerror 事件处理程序，但尚未得到任何浏览器的支持。所以开发员不得不使用计时器检测指定时间内是否接到了响应。</li>
        </ul>
      </div>
    </Card>
    <Card shadow style="width:750px">
      <h3 slot="title">3.Comet（服务器推送）</h3>
      <div>
        <p>
          Comet 是一种更高级的 Ajax 技术，经常被称为：服务器推送。Ajax 是一种从页面向服务器请求数据的技术，而 Comet 则是一种从服务器向页面推送数据的技术，
          它能够让数据近乎实时地推送到页面上。这种技术十分适合处理体育比赛分数和股票报价。
        </p>
        <p>实现 Comet 由两种方式：长轮询（短轮询）和 HTTP 流。</p>
        <ul class="menu">
          <li>长轮询：页面发起一个服务器请求，服务器一直保持连接打开，直到有数据时服务器才会发送响应。（与短轮询区别：服务器立即发送响应，无论数据是否有效）。</li>
          <li>发送完毕后，浏览器关闭连接，随即又发起一个新的服务器请求。</li>
          <li>这一过程在页面打开期间一直持续不断。</li>
          <li>轮询实现方式：使用XHR对象和setTimeout()方法。而你要做的就是决定什么时候发送请求。</li>
        </ul>
        <div v-highlight>
          <pre>
            <code>
              var xhr = new createXHR()

              var timer = setTimeout(function(){
                //...
              }, 1000)
            </code>
          </pre>
        </div>
        <p>
          HTTP 流：与上述两种轮询不同，因为它在页面的整个生命周期内只使用一个 HTTP 连接。具体来说就是：浏览器向服务器发送一个请求，服务器保持连接打开，然后周期性地向浏览器发送数据。
          以下是 PHP 脚本采用 HTTP 流实现的服务器中常见的形式：
        </p>
        <div v-highlight>
          <pre>
            <code>
              /**
               * 所有服务器端语言都支持打印到输出缓存然后刷新
               * 将输出缓存中的内容一次性全部发送到客户端）的功能
               * 而这正式HTTP流的关键所在
               */
              &lt;?php
                $i = 0;
                while(true){
                  // 输出一些数据，然后立即刷新输出缓存
                  echo "number is $i";
                  flush();

                  // 等几秒钟
                  sleep(10);

                  $i++;
                }
              ?>
            </code>
          </pre>
        </div>
        <p>
          利用 XHR 对象实现 HTTP 流：随着不断从服务器接受数据，readyState 的值会周期性地变为 3。当 readyState 值变为3时，responseText 属性中就会保存接收到的所有数据。
          此时，就需要比较此前接收到的数据，从而决定从什么位置开始取得最新的数据。
        </p>
        <div v-highlight>
          <pre>
            <code>
              // 使用XHR对象实现HTTP流
              function createStreamingClient(url, progress, finished) {
                var xhr = new XMLHttpRequest();
                var received = 0;

                xhr.open("GET", url, true)
                xhr.onreadystatechange = function() {
                  var result;
                  if (xhr.readyState === 3) {
                    // 获取最新数据
                    result = xhr.responseText.substring(received);

                    // 调整计数器
                    received += result.length;

                    // 调用progress回调函数
                    progress(result)
                  } else if (xhr === 4) {
                    finished(xhr.responseText);
                  }
                }
                xhr.send(null);
                return xhr;
              }

              var client = createStreamingClient("example.php", function(data){
                alert("received" + data)
              }, function(){
                alert("Done!")
              })
            </code>
          </pre>
        </div>
      </div>
    </Card>
    <Card shadow style="width:750px">
      <h3 slot="title">4.SSE</h3>
      <div>
        <ul class="menu">
          <li>SSE（server-SentEvents服务器发送事件）：是围绕只读 Comet 交互推出的 API 或者模式。</li>
          <li>SEE API 用于创建到服务器的单向连接，服务器通过这个链接可以发送任意数量的数据。</li>
          <li>服务器响应的 MIME 类型必须是：text/event-stream，而且是浏览器中的 javascript API 能解析格式输出。</li>
          <li>SEE 支持短轮询、长轮询和 HTTP 流，而且能在断开连接时自动确定何时重新链接。</li>
          <li>SEE 的 javascript 的 API 与其他传递消息的 javascript API 相似。要预订新的事件流，首先要创建一个新的 EventSource 对象，并传入一个入口点。</li>
        </ul>
        <div v-highlight>
          <pre>
            <code>
              // 传入的URL必须与创建对象的页面同源（相同URL模式、域和端口）
              var source = new EventSource("example.php")

              // 实例有一个readyState属性
              if (source.readyState === 0) {
                // 正连接到服务器
              } else if (source.readyState === 1) {
                // 打开了连接
              } else if (source.readyState === 2) {
                // 关闭了连接
              }

              // 三个事件
              source.onopen = function(event) {
                // 在建立连接时触发
              }

              source.onmessage = function(event) {
                // 从服务器接收到新的事件时触发
                // 服务器返回的数据以字符串的形式保存在event.data中
                var data = event.data;
              }

              source.onerror = function(event) {
                // 在无法建立连接时触发
              }
            </code>
          </pre>
        </div>
        <p>默认情况下，EventSource 对象会保持与服务器的活动连接。如果连接断开，还会重新连接。这就意味着 SSE 适合长轮询和 HTTP 流。如果想强制立即断开连接且不再重新连接。
          还可以调用 close() 方法。</p>
        <div v-highlight>
          <pre>
            <code>
              source.close()
            </code>
          </pre>
        </div>
      </div>
    </Card>
    <Card shadow style="width:750px">
      <h3 slot="title">5.Web Sockets</h3>
      <div>
        <ul class="menu">
          <li>Web Sockets 的目标是在一个单独的持久连接上提供双工、双向通信。</li>
          <li>在 javascript 中创建了 Web Sockets 之后，会有一个 HTTP 请求发送到浏览器以发送连接。在取得服务器响应后，建立的连接会使用 HTTP 升级从 HTTP 协议交换为 Web Sockets 协议。</li>
          <li>因此，标准的 HTTP 服务器无法实现 Web Sockets，只有支持这种协议的专门服务器才能正常工作。</li>
          <li>Web Sockets 使用自定义协议，所以 URL 模式也略有不同。未加密的连接不再是 http://，而是 ws://；加密的连接不再是 https://，而是 wss://。在使用 Web Sockets URL 时，
            必须带着这个模式。</li>
          <li>使用自定义协议而非 HTTP 协议的好处是：能在客户端和服务器端发送非常少量的数据，而不必担心 HTTP 那样字节级的开销。由于传递的数据包很小，所以 Web Sockets 非常适合做移动应用。</li>
          <li>Web Sockets 协议有一定的安全隐患，并不是所有支持的浏览器都是默认开启的。</li>
        </ul>
        <div v-highlight>
          <pre>
            <code>
              // 实例化WebSocket对象并传入要连接的URL（必须使用绝对路径）
              // 同源策略对Web Sockets不适用,因此可以通过它打开到任何站点的连接
              // 至于是否会与某个域中的页面通信,则完全取决于服务器
              var socket = new WebSocket("ws://www.example.com/server.php")

              // WebSocket也有一个readyState属性,
              // 但没有readystatechange事件
              if (socket.readyState === 0) {
                // 正在建立连接
              } else if (socket.readyState === 1) {
                // 已经建立连接
              } else if (socket.readyState === 2) {
                // 正在关闭连接
              } else if (socket.readyState === 3) {
                // 已经关闭连接
              }

              // WebSocket对象的其他事件,在连接的生命周期的不同阶段触发
              // WebSocket对象不支持DOM2级事件侦听器,必须使用DOM0级语法
              socket.onopen = function(event) {
                // 在成功建立连接时触发
              }

              socket.onerror = function() {
                // 在发生错误时触发,连接不能持续
              }

              socket.onclose = function(event) {
                // 在连接关闭时触发
                // 三个额外的属性：
                event.wasClean    // 表示是否已经明确地关闭
                event.code        // 表示服务器返回的数值状态码
                event.reason      // 表示服务器返回的消息
              }

              // 可以在任何时候调用close()方法
              // 关闭Web Socket连接
              socket.close()
            </code>
          </pre>
        </div>
        <p>Web Socket 打开之后，就可以通过连接发送和接收数据。</p>
        <div v-highlight>
          <pre>
            <code>
              // 发送数据：Web Socket只能发送纯文本数据,因此对于复杂的数据结构
              // 在通过连接发送之前,必须进行序列化
              // 如：将数据序列化为一个JSON字符串
              var message = {
                time: new Date(),
                text: "hello world"
              }
              socket.send(JSON.stringify(message))

              // 接收数据：当服务端向客户端发来消息时,WebSocket对象会触发message事件
              // 返回的数据保存在event.data属性中
              socket.onmessage = function(event) {
                var data = event.data;
                // 处理数据
              }
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
  name: 'ajax-5',
  components: {
    Card
  }
}
</script>

<style scoped lang="stylus">
.ajax-5
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
