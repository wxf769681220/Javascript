<template>
  <div class="client-2">
    <Card shadow style="width:480px">
      <h3 slot="title">1.错误类型</h3>
      <div>
        <ul class="menu">
          <li>Error：其他错误都继承自该类型。</li>
          <li>SyntaxError：语法错误。</li>
          <li>TypeError：类型错误。</li>
          <li>ReferenceError：引用错误。</li>
          <li>URIError：在使用 encodeURI() 或 decodeURI()，而 URI 格式不正确。</li>
          <li>RangeError：数值超出相应范围错误。</li>
          <li>EvalError：eval函数的错误。</li>
        </ul>
        <div v-highlight>
          <pre>
            <code>
              // RangeError数值超出相应范围错误
              var num = new Array(-1);
            </code>
          </pre>
        </div>
      </div>
    </Card>
    <Card shadow style="width:480px">
      <h3 slot="title">2.异常处理</h3>
      <div>
        <p>try/catch/finally 语句作为 Javascript 中处理异常的一种标准机制。</p>
        <div v-highlight>
          <pre>
            <code>
              try {
                // 可能会导致错误的代码
              }
              catch(error) {
                if (error instanceof SyntaxError) {
                  // 处理语法错误...
                } else if (error instanceof TypeError) {
                  // 处理类型错误...
                } else {
                  // ...
                }
              }
            </code>
          </pre>
        </div>
      </div>
    </Card>
    <Card shadow style="width:560px">
      <h3 slot="title">3.error事件</h3>
      <div>
        <ul class="menu">
          <li>任何没有通过 try-catch 处理的错误都会触发 windwo 对象的 error 事件。</li>
          <li>在任何web浏览器中。error 事件处理程序都不会创建 event 事件对象，但它可以接收三个参数：错误消息、错误所在的 URL 和错误行号。</li>
          <li>要指定 onerror 事件处理程序，必须使用 DOM0 级，因为它没有遵循 DOM2 级的标准格式。</li>
        </ul>
        <div v-highlight>
          <pre>
            <code>
              window.onerror = function(message, url, line) {
                console.log(message)
                console.log(url)
                console.log(line)
              }
            </code>
          </pre>
        </div>
        <p>图像也支持 onerror 事件。若图像 src 特性中的 URL 不能返回有效的图像格式，就会触发 error 事件。并且此时的 error 事件会遵循 DOM 格式，会返回一个以图像为目标的 event 对象。</p>
        <div v-highlight>
          <pre>
            <code>
              var imgs = new Image();
              img.src = "myPic.gif";

              EventUtil.addHandler(img, "load", function(event) {
                //event
              })
              EventUtil.addHandler(img, "error", function(event) {
                //event
              })
            </code>
          </pre>
        </div>
      </div>
    </Card>
    <Card shadow style="width:560px">
      <h3 slot="title">4.把错误记录到服务器</h3>
      <div>
        <p>要建立这样一种 javascript 错误记录系统，首先需要在服务器上创建一个页面或服务器入口点，用于处理错误数据。这个页面无非就是从查询字符串中取得数据，然后将数据写入错误日志中。</p>
        <div v-highlight>
          <pre>
            <code>
              // 使用图像PING技术
              function logError(sev, msg) {
                // 任何浏览器都支持Image对象
                var img = new Image();

                // 可以写入相对路径或绝对路径（避免跨域限制）
                img.src="example.php?sev=" + encodeURIComponent(sev) + "&msg=" + encodeURIComponent(msg);
              }

              // 一旦出现错误，会立即调用logError()
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
    <Card shadow style="width:450px">
      <h3 slot="title">5.调试技术</h3>
      <div>
        <p>firebug 调试功能。</p>
        <div v-highlight>
          <pre>
            <code>
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
  name: 'client-2',
  components: {
    Card
  }
}
</script>

<style scoped lang="stylus">
.client-2
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
