<template>
  <div class="bom-1">
    <div class="layout-content">
      <Card dis-hover shadow style="width:auto">
        <h3 slot="title">1.window对象</h3>
        <div>
          <p>所有在全局作用域中定义的变量或函数都是window对象的属性和方法。</p>
          <div v-highlight>
            <pre>
              <code>
                var color1 = 'red'
                window.color2 = 'blue'

                //全局变量不能通过delete删除(Configurable特性值为false)
                delete color1
                color1 => 'red'

                //直接在window上定义的属性可以使用delete删除
                delete window.color2
                window.color2 => undefined
              </code>
            </pre>
          </div>
        </div>
      </Card>
      <Card dis-hover shadow style="width:700px">
        <h3 slot="title">2.浏览器窗口</h3>
        <div>
          <p>窗口位置。</p>
          <div v-highlight>
            <pre>
              <code>
                //跨浏览器获得窗口左边与上边的位置
                var leftPos = (typeof window.screenLeft === 'number') ?
                              window.screenLeft : window.screenX
                var topPos = (typeof window.screenTop === 'number') ?
                              window.screenTop : window.screenY

                //移动窗口位置(默认被禁用)
                window.moveTo(100,100) //表示移动到(100, 100)这个坐标
                window.moveBy(100,100) //表示移动量。水平和垂直方向分别移动100个像素
              </code>
            </pre>
          </div>
          <p>窗口大小。因为主流浏览器之间存在差异，因此无法确定浏览器窗口本身的大小，但可以取得页面视口大小。</p>
          <div v-highlight>
            <pre>
              <code>
                //跨浏览器获得页面视口大小
                var pageWidth = window.innerWidth
                var pageHeight = window.innerHeight

                if (typeof pageWidth !== 'number') {
                  if (document.compatMode === "CSS1Compat") {
                    pageWidth = document.documentElement.clientWidth
                    pageHeight = document.documentElement.clientHeight
                  } else {
                    pageWidth = document.body.clientWidth
                    pageHeight = document.body.clientHeight
                  }
                }

                //调整窗口大小(默认被禁用)
                window.resizeTo(100, 100) //表示调整到100 * 100
                window.resizeBy(100, 100) //表示调整量
              </code>
            </pre>
          </div>
        </div>
      </Card>
      <Card dis-hover shadow style="width:700px">
        <h3 slot="title">3.导航和打开窗口</h3>
        <div>
          <p>导航和打开窗口。使用window.open()方法，既可以导航到一个特定的URL，也可以打开一个新的浏览器窗口。它接收4个参数，要加载的URL、窗口目标、一个描述窗口的特性字符串和
            一个表示新页面是否取代浏览器历史记录中当前加载页面的布尔值。</p>
          <div v-highlight>
            <pre>
              <code>
                //打开一个特定url
                //等价于&lt;a href="http://www.baidu.com" target="name1">&lt;/a>
                window.open('http://www.baidu.com', 'name1')

                //打开一个新窗口
                window.open('http://www.baidu.com', '_blank', 'height=400,width=400')

                //返回新窗口的引用
                var win = window.open(url)
                win.moveTo()
                win.resizeTo()
                win.close() //关闭窗口(且只能关闭新打开的窗口)
                win.closed => true

                //opener属性中保存着打开它的原始窗口对象
                //设置null,表示浏览器新创建的窗口不需要与原始窗口通信，可以在独立的进程中运行
                win.opener => window
                win.opener = null
              </code>
            </pre>
          </div>
        </div>
      </Card>
      <Card dis-hover shadow style="width:700px">
        <h3 slot="title">4.窗口屏蔽程序</h3>
        <div>
          <p>大多数浏览器都内置有弹出窗口屏蔽程序。</p>
          <div v-highlight>
            <pre>
              <code>
                //检测浏览器弹窗是否被屏蔽
                var win = window.open('http://www.baidu.com', '_blank')
                if (win === null) {
                  alert('弹出窗口已被屏蔽!')
                }

                //若浏览器程序阻止弹出窗口,window.open()方法会抛出一个异常,
                //因此使用try/catch语句更为准确的检测
                var blocked = false
                try {
                  var win = window.open('http://www.baidu.com', '_blank')
                  if (win === null) {
                    blocked = true
                  }
                } catch(e) {
                  blocked = true
                }
                if (blocked) {
                  alert('弹出窗口已被屏蔽!')
                }
              </code>
            </pre>
          </div>
        </div>
      </Card>
      <Card dis-hover shadow style="width:700px">
        <h3 slot="title">5.系统对话框</h3>
        <div>
          <p>alert()、confirm()和prompt()方法。</p>
          <div v-highlight>
            <pre>
              <code>
                alert('something')

                /*********************/
                if (confirm('are you sure?')) {
                  alert('ok')
                } else {
                  alert('no')
                }

                /*********************/
                var result = prompt('what your name?', '')
                if (result !== null) {
                  alert(result)
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
  name: 'bom-1',
  created() {},
  components: {
    Card
  }
}
</script>

<style scoped lang="stylus">
.bom-1
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
