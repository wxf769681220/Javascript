<template>
  <div class="bom-4">
    <Card dis-hover shadow style="width:600px">
      <h3 slot="title">1.screen对象的属性或方法</h3>
      <div>
        <p>screen 对象用来表示客户端的能力，其中包括浏览器窗口的外部的显示器的信息，如：像素宽度和高度。</p>
        <table class="table-bordered">
          <thead>
            <tr class="bg-gray">
              <th>属性或方法</th>
              <th>描述</th>
            </tr>
          </thead>
          <tbody>
            <tr class="bg-1">
              <td>availHeight</td>
              <td>屏幕的像素高度减系统部件高度之后的值</td>
            </tr>
            <tr class="bg-1">
              <td>availWidth</td>
              <td>屏幕的像素宽度减系统部件宽度之后的值</td>
            </tr>
            <tr class="bg-2">
              <td>availHeight</td>
              <td>未被系统部件占用的最上方的像素值</td>
            </tr>
            <tr class="bg-2">
              <td>availLeft</td>
              <td>未被系统部件占用的最左侧的像素值</td>
            </tr>
            <tr class="bg-2">
              <td>height</td>
              <td>屏幕的像素高度</td>
            </tr>
            <tr class="bg-1">
              <td>width</td>
              <td>屏幕的像素宽度</td>
            </tr>
            <tr class="bg-2">
              <td>top</td>
              <td>当前屏幕距上边的像素举例</td>
            </tr>
            <tr class="bg-2">
              <td>left</td>
              <td>当前屏幕距左边的像素举例</td>
            </tr>
          </tbody>
        </table>
      </div>
    </Card>
  </div>
</template>

<script>
import { Card } from 'view-design'

export default {
  name: 'bom-4',
  components: {
    Card
  }
}
</script>

<style scoped lang="stylus">
.bom-4
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
