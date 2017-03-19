import Vue from 'vue'
import Vuex from 'vuex'
import regions from './modules/regions'
import stations from './modules/stations'
import resources from './modules/resources'

Vue.use(Vuex)

const debug = process.env.NODE_ENV !== 'production'

export default new Vuex.Store({
  modules: {
    regions,
    stations,
    resources
  },
  strict: debug
})
