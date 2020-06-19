<template>
  <div class="dom-1">
    <div class="layout-content">
      <Card dis-hover shadow style="width:450px">
        <h3 slot="title">1.文档节点</h3>
        <div>
          <p>文档节点是每个文档的根节点，文档节点只有一个子节点，即&lt;html&gt;元素，也叫文档元素。一个文档中只能有一个文档元素。</p>
          <div v-highlight>
            <pre>
              <code>
                //文档节点
                &lt;html lang="en">
                  &lt;head>
                    &lt;title>javascript&lt;/title>
                  &lt;/head>
                  &lt;body>
                    &lt;p>hello world&lt;/p>
                  &lt;/body>
                &lt;/html>
              </code>
            </pre>
          </div>
        </div>
      </Card>
      <Card dis-hover shadow style="width:720px">
        <h3 slot="title">2.节点类型</h3>
        <div>
          <p>javascript中的所有节点类型都继承自Node类型。每个节点都有一个nodeType属性，表示其节点类型。</p>
          <div v-highlight>
            <pre>
              <code>
                //节点类型
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
              </code>
            </pre>
          </div>
        </div>
      </Card>
      <Card dis-hover shadow style="width:720px">
        <h3 slot="title">3.节点属性</h3>
        <div>
          <ul class="menu">
            <li>每个节点都有一个nodeType属性，用于表示节点类型。</li>
            <li>每个节点都有一个nodeName属性，用于表示节点名称。</li>
            <li>每个节点都有一个nodeValue属性，用于表示节点相关值。</li>
          </ul>
          <div v-highlight>
            <pre>
              <code>
                //元素节点
                var el = document.getElementsByTagName('html')
                el[0].nodeType => 1
                el[0].nodeName => 'HTML'
                el[0].nodeValue => null

                //属性节点
                var attr = el[0].getAttributeNode('lang')
                attr.nodeType => 2
                attr.nodeName => 'lang'
                attr.nodeValue => 'en'

                //文本节点
                var el = document.getElementsByTagName('title')
                var text = title[0].firstChild
                text.nodeType => 3
                text.nodeName => '#text'
                text.nodeValue => 'javascript'
              </code>
            </pre>
          </div>
        </div>
      </Card>
      <Card dis-hover shadow style="width:800px">
        <h3 slot="title">5.节点关系属性</h3>
        <ul class="menu">
          <li>每个节点都有一个parentNode属性，指向其在文档树中的父节点。</li>
          <li>
            每个节点都有一个childNodes属性，指向其在文档树中的所有子节点。childNodes属性中保存着一个NodeList对象，这是一个类数组对象，用于保存一组有序的节点。
            NodeList对象是基于DOM结构动态执行查询的结果，因此DOM结构的变化能够自动反映在nodeList对象中。
          </li>
          <li>每个节点都有一个firstChild属性，指向其子节点中的第一个节点。（常用firstElementChild替代）</li>
          <li>每个节点都有一个lastChild属性，指向其子节点中的最后一个节点。（常用lastChildElementChild替代）</li>
          <li>每个节点都有一个previousSibling属性，指向其同胞节点中，位其前的第一个节点。（常用previousElementSibling替代）</li>
          <li>每个节点都有一个nextSibling属性，指向其同胞节点中，位其后的第一个节点。（常用nextElementSibling替代）</li>
        </ul>
        <div>
          <div v-highlight>
            <pre>
              <code>
                //html结构
                //这种书写在换行处会自动添加额外的文本节点
                &lt;body>
                  &lt;ol id="menu">
                    &lt;li>&lt;/li>
                    &lt;li id="item">&lt;/li>
                    &lt;li>&lt;/li>
                  &lt;/ol>
                &lt;/body>
              </code>
            </pre>
          </div>
          <div v-highlight>
            <pre>
              <code>
                var menu = document.getElementById('menu')
                var item = document.getElementById('item')

                menu.parentNode => body元素节点

                //由换行符导致的额外的文本节点
                menu.childNodes => NodeList[text, li, text, li, text, li, text]

                //通常使用children代替childNodes,
                //children属性会自动过滤由换行符导致的额外的文本节点
                menu.children      => HTMLCollection[li, li, li]
                menu.children[0]   => 第一个li元素节点
                menu.children[3]   => undefined

                //可以使用item()方法访问保存在NodeList中的节点
                menu.children.item(0)  => li元素节点
                menu.children.item(3)  => null

                /**************************************************/
                //在使用其他属性时,也需要手动过滤额外的文本节点
                //创建一个过滤额外的文本节点的函数
                function del_blank(el) {
                  if (el.ELEMENT_NODE !== 1) return
                  var child = el.childNodes
                  for (var i = 0; i &lt; child.length; i++) {
                    if (child[i].nodeName === "#text" && !/\s/.test(child.nodeValue)) {
                      el.removeChild(child[i])
                    }
                  }
                }

                //移除所有额外的文本节点
                del_blank(menu)
              </code>
            </pre>
          </div>
          <p>使用sibling()方法：表示获取某个节点的所有同胞节点。（参照jquery的sibling()方法）</p>
          <div v-highlight>
            <pre>
              <code>
                //封装
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

                sibling(item) => [li,li]
              </code>
            </pre>
          </div>
        </div>
      </Card>
      <Card dis-hover shadow style="width:700px">
        <h3 slot="title">6.节点操作方法</h3>
        <ul class="menu">
          <li>
            appendChild()方法，用于向childnodes列表的末尾添加一个节点，使其成为某个节点的最后一个子节点。DOM更新完成后，它返回新增的节点。
            如果被添加的节点已经是文档的一部分，那么将该节点从原位置转移到新位置，换句话说：任何DOM节点都不能同时出现在文档的多个位置上。
          </li>
          <li>
            insertBefore()方法，用于向childnodes列表中的指定位置插入一个节点。它接收两个参数：要插入的节点和参照的节点。
            若参照的节点是null，则insertBefore()方法与appendChild()方法执行相同的操作。
          </li>
          <li>
            replaceChild()方法，用于向childnodes列表中替换指定的节点，插入的节点占据被替换的节点位置。它接收两个参数：要插入的节点和被替换的节点。
            这个方法返回从文档树中被移除的被替换的节点。
          </li>
          <li>removeChild()方法，用于移除节点。它接收一个参数：被移除的节点。这个方法返回被移除的节点。</li>
          <li>
            clone()方法，用于创建某个节点的一个完全相同的副本。它接受一个布尔值，表示是否执行深复制。若为true，则复制节点及其整个子节点树；
            若为false，则只复制节点本身。
          </li>
          <li>normalize()方法，这个方法唯一的作用是处理文档树中的空文本节点。</li>
        </ul>
        <div>
          <div v-highlight>
            <pre>
              <code>
                &lt;ul id="menu">
                  &lt;li>first-child（sibling）&lt;/li>
                  &lt;li>sibling&lt;/li>
                  &lt;li>last-child（sibling）&lt;/li>
                &lt;/ul>
              </code>
            </pre>
          </div>
          <div v-highlight>
            <pre>
              <code>
                var menu = document.getElementById('menu')

                //创建一个新元素
                function createLi() {
                  var li = document.createElement('li')
                  var tx = document.createTextNode('new-child')
                  li.appendChild(tx)
                  return li
                }

                //添加
                menu.appendChild(createLi())

                //指定位置添加
                menu.insertBefore(createLi(), null)
                menu.insertBefore(createLi(), menu.firstChild)

                //替换移除
                menu.replaceChild(menu.firstChild, menu.lastChild)

                //移除
                menu.removeCild(menu.lastChild)

                //克隆
                menu.cloneNode()
                menu.cloneNode(true)

                //标准化,去空文本
                menu.normalize()
              </code>
            </pre>
          </div>
        </div>
      </Card>
      <Card dis-hover shadow style="width:600px">
        <h3 slot="title">7.检测节点关系</h3>
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
  </div>
</template>

<script>
import { Card } from 'view-design'

export default {
  name: 'dom-1',
  created() {},
  components: {
    Card
  }
}
</script>

<style scoped lang="stylus">
.dom-1
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
