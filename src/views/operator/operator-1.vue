<template>
  <div class="operator-1">
    <Card shadow style="width:450px">
      <h3 slot="title">1.递增递减运算符</h3>
      <div>
        <p>对于数值进行加减 1 的操作。对于非数值，先将操作数转为数值，在进行加减 1 的操作。</p>
        <div v-highlight>
          <pre>
            <code>
              // 后增量
              var num1 = 10
              var num2 = num1++ + 10
              num2 => 20
              num1 => 11

              // 前增量
              var num1 = 10
              var num2 = ++num1 + 10
              num2 => 21
              num1 => 11

              // 对于非数值
              var num1 = false
              var num2 = ++num1 + 10
              num2  => 11
              num1  => 1
            </code>
          </pre>
        </div>
      </div>
    </Card>
    <Card shadow style="width:450px">
      <h3 slot="title">2.一元加减运算符</h3>
      <div>
        <p>一元加减运算符在数值面前，对数值不会产生任何影响（一元减运算符表示负数）。对于非数值时，一元加减运算符会先像 Number() 函数一样对这个值进行数值转换。</p>
        <div v-highlight>
          <pre>
            <code>
              // 对于非数值
              var num = "001"
              +num  => 1

              +true => 1
              -true => -1
            </code>
          </pre>
        </div>
      </div>
    </Card>
    <Card shadow style="width:500px">
      <h3 slot="title">3.乘性运算符</h3>
      <p>乘性运算符包括：乘法、除法和求模（余数）。</p>
      <ul class="menu">
        <li>两个操作数都是数值，执行常规的乘法/除法/求模的计算。</li>
        <li>若有一个不是数值， 则后台调用 Number() 将其转换为数值，再执行常规的计算。</li>
        <li>对于特殊值 0、NaN 和 Infinity 特殊值的计算。</li>
      </ul>
      <div>
        <div v-highlight>
          <pre>
            <code>
              10 * 10  => 100
              10 / 10  => 1
              10 % 10  => 0
            </code>
          </pre>
        </div>
      </div>
    </Card>
    <Card shadow style="width:650px">
      <h3 slot="title">4.加性运算符</h3>
      <p>乘性运算符包括：加法和减法。</p>
      <ul class="menu">
        <li>两个操作数都是数值，执行常规的加法/减法的计算。</li>
        <li>
          加法：（字符串优先级最高）
          <ul class="menu">
            <li>两个操作数都是字符串，则将两个操作数拼接起来。</li>
            <li>若有一个操作数是字符串，则将另一个操作数转换为字符串，再拼接起来。</li>
            <li>若有一个操作数是对象、数值或布尔值，则调用它们的 toString() 方法。</li>
            <li>而对于 undefined 和 null，则调用 String() 方法。</li>
          </ul>
        </li>
        <li>
          减法：（数字值优先级最高）
          <ul class="menu">
            <li>两个操作数都是数值，执行常规的减法计算。</li>
            <li>若有一个操作数是字符串、布尔值、undefined 或 null，则调用 Number() 函数进行转换，再执行常规的减法计算。</li>
            <li>若有一个操作数是对象，则调用对象的 valueOf() 方法，取得表示该对象的数值，再执行常规的减法计算。</li>
          </ul>
        </li>
      </ul>
      <div>
        <div v-highlight>
          <pre>
            <code>
              // 加法（字符串优先级最高）
              var num1 = "5" + 5 + true
              num1 => "55true"

              // 减法（数字值优先级最高）
              var num2 = "5" - 5 + true
              num2 => 1
            </code>
          </pre>
        </div>
      </div>
    </Card>
    <Card shadow style="width:600px">
      <h3 slot="title">5.比较运算符</h3>
      <p>比较运算符包含：小于（&lt;）、大于（>）、小于等于（&lt;=）和大于等于（>=）。这几个运算符都返回一个布尔值。</p>
      <ul class="menu">
        <li>若两个操作数都是数值，则执行数值比较。</li>
        <li>若两各个操作数都是字符串，则比较两个字符串对应的字符编码值。</li>
        <li>若一个操作数是数值，则将另一个操作数转换成数值，再进行比较。</li>
        <li>若一个操作数是布尔值，则先将其转换为数值，再进行比较。</li>
        <li>若一个操作数是对象，则调用对象的 valueOf() 方法取得数值结果，再进行比较。</li>
      </ul>
      <div>
        <div v-highlight>
          <pre>
            <code>
              // 数值优先级最高
              100 > "201" => false

              2 > true => true
            </code>
          </pre>
        </div>
      </div>
    </Card>
    <Card shadow style="width:600px">
      <h3 slot="title">6.相等运算符</h3>
      <p>
        相等运算符包含：相等（==）、不相等（!=）、全等（===）和不全等（!==）。这几个运算符都返回一个布尔值。在进行相等和不相等运算时，这两个操作符都会先转换操作数，然后再
        比较它们的相等性。（全等和不全等则不会进行转换）。
      </p>
      <div>
        <div v-highlight>
          <pre>
            <code>
              undefined == null => true
              undefined === null => false

              undefined == 0 => false
              null == 0      => false

              NaN == NaN => false
              NaN != NaN => false

              false == 0 => true
              true == 1  => true

              undefined === null => false
            </code>
          </pre>
        </div>
      </div>
    </Card>
    <Card shadow style="width:550px">
      <h3 slot="title">7.赋值运算符</h3>
      <p>赋值运算符由一个等号（=）表示。在其前面添加乘性运算符、加性运算符或位运算符都可以完成复合运算符操作。</p>
      <div>
        <div v-highlight>
          <pre>
              <code>
                var num = 10
                num+= 2
                num => 12
              </code>
            </pre>
        </div>
      </div>
    </Card>
    <Card shadow style="width:550px">
      <h3 slot="title">8.1逻辑运算符 - 逻辑非</h3>
      <ul class="menu">
        <li>逻辑非：由一个感叹号（!）表示。</li>
        <li>逻辑非的操作数只有一个，因此它是一个一元操作符。</li>
        <li>逻辑非先将其操作数转换为一个布尔值，然后再进行求反。</li>
        <li>应用两个逻辑非，最终结果与调用 Boolean() 函数相同。</li>
      </ul>
      <div>
        <div v-highlight>
          <pre>
            <code>
              !""    => true
              !false => true
              !0 =>  => true
              !12345 => false

              !!""    => false
              !!false => false
            </code>
          </pre>
        </div>
      </div>
    </Card>
    <Card shadow style="width:750px">
      <h3 slot="title">8.2逻辑运算符 - 逻辑与</h3>
      <ul class="menu">
        <li>逻辑与：由两个和号（&&）表示。</li>
        <li>逻辑与的操作数有两个，因此它是一个二元操作符。</li>
        <li>若两个操作数都是布尔值，则遵循：有一个操作数为 false，则结果为 false。</li>
        <li>
          若有一个操作数不是布尔值，则遵循：
          <ul class="menu">
            <li>若第一个操作符求值结果为 true，那么结果将直接返回第二个操作数。</li>
            <li>若第一个操作符求值结果为 false，则不会再对第二个操作数求值，结果返回第一个操作数。</li>
          </ul>
        </li>
      </ul>
      <div>
        <div v-highlight>
          <pre>
              <code>
                // 第一个操作符求值结果为 true
                // 直接返回第二个操作数
                true && false      => false
                1 && null          => null
                "1" && undefined   => undefined
                {} && 0            => 0

                // 第一个操作符求值结果为 false
                // 不会再对第二个操作数求值，结果返回第一个操作数
                false && num       => false
                NaN && num         => NaN
                null && num        => null
                undefined && num   => undefined
                0 && num           => 0
                "" && num          => ""
              </code>
            </pre>
        </div>
      </div>
    </Card>
    <Card shadow style="width:750px">
      <h3 slot="title">8.3逻辑运算符 - 逻辑或</h3>
      <ul class="menu">
        <li>逻辑或：由两个竖线号（||）表示。</li>
        <li>逻辑或的操作数有两个，因此它是一个二元操作符。</li>
        <li>若两个操作数都是布尔值，则遵循：有一个操作数为 true，则结果为 true。</li>
        <li>
          若有一个操作数不是布尔值，则遵循：
          <ul class="menu">
            <li>若第一个操作符求值结果为 true，则不会再对第二个操作数求值，结果返回第一个操作数。</li>
            <li>若第一个操作符求值结果为 false，那么结果将直接返回第二个操作数。</li>
          </ul>
        </li>
      </ul>
      <div>
        <div v-highlight>
          <pre>
              <code>
                // 第一个操作符求值结果为 true
                // 不会再对第二个操作数求值，结果返回第一个操作数
                true || num        => true
                1 && num           => 1
                "1" && num         => "1"
                {} && num          => {}

                // 若第一个操作符求值结果为 false
                // 结果将直接返回第二个操作数
                false && true      => true
                NaN && 1           => 1
                null && "1"        => "1"
                undefined && {}    => {}
              </code>
            </pre>
        </div>
      </div>
    </Card>
    <Card shadow style="width:480px">
      <h3 slot="title">9.逗号运算符</h3>
      <p>逗号运算符可以在一条语句中执行多个操作。逗号运算符还可以用于赋值。</p>
      <div>
        <div v-highlight>
          <pre>
              <code>
                // 用于声明多个变量
                var num1 = 1, num2 = 2, num3 = 3;

                // 用于赋值
                // 返回表达式中的最后一项
                var num4 = (1, 2, 3, 4, 5)
                num4 => 5
              </code>
            </pre>
        </div>
      </div>
    </Card>
    <Card shadow style="width:700px">
      <h3 slot="title">10.void操作符</h3>
      <ul class="menu">
        <li>void 关键字是 javascript 当中非常重要的关键字。</li>
        <li>void() 执行括号里的表达式，多个表达式用逗号分隔</li>
        <li>void() 没有返回值。</li>
      </ul>
      <div>
        <div v-highlight>
          <pre>
              <code>
                // 用在 HTML 代码中
                &lt;a href="javascript:void(0);">单击此处什么都不会发生&lt;/a>
                &lt;a href="javascript:void(alert('hello world!'))">...&lt;/a>
                &lt;a href="javascript:void(console.log('hi'))">...&lt;/a>
              </code>
            </pre>
        </div>
        <div v-highlight>
          <pre>
              <code>
                var a, b, c, d;
                a = void(b = 2, c = 3);

                a => undefiend
                b => 2
                c => 3
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
  name: 'operator-1',
  components: {
    Card
  }
}
</script>

<style scoped lang="stylus">
.operator-1
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
