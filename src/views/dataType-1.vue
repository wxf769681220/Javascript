<template>
  <div class="dataType-1">
    <div class="layout-content">
      <Card dis-hover shadow style="width:auto">
        <h3 slot="title">1.数据类型转换表</h3>
        <div>
          <table class="table-bordered">
            <thead>
              <tr class="bg-gray">
                <th>值</th>
                <th>字符串</th>
                <th>数字</th>
                <th>布尔值</th>
                <th>对象</th>
              </tr>
            </thead>
            <tbody>
              <tr class="bg-1">
                <td>undefined</td>
                <td>"undefined"</td>
                <td>NaN</td>
                <td>false</td>
                <td>Error</td>
              </tr>
              <tr class="bg-1">
                <td>null</td>
                <td>"null"</td>
                <td>0</td>
                <td>false</td>
                <td>Error</td>
              </tr>
              <tr class="bg-2">
                <td>true</td>
                <td>"true"</td>
                <td>1</td>
                <td></td>
                <td>new Boolean(true)</td>
              </tr>
              <tr class="bg-2">
                <td>false</td>
                <td>"false"</td>
                <td>0</td>
                <td></td>
                <td>new Boolean(false)</td>
              </tr>
              <tr class="bg-1">
                <td>""(空字符串)</td>
                <td></td>
                <td>0</td>
                <td>false</td>
                <td>new String("")</td>
              </tr>
              <tr class="bg-1">
                <td>"1"(非空，数字)</td>
                <td></td>
                <td>1</td>
                <td>true</td>
                <td>new String("1")</td>
              </tr>
              <tr class="bg-1">
                <td>"hello"(非空，非数字)</td>
                <td></td>
                <td>NaN</td>
                <td>true</td>
                <td>new String("hello")</td>
              </tr>
              <tr class="bg-2">
                <td>0</td>
                <td>"0"</td>
                <td></td>
                <td>false</td>
                <td>new Number(0)</td>
              </tr>
              <tr class="bg-2">
                <td>-0</td>
                <td>"0"</td>
                <td></td>
                <td>false</td>
                <td>new Number(-0)</td>
              </tr>
              <tr class="bg-2">
                <td>NaN</td>
                <td>"NaN"</td>
                <td></td>
                <td>false</td>
                <td>new Number(NaN)</td>
              </tr>
              <tr class="bg-2">
                <td>Infinity</td>
                <td>"Infinity"</td>
                <td></td>
                <td>true</td>
                <td>new Number(Infinity)</td>
              </tr>
              <tr class="bg-2">
                <td>-Infinity</td>
                <td>"-Infinity"</td>
                <td></td>
                <td>true</td>
                <td>new Number(-Infinity)</td>
              </tr>
              <tr class="bg-2">
                <td>1(数字，非零)</td>
                <td>"1"</td>
                <td></td>
                <td>true</td>
                <td>new Number(1)</td>
              </tr>
              <tr class="bg-1">
                <td>{}(任何对象)</td>
                <td></td>
                <td></td>
                <td>true</td>
                <td></td>
              </tr>
              <tr class="bg-1">
                <td>[](任何数组)</td>
                <td>" "</td>
                <td>0</td>
                <td>true</td>
                <td></td>
              </tr>
              <tr class="bg-1">
                <td>[1](1个数字元素)</td>
                <td>"1"</td>
                <td>1</td>
                <td>true</td>
                <td></td>
              </tr>
              <tr class="bg-1">
                <td>['a'](1个字符串元素)</td>
                <td></td>
                <td>NaN</td>
                <td>true</td>
                <td></td>
              </tr>
              <tr class="bg-1">
                <td>function(){}(任何函数)</td>
                <td></td>
                <td>NaN</td>
                <td>true</td>
                <td></td>
              </tr>
            </tbody>
          </table>
        </div>
      </Card>
      <Card :dis-hover="true" shadow style="width:450px">
        <h3 slot="title">2.显示类型转换</h3>
        <div>
          <p>显示类型最简单的方法：Boolean()、Number()、String()或Object()函数。</p>
          <div v-highlight>
            <pre>
              <code>
                Boolean("")   => false
                Number(false) => 0
                String(null)  => 'null'

                //Object根据传入的参数类型决定
                Object(false) => new Boolean(false)
                Object('')    => new String('')
                Object(1)     => new Number(1)
                Object({})    => new Object()
              </code>
            </pre>
          </div>
          <p>除了null和undefined之外的任何值都具有toString()方法。这个方法通常与String()方法返回相同的结果。</p>
        </div>
      </Card>
      <Card :dis-hover="true" shadow style="width:700px">
        <h3 slot="title">3.字符串转数字值</h3>
        <div>
          <p>
            parseInt()函数在转换字符串时，更多是看其是否符合数值模式。它忽略字符串前面的空格，直到找到第一个非空格字符。若第一个字符不是正负号或数字字符，则返回NaN；
            若第一个字符是正负号或数字字符，则继续向后解析第二个字符，直到解析完所有字符或遇到一个非数字字符。
          </p>
          <div v-highlight>
            <pre>
              <code>
                  parseInt("  1")  =>1
                  parseInt("  -1")  =>-1
                  parseInt("A1234")  =>NaN
                  parseInt("1234A0000")  =>1234

                  //可以识别各种整数格式
                  parseInt("70")   =>十进制70
                  parseInt("070")  =>八进制70（ECMAScript3 =>56，而ECMAScript5 =>70）
                  parseInt("0xf")  =>十六进制15

                  //带有第二个参数，表示以多少进制转换，为了正确转换，传入这个参数很有必要
                  parseInt("1", 10)    =>十进制1
                  parseInt("10", 2)    =>二进制2
                  parseInt("070", 8)   =>八进制56
                  parseInt("0xf", 16)  =>十六进制15
              </code>
            </pre>
          </div>
          <p>
            parseFloat()函数用于浮点格式的字符串转换。它从第一个字符开始解析每一个字符，直到遇见一个无效的浮点数字字符为止，
            也就是第一个小数点有效，第二个小数点就无效了，后面的字符串将被忽略。它忽略字符串前导空格和零，因此以0为开头的十六进制格式的字符串始终返回0；
            parseFloat()函数只会解析十进制值，因此它没有第二个参数。若parseFloat()函数解析一个整数，则返回整数。
          </p>
          <div v-highlight>
            <pre>
              <code>
                parseFloat("  0001.1")    =>1.1
                parseFloat("0xA")    =>0
                parseFloat("10.123.456")    =>10.123
                parseFloat("1.234e7")    =>12340000
              </code>
            </pre>
          </div>
        </div>
      </Card>
      <Card :dis-hover="true" shadow style="width:700px">
        <h3 slot="title">4.数字值转字符串</h3>
        <div>
          <ol class="menu">
            <li>toString()方法：除了null和undefined之外，任何其他值都有toString()方法。它接收一个参数，表示输出数值的基数。</li>
            <li>toFixed()方法：指定小数点后的位数，将数字转为字符串。</li>
            <li>toExponential()方法：使用科学计数法，将数字转为字符串。它接收一个参数来指定小数点后的位数。</li>
            <li>toPrecision()方法：指定有效数字位数，将数字转为字符串。若有效数字位数小于数字整数部分的位数，则使用指数形式；若有效数字位数大于数字整数部分的位数，则用零在小数位补位。</li>
            <li>以上三个方法都会适当地进行四舍五入或填充零。</li>
          </ol>
          <div v-highlight>
            <pre>
              <code>
                  var n = 123456.789

                  n.toString(10)  =>10进制数值"123456.789"

                  n.toFixed(0)  =>"123457"
                  n.toFixed(2)  =>"123456.79"
                  n.toFixed(5)  =>"123456.78900"

                  n.toExponential(1)  =>"1.2e+5"
                  n.toExponential(7)  =>"1.2345679e+5"

                  n.toPrecision(4)  =>"1.235e+5"
                  n.toPrecision(7)  =>"123456.8"
                  n.toPrecision(10)  =>"123456.7890"
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
  name: 'dataType-1',
  created() {},
  components: {
    Card
  }
}
</script>

<style scoped lang="stylus">
.dataType-1
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
