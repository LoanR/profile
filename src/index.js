import Vue from 'vue'
import Vuex from 'vuex'
import VueRouter from 'vue-router'

import App from './App.vue'
import router from './router'
import store from './store'
import './assets/styles/common.scss'

Vue.use(VueRouter)
Vue.use(Vuex)
/* eslint-disable-next-line no-new */
new Vue({
  store,
  el: '#app',
  router,
  render: h => h(App)
})
