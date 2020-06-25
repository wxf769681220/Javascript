<template>
  <div class="ajax-3">
    <div class="layout-content">
      <Card dis-hover shadow style="width:530px">
        <h3 slot="title">1.FormData类型</h3>
        <div>
          <p>
            XMLHttpRequest2级定义一个FormData类型。FormData为序列化表单以及创建与表单格式相同的数据（用于通过XHR传输）提供了便利。
            它不必明确地在XHR上设置请求头部，XHR对象可以识别传入的数据类型是FormData的实例，并自动配置适当的头部信息。
          </p>
          <div v-highlight>
            <pre>
              <code>
                //实例化对象
                var data = new FormData()

                //传入键与值
                data.append("myname", "lee")
                data.append("myage", 20)

                //通过XHR传输与表单格式相同的数据
                xhr.send(data)

                /*************************************/
                var myForm = document.forms("myForm")

                //创建FormData的实例后，直接传给XHR的send()方法
                xhr.send(new FormData(myForm))
              </code>
            </pre>
          </div>
        </div>
      </Card>
      <Card dis-hover shadow style="width:500px">
        <h3 slot="title">2.请求超时设定</h3>
        <div>
          <p>IE8为XHR对象添加了一个timeout属性，表示请求在等待响应多少毫秒后自行终止。如果在规定时间内浏览器还没有接收到响应，那么就会触发timeout事件，进而会调用ontimeout事件处理函数。</p>
          <div v-highlight>
            <pre>
              <code>
                var xhr = createXHR()
                xhr.open("GET", 'example.php', true)

                //请求在等待响应1000毫秒后终止
                xhr.timeout = 1000

                //请求超时时触发该事件
                xhr.ontimeout = function () {
                  alert('请求超时!')
                }

                xhr.send(null)
              </code>
            </pre>
          </div>
        </div>
      </Card>
      <Card dis-hover shadow style="width:700px">
        <h3 slot="title">3.请求进度事件</h3>
        <div>
          <p>W3C针对XHR操作定义了客户端和服务器通信有关的事件，目前也被其他API借鉴。有以下6个进度事件：</p>
          <ul class="menu">
            <li>loadStart：浏览器接收到响应数据的第一个字节时触发。</li>
            <li>progress：浏览器在接受响应数据期间持续不断触发。</li>
            <li>error：在请求发生错误时触发。</li>
            <li>abort：在调用 abort() 方法终止连接时触发。</li>
            <li>load：在接收到全部的响应数据时触发。</li>
            <li>loadend：在通信完成或者触发了 error、abort 和 load 事件后触发。</li>
          </ul>
          <p>
            只要浏览器接收到服务器的响应，不管其状态如何，都会触发load事件，因此我们可以使用load事件代替readystatechange事件。onload事件处理函数会接收一个event对象，
            其target属性指向XHR对象的实例（xhr），因而可以访问到XHR对象上的所有方法和属性。
          </p>
          <div v-highlight>
            <pre>
              <code>
                var xhr = createXHR()
                xhr.onload = function(event) {
                  if (xhr.status === 200 && xhr.status &lt; 300 || xhr.status === 304) {
                    console.log( xhr.responseText)
                  } else {
                    console.log("Request was unsuccessful：" + xhr.status)
                  }
                }
                xhr.open("GET", 'example.php', true)
                xhr.send(null)
              </code>
            </pre>
          </div>
        </div>
      </Card>
      <Card dis-hover shadow style="width:700px">
        <h3 slot="title">4.progress事件</h3>
        <div>
          <p>Mozilla对XHR的添加一个progress事件。该事件会在浏览器接收新数据期间持续不断的触发。而onprogress事件处理函数接收一个event对象，其target属性是XHR对象，但包含三个额外的属性：</p>
          <ul class="menu">
            <li>lengthComputable：表示进度信息是否可用的布尔值。</li>
            <li>position：表示已经接收的字节数。</li>
            <li>totalSize：表示根据Content-Length响应头部确定的预期字节数。</li>
          </ul>
          <p>制作一个进度指示器。</p>
          <div v-highlight>
            <pre>
              <code>
                var xhr = createXHR()

                xhr.onload = function(event) {
                  if (xhr.status === 200 && xhr.status &lt; 300 || xhr.status === 304) {
                    console.log(xhr.responseText)
                  } else {
                    console.log("Request was unsuccessful：" + xhr.status)
                  }
                }

                //在open()之前调用
                xhr.onprogress = function(event) {
                  var el = document.getElementsByTagName("body")
                  if (event.lengthComputable) {
                    el[0].innerHTML = event.position + "-" + event.totalSize
                  }
                }

                xhr.open("GET", 'example.php', true)
                xhr.send(null)
              </code>
            </pre>
          </div>
        </div>
      </Card>
      <Card dis-hover shadow style="width:600px">
        <h3 slot="title">5.overrideMimeType()方法</h3>
        <div>
          <p>overrideMimeType()方法用于重写XHR响应的MIME类型。比如：浏览器返回的MIME类型是text/plain，但数据中实际包含的是XML。
            根据MIME类型，即使数据是XML，responseXML属性中仍然是null。通过调用overrideMimeType()方法，可以保证把响应当作XML而非纯文本来处理。</p>
          <div v-highlight>
            <pre>
              <code>
                var xhr = createXHR()

                xhr.open("GET", "example.php", true)

                xhr.overideMimeType("text/xml")

                xhr.send(null)
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
  name: 'ajax-3',
  created() {},
  methods: {},
  components: {
    Card
  }
}
</script>

<style scoped lang="stylus">
.ajax-3
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
