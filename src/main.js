import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
// custom css
import './assets/stylus/index.styl'

// iview css
import 'view-design/dist/styles/iview.css'

import Highlight from './assets/js/highlight.js'

Vue.use(Highlight)

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
