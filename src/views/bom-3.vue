<template>
  <div class="bom-3">
    <div class="layout-content">
      <Card dis-hover shadow style="width:600px">
        <h3 slot="title">1.navigator对象的属性和方法</h3>
        <div>
          <table class="table-bordered">
            <thead>
              <tr class="bg-gray">
                <th>属性或方法</th>
                <th>描述</th>
              </tr>
            </thead>
            <tbody>
              <tr class="bg-1">
                <td>appCodeName</td>
                <td>浏览器名称(通常都是mozilla,即使在非mozilla浏览器中也如此)</td>
              </tr>
              <tr class="bg-1">
                <td>appName</td>
                <td>完整的浏览器名称</td>
              </tr>
              <tr class="bg-2">
                <td>appMinorVersion</td>
                <td>次版本信息</td>
              </tr>
              <tr class="bg-2">
                <td>appVersion</td>
                <td>浏览器版本(一般不与实际版本对应)</td>
              </tr>
              <tr class="bg-2">
                <td>buildID</td>
                <td>浏览器编译版本</td>
              </tr>
              <tr class="bg-1">
                <td>plugins</td>
                <td>浏览器中安装的插件信息的数组</td>
              </tr>
              <tr class="bg-2">
                <td>userAgent</td>
                <td>浏览器用户代理字符串</td>
              </tr>
              <tr class="bg-1">
                <td>cookieEnabled</td>
                <td>表示cookie是否启用</td>
              </tr>
              <tr class="bg-1">
                <td>javaEnabled</td>
                <td>表示java是否启用</td>
              </tr>
              <tr class="bg-2">
                <td>mimeTypes</td>
                <td>在浏览器中注册的MIME类型数组</td>
              </tr>
              <tr class="bg-2">
                <td>onLine</td>
                <td>浏览器是否连接到了因特网</td>
              </tr>
              <tr class="bg-2">
                <td>platform</td>
                <td>浏览器所在的系统平台</td>
              </tr>
              <tr class="bg-2">
                <td>language</td>
                <td>浏览器主语言</td>
              </tr>
            </tbody>
          </table>
        </div>
      </Card>
      <Card dis-hover shadow style="width:700px">
        <h3 slot="title">2.使用navigator.userAgent判断浏览器</h3>
        <div>
          <div v-highlight>
            <pre>
              <code>
                var browser = (function() {
                  var s = navigator.userAgent.toLowerCase()
                  var match = /(webkit)[ \/]([\w.]+)/.exec(s) ||
                  /(opera)(?:.*version)?[ \/]([\w.]+)/.exec(s) ||
                  /(msie) ([\w.]+)/.exec(s) ||
                  !/compatible/.test(s) && /(mozilla)(?:.*? rv:([\w.+]))?/.exec(s) || []
                  return {
                    name: match[1] || '',
                    version: match[2] || '0'
                  }
                }())

                browser => {name: "webkit", version: "537.36"}
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
  name: 'bom-3',
  created() {},
  components: {
    Card
  }
}
</script>

<style scoped lang="stylus">
.bom-3
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
