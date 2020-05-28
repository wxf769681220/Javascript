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
            <Menu active-name="statement-1" theme="light" width="auto">
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
              <Submenu name="object">
                <template slot="title">
                  <Icon type="ios-keypad"></Icon>对象
                </template>
                <MenuItem name="object-1" to="/object-1">对象及属性</MenuItem>
                <MenuItem name="object-2" to="/object-2">数组方法</MenuItem>
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
