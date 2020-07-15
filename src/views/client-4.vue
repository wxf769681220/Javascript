<template>
  <div class="client-4">
    <div class="layout-content">
      <Card dis-hover shadow style="width:460px">
        <h3 slot="title">1.什么是H5？</h3>
        <ul class="menu">
          <li>HTML5是最新的HTML标准，可以说是HTML高级版本。</li>
          <li>它主要应用在移动端的web开发。</li>
          <li>HTML5提供了一些列新特性：&lt;video>、&lt;radio>、&lt;canvas>和&lt;svg>等</li>
          <li>HTML5还引入了一些新的功能：拖放功能（drag事件）、本地存储（localStorage、sessionStorage）</li>
        </ul>
      </Card>
      <Card dis-hover shadow style="width:620px">
        <h3 slot="title">1.浏览器适配</h3>
        <div>
          <p>1.移动端屏幕视口viewport。</p>
          <div v-highlight>
            <pre>
              <code>
                /*
                  &lt;meta name="viewport" content="width=device-width,
                  initial-scale=1.0, maximum-scale=1.0,minimum-scale=1.0,
                  user-scalable=0"
                */
              </code>
            </pre>
          </div>
          <p>2.元素单位适配，如：px、rem、vw和vh单位。</p>
          <div v-highlight>
            <pre>
              <code>
                /*
                 *
                **/
              </code>
            </pre>
          </div>
          <p>3.弹性盒子，flex布局。</p>
          <div v-highlight>
            <pre>
              <code>
                /*
                 *
                **/
              </code>
            </pre>
          </div>
          <p>4.针对不同的屏幕尺寸设置不同的样式（响应式的页面），CSS媒体查询：@media。</p>
          <div v-highlight>
            <pre>
              <code>
                /*
                 * CSS媒体查询 media
                **/
              </code>
            </pre>
          </div>
          <p>5.针对不同的屏幕分辨率dpi，制作2x和3x图像。</p>
          <div v-highlight>
            <pre>
              <code>
                /*
                 * CSS媒体查询 media
                **/
              </code>
            </pre>
          </div>
          <p>6.雪碧图的应用</p>。
          <div v-highlight>
            <pre>
              <code>
                /*
                 * CSS媒体查询 media
                **/
              </code>
            </pre>
          </div>
        </div>
      </Card>
      <Card dis-hover shadow style="width:520px">
        <h3 slot="title">3.浏览器兼容</h3>
        <div>
          <p>CSS-hack 主要针对IE的不同版本，不同的浏览器的写法不同。</p>
          // IE的条件注释hack：
          &lt;!--[if !IE]>&lt;!--> &lt;link href="not-ie.css" /> &lt;!--&lt;![endif]-->
        </div>
      </Card>
    </div>
  </div>
</template>

<script>
import { Card } from 'view-design'

export default {
  name: 'client-4',
  created() {},
  components: {
    Card
  }
}
</script>

<style scoped lang="stylus">
.client-4
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
