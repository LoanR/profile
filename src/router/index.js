import Vue from 'vue'
import VueRouter from 'vue-router'

import SinglePage from '../pages/SinglePage.vue'
import { HOME_DATA, PAGES_DATA } from '../core/data.js'

Vue.use(VueRouter)

function formatRoute (page) {
  return { path: page.path, component: SinglePage, props: { pageParts: page.pageParts } }
}

const routes = [...[HOME_DATA], ...PAGES_DATA].map(page => formatRoute(page))

export default new VueRouter({
  routes
})
