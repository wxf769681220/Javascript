<template>
  <div class="web-works-1">
    <Card shadow style="width:800px">
      <h3 slot="title">1.web works</h3>
      <div>
        <ul class="menu">
          <li>JavaScript 语言核心并不包含任何线程机制。它是运行在浏览器中，单线程的。单线程设计可以让编程变得更加简单。
            <ul class="menu">
              <li>编写代码时可以确保两个事件处理程序不会同时被运行。</li>
              <li>操作文档内容时也不必担心会有其他线程试图修改文档。</li>
              <li>不需要在写 javascript 时担心锁、死锁和竞态条件。</li>
            </ul>
          </li>
          <li>在 JavaScript 中经常会通过执行异步操作（如：setTimeout、回调函数、事件处理程序、Ajax等）来模拟实现多线程。</li>
          <li>HTML5 定义了一种作为后台线程的 "Web Worker"。（可以定义多个 worker）
            <ul class="menu">
              <li>Web Worker 是一个用来执行计算密集任务而不冻结用户界面的后台线程。</li>
              <li>Web Worker 并没有改变 JavaScript 单线程执行的本质，JavaScript 还像严格的单线程一样工作，而 Web Worker 作为后台线程依然完全受主线程控。</li>
              <li>运行在 Web Worker 线程中的代码不能访问 DOM，不能和主线程或其他 worker 共享状态。</li>
            </ul>
          </li>
        </ul>
        <div v-highlight>
          <pre>
            <code>
              // 检测浏览器是否支持
              // chrome不允许通过本地文件访问使用Web Worker，
              // 可以使用别的浏览器重新进行尝试，比如IE浏览器
              // 将程序部署在服务器下
              if (Worker) {
                var worker = new Worker("count.js");

                // 将数据传给线程
                worker.postMessage(1000);

                // Worker后台运行的脚本错误触发error事件
                worker.onerror = function (event) {
                  event.filename //错误文件名
                  event.lineno   //代码行号
                  event.message  //错误信息
                }

                // web workers脚本文本count.js返回的数据
                worker.onmessage = function (event) {
                  event.data => 5050
                }

                // 可在任何时候立即停止Worker的工作
                worker.terminate();

              } else {
                console.log("your browse not support Web workers");
              }

              // Worker后台运行的脚本count.js
              // count.js是定义在外部的文件，因此无法访问window、document等对象
              // count.js中的self始终指向Worker
              self.onmessage = function (event) {
                  var num = event.data,
                  result = 0,
                  i = 0;

                  while (i &lt;= num) {
                    result += i++;
                  }

                  // 向线程创建源送回消息
                  self.postMessage(result);
              }

              // 可在任何时候立即停止Worker的工作
              self.close();
            </code>
          </pre>
        </div>
      </div>
    </Card>
    <Card shadow style="width:700px">
      <h3 slot="title">2.Worker与页面之间的数据通信</h3>
      <div>
        <p>任何可以序列化为 JSON 结构的值都可以作为参数传递给 postMessage()。这意味着传入的值时被复制 clone 到 Worker 中的，而非直接传过去的。JSON 数据结构有以下三种类型的值：</p>
        <ul class="menu">
          <li>基本类型值：字符串（包括空字符串）、数值、布尔值和 null。（不支持undefined）</li>
          <li>对象：一组无序的键值对。</li>
          <li>数组：一组有序的值的列表。</li>
        </ul>
        <div v-highlight>
          <pre>
            <code>
                var worker = new Worker("count.js");

                // 若参数是一个基本类型值，则直接传入（包括undefined），
                // 若参数是一个对象或数组，要先检测其是否有效的JSON数据结构，
                // 若不能，则会抛出错误
                worker.postMessage({
                  name: "alex",
                  age: 24,
                  friends: ["f1", "f2"]
                });

                worker.onerror = function (event) {
                  //...
                }

                worker.onmessage = function (event) {
                  var data = event.data;
                  data => {
                    name: "alex",
                    age: 24,
                    friends: ["f1", "f2"]
                  }
                }
              }

              // Worker后台运行的脚本count.js
              onmessage = function (event) {
                var data = event.data;
                console.log(data);
                postMessage(data);
              }
            </code>
          </pre>
        </div>
      </div>
    </Card>
    <Card shadow style="width:600px">
      <h3 slot="title">3.Worker 全局作用域</h3>
      <div>
        <p>Web workers 所执行的 javascript 代码完全是在另一个作用域，与当前网页中的代码不共享作用域。在 Web workers 中，同样有一个全局对象和其他的对象以及方法。</p>
        <ul class="menu">
          <li>最小化的 navigator对象。</li>
          <li>只读的 location对象。</li>
          <li>setTimeout()、setInterval()、clearTimeout 和方法 clearInterval() 方法。</li>
          <li>XMLHttpRequest 构造函数。</li>
        </ul>
        <div v-highlight>
          <pre>
            <code>
              var worker = new Worker("count.js");

              worker.postMessage(100);

              worker.onerror = function (event) {
                //...
              }

              worker.onmessage = function (event) {
                console.log(event.data)
              }

              // count.js
              self.onmessage = function (event) {
                var data = event.data;
                self.postMessage(data);
                console.log(this) => Worker对象
              }
            </code>
          </pre>
        </div>
      </div>
    </Card>
    <Card shadow style="width:760px">
      <h3 slot="title">4.Worker中添加其他脚本</h3>
      <div>
        <div v-highlight>
          <pre>
            <code>
              // count.js
              self.onmessage = function (event) {
                var data = event.data;
                self.postMessage(data);

                // 每个脚本文件的加载过程都是异步的
                // 当所有的脚本文件加载完之后，才会执行这个方法
                // 执行的时候仍然会按照脚本文件定义时的先后顺序执行相应的脚本代码
                importScripts("file1.js", "file2.js")
              }
            </code>
          </pre>
        </div>
      </div>
    </Card>
    <Card shadow style="width:700px">
      <h3 slot="title">5.Worker 应用场景</h3>
      <div>
        <div v-highlight>
          <pre>
            <code>
              // 计算一个较大的值
              // 如：一个从0加到10000的值：worker.postMessage(10000);
              self.onmessage = function (event) {
                var num = event.data;
                result = 0,
                i = 0;

                while (i &lt;= num) {
                  result += i++;
                }

                self.postMessage(result);
              }

              // 对传入的数组进行排序
              // 如：worker.postMessage([10, 12, 1, 4, 6, 3, 9])
              self.onmessage = function (event) {
                var arr = event.data;

                arr.sort(function(a, b) {
                  return a -b
                })

                self.postMessage(arr);
              }
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
  name: 'web-works-1',
  components: {
    Card
  }
}
</script>

<style scoped lang="stylus">
.web-works-1
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
