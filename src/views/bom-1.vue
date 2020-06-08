<template>
  <div class="bom-1">
    <div class="layout-content">
      <Card dis-hover shadow style="width:auto">
        <h3 slot="title">1.全局作用域</h3>
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
      <Card dis-hover shadow style="width:auto">
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
          <p>导航和打开窗口。使用window.open()方法</p>
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
