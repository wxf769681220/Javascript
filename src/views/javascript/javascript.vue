<template>
  <div class="javascript">
    <div class="layout">
      <Layout :style="{height: '100%'}">
        <Sider hide-trigger :style="{background: '#fff'}">
          <Menu active-name="dataType" theme="light" width="auto" :open-names="['dataType-1']">
            <Submenu name="dataType">
              <template slot="title">数据类型</template>
              <MenuItem name="dataType-1" to="/javascript/dateType-1">数据转换</MenuItem>
              <MenuItem name="dataType-2" to="/javascript/dataType-2">转换方法</MenuItem>
              <MenuItem name="dataType-3" to="/javascript/dataType-3">类型检测</MenuItem>
            </Submenu>
            <Submenu name="operator">
              <template slot="title">运算符</template>
              <MenuItem name="operator-1" to="/javascript/operator-1">常用运算符</MenuItem>
              <MenuItem name="operator-2" to="/javascript/operator-2">位运算符</MenuItem>
              <MenuItem name="operator-3" to="/javascript/operator-3">优先级</MenuItem>
            </Submenu>
            <Submenu name="statement">
              <template slot="title">语句</template>
              <MenuItem name="statement-1" to="/javascript/statement-1">常用语句</MenuItem>
              <MenuItem name="statement-2" to="/javascript/statement-2">条件、循环语句</MenuItem>
              <MenuItem name="statement-3" to="/javascript/statement-3">语句补充</MenuItem>
            </Submenu>
            <Submenu name="reference">
              <template slot="title">引用类型</template>
              <MenuItem name="reference-1" to="/javascript/reference-type-1">日期</MenuItem>
              <MenuItem name="reference-2" to="/javascript/reference-type-2">正则表达式</MenuItem>
              <MenuItem name="reference-3" to="/javascript/reference-type-3">基本包装类型</MenuItem>
              <MenuItem name="reference-4" to="/javascript/reference-type-4">单体内置对象</MenuItem>
            </Submenu>
            <Submenu name="object">
              <template slot="title">对象</template>
              <MenuItem name="object-1" to="/javascript/object-1">对象及属性</MenuItem>
              <MenuItem name="object-2" to="/javascript/object-2">面向对象的设计模式</MenuItem>
              <MenuItem name="object-3" to="/javascript/object-3">序列化对象</MenuItem>
              <MenuItem name="object-4" to="/javascript/object-4">代理对象(Proxy)</MenuItem>
            </Submenu>
            <Submenu name="array">
              <template slot="title">数组</template>
              <MenuItem name="array-1" to="/javascript/array-1">数组概述</MenuItem>
              <MenuItem name="array-2" to="/javascript/array-2">数组方法</MenuItem>
              <MenuItem name="array-3" to="/javascript/array-3">类数组对象</MenuItem>
              <MenuItem name="array-4" to="/javascript/array-4">迭代器</MenuItem>
            </Submenu>
            <Submenu name="function">
              <template slot="title">函数</template>
              <MenuItem name="function-1" to="/javascript/function-1">函数概述</MenuItem>
              <MenuItem name="function-2" to="/javascript/function-2">函数参数</MenuItem>
              <MenuItem name="function-3" to="/javascript/function-3">执行环境、作用域链、闭包</MenuItem>
              <MenuItem name="function-4" to="/javascript/function-4">原型对象</MenuItem>
              <MenuItem name="function-5" to="/javascript/function-5">继承</MenuItem>
              <MenuItem name="function-6" to="/javascript/function-6">继承扩展</MenuItem>
            </Submenu>
            <Submenu name="function-hight">
              <template slot="title">高级函数</template>
              <MenuItem name="function-hight-1" to="/javascript/function-hight-1">函数模块设计模式</MenuItem>
              <MenuItem name="function-hight-2" to="/javascript/function-hight-2">高级函数</MenuItem>
              <MenuItem name="function-hight-3" to="/javascript/function-hight-3">函数相关方法</MenuItem>
            </Submenu>
            <Submenu name="bom">
              <template slot="title">BOM</template>
              <MenuItem name="bom-1" to="/javascript/bom-1">window对象</MenuItem>
              <MenuItem name="bom-2" to="/javascript/bom-2">location对象</MenuItem>
              <MenuItem name="bom-3" to="/javascript/bom-3">navigator对象</MenuItem>
              <MenuItem name="bom-4" to="/javascript/bom-4">screen对象</MenuItem>
              <MenuItem name="bom-5" to="/javascript/bom-5">history对象</MenuItem>
            </Submenu>
            <Submenu name="dom">
              <template slot="title">DOM</template>
              <MenuItem name="dom-1" to="/javascript/dom-1">1.节点-Node类型</MenuItem>
              <MenuItem name="dom-2" to="/javascript/dom-2">2.文档-Document类型</MenuItem>
              <MenuItem name="dom-3" to="/javascript/dom-3">3.元素-Element类型</MenuItem>
              <MenuItem name="dom-4" to="/javascript/dom-4">4.文本-Text类型</MenuItem>
              <MenuItem name="dom-5" to="/javascript/dom-5">5.文档片段-DocumentFragment类型</MenuItem>
              <MenuItem name="dom-6" to="/javascript/dom-6">6.DOM动态脚本</MenuItem>
              <MenuItem name="dom-7" to="/javascript/dom-7">7.DOM扩展</MenuItem>
              <MenuItem name="dom-8" to="/javascript/dom-8">8.DOM2和DOM3</MenuItem>
            </Submenu>
            <Submenu name="dom-event">
              <template slot="title">事件处理程序</template>
              <MenuItem name="dom-event-1" to="/javascript/dom-event-1">1.事件处理程序</MenuItem>
              <MenuItem name="dom-event-2" to="/javascript/dom-event-2">2.事件对象</MenuItem>
              <MenuItem name="dom-event-5" to="/javascript/dom-event-3">3.模拟事件</MenuItem>
              <MenuItem name="dom-event-6" to="/javascript/dom-event-4">4.事件委托</MenuItem>
            </Submenu>

            <Submenu name="dom-event-type">
              <template slot="title">DOM相关事件</template>
              <MenuItem name="dom-event-type-1" to="/javascript/dom-event-type-1">1.window 相关事件</MenuItem>
              <MenuItem name="dom-event-type-2" to="/javascript/dom-event-type-2">2.焦点事件</MenuItem>
              <MenuItem name="dom-event-type-3" to="/javascript/dom-event-type-3">3.鼠标与滚轮事件</MenuItem>
              <MenuItem name="dom-event-type-4" to="/javascript/dom-event-type-4">4.键盘与文本事件</MenuItem>
              <MenuItem name="dom-event-type-5" to="/javascript/dom-event-type-5">5.HTML DOM变动事件</MenuItem>
              <MenuItem name="dom-event-type-6" to="/javascript/dom-event-type-6">6.设备相关事件</MenuItem>
              <MenuItem name="dom-event-type-7" to="/javascript/dom-event-type-7">7.剪贴板事件</MenuItem>
            </Submenu>
            <Submenu name="canvas">
              <template slot="title">Canvas绘图</template>
            </Submenu>
            <Submenu name="form">
              <template slot="title">表单</template>
              <MenuItem name="form-1" to="/javascript/form-1">1.Form类型</MenuItem>
              <MenuItem name="form-2" to="/javascript/form-2">2.表单字段</MenuItem>
              <MenuItem name="form-3" to="/javascript/form-3">3.表单序列化</MenuItem>
              <MenuItem name="form-4" to="/javascript/form-4">4.选择框、富文本编辑</MenuItem>
            </Submenu>
            <Submenu name="json">
              <template slot="title">JSON</template>
              <MenuItem name="json-1" to="/javascript/json-1">1.解析与序列化</MenuItem>
            </Submenu>
            <Submenu name="ajax">
              <template slot="title">Ajax</template>
              <MenuItem name="ajax-1" to="/javascript/ajax-1">1.XMLHttpRequest对象</MenuItem>
              <MenuItem name="ajax-2" to="/javascript/ajax-2">2.XMLHttpRequest2级</MenuItem>
              <MenuItem name="ajax-3" to="/javascript/ajax-3">3.HTTP请求</MenuItem>
              <MenuItem name="ajax-4" to="/javascript/ajax-4">4.跨域资源共享CORS</MenuItem>
              <MenuItem name="ajax-5" to="/javascript/ajax-5">5.其他跨域技术</MenuItem>
              <MenuItem name="ajax-6" to="/javascript/ajax-6">6.跨站脚本XSS</MenuItem>
            </Submenu>
            <Submenu name="web-works">
              <template slot="title">Web Works</template>
              <MenuItem name="web-works-1" to="/javascript/web-works-1">模拟多线程</MenuItem>
            </Submenu>
            <Submenu name="page">
              <template slot="title">Page visibility</template>
              <MenuItem name="page-1" to="/javascript/page-1">基础用法</MenuItem>
            </Submenu>
            <Submenu name="timer">
              <template slot="title">定时器</template>
              <MenuItem name="timer-1" to="/javascript/timer-1">超时和间歇调用</MenuItem>
              <MenuItem name="timer-2" to="/javascript/timer-2">高级定时器</MenuItem>
            </Submenu>
            <Submenu name="storage">
              <template slot="title">客户端存储</template>
              <MenuItem name="storage-1" to="/javascript/storage-1">1.Cookie</MenuItem>
              <MenuItem name="storage-2" to="/javascript/storage-2">2.Storage</MenuItem>
            </Submenu>
            <Submenu name="offline-app">
              <template slot="title">离线应用</template>
              <MenuItem name="offline-app-1" to="/javascript/offline-app-1">1.基础用法</MenuItem>
            </Submenu>
            <Submenu name="network">
              <template slot="title">网络通信</template>
              <MenuItem name="network-1" to="/javascript/network-1">1.HTTP2.0</MenuItem>
              <MenuItem name="network-2" to="/javascript/network-2">2.SSL</MenuItem>
            </Submenu>
            <Submenu name="api">
              <template slot="title">API</template>
              <MenuItem name="api-1" to="/javascript/api-1">动画循环</MenuItem>
              <MenuItem name="api-2" to="/javascript/api-2">地理定位</MenuItem>
              <MenuItem name="api-3" to="/javascript/api-3">本地文件读取与上传</MenuItem>
              <MenuItem name="api-4" to="/javascript/api-4">Web计时</MenuItem>
              <MenuItem name="api-5" to="/javascript/api-5">原生拖放</MenuItem>
              <MenuItem name="api-6" to="/javascript/api-6">媒体元素</MenuItem>
            </Submenu>
            <Submenu name="client">
              <template slot="title">客户端</template>
              <MenuItem name="client-1" to="/javascript/client-1">客户端检测</MenuItem>
              <MenuItem name="client-2" to="/javascript/client-2">错误处理与调试</MenuItem>
              <MenuItem name="client-3" to="/javascript/client-3">浏览器渲染与缓存</MenuItem>
              <MenuItem name="client-4" to="/javascript/client-4">浏览器适配与兼容</MenuItem>
            </Submenu>
            <Submenu name="best">
              <template slot="title">最佳实践</template>
              <MenuItem name="best-1" to="/javascript/best-1">1.代码维护</MenuItem>
              <MenuItem name="best-2" to="/javascript/best-2">2.性能提升</MenuItem>
              <MenuItem name="best-3" to="/javascript/best-3">3.优化DOM交互</MenuItem>
            </Submenu>
            <Submenu name="supplement">
              <template slot="title">知识点补充</template>
              <MenuItem name="supplement-1" to="/javascript/supplement-1">知识点补充</MenuItem>
            </Submenu>
          </Menu>
        </Sider>
        <Layout :style="{padding: '0 24px 24px'}">
          <Breadcrumb :style="{margin: '24px 0'}">
            <BreadcrumbItem>Javascript</BreadcrumbItem>
            <BreadcrumbItem>Components</BreadcrumbItem>
            <BreadcrumbItem>Layout</BreadcrumbItem>
          </Breadcrumb>
          <Content :style="{padding: '24px', minHeight: '280px'}">
            <router-view></router-view>
          </Content>
        </Layout>
      </Layout>
    </div>
  </div>
</template>

<script>
import {
  Layout,
  Sider,
  Menu,
  Submenu,
  MenuItem,
  Breadcrumb,
  BreadcrumbItem,
  Content
} from 'view-design'

export default {
  name: 'javascript',
  watch: {
    $route(newVal, oldVal) {
      console.log(newVal)
      console.log(oldVal)
    }
  },
  components: {
    Layout,
    Sider,
    Menu,
    Submenu,
    MenuItem,
    Breadcrumb,
    BreadcrumbItem,
    Content
  }
}
</script>

<style scoped lang="stylus">
.javascript
  padding-top: 64px
  height: 100vh
  .layout
    height: 100%
    background: #f5f7f9
    overflow: hidden
  .layout-logo
    width: 100px
    height: 30px
    background: #5b6270
    border-radius: 3px
    float: left
    position: relative
    top: 15px
    left: 20px
  .layout-nav
    width: 420px
    margin: 0 auto
    margin-right: 20px
  >>>.ivu-layout-sider
    overflow: auto
    overflow: -moz-scrollbars-none
    overflow: -moz-scrollbars-none
    &::-webkit-scrollbar
      display: none
      -webkit-overflow-scrolling: touch
</style>
