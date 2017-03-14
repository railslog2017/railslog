import Vue from 'vue'
import VueRouter from 'vue-router'

import App from 'components/App.vue'

Vue.use(VueRouter)

const app = new Vue({
  el: '#app',
  render: h => h(App)
})
