<template>
  <div class="dataType-2">
    <Card shadow style="width:620px">
      <h3 slot="title">1.转型函数</h3>
      <div>
        <p>四个最简单的转型函数：Boolean()、Number()、String() 和 Object() 函数。</p>
        <div v-highlight>
          <pre>
              <code>
                String(null)  => 'null'
                Number(false) => 0
                Boolean("")   => false

                /////////////////////////////////////////////

                /**
                 * Object 传入基本类型值
                 * Object 传入特殊值，则返回空对象
                 * Object 传入引用类型值
                 */

                Object('')       // 相当于：new String('')
                Object(0)        // 相当于：new Number(0)
                Object(false)    // 相当于：new Boolean(false)

                Object(undefined)    => {}
                Object(null)         => {}

                Object({})  // 相当于：new Object()
                Object([])  // 相当于：new Array()
              </code>
            </pre>
        </div>
      </div>
    </Card>
    <Card shadow style="width:700px">
      <h3 slot="title">2.字符串转数字值</h3>
      <div>
        <p>
          parseInt() 函数在转换字符串时，更多是看其是否符合数值模式。它忽略字符串前面的空格，直到找到第一个非空格字符。若第一个字符不是正负号或数字字符，则返回 NaN；
          若第一个字符是正负号或数字字符，则继续向后解析第二个字符，直到解析完所有字符或遇到一个非数字字符。
        </p>
        <div v-highlight>
          <pre>
            <code>
              parseInt("  1")        => 1
              parseInt("  -1")       => -1
              parseInt("A1234")      => NaN
              parseInt("1234A0000")  => 1234

              // 可以识别各种整数格式
              parseInt("70")   => 70（十进制）
              parseInt("070")  => 70（ECMAScript5不支持字面量形式的八进制值）
              parseInt("0xf")  => 15（十六进制）

              // 带有第二个参数，表示以多少进制转换，
              // 为了正确转换，传入这个参数很有必要
              parseInt("1", 10)    => 1（十进制）
              parseInt("10", 2)    => 2（二进制）
              parseInt("070", 8)   => 56（强制使用八进制进行转换）
              parseInt("0xf", 16)  => 15（十六进制）
            </code>
            </pre>
        </div>
        <p>
          parseFloat() 函数用于浮点格式的字符串转换。它从第一个字符开始解析每一个字符，直到遇见一个无效的浮点数字字符为止，
          也就是第一个小数点有效，第二个小数点就无效了，后面的字符串将被忽略。它忽略字符串前导空格和零，因此以 0 为开头的十六进制格式的字符串始终返回 0；
          parseFloat() 函数只会解析十进制值，因此它没有第二个参数。若 parseFloat() 函数解析一个整数，则返回整数。
        </p>
        <div v-highlight>
          <pre>
              <code>
                parseFloat("  0001.1")    => 1.1
                parseFloat("0xA")         => 0
                parseFloat("10.123.456")  => 10.123
                parseFloat("1.234e7")     => 12340000
              </code>
            </pre>
        </div>
      </div>
    </Card>
    <Card shadow style="width:700px">
      <h3 slot="title">3.数字值转字符串</h3>
      <div>
        <ol class="menu">
          <li>toString() 方法：除了 null 和 undefined 之外，任何其他值都有 toString() 方法。它接收一个参数，表示输出数值的基数。</li>
          <li>toFixed() 方法：指定小数点后的位数，将数字转为字符串。</li>
          <li>toExponential() 方法：使用科学计数法，将数字转为字符串。它接收一个参数来指定小数点后的位数。</li>
          <li>toPrecision() 方法：指定有效数字位数，将数字转为字符串。若有效数字位数小于数字整数部分的位数，则使用指数形式；若有效数字位数大于数字整数部分的位数，则用零在小数位补位。</li>
          <li>以上三个方法都会适当地进行四舍五入或填充零。</li>
        </ol>
        <div v-highlight>
          <pre>
              <code>
                  var n = 123456.789

                  n.toString(10)  => "123456.789"（以十进制为基数）

                  n.toFixed(0)  => "123457"
                  n.toFixed(2)  => "123456.79"
                  n.toFixed(5)  => "123456.78900"

                  n.toExponential(1)  => "1.2e+5"
                  n.toExponential(7)  => "1.2345679e+5"

                  n.toPrecision(4)  => "1.235e+5"
                  n.toPrecision(7)  => "123456.8"
                  n.toPrecision(10) => "123456.7890"
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
  name: 'dataType-2',
  components: {
    Card
  }
}
</script>

<style scoped lang="stylus">
.dataType-2
  display: flex
  flex-direction: row
  flex-wrap: wrap
  >>>.ivu-card
    display: block
    margin-top: 20px
    margin-right: 20px
    font-size: 16px !important
    color: #000 !important
</style>
