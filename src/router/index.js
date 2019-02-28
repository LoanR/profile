import Vue from 'vue'
import VueRouter from 'vue-router'

import Home from '../pages/Home.vue'
import { HOME_DATA, PAGES_DATA } from '../content/data.js'

Vue.use(VueRouter)

function formatRoute (page, i) {
  return { path: page.path, component: Home, props: page.props, meta: { depth: i } }
}

const routes = [...[HOME_DATA], ...PAGES_DATA].map((page, i) => formatRoute(page, i))

export default new VueRouter({
  routes
})
