<template>
  <div class="reference-type-1">
    <div class="layout-content">
      <Card dis-hover shadow style="width:700px">
        <h3 slot="title">1.创建日期对象</h3>
        <div>
          <p>Date类型使用自UTC（Coordinated Universal Time 国际协调时间）1970年1月1日午夜（零时）开始经过的毫秒数来保存时间。</p>
          <p>创建一个日期对象，最简单的方式就是：使用new操作符 + （Date）构造函数。</p>
          <div v-highlight>
            <pre>
              <code>
                //当Date构造函数中不传值,新对象会自动获取当前日期和时间
                var time1 = new Date()

                //向Date构造函数中传递表示日期类型的字符串
                //可以创建一个保存特定日期和时间的对象
                var time2 = new Date('Sun Apr 07 2019 18:20:47 GMT+0800 (中国标准时间)')
              </code>
            </pre>
          </div>
        </div>
      </Card>
      <Card dis-hover shadow style="width:700px">
        <h3 slot="title">2.Date.parse()方法</h3>
        <div>
          <p>Date.parse()方法：它接受一个表示日期的字符串参数，返回该日期的毫秒数。如果该字符串不能表示一个日期，则返回NaN。</p>
          <div v-highlight>
            <pre>
              <code>
                //当前某一时刻的毫秒数
                var time1 = Date.parse(new Date())

                //某一特定时刻的毫秒数
                var time2 = Date.parse('2020-2-1')

                //非日期格式字符串
                var time3 = Date.parse('one')
                time3 => NaN
              </code>
            </pre>
          </div>
        </div>
      </Card>
      <Card dis-hover shadow style="width:700px">
        <h3 slot="title">3.Date.UTC()方法</h3>
        <div>
          <p>
            Date.UTC()方法：该方法同样返回表示日期的毫秒数。这个方法的参数分别是年份、基于0的月份(0-11)、月中的哪一天(1-31)、小时数(0-23)、分钟、秒以及毫秒数。
            其中年份和月是必须的；若没提供月中的哪一天，则默认为1；若省略其他参数，则统统默认为0。
          </p>
          <div v-highlight>
            <pre>
              <code>
                //GMT时间2020年1月1日午夜零时
                var time1 = Date.UTC(2020, 0)

                //GMT时间2020年2月1日下午1时11分11秒
                var time2 = Date.UTC(2020, 1, 1, 13, 11, 11)
              </code>
            </pre>
          </div>
        </div>
      </Card>
      <Card dis-hover shadow style="width:700px">
        <h3 slot="title">3.Date.now()方法</h3>
        <div>
          <p>调用该方法时的日期时间和时间的毫秒数。</p>
          <div v-highlight>
            <pre>
              <code>
                var start = Date.now()

                dosomething()

                var stop = Date.now()

                var result = stop -start
              </code>
            </pre>
          </div>
        </div>
      </Card>
      <Card dis-hover shadow style="width:700px">
        <h3 slot="title">4.继承方法</h3>
        <div>
          <ul>
            <li>toString()：通常返回带有时区信息的日期和时间。</li>
            <li>toLocaleString()：会按照与浏览器设置的地区相适应的格式返回日期和时间。</li>
            <li>valueOf()：不返回字符串，而是返回日期的毫秒数。因此可以方便的使用比较操作符来进行日期比较。</li>
          </ul>
          <p>调用该方法时的日期时间和时间的毫秒数。</p>
          <div v-highlight>
            <pre>
              <code>
                var time1 = new Date(2020, 0)
                var time2 = new Date(2020, 1)

                time1 &lt; time2 => true
              </code>
            </pre>
          </div>
        </div>
      </Card>
      <Card dis-hover shadow style="width:700px">
        <h3 slot="title">5.日期格式化方法</h3>
        <div>
          <ul>
            <li>toDateString()：以特定格式显示星期几、月、日和年。</li>
            <li>toTImeString()：以特定格式显示时、分、秒和时区。</li>
            <li>toLocaleDateString()：以特定地区格式显示星期几、月、日和年。</li>
            <li>toLocaleTImeString()：以特定地区格式显示时、分、秒和时区。</li>
            <li>toUTCString()：以特定格式显示完整的UTC日期。</li>
          </ul>
          <div v-highlight>
            <pre>
              <code>
                var time = new Date()

                time.toDateString()       => Fri Jun 05 2020
                time.toLocaleDateString() => 2020/6/5

                time.toTimeString()       => 14:07:16 GMT+0800 (中国标准时间)
                time.toLocaleTimeString() => 下午2:07:42

                time.toUTCString() => Fri, 05 Jun 2020 06:08:00 GMT
              </code>
            </pre>
          </div>
        </div>
      </Card>
      <Card dis-hover shadow style="width:700px">
        <h3 slot="title">6.日期/时间组件方法</h3>
        <div>
          <table class="table-bordered">
            <thead>
              <tr class="bg-gray">
                <th>方法</th>
                <th>描述</th>
              </tr>
            </thead>
            <tbody>
              <tr class="bg-1">
                <td>getTime()</td>
                <td>返回表示日期的毫秒数，与valueOf()返回相同的值</td>
              </tr>
              <tr class="bg-1">
                <td>setTime()</td>
                <td>以毫秒数设置日期，会改变这整个日期</td>
              </tr>
              <tr class="bg-2">
                <td>getFullYear()</td>
                <td>返回4位数的年份</td>
              </tr>
              <tr class="bg-2">
                <td>setFullYear()</td>
                <td>设置年份。传入的年份值必须是4位数</td>
              </tr>
              <tr class="bg-2">
                <td>getUTCFullYear()</td>
                <td></td>
              </tr>
              <tr class="bg-2">
                <td>setUTCFullYear()</td>
                <td></td>
              </tr>
              <tr class="bg-1">
                <td>getMonth</td>
                <td>返回日期中的月份(0-11)</td>
              </tr>
              <tr class="bg-1">
                <td>setMonth()</td>
                <td>设置月份。必须大于0，超过11则增加年份</td>
              </tr>
              <tr class="bg-1">
                <td>getUTCMonth()</td>
                <td></td>
              </tr>
              <tr class="bg-1">
                <td>setUTCMonth()</td>
                <td></td>
              </tr>
              <tr class="bg-2">
                <td>getDate()</td>
                <td>返回日期月份中的天数</td>
              </tr>
              <tr class="bg-2">
                <td>setDate()</td>
                <td>设置天数。超过该月中应有天数时，则增加月份</td>
              </tr>
              <tr class="bg-2">
                <td>getUTCDate()</td>
                <td></td>
              </tr>
              <tr class="bg-2">
                <td>setUTCDate()</td>
                <td></td>
              </tr>
              <tr class="bg-1">
                <td>getDay()</td>
                <td>返回日期中星期几（0表示星期日、6表示星期六）</td>
              </tr>
              <tr class="bg-1">
                <td>getUTCDay()</td>
                <td></td>
              </tr>
              <tr class="bg-2">
                <td>getHours()</td>
                <td>返回日期中的小时数(0-23)</td>
              </tr>
              <tr class="bg-2">
                <td>setHours()</td>
                <td>设置小时数。超过23则增加天数</td>
              </tr>
              <tr class="bg-2">
                <td>getUTCHours()</td>
                <td></td>
              </tr>
              <tr class="bg-2">
                <td>setUTCHours()</td>
                <td></td>
              </tr>
              <tr class="bg-1">
                <td>getMinutes()</td>
                <td>返回日期中的分钟数(0-59)</td>
              </tr>
              <tr class="bg-1">
                <td>setMinutes()</td>
                <td>设置分钟。超过59则增加小时数</td>
              </tr>
              <tr class="bg-1">
                <td>getUTCMinutes()</td>
                <td></td>
              </tr>
              <tr class="bg-1">
                <td>setUTCMinutes()</td>
                <td></td>
              </tr>
              <tr class="bg-2">
                <td>getSeconds()</td>
                <td>返回日期中的秒数(0-59)</td>
              </tr>
              <tr class="bg-2">
                <td>setSeconds()</td>
                <td>设置秒数。超过59则增加分钟数</td>
              </tr>
              <tr class="bg-2">
                <td>getUTCSeconds()</td>
                <td></td>
              </tr>
              <tr class="bg-2">
                <td>setUTCSeconds()</td>
                <td></td>
              </tr>
              <tr class="bg-1">
                <td>getMilliseconds()</td>
                <td>返回日期中的毫秒数。</td>
              </tr>
              <tr class="bg-1">
                <td>setMilliseconds()</td>
                <td>设置日期中的毫秒数</td>
              </tr>
              <tr class="bg-1">
                <td>getUTCMilliseconds()</td>
                <td></td>
              </tr>
              <tr class="bg-1">
                <td>setUTCMilliseconds()</td>
                <td></td>
              </tr>
              <tr class="bg-2">
                <td>getTimezoneOffset()</td>
                <td>返回本地时间与UTC时间相差的分钟数</td>
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
  name: 'reference-type-1',
  created() {},
  components: {
    Card
  }
}
</script>

<style scoped lang="stylus">
.reference-type-1
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
