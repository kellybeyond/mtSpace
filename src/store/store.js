import Vue from 'vue'
import Vuex from 'vuex'
import poem from './modules/poem'
import nav from './modules/nav'

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    poem,
    nav
  }
})
