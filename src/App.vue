<template>
  <div id="app">
    <Layout>
      <Header :style="{ position: 'fixed', width: '100%' }">
        <Menu mode="horizontal" theme="dark" active-name="1">
          <div class="layout-logo"></div>
          <div class="layout-nav">
            <MenuItem name="0" to="/javascript/dateType-1">
              <Icon type="ios-navigate"></Icon>Javascript
            </MenuItem>
            <MenuItem name="1" to="/es/es6-1">
              <Icon type="ios-navigate"></Icon>Es6
            </MenuItem>
            <MenuItem name="2">
              <Icon type="ios-keypad"></Icon>Vue
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
    </Layout>
    <router-view></router-view>
  </div>
</template>

<script>
import { Layout, Header, Menu, MenuItem, Icon } from 'view-design'

export default {
  name: 'app',
  created() {
  },
  methods: {},
  components: {
    Layout,
    Header,
    Menu,
    MenuItem,
    Icon
  }
}
</script>

<style scoped lang="stylus">
#app
  .layout-logo
    width: 100px
    height: 30px
    color: #fff
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
  .tab-button
    padding: 6px 10px
    border-top-left-radius: 3px
    border-top-right-radius: 3px
    border: 1px solid #ccc
    cursor: pointer
    background: #f0f0f0
    margin-bottom: -1px
    margin-right: -1px
  .tab-button:hover
    background: #e0e0e0
  .tab-button.active
    background: #e0e0e0
  .tab
    border: 1px solid #ccc
    padding: 10px
</style>
