const path = require('path')
// const webpack = require('webpack')

function resolve(dir) {
  return path.join(__dirname, dir)
}

// //mock data
// const appData = require('./data.json')
// const menu = appData.menu

module.exports = {
  css: {
    loaderOptions: {
      less: {
        javascriptEnabled: true
      }
    }
  },
  // devServer: {
  //   before(app) {
  //     app.get('/api/menu', function (req, res) {
  //       res.json({
  //         code: 200,
  //         data: menu
  //       })
  //     })
  //   }
  // },
  configureWebpack: config => {
    if (process.env.NODE_ENV === 'production') {
      // 为生产环境修改配置...
    } else {
      // 为开发环境修改配置...
    }
  },
  chainWebpack: config => {
    config.resolve.alias
      .set('api', resolve('src/api'))
      .set('common', resolve('src/assets'))
      .set('components', resolve('src/components'))
      .set('views', resolve('src/views'))
  }
}