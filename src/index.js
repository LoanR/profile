import Vue from 'vue'
import VueRouter from 'vue-router'
import router from './router'

import App from './App.vue'
import './assets/styles/common.scss'

Vue.use(VueRouter)
/* eslint-disable-next-line no-new */
new Vue({
  el: '#app',
  router,
  render: h => h(App)
})
