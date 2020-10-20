<template>
  <div class="operator-2">
    <Card shadow style="width:680px">
      <h3 slot="title">1位操作符</h3>
      <ul class="menu">
        <li>ECMAScript 整数有两种类型，即有符号整数（包含正数和负数）和无符号整数（只包含正数）。</li>
        <li>对于有符号整数，32 位中的前 31 位表示整数的数值；用第 32 位（符号位）表示整数的符号，0 表示正数，1 表示负数。</li>
        <li>
          正数以二进制格式存储。前 31 位中的每一位都表示 2 的幂，从第 1 位（位 0）开始，表示 2
          <sup>0</sup>；第 2 位（位 1）表示 2
          <sup>1</sup>。
          没用到的位用 0 填充，即忽略不计。
        </li>
        <li>
          负数以二进制补码格式存储。计算一个负数的二进制补码需要经过以下步骤：
          <ul class="menu">
            <li>先求这个负数绝对值的二进制码。</li>
            <li>再求这个二进制码的反码（即：1 变为 0，0 变为 1）。</li>
            <li>将得到的二进制反码加 1。</li>
          </ul>
        </li>
      </ul>
      <div v-highlight>
        <pre>
          <code>
            // 正数18
            (0)000 0000 0000 0000 0000 0000 0001 0010 // 二进制码
            2<sup>4</sup>*1 + 2<sup>3</sup>*0 + 2<sup>2</sup>*0 + 2<sup>1</sup>*1 + 2<sup>0</sup>*0 = 18

            // 负数-18
            (0)000 0000 0000 0000 0000 0000 0001 0010 // 二进制码
            (1)111 1111 1111 1111 1111 1111 1110 1101 // 二进制反码
            (1)111 1111 1111 1111 1111 1111 1110 1110 // 二进制反码+1

            var num = 18
            num.toString(2) => "10010"

            // 在转换负数过程中会将二进制补码以更合乎逻辑的形式展示出来
            var num = -18
            num.toString(2) => "-10010"
          </code>
        </pre>
      </div>
    </Card>
    <Card shadow style="width:600px">
      <h3 slot="title">2.1按位非</h3>
      <ul class="menu">
        <li>在 ECMAScript 中，对数值应用位操作符时，64 位数值先被转换为 32 位，然后执行位操作，最后再将 32 位结果转回 64 位。</li>
        <li>在对 NaN 和 Infinity 值应用位操作符时，这两个值都会被当做 0 来处理。</li>
        <li>在对非数值应用位操作符时，先使用 Number() 函数将该值转换为一个数值（后台自动完成）。</li>
      </ul>
      <hr style="margin: 15px 0" />
      <div>
        <ul class="menu">
          <li>按位非：由一个波浪线表示（~）</li>
          <li>按位非操作符只有一个操作数，因此它是一个一元操作符。</li>
          <li>在对数值应用按位非操作符时，返回数值的反码。</li>
          <li>按位非的本质：就是其操作数的负值减 1。</li>
        </ul>
        <div v-highlight>
          <pre>
              <code>
                // 当做 0 处理
                var num1 = NaN
                var num2 = Infinity
                var num3 = "hi"

                ~num1 => -1
                ~num2 => -1
                ~num3 => -1

                // 对于负值：取绝对值减 1
                var num4 = -10
                ~num4 => |-10| - 1 = 9
              </code>
            </pre>
        </div>
      </div>
    </Card>
    <Card shadow style="width:600px">
      <h3 slot="title">2.2按位与</h3>
      <div>
        <ul class="menu">
          <li>按位与：由一个和号表示（&）</li>
          <li>按位与有两个操作数，因此它是一个二元操作符。</li>
          <li>本质上：就是将两个操作数的二进制码每一位对齐然后执行 AND 操作。</li>
          <li>AND 操作即：1AND1=1、0AND1=0、1AND0=0、0AND0=0。</li>
        </ul>
        <div v-highlight>
          <pre>
            <code>
              0000 0000 0000 0000 0000 0000 0001 1001   // 25
              0000 0000 0000 0000 0000 0000 0000 0011   // 3
              0000 0000 0000 0000 0000 0000 0000 0001   // AND操作
              var num = 25 & 3
              num => 1 // 二进制码"1"
            </code>
          </pre>
        </div>
      </div>
    </Card>
    <Card shadow style="width:660px">
      <h3 slot="title">2.3按位或</h3>
      <div>
        <ul class="menu">
          <li>按位或：由一个竖线表示（|）。</li>
          <li>按位或有两个操作数，因此它是一个二元操作符。</li>
          <li>本质上：就是将两个操作数的二进制码每一位对齐然后执行 OR 操作。</li>
          <li>OR 操作即：1OR1=1、0OR1=1、1OR0=1、0OR0=0。</li>
        </ul>
        <div v-highlight>
          <pre>
              <code>
                0000 0000 0000 0000 0000 0000 0001 1001   // 25
                0000 0000 0000 0000 0000 0000 0000 0011   // 3
                0000 0000 0000 0000 0000 0000 0001 1011   // OR操作
                var num = 25 | 3
                num => 27 // 二进制码"11011"

                //按位异或：由一个插入表示（^）
                //本质上就是将两个操作数的二进制码每一位对齐然后执行XOR操作
                //XOR操作即：1XOR1=0、0OR1=1、1OR0=1、0XOR0=0
                0000 0000 0000 0000 0000 0000 0001 1001   //25的二进制码
                0000 0000 0000 0000 0000 0000 0000 0011   //3的二进制码
                0000 0000 0000 0000 0000 0000 0001 1010   //XOR操作
                var num = 25 ^ 3
                num => 26 // 二进制码"11010"
              </code>
            </pre>
        </div>
      </div>
    </Card>
    <Card shadow style="width:660px">
      <h3 slot="title">2.4按位异或</h3>
      <div>
        <ul class="menu">
          <li>按位异或：由一个插入表示（^）。</li>
          <li>按位异或有两个操作数，因此它是一个二元操作符。</li>
          <li>本质上：就是将两个操作数的二进制码每一位对齐然后执行 XOR 操作。</li>
          <li>XOR 操作即：1XOR1=0、0OR1=1、1OR0=1、0XOR0=0。</li>
        </ul>
        <div v-highlight>
          <pre>
              <code>
                0000 0000 0000 0000 0000 0000 0001 1001   // 25
                0000 0000 0000 0000 0000 0000 0000 0011   // 3
                0000 0000 0000 0000 0000 0000 0001 1010   // XOR操作
                var num = 25 ^ 3
                num => 26 // 二进制码"11010"
              </code>
            </pre>
        </div>
      </div>
    </Card>
    <Card shadow style="width:600px">
      <h3 slot="title">3.1左移</h3>
      <ul class="menu">
        <li>左移：由两个小于号表示（&lt;&lt;）</li>
        <li>将数值的二进制码向左移动 n 位，右侧多出空位用 0 填充。</li>
        <li>左移不会影响符号位。</li>
      </ul>
      <div v-highlight>
        <pre>
          <code>
            (0)000 0000 0000 0000 0000 0000 0001 1001   // 25
            (0)000 0000 0000 0000 0000 0000 1100 1000   // 左移3位

            var num1 = 25 &lt;&lt; 3
            num1 => 200

            var num2 = -25 &lt;&lt; 3
            num2 => -200
          </code>
        </pre>
      </div>
    </Card>
    <Card shadow style="width:600px">
      <h3 slot="title">3.2有符号右移</h3>
      <ul class="menu">
        <li>有符号右移：由两个大于号表示（>>）</li>
        <li>将数值的二进制码向右移动 n 位。左侧空位以符号位的值来填充。</li>
        <li>对于负数有符号右移（其结果本质上是正数的负值减 1）。</li>
      </ul>
      <div v-highlight>
        <pre>
          <code>
            (0)000 0000 0000 0000 0000 0000 0001 1001   // 25
            (0)000 0000 0000 0000 0000 0000 0000 0110   // 右移2位

            var num1 = 25 >> 2
            num1 => 6

            var num2 = -25 >> 2
            num2 => -7
          </code>
        </pre>
      </div>
    </Card>
    <Card shadow style="width:600px">
      <h3 slot="title">3.3无符号右移</h3>
      <ul class="menu">
        <li>无符号右移：由三个大于号表示（>>>）</li>
        <li>将数值的二进制码向右移动 n 位。左侧空位以符号位的值来填充。</li>
        <li>对于负数无符号右移会把负数的二进制码当成正数的二进制码。</li>
      </ul>
      <div v-highlight>
        <pre>
          <code>
            (0)000 0000 0000 0000 0000 0000 0001 1001   // 25
            (0)000 0000 0000 0000 0000 0000 0000 0110   // 右移2位

            var num1 = 25 >>> 2
            num1 => 6

            var num2 = -25 >>> 2
            num2 => 1073741817
          </code>
        </pre>
      </div>
    </Card>
  </div>
</template>

<script>
import { Card } from 'view-design'

export default {
  name: 'operator-2',
  components: {
    Card
  }
}
</script>

<style scoped lang="stylus">
.operator-2
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
