import Vue from 'vue'
import VueRouter from 'vue-router'

import App from 'components/App.vue'
import Home from 'components/Home.vue'
import Regions from 'components/Regions.vue'
import Stations from 'components/Stations.vue'
import About from 'components/About.vue'
import NotFound from 'components/NotFound.vue'

import store from 'store'

Vue.use(VueRouter)

const routes = [
  { path: '/', component: Home },
  { path: '/regions', component: Regions },
  { path: '/stations', component: Stations },
  { path: '/about', component: About },
  { path: '*', component: NotFound }
]

const router = new VueRouter({
  routes
})

const app = new Vue({
  el: '#app',
  router,
  store,
  render: h => h(App)
})
