<template>
  <div class="dom-event-type-5">
    <Card shadow style="width:950px">
      <h3 slot="title">1.HTML DOM变动事件</h3>
      <div>
        <p>DOM2级变动事件能在 DOM 中的某个部分发生变化时给出提示。DOM2级事件中定义了如下变动事件：</p>
        <ul class="menu">
          <li>DOMSubtreeModified：DOM 解构发生任何变化时触发。（这个事件在任何事件触发后都会触发）</li>
          <li>DOMNodeInserted：在一个节点作为子节点被插入到另一个节点中时触发。</li>
          <li>DOMNodeInsertedIntoDocument：在一个节点被直接插入文档或通过子树间接插入文档时触发。（在 DOMNodeInserted 事件之后触发）</li>
          <li>DOMNodeRemoved：在节点在其父节点中被移除时触发。</li>
          <li>DOMNodeRemovedFromDocument：在一个节点被直接从文档移除或通过子树间接从文档移除时触发。（在 DOMNodeRemoved 事件之后触发）</li>
          <li>DOMAttrModified：特性被修改之后触发。</li>
          <li>DOMCharacterDataModified：在文本节点值发生变化时触发。</li>
        </ul>
        <div v-highlight>
          <pre>
            <code>
              // 检测浏览器是否支持变动事件
              var isSupported = document.implementation.hasFeature("MutationEvents", "2.0")
              if (!isSupported) {
                alert("浏览器尚且不支持DOM变动事件!")
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
  name: 'dom-event-type-5',
  components: {
    Card
  }
}
</script>

<style scoped lang="stylus">
.dom-event-type-5
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
