<template>
  <div class="dom-3">
    <Card shadow style="width:580px">
      <h3 slot="title">1.Element类型</h3>
      <div>
        <p>Element 类型用于表现 HTML 元素，提供了对元素标签名、子节点 及特性的访问。</p>
        <div v-highlight>
          <pre>
            <code>
              /*
                &lt;html id="myHtml" lang="en">&lt;/html>
              */

              var el = document.getElementById("myHtml")

              el.nodeType       => 1
              el.nodeName       => 'HTML'
              el.nodeValue      => null

              // 这样最好，适用于任何文档
              if (el[0].nodeName.toLowerCase === 'html') {
                //...
              }

              // 获取元素的特性（属性节点）
              var attrNode = el.getAttributeNode('lang')
              attrNode.nodeType   => 2
              attrNode.nodeName   => 'lang'
              attrNode.nodeValue  => 'en'

              // 这样最好，适用于任何文档
              if (attrNode.nodeName.toLowerCase === 'lang') {
                //...
              }
            </code>
          </pre>
        </div>
      </div>
    </Card>
    <Card shadow style="width:750px">
      <h3 slot="title">2.元素的特性（属性节点）</h3>
      <div>
        <p>所有 HTML 元素都包含下列标准的属性特性：</p>
        <ul class="menu">
          <li>id：元素在文档中的唯一标识符。</li>
          <li>className：css 类名。</li>
          <li>title：有关元素的附加说明信息。</li>
          <li>lang：元素内容的语言代码，很少用。</li>
          <li>dir：语言方向。值为 ltr 或 rtl，很少用。</li>
        </ul>
        <div v-highlight>
          <pre>
            <code>
              /*
                &lt;div id="myDiv" class="color1 color2" title="This is a div">&lt;/div>
              */

              var el = document.getElementById('myDiv')

              el.id        => 'myDiv'
              el.className => 'color1 color2'
              el.title     => 'This is a div'
            </code>
          </pre>
        </div>
        <ul class="menu">
          <li>由于 className 的值是一个字符串，任何对 className 操作都是对这个字符串的修改。</li>
          <li>HTML5 新增 classList 属性是新集合类型 DOMTokenList 的实例（这是一个类数组对象）。</li>
          <li>该对象具有以下属性或方法：
            <ul class="menu">
              <li>length：列表长度。</li>
              <li>value：表示类名的字符串形式。</li>
              <li>add(str)：将给定字符串添加到列表中。若值已经存在，则不再添加。</li>
              <li>remove(str)：从列表中删除指定字符串。</li>
              <li>toggle(str)：若列表存在给定字符串，则删除；否则，添加。</li>
              <li>contains(str)：表示列表中是否存在给定字符串。若存在，则返回 true；否则，返回 false。</li>
            </ul>
          </li>
        </ul>
        <div v-highlight>
          <pre>
            <code>
              /**
               * &lt;div id="myDiv" class="color1 color2 color3">&lt;/div>
               */

              var el = document.getElementById('myDiv')

              el.classList => DOMTokenList[]

              // 访问值
              el.classList[0]      => 'color1'
              el.classList.item(0) => 'color1'

              el.classList.length => 3
              el.classList.value => 'color1 color2 color3'
            </code>
          </pre>
        </div>
        <p>在操作 CSS 样式时，需要通过 style 特性。style 对象是 CSSStyleDeclaration 的实例。</p>
        <div v-highlight>
          <pre>
            <code>
              /**
              * &lt;div id="myDiv" style="color: #000">&lt;/div>
              */

              var el = document.getElementById('myDiv')

              el.style => CSSStyleDeclaration{}

              el.style.color => rgb(0, 0, 0)
            </code>
          </pre>
        </div>
      </div>
    </Card>
    <Card shadow style="width:850px">
      <h3 slot="title">3.操作元素特性</h3>
      <div>
        <p>getAttribute()方法，可以获取元素特性。对于在 HTML 元素上没有定义的特性，返回 null。</p>
        <div v-highlight>
          <pre>
            <code>
              /**
               * &lt;div id="myDiv" data-num="1">&lt;/div>
               */

              /**
               * 一般不建议使用getAttribute()
               * 请使用DOM元素本身的属性来访问
               */

              var el = document.getElementById("myDiv")
              el.id => 'myDiv'
              el['data-num']              => undefined

              // 访问自定义属性
              el.getAttribute('data-num') => '1'
            </code>
          </pre>
        </div>
        <p>setAttribute()方法，设置元素特性值。若特性已经存在，setAttribute() 会以指定的值替换现在的值；若特性不存在，setAttribute() 则创建该特性并设置相应的值。</p>
        <div v-highlight>
          <pre>
            <code>
              /**
               * &lt;div id="myDiv" data-num="1">&lt;/div>
               */

               /**
                * 一般不建议使用setAttribute()
                * 请使用 DOM 元素本身的属性来设置
                */

              var el = document.getElementById("myDiv")

              // 替换
              el.id => 'newDiv'

              // 添加
              el.title => 'This is a new div'

              // 设置自定义属性
              el.setAttribute('data-num', '1')
            </code>
          </pre>
        </div>
        <p>removeAttribute()方法，移除元素特性。这个方法返回 undefiend。</p>
        <div v-highlight>
          <pre>
            <code>
              /**
               * &lt;div id="myDiv" data-num="1">&lt;/div>
               */

              var el = document.getElementById("myDiv")

              // 使用 DOM 元素本身的属性来设置为空
              el.id = ''
              el.className = ''

              // 移除自定义属性
              el.removeAttribute("data-num")
            </code>
          </pre>
        </div>
      </div>
    </Card>
    <Card shadow style="width:740px">
      <h3 slot="title">4.attributes特性对象</h3>
      <div>
        <p>
          所有 HTML 元素都有一个 attributes 属性，。该属性中保存着一个 NamedNodeMap 对象，这是一个类数组对象，用于保存一组有序的元素特性。
          NamedNodeMap 对象是基于 DOM 结构动态执行查询的结果，因此 DOM 结构的变化能够自动反映在 NamedNodeMap 对象中。NamedNodeMap 对象有如下四个方法：
        </p>
        <ul class="menu">
          <li>getNamedItem(name)：返回 nodeName 属性等于 name 的节点。</li>
          <li>setNamedItem(node)：添加节点，以节点的 nodeName 属性为索引；（很少用）。</li>
          <li>removeNamedItem(name)：移除 nodeName 属性等于 name 的节点。它返回被移除的属性节点。</li>
          <li>item(pos): 返回位于数字 pos 位置的节点。</li>
        </ul>
        <div v-highlight>
          <pre>
            <code>
              /**
               * &lt;div id="myDiv" data-num="1">&lt;/div>
               */

              var el = document.getElementById("myDiv")

              // 保存着一个动态的属性节点的集合
              el.attributes => NamedNodeMap{0: 'id', 1: 'data-num'}

              // 以下三种访问方式都是等价的
              el.attributes[0]      => id=myDiv（object 类型）
              el.attributes['id']   => id=myDiv（object 类型）
              el.getNamedItem('id') => id=myDiv（object 类型）

              if (el.attributes[0].nodeType === 2) {
                el.attributes[0].nodeName  => 'id'
                el.attributes[0].nodeValue => 'myDiv'
              }
            </code>
          </pre>
        </div>
        <p>当我们需要遍历元素特性时会用到 attributes 特性对象。</p>
        <div v-highlight>
          <pre>
            <code>
                function outPutAttributes(el) {
                  var pairs = new Array()
                  var attrName
                  var attrValue
                  for (var i = 0, len = el.attributes.length; i &lt; len; i++) {
                    attrName = el.attributes[i].nodeName
                    attrValue = el.attributes[i].nodeValue
                    pairs.push(attrName + "=\"" + attrValue + "\"")
                  }
                  return pairs.join(" ")
                }

                outPutAttributes(box) => "id='myDiv' data-num='1'"
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
  name: 'dom-3',
  components: {
    Card
  }
}
</script>

<style scoped lang="stylus">
.dom-3
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
