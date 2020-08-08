<template>
  <div class="reference-type-4">
    <Card shadow style="width:550px">
      <h3 slot="title">1.1Math对象</h3>
      <p style="margin: 10px 0">Math对象的属性：数学计算中可能用到的特殊值。</p>
      <table class="table-bordered" style="width: 100%">
        <thead>
          <tr class="bg-gray">
            <th>属性</th>
            <th>描述</th>
          </tr>
        </thead>
        <tbody>
          <tr class="bg-1">
            <td>Math.E</td>
            <td>自然对数的底数，即常量e的值</td>
          </tr>
          <tr class="bg-2">
            <td>Math.LN10</td>
            <td>10的自然对数</td>
          </tr>
          <tr class="bg-2">
            <td>Math.LN2</td>
            <td>2的自然对数</td>
          </tr>
          <tr class="bg-1">
            <td>Math.LOG2E</td>
            <td>以2为底e的对数</td>
          </tr>
          <tr class="bg-1">
            <td>Math.LOG10E</td>
            <td>以10为底e的对数</td>
          </tr>
          <tr class="bg-2">
            <td>Math.PI</td>
            <td>π的值</td>
          </tr>
          <tr class="bg-1">
            <td>Math.SQRT1_2</td>
            <td>1/2的平方根(2的平方根的倒数)</td>
          </tr>
          <tr class="bg-1">
            <td>Math.SQRT2</td>
            <td>2的平方根</td>
          </tr>
          <tr class="bg-2">
            <td>Math.abs(num)</td>
            <td>返回num的绝对值</td>
          </tr>
          <tr class="bg-2">
            <td>Math.exp(num)</td>
            <td>返回Math.E的num次幂</td>
          </tr>
          <tr class="bg-2">
            <td>Math.log(num)</td>
            <td>返回num的自然对数</td>
          </tr>
          <tr class="bg-2">
            <td>Math.pow(num, power)</td>
            <td>返回num的power次幂</td>
          </tr>
          <tr class="bg-2">
            <td>Math.sqrt(num)</td>
            <td>返回num的平方根</td>
          </tr>
          <tr class="bg-1">
            <td>Math.acos(x)</td>
            <td>返回x的反余弦值</td>
          </tr>
          <tr class="bg-1">
            <td>Math.asin(x)</td>
            <td>返回x的反正弦值</td>
          </tr>
          <tr class="bg-1">
            <td>Math.atan(x)</td>
            <td>返回x的反正切值</td>
          </tr>
          <tr class="bg-1">
            <td>Math.atan2(y, x)</td>
            <td>返回y/x的反正切值</td>
          </tr>
          <tr class="bg-1">
            <td>Math.cos(x)</td>
            <td>返回x余弦值</td>
          </tr>
          <tr class="bg-1">
            <td>Math.sin(x)</td>
            <td>返回x的正弦值</td>
          </tr>
          <tr class="bg-1">
            <td>Math.tan(x)</td>
            <td>返回x的正切值</td>
          </tr>
        </tbody>
      </table>
    </Card>
    <Card shadow style="width:550px">
      <h3 slot="title">1.2.max()和min()方法</h3>
      <div>
        <p>接收任何数量的参数，确定数值中的最大值或最小值。</p>
        <div v-highlight>
          <pre>
            <code>
              Math.max(11,2,3,4,15) => 15
              Math.min(11,2,3,4,15) => 2
            </code>
          </pre>
        </div>
        <p>确定数组中的最大值或最小值。</p>
        <div v-highlight>
          <pre>
            <code>
              var arr = [11,2,3,4,15]

              Math.max.apply(Math, arr) => 15
              Math.min.apply(Math, arr) => 2
            </code>
          </pre>
        </div>
      </div>
    </Card>
    <Card shadow style="width:550px">
      <h3 slot="title">1.3.舍入方法</h3>
      <div>
        <ul class="menu">
          <li>Math.ceil()：向上舍入，数值舍入为最近的整数。</li>
          <li>Math.floor()：向下舍入，数值舍入为最近的整数。</li>
          <li>Math.round()：标准舍入，数值四舍五入为最近的整数。</li>
        </ul>
        <div v-highlight>
          <pre>
            <code>
              // 清除小数位，整数位+1
              Math.ceil(1.1) => 2
              Math.ceil(1.5) => 2
              Math.ceil(1.9) => 2

              // 清除小数位
              Math.floor(1.1) => 1
              Math.floor(1.5) => 1
              Math.floor(1.9) => 1

              Math.round(1.1) => 1
              Math.round(1.5) => 2
              Math.round(1.9) => 2
            </code>
          </pre>
        </div>
      </div>
    </Card>
    <Card shadow style="width:750px">
      <h3 slot="title">1.4.random() 方法</h3>
      <div>
        <p>random() 方法始终返回大于等于 0 小于 1 的随机数。</p>
        <div v-highlight>
          <pre>
            <code>
              // 从某个范围内随机选择一个数
              result = Math.floor(Math.random() * 可能值的总数 + 第一个可能的值)

              // 从0-10之间随机一个数，0-10总共有11个可能值，第一个可能值是0
              result = Math.floor(Math.random() * 11 + 0)

              // 封装函数
              function randomValueFrom(lowerValue, upperValue) {
                var choices = upperValue - lowerValue + 1
                return Math.floor(Math.random() * choices + lowerValue)
              }
            </code>
          </pre>
        </div>
        <p>从数组中随机抽取一个数组项。</p>
        <div v-highlight>
          <pre>
            <code>
              var arr = ['red', 'green', 'black', 'blue']
              arr[randomValueFrom(0, arr.length-1)]
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
  name: 'reference-type-4',
  components: {
    Card
  }
}
</script>

<style scoped lang="stylus">
.reference-type-4
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
