<template>
  <div class="operator-2">
    <div class="layout-content">
      <Card dis-hover shadow style="width:auto">
        <h3 slot="title">1.运算符优先级</h3>
        <div>
          <table class="table-bordered">
            <thead>
              <tr class="bg-gray">
                <th>运算符</th>
                <th>操作</th>
                <th>结合性</th>
                <th>操作数个数</th>
                <th>运算符</th>
              </tr>
            </thead>
            <tbody>
              <tr class="bg-1">
                <td>++</td>
                <td>前/后增量</td>
                <td>从右至左</td>
                <td>1</td>
                <td rowspan="9">一元运算符</td>
              </tr>
              <tr class="bg-1">
                <td>--</td>
                <td>前/后减量</td>
                <td>从右至左</td>
                <td>1</td>
              </tr>
              <tr class="bg-1">
                <td>+</td>
                <td>转换为数字</td>
                <td>从右至左</td>
                <td>1</td>
              </tr>
              <tr class="bg-1">
                <td>-</td>
                <td>转换为数字</td>
                <td>从右至左</td>
                <td>1</td>
              </tr>
              <tr class="bg-1">
                <td>~</td>
                <td>按位求反</td>
                <td>从右至左</td>
                <td>1</td>
              </tr>
              <tr class="bg-1">
                <td>！</td>
                <td>逻辑非</td>
                <td>从右至左</td>
                <td>1</td>
              </tr>
              <tr class="bg-1">
                <td>delete</td>
                <td>删除属性</td>
                <td>从右至左</td>
                <td>1</td>
              </tr>
              <tr class="bg-1">
                <td>typeof</td>
                <td>检测操作数类型</td>
                <td>从右至左</td>
                <td>1</td>
              </tr>
              <tr class="bg-1">
                <td>void</td>
                <td>返回undefined值</td>
                <td>从右至左</td>
                <td>1</td>
              </tr>
              <tr class="bg-2">
                <td>*、/、%</td>
                <td>乘、除、求余</td>
                <td>从左至右</td>
                <td>2</td>
                <td rowspan="2">算术运算符</td>
              </tr>
              <tr class="bg-2">
                <td>+、-</td>
                <td>加或字符串连接、减</td>
                <td>从左至右</td>
                <td>2</td>
              </tr>
              <tr class="bg-1">
                <td>&lt;&lt;、>>、>>></td>
                <td>左移位、有符号右移和无符号右移</td>
                <td>从左至右</td>
                <td>2</td>
                <td>位运算符</td>
              </tr>
              <tr class="bg-2">
                <td>&lt;、&lt;=、>、>=</td>
                <td>比较数字、字符串顺序(字母表)顺序</td>
                <td>从左至右</td>
                <td>2</td>
                <td>比较运算符</td>
              </tr>
              <tr class="bg-2">
                <td>instenceof</td>
                <td>检测对象类型</td>
                <td>从左至右</td>
                <td>2</td>
                <td rowspan="2"></td>
              </tr>
              <tr class="bg-2">
                <td>in</td>
                <td>测试属性是否存在</td>
                <td>从左至右</td>
                <td>2</td>
              </tr>
              <tr class="bg-1">
                <td>==、!==、===、!==</td>
                <td>相等、不等、恒等和非恒等</td>
                <td>从左至右</td>
                <td>2</td>
                <td>相等和不相等运算符</td>
              </tr>
              <tr class="bg-2">
                <td>&、^、|</td>
                <td>按位与、按位异或和按位或</td>
                <td>从左至右</td>
                <td>2</td>
                <td>位运算符</td>
              </tr>
              <tr class="bg-1">
                <td>&&、||</td>
                <td>逻辑与和逻辑或</td>
                <td>从左至右</td>
                <td>2</td>
                <td>逻辑运算符</td>
              </tr>
              <tr class="bg-2">
                <td>?:</td>
                <td>条件运算符</td>
                <td>从右至左</td>
                <td>3</td>
                <td>三元运算符</td>
              </tr>
              <tr class="bg-1">
                <td>=</td>
                <td>赋值</td>
                <td>从右至左</td>
                <td>2</td>
                <td rowspan="2">赋值运算符</td>
              </tr>
              <tr class="bg-1">
                <td>*=、/=、%=、+=、-=</td>
                <td>运算且赋值</td>
                <td>从右至左</td>
                <td>2</td>
              </tr>
              <tr class="bg-2">
                <td>,</td>
                <td>忽略第一个操作数，返回第二个操作数</td>
                <td>从左至右</td>
                <td>2</td>
                <td>逗号运算符</td>
              </tr>
            </tbody>
          </table>
        </div>
      </Card>
    </div>
  </div>
</template>

<script>
import { Card } from 'view-design'

export default {
  name: 'operator-2',
  created() {},
  components: {
    Card
  }
}
</script>

<style scoped lang="stylus">
.operator-2
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
