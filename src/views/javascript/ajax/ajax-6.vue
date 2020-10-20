<template>
  <div class="ajax-6">
    <Card shadow style="width:860px">
      <h3 slot="title">1.跨站脚本攻击</h3>
      <p>跨站脚本（Cross-sit scripting）：或者叫做 XSS。这个术语用来表示一类安全问题。也就是攻击者向目标 web 站点注入 HTML 标签或脚本，从而达到恶意攻击用户的目的。实现跨站脚本攻击的要素：</p>
      <ul class="menu">
        <li>Web 页面动态的创建生成文档内容。</li>
        <li>这些文档内容又是基于用户提交的数据。</li>
        <li>没有对任何嵌入的 HTML 标签做安全处理。</li>
      </ul>
      <div v-highlight>
        <pre>
          <code>
            /* 存在XSS隐患
              * http://www.example.com/index.html?alex
              */
            var name = decodeURIComponent(location.search.substring(1));
            document.write(name);

            ///////////////////////////////////////////////////////////////////

            /* 注入脚本
              * http://www.example.com/index.html?%3Cscript%3Econsole.log('alex')%3C/script%3E
              */
            var name = decodeURIComponent(location.search.substring(1));
            document.write(name);

            //////////////////////////////////////////////////////////////////

            /* 注入其他服务器中的脚本
              * http://www.example.com/index.html?%3Cscript src=site/evil.js%3E%3C/script%3E
              */
            var name = decodeURIComponent(location.search.substring(1));
            document.write(name)
          </code>
        </pre>
      </div>
      <p>防止XSS攻击的方式：在使用任何不可信的数据来动态创建文档内容之前，从中移除 HTML 标签。</p>
      <div v-highlight>
        <pre>
          <code>
              // 对&lt;script>标签的两边的尖括号做安全处理
              name = name.replace(/&lt;/g, "&amp;lt;").replace(/&gt;/g, "&amp;gt;")
          </code>
        </pre>
      </div>
    </Card>
    <Card shadow style="width:700px">
      <h3 slot="title">2.XSS分类</h3>
      <p>XSS有三类：反射型 XSS(非持久型)、存储型 XSS(持久型)和 DOM XSS。</p>
      <ul class="menu">
        <li>反射型 XSS(非持久型)：向服务器发送请求时，XSS 代码注入在 URL中，提交到服务器端。服务器端接受请求并作出响应后，XSS 代码随响应内容一起传回给浏览器，最后浏览器解析执行 XSS代码。</li>
        <li>存储型 XSS(持久型)：与反射型 XSS相比，被提交的内容（包含 XSS代码）会存储在服务器端（数据库，内存，文件系统等），下次请求目标页面时不用再提交 XSS代码。</li>
        <li>DOM XSS：与前两个类型相比，不需要服务器参与，完全是由浏览器端的 DOM 解析时所触发 XSS。</li>
      </ul>
      <div v-highlight>
        <pre>
          <code>
          </code>
        </pre>
      </div>
    </Card>
    <Card shadow style="width:500px">
      <h3 slot="title">3.拒绝服务攻击</h3>
      <p>攻击方式：恶意站点使用一个alert() 对话框无限循环占用浏览器，或者用一个无限循环或没有意义的计算来占用CPU。</p>
      <p>某些浏览器可以检测运行时间很长的脚本，并且让用户选择来终止它们。但恶意脚本可以使用window.setInterval() 这样的方法来占用CPU。（这种攻击实际上很少见）</p>
    </Card>
  </div>
</template>

<script>
import { Card } from 'view-design'

export default {
  name: 'ajax-6',
  components: {
    Card
  }
}
</script>

<style scoped lang="stylus">
.ajax-6
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
