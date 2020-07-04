<template>
  <div class="api-5">
    <div class="layout-content">
      <Card dis-hover shadow style="width:800px">
        <h3 slot="title">1.web works</h3>
        <div>
          <ul class="menu">
            <li>在JavaScript中经常会通过setTimeout、setinterval等方法来模拟实现多线程应用。但却改变不了javascript的单线程本质，也无法做到主线程与子线程间相互独立且不受影响。</li>
            <li>为了利用多核CPU的计算能力，HTML5提出Web Worker标准，允许JavaScript脚本创建多个线程，但是子线程完全受主线程控制，且不得操作DOM。所以，这个新标准并没有改变JavaScript单线程的本质。</li>
            <li>Web Worker实现多线程web应用，允许开发人员编写能够长时间运行而不会被中断的后台脚本程序，且能保证对主线程的及时响应。</li>
          </ul>
          <div v-highlight>
            <pre>
              <code>
                //检测浏览器是否支持
                //chrome不允许通过本地文件访问使用Web Worker，
                //可以使用别的浏览器重新进行尝试，比如IE浏览器
                //将程序部署在服务器下
                if (Worker) {
                  var worker = new Worker("count.js");

                  //将数据传给线程
                  worker.postMessage(1000);

                  //Worker后台运行的脚本错误触发error事件
                  worker.onerror = function (event) {
                    event.filename //错误文件名
                    event.lineno   //代码行号
                    event.message  //错误信息
                  }

                  //web workers脚本文本count.js返回的数据
                  worker.onmessage = function (event) {
                    event.data => 5050
                  }

                  //可在任何时候立即停止Worker的工作
                  worker.terminate();

                } else {
                  console.log("your browse not support Web workers");
                }

                //Worker后台运行的脚本count.js
                //count.js是定义在外部的文件，因此无法访问window、document等对象
                //count.js中的self始终指向Worker
                self.onmessage = function (event) {
                    var num = event.data,
                    result = 0,
                    i = 0;

                    while (i &lt;= num) {
                      result += i++;
                    }

                    //向线程创建源送回消息
                    self.postMessage(result);
                }

                //可在任何时候立即停止Worker的工作
                self.close();
              </code>
            </pre>
          </div>
        </div>
      </Card>
      <Card dis-hover shadow style="width:600px">
        <h3 slot="title">2.Worker与页面之间的数据通信</h3>
        <div>
          <p>任何可以序列化为JSON结构的值都可以作为参数传递给postMessage()。这意味着传入的值时被复制clone到Worker中的，而非直接传过去的。JSON数据结构有以下三种类型的值：</p>
          <ul class="menu">
            <li>基本类型值：字符串（包括空字符串）、数值、布尔值和null。（不支持undefined）</li>
            <li>对象：一组无序的键值对。</li>
            <li>数组：一组有序的值的列表。</li>
          </ul>
          <div v-highlight>
            <pre>
              <code>
                  var worker = new Worker("count.js");

                  //若参数是一个基本类型值，则直接传入（包括undefined），
                  //若参数是一个对象或数组，要先检测其是否有效的JSON数据结构，
                  //若不能，则会抛出错误
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

                //Worker后台运行的脚本count.js
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
      <Card dis-hover shadow style="width:600px">
        <h3 slot="title">3.Worker 全局作用域</h3>
        <div>
          <p>Web workers所执行的javascript代码完全是在另一个作用域，与当前网页中的代码不共享作用域。在Web workers中，同样有一个全局对象和其他的对象以及方法。</p>
          <ul class="menu">
            <li>最小化的navigator对象。</li>
            <li>只读的location对象。</li>
            <li>setTimeout()、setInterval()、clearTimeout和方法clearInterval()方法。</li>
            <li>XMLHttpRequest构造函数。</li>
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

                //count.js
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
      <Card dis-hover shadow style="width:660px">
        <h3 slot="title">4.Worker中添加其他脚本</h3>
        <div>
          <div v-highlight>
            <pre>
              <code>
                //count.js
                self.onmessage = function (event) {
                  var data = event.data;
                  self.postMessage(data);

                  //每个脚本文件的加载过程都是异步的
                  //当所有的脚本文件加载完之后，才会执行这个方法
                  //执行的时候仍然会按照脚本文件定义时的先后顺序执行相应的脚本代码
                  importScripts("file1.js", "file2.js")
                }
              </code>
            </pre>
          </div>
        </div>
      </Card>
      <Card dis-hover shadow style="width:600px">
        <h3 slot="title">5.Worker 应用场景</h3>
        <div>
          <div v-highlight>
            <pre>
              <code>
                //计算一个较大的值
                //如：一个从0加到10000的值：worker.postMessage(10000);
                self.onmessage = function (event) {
                    var num = event.data;
                    result = 0,
                    i = 0;

                    while (i &lt;= num) {
                      result += i++;
                    }

                    self.postMessage(result);
                }

                //对传入的数组进行排序
                //如：worker.postMessage([10, 12, 1, 4, 6, 3, 9])
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
  </div>
</template>

<script>
import { Card } from 'view-design'

export default {
  name: 'api-5',
  created() {},
  components: {
    Card
  }
}
</script>

<style scoped lang="stylus">
.api-5
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
