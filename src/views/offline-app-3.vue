<template>
  <div class="offline-app-3">
    <div class="layout-content">
      <Card dis-hover shadow style="width:600px">
        <h3 slot="title">1.Storage类型</h3>
        <div>
          <p>Storage 提供了访问特定域名下的会话存储或本地存储的功能，例如，可以添加、修改或删除存储的数据项。</p>
          <p>
            如果你想要操作一个域名的会话存储，可以使用Window.sessionStorage；
            <br />如果想要操作一个域名的本地存储，可以使用Window.localStorage。
          </p>
          <p>Storage的实例有以下方法：</p>
          <ul class="menu">
            <li>getItem(name)：根据指定的name名字获取对应的值。</li>
            <li>setItem(name)：为指定的name设置一个对应的值。</li>
            <li>removeItem(name)：删除由name指定的名值对。</li>
            <li>key(index)：获取index位置处的值的名字。</li>
            <li>clear()：删除所有值。（firefox中没有实现）</li>
          </ul>
          <div v-highlight>
            <pre>
              <code>
                //length属性（只读）
                Storage.length //表示存储在Storage对象中的数据项数量。
              </code>
            </pre>
          </div>
        </div>
      </Card>
      <Card dis-hover shadow style="width:700px">
        <h3 slot="title">2.sessionStorage对象</h3>
        <div>
          <ul class="menu">
            <li>sessionStorage对象存储特定于某个会话的数据，该数据只保持到浏览器关闭（浏览器关闭后失效）。</li>
            <li>sessionStorage对象中的数据可以跨越页面刷新而存在。浏览器崩溃或重启之后依然存在（需要浏览器支持）。</li>
            <li>sessionStorage对象绑定于某个服务器会话，所以当文件在本地运行时时不可用的。</li>
            <li>sessionStorage对象中的数据只能由最初给对象存储数据的页面访问到，所以对多页面应用有限制。</li>
            <li>sessionStorage对象其实是Storage类型的一个实例，所以可以使用上述前面的方法或者直接设置新的属性来存储数据。</li>
          </ul>
          <div v-highlight>
            <pre>
              <code>
                //存储数据的方式
                sessionStorage.setItem("name", "alex")
                sessionStorage.book = "javascript"

                //获取数据的方式
                var name = sessionStorage.getItem("name")
                var book = sessionStorage.book
              </code>
            </pre>
          </div>
          <p>通过length属性再结合key()方法，可以迭代sessionStorage中的值。</p>
          <div v-highlight>
            <pre>
              <code>
                //使用for循环
                for (var i = 0, len = sessionStorage.length; i &lt; len; i++) {
                  var key = sessionStorage.key(i)
                  var value = sessionStorage.getItem(key)
                  alert(key + "=" + value)
                }

                //使用for-in循环
                for (var key in sessionStorage) {
                  var value = sessionStorage.getItem(key)
                  alert(key + "=" + value)
                }
              </code>
            </pre>
          </div>
          <p>从sessionStorage中删除数据，可以使用delete操作符删除对象属性，也可以使用removeItem()方法。</p>
          <div v-highlight>
            <pre>
              <code>
                //使用delete操作符
                delete sessionStorage.name //webkit中无效

                //使用对象方法
                sessionStorage。removeItem("name")
              </code>
            </pre>
          </div>
        </div>
      </Card>
      <Card dis-hover shadow style="width:700px">
        <h3 slot="title">3.localStorage对象</h3>
        <div>
          <ul class="menu">
            <li>作为Web Storage规范的一部分，globalStorage对象的目的是跨越会话储存数据，但有特定的访问限制。</li>
            <li>要使用globalStorage对象，首先要指定哪些域可以访问该数据。</li>
            <li>globalStorage不是Storage的实例，而具体的globalStorage['example.com']才是。</li>
            <li>若不使用removeitem()或delete操作符，又或者用户未清除浏览器缓存，则储存在globalStorage属性上的数据会一直保留在磁盘上。</li>
            <li>若不使用removeitem()或delete操作符，又或者用户未清除浏览器缓存，则储存在globalStorage属性上的数据会一直保留在磁盘上。</li>
          </ul>
          <div v-highlight>
            <pre>
              <code>
                //储存空间对于example.com及其所有子域都是可见的
                globalStorage['example.com'].name = "alex"

                //储存空间只对于来自www.example.com页面可见
                globalStorage['www.example.com'].name = "alex"

                //使用Storage对象方法
                globalStorage['www.example.com'].setItem("name", "alex")
              </code>
            </pre>
          </div>
          <p>localStorage对象在HTML5规范中作为持久保存客户端数据的方案取代了globalStorage。要访问一个localStorage对象，
            页面必须来自同一个域名（子域名无效），使用同一种协议，在同一个端口上。由于localStorage对象是Storage的实例，所以可以像sessionStorage一样使用它。</p>
          <div v-highlight>
            <pre>
              <code>
                //存储数据的方式
                localStorage.setItem("name", "alex")
                localStorage.book = "javascript"

                //获取数据的方式
                var name = localStorage.getItem("name")
                var book = localStorage.book
              </code>
            </pre>
          </div>
          <p>为了兼容只支持globalStorage的浏览器，可以使用以下函数：</p>
          <div v-highlight>
            <pre>
              <code>
                function getLocalStorage() {
                  if (typeof localStorage === "object") {
                    return localStorage;
                  } else if (typeof globalStorage === "object") {
                    return globalStorage[location.host];
                  } else {
                    throw new Error("Local storage not available!")
                  }
                }

                var storage = getLocalStorage();
              </code>
            </pre>
          </div>
          <p>storage事件：对storage对象的任何修改，都会在文档上触发storage事件。</p>
          <div v-highlight>
            <pre>
              <code>
                EventUtil.addHandler(window, "storage", function(event) {
                  event.domain   //发生变化的储存空间的域名
                  event.key      //设置或者删除的键名
                  event.newValue //如果是设置值，则是新值；若是删除键，则是null
                  event.oldValue //键被更改之前的值
                })
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
  name: 'offline-app-3',
  created() {},
  components: {
    Card
  }
}
</script>

<style scoped lang="stylus">
.offline-app-3
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
