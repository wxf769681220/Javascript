<template>
  <div class="practice-3">
    <div class="layout-content">
      <Card dis-hover shadow style="width:640px">
        <h3 slot="title">1.使用文档片段来构建DOM</h3>
        <div>
          <p>每次在DOM更新（插入、替换或删除）过程中，页面都会存在不必要的闪烁。DOM更新量少的时候，闪烁并不明显。若进行大量的DOM更新操作，这个问题就会凸显出来。</p>
          <div v-highlight>
            <pre>
              <code>
                //使用文档片段
                function addMenuItems(render) {
                  var doc = document,
                    fragment = doc.createDocumentFragment(),
                    li = null,
                    text = null,
                    i,
                    len;
                  //这种方法的优点是不需要浏览器反复渲染新创建的元素,
                  //将所有需要渲染的元素保存在文档片段中,
                  //然后一次性将其添加到文档中
                  for (i = 0; i &lt; 10; i++) {
                    li = doc.createElement('li')
                    text = doc.createTextNode("item" + (i + 1))
                    li.appendChild(text)
                    //添加到文档片段并保存起来
                    fragment.appendChild(li)
                  }
                  render.appendChild(fragment)
                }
              </code>
            </pre>
          </div>
        </div>
      </Card>
      <Card dis-hover shadow style="width:640px">
        <h3 slot="title">2.使用事件代理</h3>
        <div>
          <p>任何可以冒泡的事件都可以在其祖先节点上进行处理。</p>
          <div v-highlight>
            <pre>
              <code>
                //Document对象作为事件委托的对象
                //若不使用event.stopPropagation()阻止冒泡
                //页面中的所有click事件都会冒泡到该层
                EventUtil.addHandler(document, "click", function(event) {
                  event = EventUtil.getEvent(event)
                  var target = EventUtil.getTarget(event)

                  //根据指定的元素id执行相关的click操作
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
      <Card dis-hover shadow style="width:640px">
        <h3 slot="title">3.访问HTMLCollection对象</h3>
        <div>
          <p>任何时候要访问HTMLCollection对象，不管是一个属性还是一个方法，都是在整个文档上进行一个查询，这个查询开销会很昂贵。</p>
          <div v-highlight>
            <pre>
              <code>
                //循环优化
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
  </div>
</template>

<script>
import { Card } from 'view-design'

export default {
  name: 'practice-3',
  created() {},
  components: {
    Card
  }
}
</script>

<style scoped lang="stylus">
.practice-3
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
