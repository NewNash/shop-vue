import Vue from 'vue'
import Vuex from 'vuex'
import createLogger from 'vuex/dist/logger'
Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    count:0
  },
  mutations: {
    increatement(state){
      state.count++
    },
    decrement(state){
      state.count--
    },
  },
  actions: {
  },
  modules: {
  },
  plugins: [createLogger()]
})
