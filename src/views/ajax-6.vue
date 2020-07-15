<template>
  <div class="ajax-6">
    <div class="layout-content">
      <Card dis-hover shadow style="width:800px">
        <h3 slot="title">1.跨站脚本攻击</h3>
        <div>
          <p>跨站脚本（Cross-sit scripting）：或者叫做XSS。>这个术语用来表示一类安全问题。也就是攻击者向目标web站点注入HTML标签或脚本，从而达到恶意攻击用户的目的。</p>
          <p>跨站脚本攻击的要素：</p>
          <ul class="menu">
            <li>Web页面动态的生成文档内容；</li>
            <li>这些文档内容又是基于用户提交的数据；</li>
            <li>并且没有从中对任何嵌入的HTML标签做安全处理的</li>
          </ul>
          <div v-highlight>
            <pre>
              <code>
                /* 以下做法存在XSS隐患
                 * http://www.example.com/index.html?alex
                 *
                **/

                var name = decodeURIComponent(location.search.substring(1));
                document.write(name)

                ///////////////////////////////////////////////////////////////////

                /* XSS攻击：注入脚本
                 * http://www.example.com/index.html?%3Cscript%3Econsole.log('alex')%3C/script%3E
                 *
                **
                var name = decodeURIComponent(location.search.substring(1));
                document.write(name)

                //////////////////////////////////////////////////////////////////
                /* XSS攻击：注入其他服务器中的脚本
                 * http://www.example.com/index.html?%3Cscript src=site/evil.js%3E%3C/script%3E
                 *
                **
                var name = decodeURIComponent(location.search.substring(1));
                document.write(name)
              </code>
            </pre>
          </div>
        </div>
      </Card>
      <Card dis-hover shadow style="width:600px">
        <h3 slot="title">2.XSS分类</h3>
        <div>
          <p>XSS有三类：反射型XSS(非持久型)、存储型XSS(持久型)和DOM XSS。</p>
          <ul class="menu">
            <li>反射型XSS(非持久型)：向服务器发送请求时，XSS代码注入在URL中，提交到服务器端。服务器端接受请求并作出响应后，XSS代码随响应内容一起传回给浏览器，最后浏览器解析执行XSS代码。</li>
            <li>存储型XSS(持久型)：与反射型XSS相比，被提交的内容（包含XSS代码）会存储在服务器端（数据库，内存，文件系统等），下次请求目标页面时不用再提交XSS代码。</li>
            <li>DOM XSS：与前两个类型相比，不需要服务器参与，完全是由浏览器端的DOM解析时所触发XSS。</li>
          </ul>
          <div v-highlight>
            <pre>
              <code>
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
  name: 'ajax-6',
  created() {},
  methods: {},
  components: {
    Card
  }
}
</script>

<style scoped lang="stylus">
.ajax-6
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
