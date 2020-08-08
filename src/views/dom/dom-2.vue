<template>
  <div class="dom-2">
    <Card shadow style="width:600px">
      <h3 slot="title">1.文档节点（Document）</h3>
      <div>
        <ul class="menu">
          <li>javascript 通过 Document 类型表示文档。</li>
          <li>document 对象是 HTMLDocument（继承自 Document）的一个实例，表示整个 HTML 页面。</li>
          <li>document 对象又是 window 的一个属性，因此可以通过全局来访问。</li>
          <li>文档节点是每个文档的根节点，文档节点只有一个子节点，即&lt;html&gt;元素，也叫文档元素。一个文档中只能有一个文档元素。</li>
        </ul>
        <div v-highlight>
          <pre>
            <code>
              window.document         // 文档节点
              document.nodeType       => 9
              document.nodeName       => '#document'
              document.nodeValue      => null
              document.parentNode     => null
              document.childNodes     => [html]
              document.ownerDocument  => null
            </code>
          </pre>
        </div>
      </div>
    </Card>
    <Card shadow style="width:750px">
      <h3 slot="title">2.document对象属性</h3>
      <div>
        <div v-highlight>
          <pre>
            <code>
              document.doctype          // 获取对&lt;!DOCTYPE>的引用
              document.documentElement  // 获取对&lt;html>的引用
              document.head             // 获取对&lt;head>的引用
              document.charset          // 文档中实际使用的字符集，默认值值为'UTP-8'
              document.defaultCharset   // 默认浏览器或操作系统的对字符集的设置
              document.title            // 获取对&lt;title>的引用
              document.body             // 获取对&lt;body>的引用

              // 特殊集合
              document.anchors   // 文档中所有带name特性的&lt;a>元素
              document.links     // 文档中所有带href特性的&lt;a>元素
              document.forms     // 文档中所有的&lt;form>元素
              document.images    // 文档中所有的&lt;img>元素

              // 网页请求相关属性,
              // 此信息都存在于请求的HTTP头部
              document.URL                 // 包含页面完整的URL
              document.domain              // 只包含页面域名
              document.referrer            // 可能包含空字符串
            </code>
          </pre>
        </div>
      </div>
    </Card>
    <Card shadow style="width:760px">
      <h3 slot="title">3.查找元素</h3>
      <div>
        <div v-highlight>
          <pre>
            <code>
              // 通过元素的id获取某一个元素的引用
              document.getElementById

              // 通过元素标签名获取某一个或一组元素的引用
              // 返回一个HTMLCollection对象
              document.getElementsByTagName

              // 通过元素的class特性获取某一个或一组元素的引用
              // 返回一个HTMLCollection对象
              document.getElementsByClassName

              // 通过元素的name特性获取某一个或一组元素的引用
              // 返回一个NodeList对象
              document.getElementsByName
            </code>
          </pre>
        </div>
        <p>对于 HTMLCollection 对象还有一个 namedItem() 方法。这个方法只会返回匹配到的第一个元素。</p>
        <div v-highlight>
          <pre>
            <code>
              var els = document.getElementsByTagName('li')

              /**
               * 通过元素的name特性获取元素节点
               * 只会返回匹配到的第一个元素
               */
              els['litem']
              els.namedItem('litem')
            </code>
          </pre>
        </div>
      </div>
    </Card>
    <Card shadow style="width:1200px">
      <h3 slot="title">4.文档写入方法</h3>
      <div>
        <p>
          write()、writeln()这两个方法都接收一个字符串参数，即要写入到输出流的文本。write() 会原样写入，而 writeln() 会在字符串的末尾添加一个换行符（\n）。
          在页面被加载的过程中，这两个方法可以向页面动态的加入内容。另外，这两个方法还可以动态的包含外部资源，例如：javascript 脚本文件。
        </p>
        <div v-highlight>
          <pre>
            <code>
              document.write("在页面被加载的过程中，我被加入到页面中!")

              // 动态的载入脚本文件（&lt;\/script>用到了转义字符）
              document.write("&lt;script type=\"text/javascript\" + src=\"jquery.js\">" + "&lt;\/script>")
            </code>
          </pre>
        </div>
        <p>write()、writeln() 这两个方法如何在文档加载完成后调用，则新添加的内容将覆盖整个文档。</p>
        <div v-highlight>
          <pre>
            <code>
              // 覆盖整个文档
              window.onload = function() {
                document.write("在页面被加载的过程中，我被加入到页面中!")
              }
            </code>
          </pre>
        </div>
        <p>open() 和 close() 这两个方法分别用于打开和关闭网页的输出流。 如果是在页面的加载期间使用 write() 或 writeLn()，则不要用到这两个方法。</p>
      </div>
    </Card>
  </div>
</template>

<script>
import { Card } from 'view-design'

export default {
  name: 'dom-2',
  components: {
    Card
  }
}
</script>

<style scoped lang="stylus">
.dom-2
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
