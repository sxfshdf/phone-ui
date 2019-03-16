import Vue from 'vue'
import App from './App.vue'
import router from './router'

import './assets/css/font.css'
import './assets/css/common.scss'
import './assets/js/svg.js'

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
