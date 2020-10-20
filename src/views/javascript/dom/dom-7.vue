<template>
  <div class="dom-7">
    <Card shadow style="width:680px">
      <h3 slot="title">1.选择符API</h3>
      <p>可以通过 Document 及 Element 实例调用下面三个方法：</p>
      <div>
        <ul class="menu">
          <li>querySelector()方法：接收一个 css 选择符，返回与该模式匹配的第一个元素。若没有找到匹配的元素，返回 null。</li>
          <li>querySelectorAll()方法：接收一个 css 选择符，返回与该模式匹配的所有元素。若没有找到匹配的元素，返回一个空的 nodeList 对象。</li>
          <li>matchesSelector()方法：接收一个 css 选择符。如果存在匹配元素，则返回 true，否则返回 false。（浏览器尚未支持）</li>
        </ul>
        <div v-highlight>
          <pre>
            <code>
              // 只返回匹配到的第一个元素
              document.querySelector('body') === document.body => true
              document.querySelector('.selected')
              document.body.querySelector('div')

              // 返回所有匹配到的元素
              document.querySelectorAll('.selected')
              document.body.querySelectorAll('div')
            </code>
          </pre>
        </div>
      </div>
    </Card>
    <Card shadow style="width:780px">
      <h3 slot="title">3.innerHTML 与 outerHTML属性</h3>
      <ul class="menu">
        <li>在读模式下，innerHTML 属性返回被调用元素子树中所有节点组成的字符串。</li>
        <li>在写模式下，innerHTML 属性设置的值会替换被调用元素子树中所有节点。</li>
        <li>在写模式下，HTML 标记会被浏览器解析。</li>
        <li>不同浏览器下，返回字符串中 HTML 标签的大小写和格式都不同。</li>
        <li>outerHTML 属性与 innerHTML 属性类似，区别在于：outerHTML 属性返回的结果中包含被调用元素本身。</li>
      </ul>
      <div>
        <div v-highlight>
          <pre>
            <code>
              /* 在读模式，返回一个字符串
                "&lt;div>
                  &lt;!-- this is a comment -->
                  this is text
                  &lt;span>hello world&lt;/span>
                &lt;/div>"
              */
            </code>
          </pre>
        </div>
      </div>
      <div>
        <div v-highlight>
          <pre>
            <code>
              // 设置纯文本
              document.body.innerHTML = 'hello world'

              // 设置带有HTML标记，会被解析
              document.body.innerHTML = '&lt;div>hello world&lt;/div>'

              // 危险操作
              document.body.innerHTML = "&lt;script>alert('hello world')&lt;/script>"
            </code>
          </pre>
        </div>
      </div>
      <p>
        只要是使用 innerHTML 从外部插入的 HTML，都应该以可靠的方式处理 HTML。window.toStaticHTML()方法，接收一个 HTML 字符串，返回一个可靠的处理后的版本。
        即从源 HTML 中删除所有脚本节点和事件处理器。
      </p>
      <div v-highlight>
        <pre>
          <code>
            var text = "&lt;div onclick='dosomething()'>";
            text += "Click me";
            text += "&lt;script>alert('hello world')&lt;/script>";
            text += "&lt;/div>"

            // 移除事件处理程序
            // 移除所有脚本节点

            // 该方法尚未得到支持
            if (window.toStaticHTML) {
              var sanitized = window.toStaticHTML(text)
              sanitized => "&lt;div>Click me&lt;/div>"
            }
          </code>
        </pre>
      </div>
    </Card>
    <Card shadow style="width:680px">
      <h3 slot="title">6.innerText属性 与 outerText属性</h3>
      <ul class="menu">
        <li>在读模式下，innerText 属性返回被调用元素子树中包含的所有文本内容拼接组成的字符串。</li>
        <li>在写模式下，innerText 属性会删除被调用元素子树中所有节点，并插入包含相应文本值的文本节点。</li>
        <li>在写模式下，HTML 标记不会被解析，最终以纯文本内容显示。</li>
        <li>在读模式下，outerText 属性与innerText 属性返回结果完全一样。</li>
        <li>在写模式下，outerText属性会删除元素的所有子节点，包括元素本身，并以相应文本值的文本节点插入。</li>
      </ul>
    </Card>
      <Card shadow style="width:780px">
      <h3 slot="title">5.insertAdjacentHTML()方法</h3>
      <p>表示插入标记。这个方法接收两个参数：第一个参数表示：插入位置；第二个参数表示：插入的 HTML文本。第一个参数必须是下列值：
        <ul class="menu">
          <li>beforebegin：在当前元素之前插入一个相邻的同胞元素。</li>
          <li>afterend：在当前元素之后插入一个相邻的同胞元素。</li>
          <li>afterbegin：在当前元素之下插入一个新的子元素，使其成为该元素的第一个子元素。</li>
          <li>beforeend：在当前元素之下插入一个新的子元素，使其成为该元素的最后一个子元素。</li>
        </ul>
      </p>
      <div>
        <div v-highlight>
          <pre>
            <code>
              /*
              &lt;ol id="menu">
                &lt;li id="item">item1&lt;/li>
                &lt;li>item3&lt;/li>
                &lt;li>item4&lt;/li>
              &lt;/ol>
              */

              var item = document.getElementById('item')
              item.insertAdjacentHTML('beforebegin', '&lt;li>item0&lt;/li>')
              item.insertAdjacentHTML('afterend', '&lt;li>item2&lt;/li>')

              var menu = document.getElementById('menu')
              menu.insertAdjacentHTML('afterbegin', '&lt;li>item0&lt;/li>')
              menu.insertAdjacentHTML('beforeend', '&lt;li>item5&lt;/li>')
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
  name: 'dom-7',
  components: {
    Card
  }
}
</script>

<style scoped lang="stylus">
.dom-7
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
