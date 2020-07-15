<template>
  <div class="bom-1">
    <div class="layout-content">
      <Card dis-hover shadow style="width:700px">
        <h3 slot="title">1.location对象</h3>
        <div>
          <p>location对象既是window对象的属性，也是document对象的属性。它不仅保存着当前文档的信息，还将URL解析为独立的片段，让开发人员能够通过不同的属性名访问。</p>
          <div v-highlight>
            <pre>
              <code>
                //指向同一对象
                window.location
                document.location
              </code>
            </pre>
          </div>
          <p>location对象的URL相关属性列表。</p>
          <table class="table-bordered">
            <thead>
              <tr class="bg-gray">
                <th>属性名</th>
                <th>例子</th>
                <th>描述</th>
              </tr>
            </thead>
            <tbody>
              <tr class="bg-1">
                <td>href</td>
                <td>"http://www.baidu.com"</td>
                <td>返回当前页面完整的URL。等价于location.toString()</td>
              </tr>
              <tr class="bg-1">
                <td>protocol</td>
                <td>"http:"</td>
                <td>返回页面使用的协议，通常是http:或https:</td>
              </tr>
              <tr class="bg-1">
                <td>host</td>
                <td>"www.baidu.com:80"</td>
                <td>返回服务器名称和端口号</td>
              </tr>
              <tr class="bg-1">
                <td>hostname</td>
                <td>"www.baidu.com"</td>
                <td>返回服务器名称</td>
              </tr>
              <tr class="bg-1">
                <td>port</td>
                <td>"8080"</td>
                <td>返回URL中指定的端口号。若URL中不包含端口号，则返回空字符串</td>
              </tr>
              <tr class="bg-1">
                <td>pathname</td>
                <td>"/page/"</td>
                <td>返回URL中的目录和文件名</td>
              </tr>
              <tr class="bg-1">
                <td>pathname</td>
                <td>"/page/"</td>
                <td>返回URL中的目录和文件名</td>
              </tr>
              <tr class="bg-1">
                <td>search</td>
                <td>"?q=javascript&key=1"</td>
                <td>返回URL的查询字符串，这个字符串以问号开头</td>
              </tr>
              <tr class="bg-1">
                <td>hash</td>
                <td>"#contents"</td>
                <td>返回URL中hash(#号后跟零或多个字符)，若不包含散列，则返回空字符串</td>
              </tr>
            </tbody>
          </table>
        </div>
      </Card>
      <Card dis-hover shadow style="width:750px">
        <h3 slot="title">2.URI编码方法</h3>
        <div>
          <p>使用encodeURI和encodeURIComponent()方法可以对URI(通用资源标识符)进行编码。有效的URI中不能包含某些字符，如空格。这两个方法
            就可以对URI进行编码，他们使用特殊的utf-8编码替代无效的字符，从来让浏览器能够接受和理解。
          </p>
          <div v-highlight>
            <pre>
              <code>
                var uri = 'https://www.baidu.com/pag e1#start'

                //对整个URI进行编码，
                //并且不会对本身属于URI的特殊字符进行编码，如：冒号、正斜杠、问号和井字号
                encodeURI(uri) => https://www.baidu.com/pag%20e1#start

                //对URI中的某一片段进行编码，
                //会对URI任何非标准字符进行编码
                encodeURIComponent(uri) => https%3A%2F%2Fwww.baidu.com%2Fpag%20e1%23start
              </code>
            </pre>
          </div>
          <p>encodeURI()和encodeURIComponent()相应的两个解码方法分别是：decodeURI()和decodeURIComponent()。</p>
          <div v-highlight>
            <pre>
              <code>
                decodeURI('https://www.baidu.com/pag%20e1#start')

                decodeURIComponent('https%3A%2F%2Fwww.baidu.com%2Fpag%20e1%23start')
              </code>
            </pre>
          </div>
        </div>
      </Card>
      <Card dis-hover shadow style="width:720px">
        <h3 slot="title">3.查询字符串参数</h3>
        <div>
          <p>访问URL包含的查询字符串的属性。</p>
          <div v-highlight>
            <pre>
              <code>
                //URL: "http://www.baidu.com/page?x=1&y=2&z=3"

                function getQueryStringArgs() {
                  //获取查询字符串并去掉开头的问号
                  var qs = location.search.length > 0 ? location.search.substring(1) : ''

                  //以指定字符分隔字符串，返回由分隔的各部分组成的数组
                  var items = qs.length ? qs.split('&') : []

                  //创建一个用来保存数据的对象
                  var args = {}

                  //获取每一项
                  for (var i = 0, len = items.length; i &lt; len ; i++) {
                    var item = items[i].split('=')
                    var name = decodeURIComponent(item[0])
                    var value = decodeURIComponent(item[1])

                    if (name.length) {
                      args[name] = value
                    }
                  }

                  return args
                }

                getQueryStringArgs() => {x: '1', y: '2', z: '3'}
              </code>
            </pre>
          </div>
        </div>
      </Card>
      <Card dis-hover shadow style="width:720px">
        <h3 slot="title">4.URL跳转</h3>
        <div>
          <p>使用assign()方法，跳转到指定的URL，并在浏览器历史记录中生成一条记录。</p>
          <div v-highlight>
            <pre>
              <code>
                  location.assign('http://www.baidu.com')

                  //等价于
                  location.href = 'http://www.baidu.com'
                  window.location = 'http://www.baidu.com'

                  //直接赋值
                  location = 'http://www.baidu.com'

                  //滚动到某个位置(top：文档元素ID)
                  //若没有找到该元素ID，则滚动到文档顶部
                  //不会重载页面
                  location = '#top'
              </code>
            </pre>
          </div>
        </div>
      </Card>
      <Card dis-hover shadow style="width:600px">
        <h3 slot="title">5.URL重载</h3>
        <div>
          <p>通过修改设置URL的hostname、pathname、port、search、hansh属性，可以改变URL，从来改变当前加载的页面。页面会以新的URL重新加载（除了hash）。</p>
          <div v-highlight>
            <pre>
              <code>
                  //URL: "http://www.baidu.com/page?x=1&y=2&z=3#contents"

                  location.search = '?x=true' //设置新查询字符串，重载页面
                  location.hash = '#123'      //设置新hash，不会重载页面
              </code>
            </pre>
          </div>
          <p>重载当前页面使用reload()方法，不传递参数时，以高效方式重载页面，即自上次请求以来，页面并未改变过，则从浏览器缓存中重载页面。
            若需要强制从服务器重新加载，则可以将true作为参数传入。</p>
          <div v-highlight>
            <pre>
              <code>
                  //可能从缓存中重载页面
                  location.reload()

                  //强制从服务器重载页面
                  location.reload(true)
              </code>
            </pre>
          </div>
        </div>
      </Card>
      <Card dis-hover shadow style="width:600px">
        <h3 slot="title">6.历史记录</h3>
        <div>
          <p>通过修改设置URL的hostname、pathname、port、search、hansh属性重载页面时，以上方式都会在浏览器历史记录中产生一条记录。要禁用这种行为，
            可以使用replace()方法，导航到指定URL，不会产生历史记录，用户不能回到前一个页面。</p>
          <div v-highlight>
            <pre>
              <code>
                //导航到指定URL，不会产生历史记录
                location.replace('http://www.baidu.com')
              </code>
            </pre>
          </div>
        </div>
      </Card>
      <Card dis-hover shadow style="width:620px">
        <h3 slot="title">7.hashchange事件</h3>
        <div>
          <p>
            户每次操作不一定会打开一个新的页面，因此"前进"和"后退"按钮就失去了作用，导致用户很难在不同的状态间切换。通过hashchange事件，
            可以知道URL的参数什么时候发生了改变，什么时候有所反应。
          </p>
          <p>HTML5新增hashchange事件，以便在URL的参数列表（及URL中"#"号后面的所有字符串）发生变化时通知开发人员。在Ajax应用中，经常利用URL参数列表来保存状态或导航信息。
            必须把hashchange事件处理程序添加给window对象，然后URL参数列表只要有变化就会立即调用它。
          </p>
          <div v-highlight>
            <pre>
              <code>
              EventUtil.addHandler(window, "hashchange", function (event) {
                event = EventUtil.getEvent(event)
                event.oldURL
                event.newURL
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
  name: 'bom-1',
  created() {},
  components: {
    Card
  }
}
</script>

<style scoped lang="stylus">
.bom-1
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
