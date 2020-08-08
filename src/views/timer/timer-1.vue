<template>
  <div class="timer-1">
    <div class="layout-content">
      <Card dis-hover shadow style="width:600px">
        <h3 slot="title">1.超时调用</h3>
        <div>
          <p>window 对象的 setTimeout() 方法：在指定的时间之后执行代码。它接收两个参数：要执行的代码和执行代码前需要等待的时间毫秒数。若第二个参数为空，则立即执行代码。</p>
          <div v-highlight>
            <pre>
              <code>
                // 一般不推荐传递字符串
                setTimeout("alert('hello')", 1000)

                // 推荐方式
                setTimeout(function() {
                  alert('hello')
                }, 1000)
              </code>
            </pre>
          </div>
          <p>setTimeout() 方法返回一个数值 ID, 表示超时调用。这个超时调用 ID 时执行代码的唯一标识符，将其作为 clearTimeout() 方法的参数，可以用来取消超时调用。</p>
          <div v-highlight>
            <pre>
              <code>
                var timeoutId = setTimeout(function() {
                  alert('hello')
                }, 1000)

                // 注意这里直接取消了超时调用,
                // 因此上述要执行的代码并未执行
                clearTimeout(timeoutId)
              </code>
            </pre>
          </div>
        </div>
      </Card>
      <Card dis-hover shadow style="width:600px">
        <h3 slot="title">2.间歇调用</h3>
        <div>
          <p>window 对象的 setInterval() 方法：在指定的时间间隔重复执行代码。它接收两个参数：要执行的代码和重复执行代码需要的时间间隔。若第二个参数为空，则立即执行代码。</p>
          <div v-highlight>
            <pre>
              <code>
                // 一般不推荐传递字符串
                setInterval("alert('hello')", 1000)

                // 推荐方式
                setInterval(function() {
                  alert('hello')
                }, 3000)
              </code>
            </pre>
          </div>
          <p>setInterval() 方法也返回一个数值 ID, 表示间歇调用。这个间歇调用 ID 时执行代码的唯一标识符，将其作为 clearInterval() 方法的参数，可以用来取消间歇调用。</p>
          <div v-highlight>
            <pre>
              <code>
                var intervalId = setInterval(function() {
                  alert('hello')
                }, 3000)

                // 注意这里直接取消了间歇调用,
                // 因此上述要执行的代码并未执行
                clearInterval(intervalId)
              </code>
            </pre>
          </div>
          <p>取消间歇调用十分的重要，若不及时取消，则间歇调用会一致执行到页面卸载。</p>
        </div>
      </Card>
      <Card dis-hover shadow style="width:600px">
        <h3 slot="title">3.使用超时调用来实现间歇调用</h3>
        <div>
          <p>间歇调用并不常用，原因是后一个间歇调用可能会在前一个间歇调用结束之前启动，超时调用可以避免这一点。</p>
          <div v-highlight>
            <pre>
              <code>
                // 常用超时调用替代间歇调用
                // 创建一个简单的计时器
                var num = 0
                var max = 10

                function fn() {
                  num++
                  if (num &lt; max) {
                    setTimeout(fn, 1000)
                  } else {
                    alert('Done')
                  }
                  console.log(num)
                }

                setTimeout(fn, 1000)
              </code>
            </pre>
          </div>
        </div>
      </Card>
      <Card dis-hover shadow style="width:600px">
        <h3 slot="title">4.定时器应用函数</h3>
        <div>
          <p></p>
          <div v-highlight>
            <pre>
              <code>
                // 封装函数
                function invoke(f, start, interval, end) {
                  if (!start) {
                    start = 0
                  }

                  if (arguments.length &lt;= 2) {
                    setTimeout(f, start)
                  } else {
                    setTimeout(repeat, start)
                    function repeat() {
                      var h = setInterval(f, interval)
                      if (end) {
                        setTimeout(function() {
                          clearInterval(h)
                        }, end)
                      }
                    }
                  }
                }

                function fn() {
                  num++
                  console.log(num)
                }

                var num = 0
                invoke(fn, 0, 1000, 10000)
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
  name: 'timer-1',
  created() {},
  components: {
    Card
  }
}
</script>

<style scoped lang="stylus">
.timer-1
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
