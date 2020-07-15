<template>
  <div class="operator-1">
    <div class="layout-content">
      <Card dis-hover shadow style="width:400px">
        <h3 slot="title">1.递增递减运算符</h3>
        <div>
          <p>对于数值进行加减1的操作。对于非数值，先将操作数转为数值，在进行加减1的操作。</p>
          <div v-highlight>
            <pre>
              <code>
                //后增量
                var num1 = 10
                var num2 = num1++ + 10
                num2 => 20
                num1 => 11

                //前增量
                var num1 = 10
                var num2 = ++num1 + 10
                num2 => 21
                num1 => 11

                //非数值
                var num1 = false
                var num2 = ++num1 + 10
                num2  => 11
                num1  => 1
              </code>
            </pre>
          </div>
          <p>在一条语句中，同一个变量同时出现多个递增或递减运算符的情况。</p>
          <div v-highlight>
            <pre>
              <code>
                var i,k;
                i = 3;
                k = i++ + i++;

                k => 7 （3+(3+1)）
                i => 5

                /****************/
                var i,k;
                i = 3;
                k = i++ + i;

                k => 7（3+(3+1)）
                i => 4
              </code>
            </pre>
          </div>
        </div>
      </Card>
      <Card dis-hover shadow style="width:400px">
        <h3 slot="title">2.一元加减运算符</h3>
        <div>
          <p>一元加减运算符在数值面前，对数值不会产生任何影响（一元减运算符表示负数）。对于非数值时，一元加减运算符会先像Number()函数一样对这个值进行数值转换。</p>
          <div v-highlight>
            <pre>
              <code>
                var num = "001"
                +num  => 1

                +true => 1
                -true => -1
              </code>
            </pre>
          </div>
        </div>
      </Card>
      <Card dis-hover shadow style="width:600px">
        <h3 slot="title">3.乘性运算符</h3>
        <p>乘性运算符包括：乘法、除法和求模（余数）。</p>
        <div>
          <div v-highlight>
            <pre>
              <code>
                //乘法
                //1.两个操作数都是数值,执行常规的乘法计算
                //2.若有一个不是数值,则后台调用Number()将其转换为数值
                //3.特殊值NaN、0和Infinity

                10 * "010" => 100
                10 * true  => 10
                10 * NaN   => NaN

                //除法
                //1.两个操作数都是数值,执行常规的除法计算
                //2.若有一个不是数值,则后台调用Number()将其转换为数值
                //3.特殊值NaN、0和Infinity

                10 / "010"  => 1
                10 / true   => 10
                10 / false  => Infinity
                10 /  NaN   => NaN

                //余数
                //1.两个操作数都是数值,执行常规的除法计算,返回得到的余数
                //2.若有一个不是数值,则后台调用Number()将其转换为数值
                //3.特殊值NaN、0和Infinity

                10 % "4"    => 2
                10 % true   => 0
                10 %  NaN   => NaN
              </code>
            </pre>
          </div>
        </div>
      </Card>
      <Card dis-hover shadow style="width:700px">
        <h3 slot="title">4.加性运算符</h3>
        <p>乘性运算符包括：加法和减法。</p>
        <div>
          <div v-highlight>
            <pre>
              <code>
                //加法
                //1.两个操作数都是数值,执行常规的加法计算
                //2.两个操作数都是字符串,则将两个操作数拼接起来
                //3.若有一个操作数是字符串,则将另一个操作数转换为字符串,再拼接起来
                //4.若有一个操作数是对象、数值或布尔值，则调用它们的toString()方法
                //5.对于undefined和null，则调用String()方法

                var num = "5" + 5 + 5
                num => "555"

                //减法
                //1.两个操作数都是数值,执行常规的减法计算
                //2.若有一个操作数是字符串、布尔值、undefined或null,则调用Number()函数
                //转换为数值，再执行常规的减法计算
                //3.若有一个操作数是对象,则调用对象的valueOf()方法,取得表示该对象的数值

                5 - true       => 4
                5 - ""         => 5
                5 - null       => 5
                5 - undefiend  => NaN
              </code>
            </pre>
          </div>
        </div>
      </Card>
      <Card dis-hover shadow style="width:600px">
        <h3 slot="title">5.1位操作符</h3>
        <div>
          <ul class="menu">
            <li>ECMAScript整数有两种类型，即有符号整数（包含正数和负数）和无符号整数（只包含正数）。</li>
            <li>对于有符号整数，32位中的前31位表示整数的数值；用第32位（符号位）表示整数的符号，0表示正数，1表示负数。</li>
            <li>
              正数以二进制格式存储。前31位中的每一位都表示2的幂，从第1位（位0）开始，表示2
              <sup>0</sup>；第2位（位1）表示2
              <sup>1</sup>。没用到的位用0填充，即忽略不计。
            </li>
            <li>
              负数以二进制补码格式存储。计算一个负数的二进制补码需要经过以下步骤：
              <ul class="menu">
                <li>先求这个负数绝对值的二进制码。</li>
                <li>再求这个二进制码的反码（即：1变为0，0变为1）。</li>
                <li>将得到的二进制反码加1。</li>
              </ul>
            </li>
          </ul>
          <div v-highlight>
            <pre>
              <code>
                //18
                (0)000 0000 0000 0000 0000 0000 0001 0010 //二进制码
                2<sup>4</sup>*1 + 2<sup>3</sup>*0 + 2<sup>2</sup>*0 + 2<sup>1</sup>*1 + 2<sup>0</sup>*0 = 18

                //-18
                (0)000 0000 0000 0000 0000 0000 0001 0010 //二进制码
                (1)111 1111 1111 1111 1111 1111 1110 1101 //二进制反码
                (1)111 1111 1111 1111 1111 1111 1110 1110 //二进制反码+1

                var num = 18
                num.toString(2) => "10010"

                //在转换负数过程中会将二进制补码以更合乎逻辑的形式展示出来
                var num = -18
                num.toString(2) => "-10010"
              </code>
            </pre>
          </div>
        </div>
      </Card>
      <Card dis-hover shadow style="width:600px">
        <h3 slot="title">5.2按位非、按位与、按位或和按位异或</h3>
        <div>
          <ul class="menu">
            <li>在ECMAScript中，对数值应用位操作符时，64位数值先被转换为32位，然后执行位操作，最后再将32位结果转回64位。</li>
            <li>在对NaN和Infinity值应用位操作符时，这两个值都会被当做0来处理。</li>
            <li>在对非数值应用位操作符时，先使用Number()函数将该值转换为一个数值（后台自动完成）。</li>
          </ul>
          <div v-highlight>
            <pre>
              <code>
                //按位非：由一个波浪线表示（~）
                //返回数值的反码，本质上就是操作数的负值减1
                var num0 = 10
                var num1 = NAN
                var num2 = infinity
                var num3 = true
                var num4 = "hellow"
                var num5 = -10

                ~num0 => -11
                ~num1 => -1
                ~num2 => -1
                ~num3 => -2
                ~num4 => -1
                ~num5 => |-10| - 1 = 9

                //按位与：由一个和号表示（&）
                //本质上就是将两个操作数的二进制码每一位对齐然后执行AND操作
                //AND操作即：1AND1=1、0AND1=0、1AND0=0、0AND0=0
                0000 0000 0000 0000 0000 0000 0001 1001   //25的二进制码
                0000 0000 0000 0000 0000 0000 0000 0011   //3的二进制码
                0000 0000 0000 0000 0000 0000 0000 0001   //AND操作
                var num = 25 & 3
                num => 1 //二进制码"1"

                //按位或：由一个竖线表示（|）
                //本质上就是将两个操作数的二进制码每一位对齐然后执行OR操作
                //OR操作即：1OR1=1、0OR1=1、1OR0=1、0OR0=0
                0000 0000 0000 0000 0000 0000 0001 1001   //25的二进制码
                0000 0000 0000 0000 0000 0000 0000 0011   //3的二进制码
                0000 0000 0000 0000 0000 0000 0001 1011   //OR操作
                var num = 25 | 3
                num => 27 //二进制码"11011"

                //按位异或：由一个插入表示（^）
                //本质上就是将两个操作数的二进制码每一位对齐然后执行XOR操作
                //XOR操作即：1XOR1=0、0OR1=1、1OR0=1、0XOR0=0
                0000 0000 0000 0000 0000 0000 0001 1001   //25的二进制码
                0000 0000 0000 0000 0000 0000 0000 0011   //3的二进制码
                0000 0000 0000 0000 0000 0000 0001 1010   //XOR操作
                var num = 25 ^ 3
                num => 26 //二进制码"11010"
              </code>
            </pre>
          </div>
        </div>
      </Card>
      <Card dis-hover shadow style="width:600px">
        <h3 slot="title">5.3左移、有符号左移和无符号右移</h3>
        <div>
          <div v-highlight>
            <pre>
              <code>
                //左移：由两个小于号表示（&lt;&lt;）
                //将数值的二进制码向左移动n位,右侧多出空位用0填充。
                //左移不会影响符号位
                (0)000 0000 0000 0000 0000 0000 0001 1001   //25的二进制码
                (0)000 0000 0000 0000 0000 0000 1100 1000   //左移3位

                var num1 = 25 &lt;&lt; 3
                num1 => 200

                var num2 = -25 &lt;&lt; 3
                num2 => -200

                //有符号右移：由两个大于号表示（>>）
                //将数值的二进制码向右移动n位。左侧空位以符号位的值来填充。
                //对于负数有符号右移（其结果本质上是正数的负值减1）
                (0)000 0000 0000 0000 0000 0000 0001 1001   //25的二进制码
                (0)000 0000 0000 0000 0000 0000 0000 0110   //右移2位

                var num1 = 25 >> 2
                num1 => 6

                var num2 = -25 >> 2
                num2 => -7

                //无符号右移：由三个大于号表示（>>）
                //将数值的二进制码向右移动n位。左侧空位以符号位的值来填充。
                //对于负数无符号右移会把负数的二进制码当成正数的二进制码
                (0)000 0000 0000 0000 0000 0000 0001 1001   //25的二进制码
                (0)000 0000 0000 0000 0000 0000 0000 0110   //右移2位

                var num1 = 25 >>> 2
                num1 => 6

                var num2 = -25 >>> 2
                num2 => 1073741817
              </code>
            </pre>
          </div>
        </div>
      </Card>
      <Card dis-hover shadow style="width:600px">
        <h3 slot="title">6.比较运算符</h3>
        <p>比较运算符包含：小于（&lt;）、大于（>）、小于等于（&lt;=）和大于等于（>=）。这几个运算符都返回一个布尔值。</p>
        <div>
          <div v-highlight>
            <pre>
              <code>
                //1.若两个操作数都是数值,则执行数值比较
                //2.若两各个操作数都是字符串,则比较两个字符串对应的字符编码值
                //3.若一个操作数是数值,则将另一个操作数转换成数值,再进行比较
                //4.若一个操作数是布尔值，则先将其转换为数值，再进行比较
                //5.若一个操作数是对象，则调用对象的valueOf()方法

                "23" &lt; 3 => false
                2 > true  => true
                "apple" > "banana" => false
              </code>
            </pre>
          </div>
        </div>
      </Card>
      <Card dis-hover shadow style="width:600px">
        <h3 slot="title">7.相等运算符</h3>
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
      <Card dis-hover shadow style="width:750px">
        <h3 slot="title">8.逻辑运算符</h3>
        <p>逻辑运算符包含：逻辑非（!）、逻辑与(&&)、逻辑或(||)。</p>
        <div>
          <div v-highlight>
            <pre>
              <code>
                //逻辑非：由一个感叹号（!）表示
                //逻辑非先将其操作数转换为一个布尔值，然后再进行求反
                !""    => true
                !false => true
                !0 =>  => true
                !12345 => false

                !!""    => false //两个逻辑非,最终结果与调用Boolean()函数相同
                !!false => false

                //逻辑与：由两个和号（&&）表示
                //若两个操作数都是布尔值,则遵循：有一个操作数为false,则结果为false
                //若有一个操作数不是布尔值,则遵循：
                //若第一个操作符求值结果为true，那么结果将直接返回第二个操作数
                //若第一个操作符求值结果为false，则不会再对第二个操作数求值，结果返回第一个操作数
                true && false      => false
                1 && null          => null
                "1" && undefined   => undefined
                {} && 0            => 0

                false && num       => false
                NaN && num         => NaN
                null && num        => null
                undefined && num   => undefined
                0 && num           => 0
                "" && num          => ""

                //逻辑或：由两个竖线号（||）表示
                //若两个操作数都是布尔值,则遵循：有一个操作数为true,则结果为true
                //若有一个操作数不是布尔值,则遵循：
                //若第一个操作符求值结果为true，则不会再对第二个操作数求值，结果返回第一个操作数。
                //若第一个操作符求值结果为false，那么结果将直接返回第二个操作数
                true || num        => true
                1 && num           => 1
                "1" && num         => "1"
                {} && num          => {}

                false && true      => true
                NaN && 1           => 1
                null && "1"        => "1"
                undefined && {}    => {}
              </code>
            </pre>
          </div>
        </div>
      </Card>
      <Card dis-hover shadow style="width:400px">
        <h3 slot="title">9.赋值运算符</h3>
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
          <p>解构赋值语法。</p>
          <div v-highlight>
            <pre>
              <code>
                //数组
                var [a, b] = [1, 2]     //等价于 var a = 1, b = 2;
                var [a] = [1, 2]        //等价于 var a = 1;
                var [a, b] = [1]        //等价于 var a = 1, b;
                var [a,] = [1,2]        //等价于 var a = 1;
                var [,b] = [1,2]        //等价于 var b = 2;

                //对象
                var obj = {
                  name: "alex",
                  age: 24
                }

                var { name: x, age: y } = obj;

                x => "alex"
                y => 24
              </code>
            </pre>
          </div>
        </div>
      </Card>
      <Card dis-hover shadow style="width:480px">
        <h3 slot="title">10.逗号运算符</h3>
        <p>逗号运算符可以在一条语句中执行多个操作。逗号运算符还可以用于赋值。</p>
        <div>
          <div v-highlight>
            <pre>
              <code>
                //用于声明多个变量
                var num1 = 1, num2 = 2, num3 = 3;

                //用于赋值
                var num4 = (1, 2, 3, 4, 5)
                num4 => 5 //5是表达式中的最后一项,因此会返回5
              </code>
            </pre>
          </div>
        </div>
      </Card>
      <Card dis-hover shadow style="width:600px">
        <h3 slot="title">11.void操作符</h3>
        <p>void关键字是javascript当中非常重要的关键字，该操作符指定要计算或运行一个表达式，但是不返回值。</p>
        <div>
          <div v-highlight>
            <pre>
              <code>
                //用在HTML代码中
                &lt;a href="javascript:void(0);">单击此处什么都不会发生&lt;/a>
                &lt;a href="javascript:void(alert('hello world!'))">...&lt;/a>
                &lt;a href="javascript:void(console.log('hi'))">...&lt;/a>
              </code>
            </pre>
          </div>
          <div v-highlight>
            <pre>
              <code>
                //void()执行括号里的表达式，多个表达式用逗号分隔
                //void()没有返回值
                var a, b, c, d;
                a = void(b = 2, c = 3);

                a => undefiend
                b => 2
                c => 3
                d => undefiend
              </code>
            </pre>
          </div>
        </div>
      </Card>
      <Card dis-hover shadow style="width:550px">
        <h3 slot="title">12.delete操作符</h3>
        <p>delete操作符常用来删除对象属性。</p>
        <div>
          <div v-highlight>
            <pre>
              <code>
                delete object.property
              </code>
            </pre>
          </div>
          <p>delete操作符不能用来删除全局变量。</p>
          <div v-highlight>
            <pre>
              <code>
                var x = 1
                delete x => false （严格模式下抛出SyntaxError错误）
                x => 1

                //未声明的变量
                //可以看做是定义在window上的y属性，
                //因此可以使用delete删除
                y = 10
                delete y => true （严格模式下抛出SyntaxError错误）
                y => //error
              </code>
            </pre>
          </div>
          <p>delete操作符只能删除实例中属性（包括继承而来的），不能删除原型中的属性。</p>
          <div v-highlight>
            <pre>
              <code>
                function Person() {
                  this.age = 20
                }

                Person.prototype.say = 200

                var p = new Person()

                //实例属性可以被删除
                delete p.age => true
                p.age => undefined

                //原型属性不可以被删除
                delete say => true (注意：这里依然返回的是true)
                p.say => 200

                /*********** 继承属性 ************/
                function Child() {
                  Person.call(this)
                }

                var p = new Child()

                //继承实例属性可以删除
                delete p.age => true
                p.age => undefined

                //原型链继承
                Child.prototype = new Person()

                var p = new Child()

                delete p.age => true
                //注意：实际上实例中的age属性已被删除
                //这里访问的是原型上的同名属性age属性
                p.age => 20

                //继承而来的原型属性不可被删除
                delete say => true
                p.say => 200
              </code>
            </pre>
          </div>
        </div>
      </Card>
      <Card dis-hover shadow style="width:500px">
        <h3 slot="title">13.in操作符</h3>
        <div>
          <p>in操作符可以用于检测对象属性，也可以用于检测数组元素。</p>
          <div v-highlight>
            <pre>
              <code>
                //检测对象上是否存在某个属性
                property in Object

                //检测数组给定的索引位置上是否存在元素
                index in Array
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
  name: 'operator-1',
  created() {},
  components: {
    Card
  }
}
</script>

<style scoped lang="stylus">
.operator-1
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
