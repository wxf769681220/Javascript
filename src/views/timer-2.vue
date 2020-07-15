<template>
  <div class="timer-2">
    <div class="layout-content">
      <Card dis-hover shadow style="width:520px">
        <h3 slot="title">1.定时器</h3>
        <div>
          <ul class="menu">
            <li>javascript是运行于单线程的环境中的。</li>
            <li>javascript中没有任何代码是立刻执行的，当主执行进程结束后，一旦下一进程处于空闲，下一个代码会被触发并立即执行。</li>
            <li>定时器：指定时间间隔表示何时将定时器的代码添加到队列，而不是何时实际的执行代码。</li>
          </ul>
          <div v-highlight>
            <pre>
              <code>
                //1秒后将代码添加到队列
                //若在这个时间点上，进程处于空闲状态，则立即执行代码
                //表面上代码在精确的指定时间点上执行了，
                //实际上代码可能明显地等待更长时间才执行
                setTimeout(function() {
                  alert('hello')
                }, 1000)
              </code>
            </pre>
          </div>
          <p>在firefox中定时器的实现还能让你确定定时器过了多就才执行。（实际执行时间与指定的间隔的差值）</p>
          <div v-highlight>
            <pre>
              <code>
                //仅支持firefox
                setTimeout(function(diff) {
                  if (diff > 0) {
                    //晚调用
                  } else if (diff &lt; 0) {
                    //早调用
                  } else {
                    //及时调用
                  }
                }, 1000)
              </code>
            </pre>
          </div>
        </div>
      </Card>
      <Card dis-hover shadow style="width:520px">
        <h3 slot="title">2.重复的定时器</h3>
        <div>
          <ul class="menu">
            <li>使用setInterval()创建的定时器可能会存在后一个间歇调用会在前一个间歇调用结束之前启动，这导致定时器代码连续运行好几次而之间没有任何间隔停顿。</li>
            <li>通常setInterval()间歇调用并不常用，而使用超时调用来实现间歇调用。可以通过以下链式setTimeout()</li>
            <li>通过以下模式使用链式setTimeout()调用。</li>
            <li>这样做的好处是：在前一个定时器代码执行完之前，不会向插入新的定时器代码，确保不会有任何缺失的时间间隔。它确保在下一次的定时器代码执行之前，至少要等待指定的间隔时间，
              避免了连续的运行。
            </li>
          </ul>
          <div v-highlight>
            <pre>
              <code>
                var interval = 100

                setTimeout(function() {
                  //...处理代码

                  //这里使用arguments.callee代用同一个匿名函数
                  setTimeout(arguments.callee, interval)
                }, interval)
              </code>
            </pre>
          </div>
          <p>做一个简单的计时器。</p>
          <div v-highlight>
            <pre>
              <code>
                var num = 0,
                max = 10,
                interval = 1000;

                setTimeout(function() {
                  num++;
                  if (num &lt;= max) {
                    console.log(num);
                    setTimeout(arguments.callee, interval)
                  } else {
                    console.log("Done");
                  }
                }, interval)
              </code>
            </pre>
          </div>
        </div>
      </Card>
      <Card dis-hover shadow style="width:520px">
        <h3 slot="title">3.数组分块技术（array chunking）</h3>
        <div>
          <p>使用定时器分割循环，小块小块的处理数组。</p>
          <div v-highlight>
            <pre>
              <code>
                var arr = ["red", "green", "blue", "yellow"],
                interval = 100;

                setTimeout(function() {
                  //取得数组的第一项
                  var item = arr.shift()

                  //处理
                  process(item)

                  //若数组还有剩余项，再设置另一个定时器
                  if (arr.length > 0) {
                    setTimeout(arguments.callee, interval)
                  }
                }, interval)

                //对数组的部分处理
                function process(data) {
                  console.log(data)
                }
              </code>
            </pre>
          </div>
          <p>数组分块函数。</p>
          <div v-highlight>
            <pre>
              <code>
                function chunk(array, process) {
                  setTimeout(function() {
                    var item = array.shift()

                    process.call(null, item)

                    if (array.length > 0) {
                      setTimeout(arguments.callee, 100)
                    }
                  }, 100)
                }

                var arr = ["red", "green", "blue", "yellow"],

                function process(data) {
                  console.log(data)
                }

                //会修改原数组
                chunk(arr, process)

                //创建原数组的一个副本，不会对原数组修改
                //chunk(arr.concat(), process)
              </code>
            </pre>
          </div>
        </div>
      </Card>
      <Card dis-hover shadow style="width:540px">
        <h3 slot="title">4.函数节流</h3>
        <div>
          <p>某些代码不可以在没有时间间隔的情况下连续重复的执行。比如：调整浏览器窗口大小的时候，会连续触发onresize事件。若尝试进行DOM操作，其高频率的更改
            可能会让浏览器崩溃。函数节流是指：第一次调用函数，创建一个定时器，在指定时间间隔之后运行代码。当第二次调用函数时，它会清除第一次的定时器并设置另一个。
          </p>
          <div v-highlight>
            <pre>
              <code>
                var processor = {
                  timer = null,

                  //实际进行处理的方法
                  performProcessing: function() {
                    //实际执行的代码
                  },

                  //初始处理调用的方法
                  process: function() {
                    clearTimeout(this.timer);
                    var that = this;
                    this.timer = setTimeout(function() {
                      that.performProcessing()
                    }, 100)
                  }
                }
                processor.process()
              </code>
            </pre>
          </div>
          <p>以上模式可以用：throttle()函数来简化，这个函数可以自动进行定时器的设置和清除。</p>
          <div v-highlight>
            <pre>
              <code>
                function throttle(method, context) {
                  clearTimeout(method.tId);
                  method.tId = setTimeout(function() {
                    method.call(context)
                  }, 100)
                }

                /*******************************************/
                //控制onresize事件处理的频率，
                //以确保浏览器在极短的时间内进行过多的计算
                function resizeDiv() {
                  var myDiv = document.getElementById("myDiv");
                  myDiv.style.height = myDiv.offsetWidth + "px";
                }

                window.onresize = function() {
                  throttle(resizeDiv);
                }
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
  name: 'timer-2',
  created() {},
  components: {
    Card
  }
}
</script>

<style scoped lang="stylus">
.timer-2
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
