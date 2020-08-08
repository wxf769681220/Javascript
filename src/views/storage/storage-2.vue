<template>
  <div class="storage-2">
    <Card shadow style="width:600px">
      <h3 slot="title">1.Storage类型</h3>
      <div>
        <p>Storage 提供了访问特定域名下的会话存储或本地存储的功能，例如，可以添加、修改或删除存储的数据项。</p>
        <p>
          如果你想要操作一个域名的会话存储，可以使用 Window.sessionStorage；
          <br />如果想要操作一个域名的本地存储，可以使用 Window.localStorage。
        </p>
        <p>Storage的实例有以下属性或方法：</p>
        <ul class="menu">
          <li>length：表示存储在Storage对象中的数据项数量。（只读）</li>
          <li>getItem(name)：根据指定的 name 名字获取对应的值。</li>
          <li>setItem(name)：为指定的 name 设置一个对应的值。</li>
          <li>removeItem(name)：删除由 name 指定的名值对。</li>
          <li>key(index)：获取 index 位置处的值的名字。</li>
          <li>clear()：删除所有值。（firefox中没有实现）</li>
        </ul>
        <div v-highlight>
          <pre>
            <code>
              Storage.length
            </code>
          </pre>
        </div>
      </div>
    </Card>
    <Card shadow style="width:700px">
      <h3 slot="title">2.sessionStorage对象</h3>
      <div>
        <ul class="menu">
          <li>sessionStorage 对象存储特定于某个会话的数据，该数据只保持到浏览器关闭（浏览器关闭后失效）。</li>
          <li>sessionStorage 对象中的数据可以跨越页面刷新而存在。浏览器崩溃或重启之后依然存在（需要浏览器支持）。</li>
          <li>sessionStorage 对象绑定于某个服务器会话，所以当文件在本地运行时是不可用的。</li>
          <li>sessionStorage 对象中的数据只能由最初给对象存储数据的页面访问到，所以对多页面应用有限制。</li>
          <li>sessionStorage 对象其实是 Storage 类型的一个实例，所以可以使用 Storage 类型的属性方法或者直接设置新的属性来存储数据。</li>
        </ul>
        <div v-highlight>
          <pre>
            <code>
              // 存储数据的方式
              sessionStorage.setItem("name", "alex")
              sessionStorage.book = "javascript"

              // 获取数据的方式
              var name = sessionStorage.getItem("name")
              var book = sessionStorage.book
            </code>
          </pre>
        </div>
        <p>通过 length 属性再结合 key() 方法，可以迭代 sessionStorage 中的值。</p>
        <div v-highlight>
          <pre>
            <code>
              // for
              for (var i = 0, len = sessionStorage.length; i &lt; len; i++) {
                var key = sessionStorage.key(i)
                var value = sessionStorage.getItem(key)
                alert(key + "=" + value)
              }

              // for-in
              for (var key in sessionStorage) {
                var value = sessionStorage.getItem(key)
                alert(key + "=" + value)
              }
            </code>
          </pre>
        </div>
        <p>从 sessionStorage 中删除数据，可以使用 delete 操作符删除对象属性，也可以使用 removeItem() 方法。</p>
        <div v-highlight>
          <pre>
            <code>
              // delete操作符
              // webkit中无效
              delete sessionStorage.name

              // 使用对象方法
              sessionStorage.removeItem("name")
            </code>
          </pre>
        </div>
      </div>
    </Card>
    <Card shadow style="width:700px">
      <h3 slot="title">3.localStorage对象</h3>
      <div>
        <ul class="menu">
          <li>作为 Web Storage 规范的一部分，globalStorage 对象的目的是跨越会话储存数据，但有特定的访问限制。</li>
          <li>要使用 globalStorage 对象，首先要指定哪些域可以访问该数据。</li>
          <li>globalStorage 不是 Storage的实例，而具体的 globalStorage['example.com'] 才是。</li>
          <li>若不使用 removeitem() 或 delete 操作符，又或者用户未清除浏览器缓存，则储存在 globalStorage 属性上的数据会一直保留在磁盘上。</li>
        </ul>
        <div v-highlight>
          <pre>
            <code>
              // 储存空间对于example.com及其所有子域都是可见的
              globalStorage['example.com'].name = "alex"

              // 储存空间只对于来自www.example.com页面可见
              globalStorage['www.example.com'].name = "alex"

              // 使用Storage对象方法
              globalStorage['www.example.com'].setItem("name", "alex")
            </code>
          </pre>
        </div>
        <p>localStorage 对象在 HTML5 规范中作为持久保存客户端数据的方案取代了 globalStorage。要访问一个 localStorage 对象，
          页面必须来自同一个域名（子域名无效），使用同一种协议，在同一个端口上。由于 localStorage 对象是 Storage 的实例，所以可以像 sessionStorage 一样使用它。</p>
        <div v-highlight>
          <pre>
            <code>
              // 存储数据的方式
              localStorage.setItem("name", "alex")
              localStorage.book = "javascript"

              // 获取数据的方式
              var name = localStorage.getItem("name")
              var book = localStorage.book
            </code>
          </pre>
        </div>
        <p>为了兼容只支持 globalStorage 的浏览器，可以使用以下函数：</p>
        <div v-highlight>
          <pre>
            <code>
              // 跨浏览器
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
        <p>storage事件：对 storage 对象的任何修改，都会在文档上触发 storage 事件。</p>
        <div v-highlight>
          <pre>
            <code>
              EventUtil.addHandler(window, "storage", function(event) {
                // 发生变化的储存空间的域名
                event.domain
                // 设置或者删除的键名
                event.key
                // 如果是设置值，则是新值；若是删除键，则是null
                event.newValue
                // 键被更改之前的值
                event.oldValue
              })
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
  name: 'storage-2',
  components: {
    Card
  }
}
</script>

<style scoped lang="stylus">
.storage-2
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
