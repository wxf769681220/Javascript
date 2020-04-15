<template>
  <div id="app">
    <Layout>
      <Sider
        class="layout-sider layout-sider-fix layout-sider-dark"
        ref="siderHook"
        hide-trigger
        collapsible
        width="256"
        :collapsed-width="80"
        v-model="isCollapsed"
      >
        <div class="layout-sider-logo layout-sider-logo-dark">
          <a href="/" target="_self">
            <img src="https://file.iviewui.com/admin-pro-dist/img/logo-dark.ab519d9f.png" />
          </a>
        </div>
        <Menu active-name="1-2" theme="light" width="auto" :open-names="['1']">
          <Submenu name="1">
            <template slot="title">
              <Icon type="ios-navigate"></Icon>语句
            </template>
            <MenuItem name="1-1" to="/statement-1">重点语句类型</MenuItem>
            <MenuItem name="1-2" to="/statement-2">其他类型语句</MenuItem>
          </Submenu>
          <Submenu name="2">
            <template slot="title">
              <Icon type="ios-keypad"></Icon>Item 2
            </template>
            <MenuItem name="2-1">Option 1</MenuItem>
            <MenuItem name="2-2">Option 2</MenuItem>
          </Submenu>
          <Submenu name="3">
            <template slot="title">
              <Icon type="ios-analytics"></Icon>Item 3
            </template>
            <MenuItem name="3-1">Option 1</MenuItem>
            <MenuItem name="3-2">Option 2</MenuItem>
          </Submenu>
        </Menu>
      </Sider>
      <Layout
        class="layout-inside layout-inside-fix-with-sider"
        :style="{ 'padding-left': isCollapsed ? '80px' : ''}"
      >
        <Header
          class="layout-header-bar layout-header-bar-fix layout-header-bar-light"
          :style="{ 'left': isCollapsed ? '80px' : ''}"
        >
          <Icon @click.native="collapsedSider" :class="rotateIcon" type="md-menu" size="24"></Icon>
        </Header>
        <Content class="layout-content layout-content-fix-with-header">
          <div class="layout-content-main">
            <keep-alive>
              <router-view></router-view>
            </keep-alive>
          </div>
        </Content>
        <Footer class="layout-footer">
          <div>foot</div>
        </Footer>
      </Layout>
    </Layout>
  </div>
</template>

<script>
import {
  Layout,
  Header,
  Content,
  Footer,
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
    return {
      isCollapsed: false
    }
  },
  computed: {
    rotateIcon() {
      return ['menu-icon', this.isCollapsed ? 'rotate-icon' : '']
    },
    menuitemClasses() {
      return ['menu-item', this.isCollapsed ? 'collapsed-menu' : '']
    }
  },
  watch: {},
  mounted() {},
  created() {
    // var x = ['a', 'b', 'c', 'd']
    // for (var i = 0; i < x.length; x[i++] = 0) ;
    // console.log(i)
  },
  methods: {
    collapsedSider() {
      this.$refs.siderHook.toggleCollapse()
    }
  },
  components: {
    Layout,
    Header,
    Content,
    Footer,
    Sider,
    Menu,
    Submenu,
    MenuItem,
    Icon
  }
}
</script>

<style scoped lang="stylus">
.ivu-layout.ivu-layout-has-sider
  & >.ivu-layout
    overflow-x hidden
.layout-sider
  min-height 100vh
.layout-sider-fix
  position fixed
  top 0
  left 0
  z-index 13
.layout-sider-dark
  background #191a23
  box-shadow 2px 0 6px rgba(0, 21, 41, 0.35)
.layout-sider-logo
  height 63px
  line-height 63px
  text-align center
  border-bottom 1px solid #f8f8f9
  overflow hidden
  img
    height 80%
    vertical-align middle
.layout-sider-logo-dark
  border-bottom 1px solid #101117
  background #191a23
.layout-inside
  display flex
  flex-direction column
  flex auto
  min-height 100vh
  background #f5f7f9
  transition all 0.2s ease-in-out
.layout-inside-fix-with-sider
  padding-left 256px
.layout-header-bar
  display block
  padding 0 20px
  width 100%
  flex 0 0 auto
  height 64px
  line-height 64px
  transition all 0.2s ease-in-out
.layout-header-bar-fix
  position fixed
  top 0
  right 0
  left 256px
  z-index 11
.layout-header-bar-light
  background #fff
  box-shadow 0 1px 4px rgba(0, 21, 41, 0.08)
.layout-content
  min-height 260px
.layout-content-fix-with-header
  padding-top 64px
.layout-content-main
  margin 24px
.menu-icon
  transition all 0.3s
.rotate-icon
  transform rotate(-90deg)
.menu-item span
  display inline-block
  overflow hidden
  width 69px
  text-overflow ellipsis
  white-space nowrap
  vertical-align bottom
  transition width 0.2s ease 0.2s
.menu-item i
  transform translateX(0px)
  transition font-size 0.2s ease, transform 0.2s ease
  vertical-align middle
  font-size 16px
.collapsed-menu span
  width 0px
  transition width 0.2s ease
.collapsed-menu i
  transform translateX(5px)
  transition font-size 0.2s ease 0.2s, transform 0.2s ease 0.2s
  vertical-align middle
  font-size 22px
</style>
