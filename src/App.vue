<template>
  <div id="app">
    <div class="layout">
      <Layout>
        <Header>
          <Menu mode="horizontal" theme="dark" active-name="1">
            <div class="layout-logo"></div>
            <div class="layout-nav">
              <MenuItem name="1">
                <Icon type="ios-navigate"></Icon>Item 1
              </MenuItem>
              <MenuItem name="2">
                <Icon type="ios-keypad"></Icon>Item 2
              </MenuItem>
              <MenuItem name="3">
                <Icon type="ios-analytics"></Icon>Item 3
              </MenuItem>
              <MenuItem name="4">
                <Icon type="ios-paper"></Icon>Item 4
              </MenuItem>
            </div>
          </Menu>
        </Header>
        <Layout>
          <Sider hide-trigger :style="{background: '#fff'}">
            <Menu active-name="statement-1" theme="light" accordion width="240px">
              <Submenu name="dataType">
                <template slot="title">
                  <Icon type="ios-navigate"></Icon>数据类型
                </template>
                <MenuItem name="dataType-1" to="/dataType-1">隐式转换</MenuItem>
                <MenuItem name="dataType-2" to="/dataType-2">显式转换</MenuItem>
                <MenuItem name="dataType-3" to="/dataType-3">数据类型检测</MenuItem>
              </Submenu>
              <Submenu name="operator">
                <template slot="title">
                  <Icon type="ios-navigate"></Icon>运算符
                </template>
                <MenuItem name="operator-1" to="/operator-1">常用运算符</MenuItem>
                <MenuItem name="operator-2" to="/operator-2">运算符扩展</MenuItem>
                <MenuItem name="operator-3" to="/operator-3">优先级</MenuItem>
              </Submenu>
              <Submenu name="statement">
                <template slot="title">
                  <Icon type="ios-navigate"></Icon>语句
                </template>
                <MenuItem name="statement-1" to="/statement-1">常用语句</MenuItem>
                <MenuItem name="statement-2" to="/statement-2">条件、循环语句</MenuItem>
                <MenuItem name="statement-3" to="/statement-3">语句补充</MenuItem>
              </Submenu>
              <Submenu name="reference">
                <template slot="title">
                  <Icon type="ios-navigate"></Icon>引用类型
                </template>
                <MenuItem name="reference-1" to="/reference-type-1">日期</MenuItem>
                <MenuItem name="reference-2" to="/reference-type-2">正则表达式</MenuItem>
                <MenuItem name="reference-3" to="/reference-type-3">基本包装类型</MenuItem>
                <MenuItem name="reference-4" to="/reference-type-4">单体内置对象</MenuItem>
              </Submenu>
              <Submenu name="object">
                <template slot="title">
                  <Icon type="ios-keypad"></Icon>对象
                </template>
                <MenuItem name="object-1" to="/object-1">对象及属性</MenuItem>
                <MenuItem name="object-2" to="/object-2">面向对象的设计模式</MenuItem>
                <MenuItem name="object-3" to="/object-3">序列化对象</MenuItem>
                <MenuItem name="object-4" to="/object-4">代理对象(Proxy)</MenuItem>
              </Submenu>
              <Submenu name="array">
                <template slot="title">
                  <Icon type="ios-keypad"></Icon>数组
                </template>
                <MenuItem name="array-1" to="/array-1">数组概述</MenuItem>
                <MenuItem name="array-2" to="/array-2">数组方法</MenuItem>
                <MenuItem name="array-3" to="/array-3">类数组对象</MenuItem>
                <MenuItem name="array-4" to="/array-4">迭代器</MenuItem>
              </Submenu>
              <Submenu name="function">
                <template slot="title">
                  <Icon type="ios-analytics"></Icon>函数
                </template>
                <MenuItem name="function-1" to="/function-1">函数概述</MenuItem>
                <MenuItem name="function-2" to="/function-2">函数参数</MenuItem>
                <MenuItem name="function-3" to="/function-3">执行环境、作用域链、闭包</MenuItem>
                <MenuItem name="function-4" to="/function-4">原型对象</MenuItem>
                <MenuItem name="function-5" to="/function-5">继承</MenuItem>
                <MenuItem name="function-6" to="/function-6">继承扩展</MenuItem>
              </Submenu>
              <Submenu name="function-hight">
                <template slot="title">
                  <Icon type="ios-analytics"></Icon>高级函数
                </template>
                <MenuItem name="function-hight-1" to="/function-hight-1">函数模块设计模式</MenuItem>
                <MenuItem name="function-hight-2" to="/function-hight-2">高级函数</MenuItem>
                <MenuItem name="function-hight-3" to="/function-hight-3">函数相关方法</MenuItem>
              </Submenu>
              <Submenu name="bom">
                <template slot="title">
                  <Icon type="ios-analytics"></Icon>BOM
                </template>
                <MenuItem name="bom-1" to="/bom-1">window对象</MenuItem>
                <MenuItem name="bom-2" to="/bom-2">location对象</MenuItem>
                <MenuItem name="bom-3" to="/bom-3">navigator对象</MenuItem>
                <MenuItem name="bom-4" to="/bom-4">screen对象</MenuItem>
                <MenuItem name="bom-5" to="/bom-5">history对象</MenuItem>
              </Submenu>
              <Submenu name="dom">
                <template slot="title">
                  <Icon type="ios-analytics"></Icon>DOM
                </template>
                <MenuItem name="dom-1" to="/dom-1">1.节点-Node类型</MenuItem>
                <MenuItem name="dom-2" to="/dom-2">2.文档-Document类型</MenuItem>
                <MenuItem name="dom-3" to="/dom-3">3.元素-Element类型</MenuItem>
                <MenuItem name="dom-4" to="/dom-4">4.文本-Text类型</MenuItem>
                <MenuItem name="dom-5" to="/dom-5">5.文档片段-DocumentFragment类型</MenuItem>
                <MenuItem name="dom-6" to="/dom-6">6.DOM动态脚本</MenuItem>
                <MenuItem name="dom-7" to="/dom-7">7.DOM扩展</MenuItem>
                <MenuItem name="dom-8" to="/dom-8">8.DOM2和DOM3</MenuItem>
              </Submenu>
              <Submenu name="dom-event">
                <template slot="title">
                  <Icon type="ios-analytics"></Icon>DOM-事件
                </template>
                <MenuItem name="dom-event-1" to="/dom-event-1">1.事件处理程序</MenuItem>
                <MenuItem name="dom-event-2" to="/dom-event-2">2.事件对象</MenuItem>
                <MenuItem name="dom-event-5" to="/dom-event-3">3.模拟事件</MenuItem>
                <MenuItem name="dom-event-6" to="/dom-event-4">4.事件委托</MenuItem>
              </Submenu>

              <Submenu name="dom-event-type">
                <template slot="title">
                  <Icon type="ios-analytics"></Icon>DOM-事件集
                </template>
                <MenuItem name="dom-event-type-1" to="/dom-event-type-1">1.window 相关事件</MenuItem>
                <MenuItem name="dom-event-type-2" to="/dom-event-type-2">2.焦点事件</MenuItem>
                <MenuItem name="dom-event-type-3" to="/dom-event-type-3">3.鼠标与滚轮事件</MenuItem>
                <MenuItem name="dom-event-type-4" to="/dom-event-type-4">4.键盘与文本事件</MenuItem>
                <MenuItem name="dom-event-type-5" to="/dom-event-type-5">5.HTML DOM变动事件</MenuItem>
                <MenuItem name="dom-event-type-6" to="/dom-event-type-6">6.设备相关事件</MenuItem>
                <MenuItem name="dom-event-type-7" to="/dom-event-type-7">7.剪贴板事件</MenuItem>
              </Submenu>
              <Submenu name="canvas">
                <template slot="title">
                  <Icon type="ios-analytics"></Icon>Canvas绘图
                </template>
              </Submenu>
              <Submenu name="form">
                <template slot="title">
                  <Icon type="ios-analytics"></Icon>表单
                </template>
                <MenuItem name="form-1" to="/form-1">1.Form类型</MenuItem>
                <MenuItem name="form-2" to="/form-2">2.表单字段</MenuItem>
                <MenuItem name="form-3" to="/form-3">3.表单序列化</MenuItem>
                <MenuItem name="form-4" to="/form-4">4.选择框、富文本编辑</MenuItem>
              </Submenu>
              <Submenu name="json">
                <template slot="title">
                  <Icon type="ios-analytics"></Icon>JSON
                </template>
                <MenuItem name="json-1" to="/json-1">1.解析与序列化</MenuItem>
              </Submenu>
              <Submenu name="ajax">
                <template slot="title">
                  <Icon type="ios-analytics"></Icon>Ajax
                </template>
                <MenuItem name="ajax-1" to="/ajax-1">1.XMLHttpRequest对象</MenuItem>
                <MenuItem name="ajax-2" to="/ajax-2">2.XMLHttpRequest2级</MenuItem>
                <MenuItem name="ajax-3" to="/ajax-3">3.HTTP请求</MenuItem>
                <MenuItem name="ajax-4" to="/ajax-4">4.跨域资源共享CORS</MenuItem>
                <MenuItem name="ajax-5" to="/ajax-5">5.其他跨域技术</MenuItem>
                <MenuItem name="ajax-6" to="/ajax-6">6.跨站脚本XSS</MenuItem>
              </Submenu>
              <Submenu name="web-works">
                <template slot="title">
                  <Icon type="ios-analytics"></Icon>Web Works
                </template>
                <MenuItem name="web-works-1" to="/web-works-1">基础用法</MenuItem>
              </Submenu>
              <Submenu name="page">
                <template slot="title">
                  <Icon type="ios-analytics"></Icon>Page visibility
                </template>
                <MenuItem name="page-1" to="/page-1">基础用法</MenuItem>
              </Submenu>
              <Submenu name="timer">
                <template slot="title">
                  <Icon type="ios-analytics"></Icon>定时器
                </template>
                <MenuItem name="timer-1" to="/timer-1">超时和间歇调用</MenuItem>
                <MenuItem name="timer-2" to="/timer-2">高级定时器</MenuItem>
              </Submenu>
              <Submenu name="storage">
                <template slot="title">
                  <Icon type="ios-analytics"></Icon>客户端存储
                </template>
                <MenuItem name="storage-1" to="/storage-1">1.Cookie</MenuItem>
                <MenuItem name="storage-2" to="/storage-2">2.Storage</MenuItem>
              </Submenu>
              <Submenu name="offline-app">
                <template slot="title">
                  <Icon type="ios-analytics"></Icon>离线应用
                </template>
                <MenuItem name="offline-app-1" to="/offline-app-1">1.基础用法</MenuItem>
              </Submenu>
              <Submenu name="network">
                <template slot="title">
                  <Icon type="ios-analytics"></Icon>网络通信
                </template>
                <MenuItem name="network-1" to="/network-1">1.HTTP2.0</MenuItem>
                <MenuItem name="network-2" to="/network-2">2.SSL</MenuItem>
              </Submenu>
              <Submenu name="api">
                <template slot="title">
                  <Icon type="ios-analytics"></Icon>API
                </template>
                <MenuItem name="api-1" to="/api-1">动画循环</MenuItem>
                <MenuItem name="api-2" to="/api-2">地理定位</MenuItem>
                <MenuItem name="api-3" to="/api-3">本地文件读取与上传</MenuItem>
                <MenuItem name="api-4" to="/api-4">Web计时</MenuItem>
                <MenuItem name="api-5" to="/api-5">原生拖放</MenuItem>
                <MenuItem name="api-6" to="/api-6">媒体元素</MenuItem>
              </Submenu>
              <Submenu name="client">
                <template slot="title">
                  <Icon type="ios-analytics"></Icon>客户端
                </template>
                <MenuItem name="client-1" to="/client-1">客户端检测</MenuItem>
                <MenuItem name="client-2" to="/client-2">错误处理与调试</MenuItem>
                <MenuItem name="client-3" to="/client-3">浏览器渲染与缓存</MenuItem>
                <MenuItem name="client-4" to="/client-4">浏览器适配与兼容</MenuItem>
              </Submenu>
              <Submenu name="best">
                <template slot="title">
                  <Icon type="ios-analytics"></Icon>最佳实践
                </template>
                <MenuItem name="best-1" to="/best-1">1.代码维护</MenuItem>
                <MenuItem name="best-2" to="/best-2">2.性能提升</MenuItem>
                <MenuItem name="best-3" to="/best-3">3.优化DOM交互</MenuItem>
              </Submenu>
              <Submenu name="supplement">
                <template slot="title">
                  <Icon type="ios-analytics"></Icon>知识点补充
                </template>
                <MenuItem name="supplement-1" to="/supplement-1">知识点补充</MenuItem>
              </Submenu>
            </Menu>
          </Sider>
          <Layout :style="{padding: '0 24px 24px'}">
            <Content :style="{padding: '24px', minHeight: '280px'}">
              <router-view></router-view>
            </Content>
          </Layout>
        </Layout>
      </Layout>
    </div>
  </div>
</template>

<script>
import {
  Layout,
  Header,
  Content,
  Sider,
  Menu,
  Submenu,
  MenuItem,
  Icon
} from 'view-design'

export default {
  name: 'app',
  props: {},
  data() {
    return {}
  },
  computed: {},
  watch: {},
  mounted() {},
  created() {},
  methods: {},
  components: {
    Layout,
    Header,
    Content,
    Sider,
    Menu,
    Submenu,
    MenuItem,
    Icon
  }
}
</script>

<style scoped lang="stylus">
.layout
  border: 1px solid #d7dde4
  background: #f5f7f9
  position: relative
  border-radius: 4px
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
</style>
