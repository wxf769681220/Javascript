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
            <Menu active-name="statement-1" theme="light" width="220px">
              <Submenu name="dataType">
                <template slot="title">
                  <Icon type="ios-navigate"></Icon>数据类型
                </template>
                <MenuItem name="dataType-1" to="/dataType-1">数据类型转换</MenuItem>
              </Submenu>
              <Submenu name="operator">
                <template slot="title">
                  <Icon type="ios-navigate"></Icon>运算符
                </template>
                <MenuItem name="operator-1" to="/operator-1">常用运算符</MenuItem>
                <MenuItem name="operator-2" to="/operator-2">优先级</MenuItem>
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
                <MenuItem name="object-2" to="/object-2">OOP模式</MenuItem>
                <MenuItem name="object-3" to="/object-3">序列化对象</MenuItem>
              </Submenu>
              <Submenu name="array">
                <template slot="title">
                  <Icon type="ios-keypad"></Icon>数组
                </template>
                <MenuItem name="array-1" to="/array-1">数组概述</MenuItem>
                <MenuItem name="array-2" to="/array-2">数组方法</MenuItem>
                <MenuItem name="array-3" to="/array-3">类数组对象</MenuItem>
              </Submenu>
              <Submenu name="function">
                <template slot="title">
                  <Icon type="ios-analytics"></Icon>函数
                </template>
                <MenuItem name="function-1" to="/function-1">函数概述</MenuItem>
                <MenuItem name="function-2" to="/function-2">函数参数</MenuItem>
                <MenuItem name="function-3" to="/function-3">闭包</MenuItem>
                <MenuItem name="function-4" to="/function-4">原型对象</MenuItem>
                <MenuItem name="function-5" to="/function-5">继承</MenuItem>
                <MenuItem name="function-6" to="/function-6">继承扩展</MenuItem>
                <MenuItem name="function-7" to="/function-7">模块模式</MenuItem>
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
                <MenuItem name="bom-6" to="/bom-6">定时器</MenuItem>
                <MenuItem name="bom-7" to="/bom-7">客户端检测</MenuItem>
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
              </Submenu>
              <Submenu name="supplement">
                <template slot="title">
                  <Icon type="ios-analytics"></Icon>番外篇
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
