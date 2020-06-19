<template>
  <div class="dom-7">
    <div class="layout-content">
      <Card dis-hover shadow style="width:580px">
        <h3 slot="title">1.选择符API</h3>
        <p>可以通过Document及Element实例调用下面三个方法：</p>
        <div>
          <ul class="menu">
            <li>querySelector()方法：接收一个css选择符，返回与该模式匹配的第一个元素。若没有找到匹配的元素，返回null。</li>
            <li>querySelectorAll()方法：接收一个css选择符，返回与该模式匹配的所有元素。若没有找到匹配的元素，返回一个空的nodeList对象。</li>
            <li>matchesSelector()方法：接收一个css选择符。如果存在匹配元素，则返回true，否则返回false。</li>
          </ul>
          <div v-highlight>
            <pre>
              <code>
                //获取body元素
                document.querySelector('body') === document.body => true

                //获取类为selected的第一个元素
                document.querySelector('.selected')

                //获取id为div的第一个元素
                document.querySelector('#div')

                //获取body元素的第一个div元素
                document.body.querySelector('div')

                /***********************************/
                document.querySelectorAll('.selected')

                document.querySelectorAll('#div')

                var list = document.body.querySelectorAll('div')

                list[0] === list.item(0) => true

                /**************** 浏览器尚未支持 *******************/
                //是否可以匹配到类名为page的body元素
                if (document.body.matchesSelector(body.page)) {
                  //true
                }
              </code>
            </pre>
          </div>
        </div>
      </Card>
      <Card dis-hover shadow style="width:520px">
        <h3 slot="title">2.DOM焦点</h3>
        <p>
          document.activeElement属性始终会引用DOM中当前获得焦点的元素。获得焦点的方式有页面加载、用户输入和调用focus()方法。文档记载时，document.activeElement的值为null；
          文档加载完成时，document.activeElement中保存的是对body元素的引用。
        </p>
        <div>
          <div v-highlight>
            <pre>
              <code>
                var btn = document.getElementById('myButton')
                btn.focus()
                document.activeElement === btn => true
              </code>
            </pre>
          </div>
        </div>
        <p>document.hasFocus()方法，用于确定文档是否获得了焦点。</p>
        <div>
          <div v-highlight>
            <pre>
              <code>
                var btn = document.getElementById('myButton')
                btn.focus()
                document.hasFocus() => true
              </code>
            </pre>
          </div>
        </div>
        <p>通过为某个元素设置焦点，来控制浏览器滚动条的滚动。</p>
        <div>
          <div v-highlight>
            <pre>
              <code>
                //btn2不在页面视口之中
                var btn1 = document.getElementById('btn1')
                var btn2 = document.getElementById('btn2')
                btn1.onclick= function() {
                  //页面将滚动到获得焦点的元素位置
                  btn2.focus()
                }

                //使用scrollIntoView()方法
                //这个方法接受一个布尔值（可选）,
                //表示被调用元素与视口的位置关系
                btn1.onclick= function() {
                  btn2.scrollIntoView()
                }
              </code>
            </pre>
          </div>
        </div>
      </Card>
      <Card dis-hover shadow style="width:580px">
        <h3 slot="title">3.innerHTML</h3>
        <p>
          在读模式下，innerHTML属性返回调用元素的所有子节点（包括元素、文本节点和注释）对应的HTML标记组成的字符串。浏览器不同，返回字符串中标签的大小写、HTML格式都不同。
          不是所有元素都支持innerHTML属性，如：&lt;frameset>、&lt;html>、&lt;head>、&lt;title>、&lt;style>及&lt;table>的相关标记。
        </p>
        <div>
          <div v-highlight>
            <pre>
              <code>
               //返回包含元素、文本和注释的字符串
               "&lt;!-- comment -->
                this is textNode
                &lt;ol>
                  &lt;li>&lt;/li>
                  &lt;li>&lt;/li>
                  &lt;li>&lt;/li>
                &lt;/ol>"
              </code>
            </pre>
          </div>
        </div>
        <p>在写模式下，innerHTML属性设置的值会替换所有调用元素的所有子节点。</p>
        <div>
          <div v-highlight>
            <pre>
              <code>
                var div = document.getElementById('myDiv')

                //设置纯文本
                div.innerHTML = 'hello world'

                //设置带有HTML标记
                div.innerHTML = '&lt;h1>hello world&lt;/h1>'

                //无效
                div.innerHTML = '&lt;script>alert('hello world')&lt;/script>'
              </code>
            </pre>
          </div>
        </div>
        <p>
          只要是使用innerHTML从外部插入的HTML，都应该以可靠的方式处理HTML。window.toStaticHTML()方法，接收一个HTML字符串，返回一个可靠的处理后的版本。
          即从源HTML中删除所有脚本节点和事件处理器。
        </p>
        <div v-highlight>
          <pre>
            <code>
              var text = "&lt;a href='#' onclick=''>Click me&lt;/a>"
              var sanitized = window.toStaticHTML(text)
              sanitized => "&lt;a href='#'>Click me&lt;/a>"
            </code>
          </pre>
        </div>
      </Card>
      <Card dis-hover shadow style="width:580px">
        <h3 slot="title">4.outerHTML属性</h3>
        <p>在读模式下，outerHTML属性返回调用元素及其所有子节点（包括元素、文本节点和注释）对应的HTML标记组成的字符串。</p>
        <div>
          <div v-highlight>
            <pre>
              <code>
                //返回包含元素、文本和注释的字符串
                &lt;div id="myDiv">
                "&lt;!-- comment -->
                  this is textNode
                  &lt;ol>
                    &lt;li>&lt;/li>
                    &lt;li>&lt;/li>
                    &lt;li>&lt;/li>
                  &lt;/ol>"
                &lt;/div>
              </code>
            </pre>
          </div>
          <p>在写模式下，根据指定的HTML字符串创建新的DOM子树，然后用这个DOM子树完全替换调用元素。</p>
          <div>
            <div v-highlight>
              <pre>
              <code>
                var div = document.getElementById('myDiv')
                div.outerHTML = '&lt;h1>hello world&lt;/h1>'
              </code>
            </pre>
            </div>
          </div>
        </div>
      </Card>
      <Card dis-hover shadow style="width:580px">
        <h3 slot="title">5.insertAdjacentHTML()方法</h3>
        <p>表示插入标记。这个方法接收两个参数：第一个参数表示：插入位置；第二个参数表示：插入的HTML文本。第一个参数必须是下列值：
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
                &lt;ol id="menu">
                  &lt;li id="item">item1&lt;/li>
                  &lt;li>item3&lt;/li>
                  &lt;li>item4&lt;/li>
                &lt;/ol>"

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
      <Card dis-hover shadow style="width:680px">
        <h3 slot="title">6.innerText属性</h3>
        <p>在读模式下，innerText属性返回调用元素中包含的所有文本内容拼接组成的字符串（包括子树中的文本）。
        </p>
        <div>
          <div v-highlight>
            <pre>
              <code>
                &lt;div id="myDiv">
                  &lt;button type="button">Primary&lt;/button>
                  &lt;ol>
                    &lt;li>item1&lt;/li>
                    &lt;li>item2&lt;/li>
                    &lt;li>item3&lt;/li>
                  &lt;/ol>
                 &lt;/div>

                var div = document.getElementById('myDiv')
                div.innerText.split(/\s+/) => ['Primary', 'item1', 'item2', 'item3']
              </code>
            </pre>
          </div>
        </div>
        <p>在写模式下，innerText属性会删除元素的所有子节点，插入包含相应文本值的文本节点。</p>
        <div>
          <div v-highlight>
            <pre>
              <code>
                var div = document.getElementById('myDiv')
                div.innerText = 'hello world'

                //HTML标记不会被解析,以纯文本显示
                div.innerText = '&lt;h1>hello world&lt;/h1>'
              </code>
            </pre>
          </div>
        </div>
      </Card>
      <Card dis-hover shadow style="width:580px">
        <h3 slot="title">7.outerText属性</h3>
        <p>在读模式下，outerText属性与innerText属性返回结果完全一样。在写模式下，outerText属性会删除元素的所有子节点，包括元素本身，并以相应文本值的文本节点插入。</p>
        <div>
          <div v-highlight>
            <pre>
              <code>
                var div = document.getElementById('myDiv')
                //文本值替换整个元素
                div.outerText = 'hello world'
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
  name: 'dom-7',
  created() {},
  components: {
    Card
  }
}
</script>

<style scoped lang="stylus">
.dom-7
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
