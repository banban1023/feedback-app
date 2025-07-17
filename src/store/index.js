import Vue from 'vue'
import Vuex from 'vuex'
import tag from '@/store/modules/tag.js'
import countmap from '@/store/modules/countmap.js'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
  },
  getters: {
  },
  mutations: {
  },
  actions: {
  },
  modules: {
    tag,
    countmap
  }
})
