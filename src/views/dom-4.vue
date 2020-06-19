<template>
  <div class="dom-4">
    <div class="layout-content">
      <Card dis-hover shadow style="width:600px">
        <h3 slot="title">1.Text类型</h3>
        <div>
          <p>Text类型用于表示纯文本内容，纯文本可以包含转义后的html字符，但不能包含html代码。。</p>
          <div v-highlight>
            <pre>
              <code>
                &lt;div id="hook" class="box">content&lt;/div>
              </code>
            </pre>
          </div>
          <div v-highlight>
            <pre>
              <code>
                var el = document.getElementsById("hook")
                var textNode = el.firstchild

                textNode.nodeType => 3
                textNode.nodeName => '#text'
                textNode.nodeValue === textNode.data => true //"content"

                textNode.childNodes => []
                textNode.childNodes.length => 0
                textNode.children => undefined
              </code>
            </pre>
          </div>
          <div v-highlight>
            <pre>
              <code>
                //创建文本节点
                document.createTextNode('hello world!')
                document.createTextNode('&lt;strong>hi&lt;/strong>hello world!')
              </code>
            </pre>
          </div>
        </div>
      </Card>
      <Card dis-hover shadow style="width:660px">
        <h3 slot="title">2.操作文本节点的方法</h3>
        <div>
          <ul class="menu">
            <li>appendData(text)：将text添加到节点的末尾。</li>
            <li>deleteData(pos, count)：从pos指定位置开始删除count个字符。</li>
            <li>replaceData(pos, count, text)：用text替换从pos位置到pos+count为止处的字符。</li>
            <li>insertData(pos, text)：在pos指定位置插入text。</li>
            <li>splitText(pos)：从pos指定位置将当前文本分隔成两个文本。</li>
            <li>substringData(pos, count)：提取从pos位置到pos+count为止处的字符串。</li>
          </ul>
          <div v-highlight>
            <pre>
              <code>
                &lt;div id="hook" class="box">content&lt;/div>
              </code>
            </pre>
          </div>
          <div v-highlight>
            <pre>
              <code>
                var el = document.getElementsById("hook")
                var textNode = el.firstchild

                //=>后表示文本节点的变化
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
      <Card dis-hover shadow style="width:600px">
        <h3 slot="title">3.规范化文本节点</h3>
        <div>
          <p>在默认情况下，每个元素只能包含一个文本，且必须确实有内容存在。</p>
          <div v-highlight>
            <pre>
              <code>
                //无内容,也就没有文本节点
                &lt;div>&lt;/div>

                //有内容,包含一个空格,因而有一个文本节点
                &lt;div> &lt;/div>

                //有内容,因而有一个文本节点
                &lt;div>hello world!&lt;/div>
              </code>
            </pre>
          </div>
          <p>
            如果两个文本节点是相邻的同胞节点，那么这两个节点中的文本就会连起来显示，且中间不会出现空格。这种情况容易导致混乱，
            因此可以使用由Node类型定义的normalize()方法将相邻的同胞文本节点合并。（与splitText()方法执行相反的操作）
          </p>
          <div v-highlight>
            <pre>
              <code>
                &lt;div id="hook" class="box">content&lt;/div>

                var el = document.getElementsById("hook")
                var textNode = el.firstchild
                textNode.splitText(4)

                box.childNodes.length => 2
                box.normalize()
                box.childNodes.length => 1
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
  name: 'dom-4',
  created() {},
  components: {
    Card
  }
}
</script>

<style scoped lang="stylus">
.dom-4
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
