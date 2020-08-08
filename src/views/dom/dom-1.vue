<template>
  <div class="dom-1">
    <Card shadow style="width:860px">
      <h3 slot="title">1.节点类型</h3>
      <div>
        <p>javascript 中的所有节点类型都继承自 Node 类型。每个节点都有一个 nodeType 属性，表示其节点类型。</p>
        <div v-highlight>
          <pre>
            <code>
              /*
                Node.ELEMENT_NODE（1）    ----- 元素节点
                Node.ATTRIBUTE_NODE（2）  ----- 属性节点
                Node.TEXT_NODE（3）       ----- 文本节点··元素或属性中的文本内容
                Node.CDATA_SECTION_NODE（4） ----- 文档中的CDATA部（不会由解析器解析的文本）
                Node.ENTITY_REFERENCE_NODE（5）----- 实体引用
                Node.ENTITY_NODE（6）----- 实体
                Node.PROCESSING_INSTRUCTION_NODE（7）----- 处理指令
                Node.COMMENT_NODE（8）------ 注释节点
                Node.DOCUMENT_NODE（9）----- 整个文档（DOM树的根节点）
                Node.DOCUMENT_TYPE_NODE（10） ----- 向为文档定义的实体提供接口
                Node.DOCUMENT_FRAGMENT_NODE（11）----- 轻量级的Document对象（文档的某个部分）
                Node.NOTATION_NODE（12）----- DTD 中声明的符号
              */
            </code>
          </pre>
        </div>
      </div>
    </Card>
    <Card shadow style="width:720px">
      <h3 slot="title">2.节点属性</h3>
      <div>
        <ul class="menu">
          <li>每个节点都有一个 nodeType 属性，用于表示节点类型。</li>
          <li>每个节点都有一个 nodeName 属性，用于表示节点名称。</li>
          <li>每个节点都有一个 nodeValue 属性，用于表示节点相关值。</li>
        </ul>
        <div v-highlight>
          <pre>
            <code>
              // 元素节点
              var html = document.getElementsByTagName('html')

              html[0].nodeType => 1
              html[0].nodeName => 'HTML'
              html[0].nodeValue => null

              // 属性节点
              var attr = html[0].getAttributeNode('lang')
              attr.nodeType => 2
              attr.nodeName => 'lang'
              attr.nodeValue => 'en'

              // 文本节点
              var title = document.getElementsByTagName('title')
              var text = title[0].firstChild
              text.nodeType => 3
              text.nodeName => '#text'
              text.nodeValue => 'javascript'
            </code>
          </pre>
        </div>
      </div>
    </Card>
    <Card shadow style="width:1000px">
      <h3 slot="title">3.节点关系属性</h3>
      <ul class="menu">
        <li>每个节点都有一个 parentNode 属性，指向其在文档树中的父节点。（除了根节点）</li>
        <li>
          每个节点都有一个 childNodes 属性，指向其在文档树中的所有子节点。childNodes 属性中保存着一个 NodeList 对象，这是一个类数组对象，用于保存一组有序的节点。
          NodeList 对象是基于 DOM 结构动态执行查询的结果，因此 DOM 结构的变化能够自动反映在 nodeList 对象中。
        </li>
        <li>每个节点都有一个 firstChild 属性，指向其子节点中的第一个节点。（常用 firstElementChild 替代）</li>
        <li>每个节点都有一个 lastChild 属性，指向其子节点中的最后一个节点。（常用 lastChildElementChild 替代）</li>
        <li>每个节点都有一个 previousSibling 属性，指向其同胞节点中，位其前的第一个节点。（常用 previousElementSibling 替代）</li>
        <li>每个节点都有一个 nextSibling 属性，指向其同胞节点中，位其后的第一个节点。（常用 nextElementSibling 替代）</li>
      </ul>
      <div>
        <div v-highlight>
          <pre>
            <code>
              /* 该HTML结构在换行处会自动添加额外的文本节点
                &lt;body>
                  &lt;ol id="menu">
                    &lt;li>&lt;/li>
                    &lt;li>&lt;/li>
                    &lt;li>&lt;/li>
                  &lt;/ol>
                &lt;/body>
              */

              var menu = document.getElementById('menu')
              var item = document.getElementById('item')

              /**
               * 由于换行符会导致的额外的文本节点
               * 通常使用children代替childNodes
               * childNodes返回一个NodeList类数组对象
               * children返回一个HTMLCollection类数组对象
               */
              menu.childNodes  => NodeList[text, li, text, li, text, li, text]
              menu.children    => HTMLCollection[li, li, li]

              /**
               * 获取对子元素节点的引用
               * 可以使用数组的下标
               * 也可以使用item()方法
               */
              menu.children[0]
              menu.children.item(0)
            </code>
          </pre>
        </div>
        <p>创建一个过滤额外的文本节点的函数。</p>
        <div v-highlight>
          <pre>
            <code>
              function del(el) {
                if (el.ELEMENT_NODE !== 1) return
                var child = el.childNodes
                for (var i = 0; i &lt; child.length; i++) {
                  if (child[i].nodeName === "#text" && !/\s/.test(child.nodeValue)) {
                    el.removeChild(child[i])
                  }
                }
              }
              del(menu)
            </code>
          </pre>
        </div>
        <p>使用 sibling() 方法：表示获取某个节点的所有同胞节点。（参照jquery的sibling()方法）</p>
        <div v-highlight>
          <pre>
            <code>
              function sibling(elem) {
                var n = (elem.parentNode || {}).firstChild
                var r = []
                for (; n; n = n.nextSibling) {
                  if (n.nodeType === 1 && n !== elem) {
                    r.push(n)
                  }
                }
                return r
              }
            </code>
          </pre>
        </div>
      </div>
    </Card>
    <Card shadow style="width:1000px">
      <h3 slot="title">4.节点操作方法</h3>
      <ul class="menu">
        <li>
          appendChild()方法，用于向 childnodes 列表的末尾添加一个节点，使其成为某个节点的最后一个子节点。DOM 更新完成后，它返回新增的节点。
          如果被添加的节点已经是文档的一部分，那么将该节点从原位置转移到新位置，换句话说：任何 DOM 节点都不能同时出现在文档的多个位置上。
        </li>
        <li>
          insertBefore()方法，用于向 childnodes 列表中的指定位置插入一个节点。它接收两个参数：要插入的节点和参照的节点。
          若参照的节点是 null，则 insertBefore() 方法与 appendChild() 方法执行相同的操作。
        </li>
        <li>
          replaceChild()方法，用于向 childnodes 列表中替换指定的节点，插入的节点占据被替换的节点位置。它接收两个参数：要插入的节点和被替换的节点。
          这个方法返回从文档树中被替换的节点。
        </li>
        <li>removeChild()方法，用于移除节点。它接收一个参数：被移除的节点。这个方法返回被移除的节点。</li>
        <li>
          clone()方法，用于创建某个节点的一个完全相同的副本。它接受一个布尔值，表示是否执行深复制。若为 true，则复制节点及其整个子节点树；
          若为 false，则只复制节点本身。
        </li>
        <li>normalize()方法，这个方法唯一的作用是处理文档树中的空文本节点。</li>
      </ul>
      <div>
        <div v-highlight>
          <pre>
            <code>
              /*
                &lt;ul id="menu">
                  &lt;li>first-child&lt;/li>
                  &lt;li>sibling&lt;/li>
                  &lt;li>last-child&lt;/li>
                &lt;/ul>
              */
              var menu = document.getElementById('menu')

              // 插入到指定元素,成为其最后一个子元素
              function createLi() {
                var li = document.createElement('li')
                var tx = document.createTextNode('new-child')
                li.appendChild(tx)
                return li
              }
              menu.appendChild(createLi())

              // 插入到指定位置
              menu.insertBefore(createLi(), null)
              menu.insertBefore(createLi(), menu.firstElementChild)

              // 替换指定节点
              menu.replaceChild(menu.firstElementChild, menu.lastElementChild)

              // 移除指定节点
              menu.removeCild(menu.firstElementChild)

              // 克隆
              menu.cloneNode()
              menu.cloneNode(true)

              // 标准化,去空文本
              menu.normalize()
            </code>
          </pre>
        </div>
      </div>
    </Card>
    <Card shadow style="width:800px">
      <h3 slot="title">5.检测节点关系</h3>
      <div>
        <p>确定一个节点是否是另一个节点的后代，使用contains()方法。若是，返回true；否则，返回false。</p>
        <div v-highlight>
          <pre>
            <code>
              //body节点是html的后代节点
              document.documentElement.contains(document.body) => true
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
  name: 'dom-1',
  components: {
    Card
  }
}
</script>

<style scoped lang="stylus">
.dom-1
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
