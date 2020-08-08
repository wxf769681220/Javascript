<template>
  <div class="reference-type-3">
    <Card shadow style="width:550px">
      <h3 slot="title">1.基本包装类型</h3>
      <p>创建基本包装对象：</p>
      <ul class="menu">
        <li>调用 String 构造函数并传入字符串。</li>
        <li>调用 Number 构造函数并传入数字值。</li>
        <li>调用 Boolean 构造函数并传入布尔值。</li>
      </ul>
      <div v-highlight>
        <pre>
          <code>
            var x = new String('10')
            var y = new Number(10)
            var z = new Boolean(false)

            x instanceof String  => true
            y instanceof Number  => true
            z instanceof Boolean => true

            x instanceof Object  => true
            y instanceof Object  => true
            z instanceof Object  => true
          </code>
        </pre>
      </div>
    </Card>
    <Card shadow style="width:500px">
      <h3 slot="title">2.String 对象</h3>
      <p>String 对象是一个类数组对象。</p>
      <div v-highlight>
        <pre>
          <code>
            var x = new String('one')

            x => {
              0: 'o',
              1: 'n',
              2: 'e',
              length: 3
            }
          </code>
        </pre>
      </div>
    </Card>
    <Card shadow style="width:500px">
      <h3 slot="title">3.1.charAt()和charCodeAt()方法</h3>
      <p>charAt() 和 charCodeAt() 方法都用于访问字符串中特定的字符。这两个方法都接收一个参数，即基于 0 的字符位置。</p>
      <div v-highlight>
        <pre>
          <code>
            var x = 'hello world'

            // 字符串第一个字符
            x.charAt(0) => 'h'
            x[0] => 'h'

            // 字符串最后一个字符
            x.charAt(x.length-1) => 'd'

            // 输出字符编码
            x.charCodeAt(0) => 104

            // 与charCodeAt()执行相反的操作
            x.fromCharCode(104) => 'h'
          </code>
        </pre>
      </div>
    </Card>
    <Card shadow style="width:500px">
      <h3 slot="title">3.2.indexOf()方法</h3>
      <p>indexOf()方法：返回某个指定的字符串值在字符串中首次出现的位置。如果要检索的字符串值没有出现，则该方法返回 -1。</p>
      <div v-highlight>
        <pre>
          <code>
            var str="Hello world!"
            str.indexOf("Hello") => 0
            str.indexOf("hi") => -1
          </code>
        </pre>
      </div>
    </Card>
    <Card shadow style="width:500px">
      <h3 slot="title">3.3.concat()方法</h3>
      <p>concat()方法用于拼接字符串，返回拼接得到的新字符串。实践中跟多使用加号操作符。</p>
      <div v-highlight>
        <pre>
          <code>
            var x = 'hello '

            x.concat('world', '!') => 'hello world!'

            x + 'world' => 'hello world'
          </code>
        </pre>
      </div>
    </Card>
    <Card shadow style="width:950px">
      <h3 slot="title">3.4.slice()、substr()和substring()方法</h3>
      <p>slice()、substr()和substring()方法：这三个方法都返回被操作字符串的一个子字符串。它们都接收一个或两个参数。第一个参数表示：起始位置，第二个参数表示：结束位置，
        substr()第二个参数表示：返回字符的个数。</p>
      <div v-highlight>
        <pre>
          <code>
            var x = 'hello world'

            x.slice()  => 'hello world' // 一次深复制
            x.slice(1) => 'ello world'  // 到结尾
            x.slice(1,3) => 'el'        // 左闭右开区间

            x.substr() => 'hello world' // 一次深复制
            x.substr(1) => 'ello world' // 到结尾
            x.substr(1,3) => 'ell'      // 返回字符个数

            x.substring() => 'hello world' // 一次深复制
            x.substring(1) => 'ello world' // 到结尾
            x.substring(1,3) => 'el'       // 左闭右开区间

            /**
             * 参数为负值
             * slice()：字符串长度+负值（始终要确保第二个参数大于第一个参数）
             * substr()：第一个参数是负值 + 字符串长度；若第一个参数为负值，则第二个参数不能是负值
             * substring()：两个参数不能都是负值；若只有一个参数且负值，则返回整个字符串。两个参数时，负值转为0
             */
          </code>
        </pre>
      </div>
    </Card>
    <Card shadow style="width:500px">
      <h3 slot="title">3.5.split()方法</h3>
       <p>split()方法，以指定字符分隔字符串，返回由分隔的各部分组成的数组。</p>
      <div v-highlight>
        <pre>
          <code>
            var qs = 'x=1&y=2&z=3'
            qs.split('&') => ['x=1', 'y=2', 'z=3']

            var str = '1010101'
            str.split('0') => ['1', '1', '1', '1']

            var blank = 'a b c'
            blank.split(/\s+/) => ['a', 'b', 'c']
          </code>
        </pre>
      </div>
    </Card>
    <Card shadow style="width:500px">
      <h3 slot="title">3.6.toUpperCase() 和 toLowerCase() 方法</h3>
      <p>字符串大小写转换。</p>
      <div v-highlight>
        <pre>
          <code>
            var x = 'hEllo woRld'

            x.toUpperCase() => 'HELLO WORLD'
            x.toLocaleUpperCase() => 'HELLO WORLD'

            x.toLowerCase() => 'hello world'
            x.toLocaleLowerCase() => 'hello world'
          </code>
        </pre>
      </div>
    </Card>
    <Card shadow style="width:900px">
      <h3 slot="title">3.7.localeCompare() 方法</h3>
      <p>localeCompare()方法用于比较两个字符串，它将返回下列值：
        <ul class="menu">
          <li>字符串在字母表中排在字符串参数之前，则返回一个负值（多数情况为 -1）。</li>
          <li>字符串等于字符串参数，返回 0。</li>
          <li>字符串在字母表中排在字符串参数之后，则返回一个正数（多数情况为 1）</li>
        </ul>
      </p>
      <div v-highlight>
        <pre>
          <code>
            var b = 'B'

            // 字母表排序：aAbBcC~zZ
            b.localeCompare('A') => 1
            b.localeCompare('B') => 0
            b.localeCompare('C') => -1

            // 常用函数
            function determinOrder(str1, str2) {
              var res = str1.localeCompare(str2)
              if (res &lt; 0) {
                console.log(str1 + '排在' + str2 + "之前!")
              } else if (res > 0) {
                console.log(str1 + '排在' + str2 + "之后!")
              } else {
                console.log(str1 + '与' + str2 + "相同!")
              }
            }

            determinOrder('B', 'A')
            determinOrder('B', 'B')
            determinOrder('B', 'C')
          </code>
        </pre>
      </div>
    </Card>
  </div>
</template>

<script>
import { Card } from 'view-design'

export default {
  name: 'reference-type-3',
  components: {
    Card
  }
}
</script>

<style scoped lang="stylus">
.reference-type-3
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
