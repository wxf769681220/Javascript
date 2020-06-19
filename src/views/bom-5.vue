<template>
  <div class="bom-5">
    <div class="layout-content">
      <Card dis-hover shadow style="width:450px">
        <h3 slot="title">1.history对象</h3>
        <div>
          <p>history对象保存着用户上网的历史记录。</p>
          <div v-highlight>
            <pre>
              <code>
                //后退一步
                history.go(-1)
                history.back()

                //前进一步
                history.go(1)
                history.forward()

                //前进两步
                history.go(2)

                //跳转至历史记录中包含该字符串的第一个位置
                //若历史记录中不包含该字符串,则什么也不做
                history.go('baidu.com')
              </code>
            </pre>
          </div>
        </div>
      </Card>
      <Card dis-hover shadow style="width:450px">
        <h3 slot="title">2.length属性</h3>
        <div>
          <p>history对象的length属性，保存着历史记录的数量。</p>
          <div v-highlight>
            <pre>
              <code>
                if (history.length === 0) {
                  //这里应该是用户打开窗口后的第一个页面
                }
              </code>
            </pre>
          </div>
        </div>
      </Card>
      <Card dis-hover shadow style="width:450px">
        <h3 slot="title">3.hashchange事件</h3>
        <div>
          <p>
            户每次操作不一定会打开一个新的页面，因此"前进"和"后退"按钮就失去了作用，导致用户很难在不同的状态间切换。通过hashchange事件，
            可以知道URL的参数什么时候发生了改变，什么时候有所反应。
          </p>
          <div v-highlight>
            <pre>
              <code>
              </code>
            </pre>
          </div>
        </div>
      </Card>
      <Card dis-hover shadow style="width:600px">
        <h3 slot="title">4.pushState()方法</h3>
        <div>
          <ul class="menu">
            <li>pushState()方法：历史状态管理API，能够在不加载新页面的情况下改变浏览器的URL。</li>
            <li>该方法接收三个参数：状态对象，新状态标题（可以是空字符串）和相对URL（可选）。</li>
            <li>执行pushState()方法后，新的状态信息就会被加入实例状态栈，浏览器地址栏也会变成新的相对URL。</li>
            <li>浏览器不会真的向服务器发送请求，即使状态改变后查询location.href也会返回与地址栏中相同的地址。</li>
            <li>第一个参数：状态对象应该尽可能的提供初始化页面状态所需的各种信息。</li>
          </ul>
          <div v-highlight>
            <pre>
              <code>
                var btn = document.getElementById("myBtn")

                EventUtil.addHandler(btn, 'click', function (event) {
                  history.pushState({page: 1}, "title 1", "?page=1")
                })
              </code>
            </pre>
          </div>
          <p>pushState()方法会创建新的历史状态，执行该方法后，浏览器后退按钮就被激活了。按下后退按钮，会触发window的popstate事件。popstate事件的事件对象有一个state属性，
            这个属性就包含着当初以第一个参数传递给pushState()的状态对象。</p>
          <div v-highlight>
            <pre>
              <code>
                //加载
                EventUtil.addHandler(window, 'popstate', function(event) {
                  event = EventUtil.getEvent(event)

                  event.state => {}

                  if (event.state) {
                    //页面重置为状态对象中的数据表示的状态（浏览器不会自动做这些操作）
                    processState(event.state)
                  }
                })
              </code>
            </pre>
          </div>
          <p>更新当前状态，可以调用replaceState()方法，这个方法接收两个参数与pushstate()方法前两个参数相同。调用这个方法不会在历史状态栈中创建新状态，只会重写当前状态。</p>
          <div v-highlight>
            <pre>
              <code>
                var btn = document.getElementById("myBtn")

                EventUtil.addHandler(btn, 'click', function (event) {
                  history.replaceState({page: 2}, "title 2")
                })
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
  name: 'bom-5',
  created() {},
  components: {
    Card
  }
}
</script>

<style scoped lang="stylus">
.bom-5
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
