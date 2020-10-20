<template>
  <div class="es6-1">
    <Card shadow style="width:500px">
      <h3 slot="title">1.Node.js</h3>
      <ul class="menu">
        <li>Node.js 是 JavaScript 的服务器运行环境（runtime）。它对 ES6 的支持度更高。</li>
      </ul>
      <div v-highlight>
        <pre>
          <code>
          </code>
        </pre>
      </div>
    </Card>
    <Card shadow style="width:650px">
      <h3 slot="title">2.Babel</h3>
      <ul class="menu">
        <li>Babel 是一个广泛使用的 ES6 转码器，可以将 ES6 代码转为 ES5 代码，从而兼容老版本的浏览器。</li>
        <li>Babel 的配置文件是.babelrc，存放在项目的根目录下。其中 presets 字段设定转码规则，官方提供以下的规则集，你可以根据需要安装。
          <ul class="menu">
            <li>最新转码规则：@babel/preset-env</li>
            <li>react 转码规则：@babel/preset-react</li>
          </ul>
        </li>
        <li>Babel 默认只转换新的 JavaScript 句法（syntax），而不转换新的 API，比如Iterator、Generator、Set、Map、Proxy、Reflect、Symbol、Promise 等全局对象，
          以及一些定义在全局对象上的方法（比如 Object.assign ）都不会转码。举例来说，ES6 在 Array 对象上新增了Array.from方法。
          Babel 就不会转码这个方法。如果想让这个方法运行，可以使用 core-js 和 regenerator-runtime （后者提供generator函数的转码）。
        </li>
        <li>Babel 默认不转码的 API 非常多，详细清单可以查看 babel-plugin-transform-runtime 模块的 definitions.js 文件。
        </li>
      </ul>
      <div v-highlight>
        <pre>
          <code>
            // 安装模块
            $ npm install --save-dev @babel/preset-env
            $ npm install --save-dev @babel/preset-react

            // 配置babel
            {
              "presets": [
                "@babel/env",
                "@babel/preset-react"
              ],
              "plugins": []
            }
          </code>
        </pre>
      </div>
    </Card>
  </div>
</template>

<script>
import { Card } from 'view-design'

export default {
  name: 'es6-1',
  components: {
    Card
  }
}
</script>

<style scoped lang="stylus">
.es6-1
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
