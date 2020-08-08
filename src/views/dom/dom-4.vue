<template>
  <div class="dom-4">
    <Card shadow style="width:700px">
      <h3 slot="title">1.Text类型</h3>
      <div>
        <p>Text 类型用于表示纯文本内容。</p>
        <div v-highlight>
          <pre>
            <code>
              /**
              * &lt;div id="myDiv">this is a text&lt;/div>
              */

              var el = document.getElementsById("myDiv")

              var textNode = el.firstChild

              if (textNode.nodeType === 3) {
                textNode.nodeName  => '#text'
                textNode.nodeValue => 'this is a text'
                textNode.data      => 'this is a text'
              }

              // 文本节点没有子节点
              textNode.childNodes => []
              textNode.childNodes.length => 0
              textNode.children => undefined
            </code>
          </pre>
        </div>
        <div v-highlight>
          <pre>
            <code>
              // 创建文本节点
              document.createTextNode('hello world!')

              // HTML 标签以纯文本形式输出
              document.createTextNode('&lt;strong>hi&lt;/strong>hello world!')
            </code>
          </pre>
        </div>
      </div>
    </Card>
    <Card shadow style="width:800px">
      <h3 slot="title">2.操作文本节点的方法</h3>
      <div>
        <ul class="menu">
          <li>appendData(text)：将 text 添加到节点的末尾。</li>
          <li>deleteData(pos, count)：从 pos 指定位置开始删除 count 个字符。</li>
          <li>replaceData(pos, count, text)：用t ext 替换从 pos 位置到 pos+count 为止处的字符。</li>
          <li>insertData(pos, text)：在 pos 指定位置插入 text。</li>
          <li>splitText(pos)：从 pos 指定位置将当前文本分隔成两个文本。</li>
          <li>substringData(pos, count)：提取从 pos 位置到 pos + count 为止处的字符串。</li>
        </ul>
        <div v-highlight>
          <pre>
            <code>
              /**
               * &lt;div id="myDiv">content&lt;/div>
               */
              var el = document.getElementsById("myDiv")
              var textNode = el.firstChild

              textNode.appendData('-text')      => 'content-text'
              textNode.deleteData(0,1)          => 'ontent-text'
              textNode.replaceData(0,1,'co')    => 'content-text'
              textNode.insertData(0, 'prv-')    => 'prv-content-text'
              textNode.splitText(4)             => 'prv-' 'content-text'
              var x = textNode.substringData(0,4)       => 'prv-' 'content-text'
              x => 'prv-'
            </code>
          </pre>
        </div>
      </div>
    </Card>
    <Card shadow style="width:600px">
      <h3 slot="title">3.规范化文本节点</h3>
      <div>
        <p>在默认情况下，每个元素只能包含一个文本，且必须确实有内容存在。</p>
        <ul class="menu">
          <li>在默认情况下，每个元素只能包含一个文本，且必须确实有内容存在。</li>
          <li>无内容，也就没有文本节点。</li>
          <li>有内容，包含一个空格，因而有一个文本节点。</li>
          <li>如果两个文本节点是相邻的同胞节点，那么这两个节点中的文本就会连起来显示，且中间不会出现空格。</li>
          <li>Node 类型定义的 normalize() 方法将相邻的同胞文本节点合并。（与splitText() 方法执行相反的操作）</li>
        </ul>
        <div v-highlight>
          <pre>
            <code>
              /**
               * &lt;div id="myDiv">content&lt;/div>
               */

              var el = document.getElementsById("myDiv")
              var textNode = el.firstChild

              // 分隔成两个文本节点
              textNode.splitText(4)

              el.childNodes.length => 2
              el.normalize()
              el.childNodes.length => 1
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
  name: 'dom-4',
  components: {
    Card
  }
}
</script>

<style scoped lang="stylus">
.dom-4
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
