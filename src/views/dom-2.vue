-5<template>
  <div class="dom-2">
    <div class="layout-content">
      <Card dis-hover shadow style="width:500px">
        <h3 slot="title">1.Document节点</h3>
        <div>
          <ul class="menu">
            <li>javascript通过Document类型表示文档。</li>
            <li>document对象是HTMLDocument（继承自Document）的一个实例，表示整个HTML页面。</li>
            <li>document对象又是window的一个属性，因此可以通过全局来访问。</li>
            <li>其子节点可能是DocumentType(最多一个)、Element(最多一个)、ProcessingInstruction或Comment。</li>
          </ul>
          <div v-highlight>
            <pre>
              <code>
                window.document => 文档节点

                document.nodeType       => 9
                document.nodeName       => #document
                document.nodeValue      => null
                document.parentNode     => null
                document.childNodes     => [html]
                document.ownerDocument  => null
              </code>
            </pre>
          </div>
        </div>
      </Card>
      <Card dis-hover shadow style="width:580px">
        <h3 slot="title">2.document对象属性</h3>
        <div>
          <div v-highlight>
            <pre>
              <code>
                document.doctype          =>获取对&lt;!DOCTYPE>的引用
                document.documentElement  =>获取对&lt;html>的引用
                document.head             =>获取对&lt;head>的引用
                document.charset          =>一般值为'UTP-8'
                document.title            =>获取对&lt;title>的引用
                document.body             =>获取对&lt;body>的引用

                //网页请求相关属性,
                //此信息都存在于请求的HTTP头部
                document.URL                 =>包含页面完整的URL
                document.domain              =>只包含页面域名
                document.referrer            =>可能包含空字符串
              </code>
            </pre>
          </div>
        </div>
      </Card>
      <Card dis-hover shadow style="width:760px">
        <h3 slot="title">3.查找元素</h3>
        <div>
          <div v-highlight>
            <pre>
              <code>
                //通过元素的id获取某一个元素的引用
                document.getElementById

                //通过元素标签名获取某一个或一组元素的引用,返回一个HTMLCollection对象）
                document.getElementsByTagName

                //通过元素的class特性获取某一个或一组元素的引用, 返回一个HTMLCollection对象
                document.getElementsByClassName

                //通过元素的name特性获取某一个或一组元素的引用,返回一个NodeList对象
                document.getElementsByName
              </code>
            </pre>
          </div>
          <div v-highlight>
            <pre>
              <code>
                &lt;ol>
                  &lt;li>&lt;/li>
                  &lt;li name="li01">&lt;/li>
                  &lt;li name="li01">&lt;/li>
                &lt;/ol>

                var el = document.getElementsByTagName('ol')

                el[0] => //HTMLCollection[ol]
                el[1] => undefined

                el.item(0) => //HTMLCollection[ol]
                el.item(1) => null
              </code>
            </pre>
          </div>
          <p>HTMLCollection对象还有一个namedItem()方法。这个方法只会返回匹配到的第一个元素。</p>
          <div v-highlight>
            <pre>
              <code>
                var els = document.getElementsByTagName('li')

                //name特性等于'li01'的&lt;li>元素
                els['li01']
                els.namedItem('li01')
              </code>
            </pre>
          </div>
          <p>NodeList对象与HTMLCollection对象的区别。</p>
          <div v-highlight>
            <pre>
              <code>
                //返回一个NodeList对象
                var els = document.getElementsByName('li01')

                els['li01'] => undefined
                els.namedItem('li01') => error
              </code>
            </pre>
          </div>
        </div>
      </Card>
      <Card dis-hover shadow style="width:850px">
        <h3 slot="title">4.文档写入方法</h3>
        <div>
          <p>write()、writeln()这两个方法都接收一个字符串参数，即要写入到输出流的文本。write()会原样写入，而writeln()会在字符串的末尾添加一个换行符（\n）。
            在页面被加载的过程中，这两个方法可以向页面动态的加入内容。另外，这两个方法还可以动态的包含外部资源，例如：javascript 脚本文件。</p>
          <div v-highlight>
            <pre>
              <code>
                document.write("在页面被加载的过程中，我被加入到页面中!")

                //动态的载入脚本文件（&lt;\/script>用到了转义字符）
                document.write("&lt;script type=\"text/javascript\" + src=\"jquery.js\">" + "&lt;\/script>")
              </code>
            </pre>
          </div>
          <p>write()、writeln() 这两个方法如何在文档加载完成后调用，则新添加的内容将覆盖整个文档。</p>
          <div v-highlight>
            <pre>
              <code>
                //覆盖整个文档
                window.onload = function() {
                  document.write("在页面被加载的过程中，我被加入到页面中!")
                }
              </code>
            </pre>
          </div>
          <p>open() 和 close() 这两个方法分别用于打开和关闭网页的输出流。 如果是在页面的加载期间使用write() 或 writeLn()，则不要用到这两个方法。</p>
        </div>
      </Card>
    </div>
  </div>
</template>

<script>
import { Card } from 'view-design'

export default {
  name: 'dom-2',
  created() {},
  components: {
    Card
  }
}
</script>

<style scoped lang="stylus">
.dom-2
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
