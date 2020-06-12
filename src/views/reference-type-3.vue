<template>
  <div class="reference-type-3">
    <div class="layout-content">
      <Card dis-hover shadow style="width:400px">
        <h3 slot="title">1.Boolean()类型</h3>
        <div>
          <p>创建Boolean对象，可以调用Boolean构造函数并传入true或false。</p>
          <div v-highlight>
            <pre>
              <code>
                var x = new Boolean(false)

                typeof x => Object

                x instanceof Object  => true
                x instanceof Boolean => true
              </code>
            </pre>
          </div>
        </div>
      </Card>
      <Card dis-hover shadow style="width:400px">
        <h3 slot="title">2.Number()类型</h3>
        <div>
          <p>创建Number对象，可以调用Number构造函数并传入数字值或字符串形式的数字值。</p>
          <div v-highlight>
            <pre>
              <code>
                var x = new Number(10)

                typeof x => Object

                x instanceof Object  => true
                x instanceof Number  => true
              </code>
            </pre>
          </div>
        </div>
      </Card>
      <Card dis-hover shadow style="width:400px">
        <h3 slot="title">3.String()类型</h3>
        <div>
          <p>创建String对象，可以调用String构造函数并传入字符串。</p>
          <div v-highlight>
            <pre>
              <code>
                var x = new String('one')

                typeof x => Object

                x instanceof Object  => true
                x instanceof String  => true
              </code>
            </pre>
          </div>
          <p>String对象也是一个类数组对象。</p>
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
        </div>
      </Card>
      <Card dis-hover shadow style="width:900px">
        <h3 slot="title">4.String对象方法</h3>
        <div>
          <p>charAt()和charCodeAt()方法都用于访问字符串中特定的字符。这两个方法都接收一个参数，即基于0的字符位置。</p>
          <div v-highlight>
            <pre>
              <code>
                var x = 'hello world'

                x.charAt(0) => 'h'
                x[0] => 'h' //浏览器支持

                x.charCodeAt(0) => 104     //输出字符编码
                x.fromCharCode(104) => 'h' //与charCodeAt()执行相反的操作

              </code>
            </pre>
          </div>
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
          <p>slice()、substr()和substring()方法：这三个方法都返回被操作字符串的一个子字符串。它们都接收一个或两个参数。第一个参数表示：起始位置，第二个参数表示：结束位置，
            substr()第二个参数表示：返回字符的个数。</p>
          <div v-highlight>
            <pre>
              <code>
                var x = 'hello world'

                x.slice()  => 'hello world' //一次深复制
                x.slice(1) => 'ello world'  //到结尾
                x.slice(1,3) => 'el'        //左闭右开区间

                x.substr() => 'hello world' //一次深复制
                x.substr(1) => 'ello world' //到结尾
                x.substr(1,3) => 'ell'      //返回字符个数

                x.substring() => 'hello world' //一次深复制
                x.substring(1) => 'ello world' //到结尾
                x.substring(1,3) => 'el'       //左闭右开区间

                //参数为负值，
                //slice()：字符串长度+负值（始终要确保第二个参数大于第一个参数）
                //substr()：第一个参数是负值 + 字符串长度；若第一个参数为负值，则第二个参数不能是负值
                //substring()：两个参数不能都是负值；若只有一个参数且负值，则返回整个字符串。两个参数时，负值转为0
              </code>
            </pre>
          </div>
          <p>split()方法，以指定字符分隔字符串，返回由分隔的各部分组成的数组。</p>
          <div v-highlight>
            <pre>
              <code>
                var qs = 'x=1&y=2&z=3'
                qs.split('&') => ['x=1', 'y=2', 'z=3']

                var str = '1010101'
                str.split('0') => ['1', '1', '1', '1']
              </code>
            </pre>
          </div>
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
          <p>localeCompare()方法用于比较两个字符串，它将返回下列值：
            <ul class="menu">
              <li>字符串在字母表中排在字符串参数之前，则返回一个负值（多数情况为-1）。</li>
              <li>字符串等于字符串参数，返回0。</li>
              <li>字符串在字母表中排在字符串参数之后，则返回一个正数（多数情况为1）</li>
            </ul>
          </p>
          <div v-highlight>
            <pre>
              <code>
                var b = 'B'

                //字母表排序：aAbBcC~zZ
                b.localeCompare('A') => 1
                b.localeCompare('B') => 0
                b.localeCompare('C') => -1

                //常用函数
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
        </div>
      </Card>
    </div>
  </div>
</template>

<script>
import { Card } from 'view-design'

export default {
  name: 'reference-type-3',
  created() {},
  components: {
    Card
  }
}
</script>

<style scoped lang="stylus">
.reference-type-3
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
