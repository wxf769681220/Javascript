<template>
  <div class="dom-6">
    <Card shadow style="width:600px">
      <h3 slot="title">1.动态脚本</h3>
      <div>
        <div v-highlight>
          <pre>
            <code>
              function loadScript(url) {
                var script = document.createElement("script")
                script.type = "text/javascript"
                script.src = url
                document.body.appendChild(script)
              }

              // 加载外部脚本文件的过程是异步的
              loadScript('client.js')
            </code>
          </pre>
        </div>
      </div>
    </Card>
    <Card shadow style="width:700px">
      <h3 slot="title">2.动态样式</h3>
      <div>
        <div v-highlight>
          <pre>
            <code>
              function loadStyles(url) {
                var link = document.createElement("link")
                link.rel = "stylesheet"
                link.type = "text/css"
                link.href = url
                var head = document.getElementsByTagName("head")[0]
                head.appendChild(link)
              }

              // 加载外部样式文件的过程是异步的
              loadStyles('style.js')
            </code>
          </pre>
        </div>
      </div>
    </Card>
    <Card shadow style="width:700px">
      <h3 slot="title">3.动态表格</h3>
      <div>
        <p>为了方便构建表格，DOM为&lt;table>、&lt;thead>、&lt;tbody>和&lt;tr>添加了一些的属性和方法：下列为&lt;table>元素添加的属性和方法：</p>
        <ul class="menu">
          <li>caption：保存对&lt;caption>元素的指针。</li>
          <li>tHead：保存对&lt;thead>元素的指针。</li>
          <li>tBodies：是一个&lt;tbody>元素的HTMLCollection。</li>
          <li>tFoot：保存对&lt;tfoot>元素的指针。</li>
          <li>createCaption：创建&lt;caption>元素，放到表格中，返回引用。</li>
          <li>createTHead：创建&lt;thead>元素，放到表格中，返回引用。</li>
          <li>createTFoot：创建&lt;tfoot>元素，放到表格中，返回引用。</li>
          <li>deleteCaption：删除&lt;caption>元素。</li>
          <li>deleteTHead：删除&lt;thead>元素。</li>
          <li>deleteTFoot：删除&lt;tfoot>元素。</li>
          <li>rows：是一个表格所有行的HTMLCollection。</li>
          <li>insertRows(pos)：向rows集合中的指定位置插入一行。</li>
          <li>deleteRows(pos)：删除指定位置行。</li>
        </ul>
        <p>下列为 &lt;tbody>元素添加的属性和方法：</p>
        <ul class="menu">
          <li>rows：保存着 &lt;tbody>元素中行的HTMLCollection。</li>
          <li>insertRows(pos)：向rows集合中的指定位置插入一行，返回对新插入行的引用。</li>
          <li>deleteRows(pos)：删除指定位置行。</li>
        </ul>
        <p>下列为 &lt;tr>元素添加的属性和方法：</p>
        <ul class="menu">
          <li>cells：保存着表格中 &lt;tr>元素中单元格的HTMLCollection。</li>
          <li>insertCell(pos)：向cells集合中的指定位置插入一个单元格，返回对新插入单元格的引用。</li>
          <li>deleteCell(pos)：删除指定位置单元格。</li>
        </ul>
        <div v-highlight>
          <pre>
            <code>
              &lt;table>
                &lt;caption>我的标题&lt;/caption>
                &lt;thead>
                  &lt;tr>
                    &lt;th>单元格1&lt;/th>
                    &lt;th>单元格2&lt;/th>
                  &lt;/tr>
                &lt;/thead>
                &lt;tbody>
                  &lt;tr>
                    &lt;td>单元格3&lt;/td>
                    &lt;td>单元格4&lt;/td>
                  &lt;/tr>
                  &lt;tr>
                    &lt;td>单元格3&lt;/td>
                    &lt;td>单元格4&lt;/td>
                  &lt;/tr>
                &lt;/tbody>
                &lt;tfoot>
                  &lt;tr>
                    &lt;td>单元格3&lt;/td>
                  &lt;/tr>
                &lt;/tfoot>
              &lt;/table>
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
  name: 'dom-6',
  components: {
    Card
  }
}
</script>

<style scoped lang="stylus">
.dom-6
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
