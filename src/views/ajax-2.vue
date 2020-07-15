<template>
  <div class="ajax-2">
    <div class="layout-content">
      <Card dis-hover shadow style="width:700px">
        <h3 slot="title">1.HTTP头部信息</h3>
        <div>
          <p>每个HTTP请求都会带有相应的头部信息。XHR对象也提供了操作者两种头部信息的方法。</p>
          <p>默认情况下，在发送XHR请求的同时，会发送以下头部信息：（基本上是所有浏览器都会发送的）</p>
          <ul class="menu">
            <li>Accept：浏览器能够处理的内容类型。（如：application/json, text/javascript, */*; q=0.01）</li>
            <li>Accept-Charset：浏览器能够显示的字符集。</li>
            <li>Accept-Encoding：浏览器能够处理的压缩编码。（如：gzip, deflate, br）</li>
            <li>Accept-Language：浏览器当前设置的语言。（如：zh-CN,zh;q=0.9,en;q=0.8）</li>
            <li>Connection：浏览器与服务器之间连接的类型。（keep-alive）</li>
            <li>Cookie：当前页面设置的任何Cookie。</li>
            <li>Host：发送请求的当前页面所在的域。（如：www.baidu.com）</li>
            <li>Referer：发送请求的页面的URL。（如：https://www.baidu.com/）（该英文单词正确拼法为 referrer）</li>
            <li>User-Agent：浏览器用户代理字符串；（如：Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/75.0.3770.142 Safari/537.36）</li>
          </ul>
          <p>
            使用setRequestHeader()方法可以设置自定义的请求头部信息。这个方法接收两个参数：头部字段名称和头部字段的值。要成功的发送头部信息，
            必须在调用open()方法之后，调用send()方法之前调用setRequestHeader()方法。
          </p>
          <div v-highlight>
            <pre>
              <code>
                  xhr.open("get", "example.php", true)

                  //自定义头部信息（推荐使用）
                  xhr.setRequestHeader("myHeader", "myValue")

                  xhr.send(null)
              </code>
            </pre>
          </div>
          <p>使用getResponseHeader()方法并传入头部字段名称，可以获取相应的响应头部信息。而使用getAllResponseHeaders()方法可以取得一个包含所有响应头部信息的字符串。</p>
          <div v-highlight>
            <pre>
              <code>
                xhr.getResponseHeader("myHeader") => "myValue"

                xhr.getAllResponseHeaders() => ""
              </code>
            </pre>
          </div>
        </div>
      </Card>
      <Card dis-hover shadow style="width:700px">
        <h3 slot="title">2.GET请求</h3>
        <div>
          <p>GET请求是最常见的请求类型，用于向服务器查询某些信息。通常可以将查询字符串参数追加到URL末尾，以便将信息发送给服务器。</p>
          <div v-highlight>
            <pre>
              <code>
                xhr.open("GET", "example.php?x=1&y=2", true)
              </code>
            </pre>
          </div>
          <p>GET请求是最常见的错误就是查询字符串的格式问题。查询字符串中的每个参数的名称和值必须使用encodeURIComponent()进行编码。</p>
          <div v-highlight>
            <pre>
              <code>
                //确保查询字段格式有效
                function addURLParam(url, name, value) {
                  url += (url.indexOf("?") === -1 ? "?" : "&")
                  url += encodeURIComponent(name) + "=" + encodeURIComponent(value)
                  return url
                }

                var url = "example.php"

                //添加参数
                url = addURLParam(url, "x", 1)
                url = addURLParam(url, "y", 2)

                xhr.open("GET", url, true)
              </code>
            </pre>
          </div>
        </div>
      </Card>
      <Card dis-hover shadow style="width:700px">
        <h3 slot="title">3.POST请求</h3>
        <div>
          <p>POST请求是使用频率仅次于GET的请求类型，用于向服务器发送应该被保存的数据。POST请求应该将数据作为请求的主体提交，主体可以包含非常多的数据，且格式不限。</p>
          <div v-highlight>
            <pre>
              <code>
                xhr.open("POST", "example.php", true)
                xhr.send(data)
              </code>
            </pre>
          </div>
          <p>默认情况下，服务器对POST提交和提交Web表单的请求并不会一视同仁。因此，服务端必须有程序来读取发送过来的原始数据，并从中解析出有用的部分。</p>
          <p>
            我们可以通过使用XHR来模仿Web表单提交，首先将Content-Type头部信息设置为application/x-www-form-urlencoded，也就是表单提交时的内容类型。
            另外以适当的格式创建一个字符串（使用serialize()函数序列化表单），作为请求的主体发送到服务器。
          </p>
          <div v-highlight>
            <pre>
              <code>
                xhr.open("POST", "example.php", true)
                xhr.setRequestHead("Content-Type", "application/x-www-form-urlencoded")
                var form = document.forms['myForm']
                xhr.send(serialize(form))
              </code>
            </pre>
          </div>
        </div>
      </Card>
      <Card dis-hover shadow style="width:700px">
        <h3 slot="title">4.Get与POST请求的区别</h3>
        <div>
          <div v-highlight>
            <pre>
              <code>
                //安全方面：
                //GET请求将查询字符串追加到url末尾，在浏览器地址栏可见。
                //POST请求将数据做请求主体发送给服务器。（不可见）

                //编码问题：
                //GET请求的查询字符串中参数的名称和值必须使用encodeURIComponent()进行编码
                //POST请求数据可以使用多种编码方式

                //数据大小
                //GET请求在URL中传送的查询字符串的长度限制的，而POST没有

                //缓存问题：
                //GET请求会被浏览器主动cache，而POST不会，除非手动设置

                //浏览器行为上：
                //GET请求在浏览器回退时是无害的，而POST可能会存在再次发送请求的情况
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
  name: 'ajax-2',
  created() {},
  methods: {},
  components: {
    Card
  }
}
</script>

<style scoped lang="stylus">
.ajax-2
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
