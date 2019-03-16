import Vue from 'vue'
import Router from 'vue-router'

import Collections from '../pages/Collections.vue'
import Detail from '../pages/Detail.vue'
Vue.use(Router)

const routes = [
  {
    path: '/',
    name: 'collections',
    component: Collections
  },
  {
    path: '/detail',
    name: 'detail',
    component: Detail
  }
]

export default new Router ({
  routes
})