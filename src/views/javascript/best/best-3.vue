<template>
  <div class="best-3">
    <Card shadow style="width:640px">
      <h3 slot="title">1.使用文档片段来构建DOM</h3>
      <div>
        <p>每次在 DOM 更新（插入、替换或删除）过程中，页面都会存在不必要的闪烁。DOM 更新量少的时候，闪烁并不明显。若进行大量的 DOM 更新操作，这个问题就会凸显出来。</p>
        <div v-highlight>
          <pre>
            <code>
              // 使用文档片段
              function addMenuItems(render) {
                var doc = document,
                  fragment = doc.createDocumentFragment(),
                  li = null,
                  text = null,
                  i,
                  len;
                // 这种方法的优点是不需要浏览器反复渲染新创建的元素,
                // 将所有需要渲染的元素保存在文档片段中,
                // 然后一次性将其添加到文档中
                for (i = 0; i &lt; 10; i++) {
                  li = doc.createElement('li')
                  text = doc.createTextNode("item" + (i + 1))
                  li.appendChild(text)
                  // 添加到文档片段并保存起来
                  fragment.appendChild(li)
                }
                render.appendChild(fragment)
              }
            </code>
          </pre>
        </div>
      </div>
    </Card>
    <Card shadow style="width:640px">
      <h3 slot="title">2.使用事件代理</h3>
      <div>
        <p>任何可以冒泡的事件都可以在其祖先节点上进行处理。</p>
        <div v-highlight>
          <pre>
            <code>
              // Document对象作为事件委托的对象
              // 若不使用event.stopPropagation()阻止冒泡
              // 页面中的所有click事件都会冒泡到该层
              EventUtil.addHandler(document, "click", function(event) {
                event = EventUtil.getEvent(event)
                var target = EventUtil.getTarget(event)

                // 根据指定的元素id执行相关的click操作
                switch (target.id) {
                  case "item1":
                    console.log(target.innerText)
                    break;
                  case "item2":
                    console.log(target.innerText)
                    break;
                  case "item3":
                    console.log(target.innerText)
                    break;
                  default:
                    //...
                }
              })
            </code>
          </pre>
        </div>
      </div>
    </Card>
    <Card shadow style="width:680px">
      <h3 slot="title">3.移除事件处理程序</h3>
      <div>
        <ul class="menu">
          <li>移除或替换带有事件处理程序的 DOM 元素，是纯粹的 DOM 操作。</li>
          <li>而添加在 DOM 元素上的事件处理程序极有可能不会被当做垃圾回收。</li>
          <li>有些浏览器不会对此做出恰当的处理，它们有可能会对元素和对事件处理程序的引用都保存在内存中（内存无法释放）。</li>
          <li>若你知道某个元素即将被移除或被替换掉，最好手动移除事件处理器程序。</li>
        </ul>
        <div v-highlight>
          <pre>
            <code>
              &lt;div id="myDiv">
                &lt;button id="myBtn" type="button">按钮&lt;/button>
              &lt;/div>
            </code>
          </pre>
        </div>
        <div v-highlight>
          <pre>
            <code>
              //innHTML常用与替换页面中的某一部分
              var btn = document.getElementById("myBtn");
              btn.onlick = function() {
                //DOM元素被移除或替换之前,移除事件处理器
                btn.onlick = null;

                //innHTML常用与替换页面中的某一部分
                document.getElementById("myDiv").innHTML = "Process...";
              }
            </code>
          </pre>
        </div>
      </div>
    </Card>
    <Card shadow style="width:640px">
      <h3 slot="title">4.访问HTMLCollection对象</h3>
      <div>
        <p>任何时候要访问 HTMLCollection 对象，不管是一个属性还是一个方法，都是在整个文档上进行一个查询，这个查询开销会很昂贵。</p>
        <div v-highlight>
          <pre>
            <code>
              // 循环优化
              function updateUI() {
                var doc = document,
                imgs = doc.getElementsByTagName('img'),
                img = null,
                i,
                len;
                for (i = 0, len = imgs.length; i &lt; len; i++) {
                  img = imgs[i]
                  img.title = doc.title + "image" + i;
                }
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
  name: 'best-3',
  components: {
    Card
  }
}
</script>

<style scoped lang="stylus">
.best-3
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
