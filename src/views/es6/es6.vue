<template>
  <div class="es6">
    <div class="layout">
      <Layout :style="{height: '100%'}">
        <Sider hide-trigger :style="{background: '#fff'}">
          <Menu active-name="dataType" theme="light" width="auto" :open-names="['dataType-1']">
            <Submenu name="es6">
              <template slot="title">ES6</template>
              <MenuItem name="es6-1" to="/es6/es6-1">nodeJs、Babel</MenuItem>
              <MenuItem name="es6-2" to="/es/es6-2">let、const</MenuItem>
              <MenuItem name="es6-3" to="/es/es6-3">解构赋值</MenuItem>
              <MenuItem name="es6-4" to="/es/es6-4">字符串扩展</MenuItem>
              <MenuItem name="es6-5" to="/es/es6-5">数值的扩展</MenuItem>
              <MenuItem name="es6-6" to="/es/es6-6">函数的扩展</MenuItem>
              <MenuItem name="es6-7" to="/es/es6-7">数组的扩展</MenuItem>
              <MenuItem name="es6-8" to="/es/es6-8">对象的扩展</MenuItem>
              <MenuItem name="es6-9" to="/es/es6-9">Symbol类型</MenuItem>
              <MenuItem name="es6-10" to="/es/es6-10">Set、Map</MenuItem>
              <MenuItem name="es6-11" to="/es/es6-11">Proxy</MenuItem>
              <MenuItem name="es6-12" to="/es/es6-12">Reflect</MenuItem>
              <MenuItem name="es6-13" to="/es/es6-13">Promise</MenuItem>
              <MenuItem name="es6-14" to="/es/es6-14">Iterator</MenuItem>
              <MenuItem name="es6-15" to="/es/es6-15">Generator 函数</MenuItem>
              <MenuItem name="es6-16" to="/es/es6-16">async 函数</MenuItem>
              <MenuItem name="es6-17" to="/es/es6-17">Class 类</MenuItem>
              <MenuItem name="es6-18" to="/es/es6-18">Class 继承</MenuItem>
              <MenuItem name="es6-19" to="/es/es6-19">mudule 模块</MenuItem>
              <MenuItem name="es6-20" to="/es/es6-20">Generator 函数</MenuItem>
            </Submenu>
          </Menu>
        </Sider>
        <Layout :style="{padding: '0 24px 24px'}">
          <Breadcrumb :style="{margin: '24px 0'}">
            <BreadcrumbItem>Es6</BreadcrumbItem>
            <BreadcrumbItem>Components</BreadcrumbItem>
            <BreadcrumbItem>Layout</BreadcrumbItem>
          </Breadcrumb>
          <Content :style="{padding: '24px', minHeight: '280px', background: '#fff'}">
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
  name: 'es6',
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
.es6
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
