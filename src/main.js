import Vue from 'vue'
import App from './App.vue'
import router from './router'
import Highlight from './assets/js/highlight.js'

import './assets/stylus/index.styl'
import 'view-design/dist/styles/iview.css'

Vue.use(Highlight)

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
