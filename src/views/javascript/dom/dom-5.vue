<template>
  <div class="dom-5">
    <Card shadow style="width:600px">
      <h3 slot="title">1.DocumentFragment类型</h3>
      <div>
        <p>在所有节点类型中，只有 DocumentFragment 在文档中没有对应的 HTML 标记，DOM 规定文档片段是一种轻量化的文档，
          可以包含和控制节点，但不完全像完整的文档那样占用额外的资源。</p>
        <div v-highlight>
          <pre>
            <code>
              if (Node.nodeType === 11) {
                Node.nodeName   => 'document-fragment'
                Node.nodeValue  => null
                Node.parentNode => null
              }
            </code>
          </pre>
        </div>
        <p>不能将文档片段直接添加到文档中，但可以将它作为一个仓库老使用，即可以在里面保存将来可能会添加到文档中的节点。（文档片段继承了 Node 的所有方法）</p>
        <div v-highlight>
          <pre>
            <code>
              // 创建文档片段
              var fragment = document.createDocumentFragment()

              var ul = document.getElementById('myList')
              var li = null

              /**
               * 优点是：不需要浏览器反复渲染新创建的元素
               * 它将所有需要渲染的元素保存在文档片段中
               * 然后一次性将其添加到文档中
               */

              for (var i = 0; i &lt; 3; i++) {
                li = docuemnt.createElement('li')
                text = document.createTextNode('li' + i + 1)
                li.appendChild(text)
                fragment.appendChild(li)
              }

              ul.appendChild(fragment)
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
  name: 'dom-5',
  components: {
    Card
  }
}
</script>

<style scoped lang="stylus">
.dom-5
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
