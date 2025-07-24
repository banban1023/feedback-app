import data from '@/db/data.json'
export default {
  namespaced: true,
  state () {
    return {
      suggdata: null, // 所有suggestion
      currentItem: null // 当前点击
    }
  },
  mutations: {
    setSuggest (state, data) {
      state.suggdata = data.productRequests
    },
    setCurrentItem (state, item) {
      state.currentItem = item
    }
  },
  getters: {
    getSuggData: state => state.suggdata,
    getCurrentItem: state => state.currentItem,
    plannedCount: state => state.suggdata
      ? state.suggdata.filter(item => item.status === 'planned').length
      : 0,
    progressCount: state => state.suggdata
      ? state.suggdata.filter(item => item.status === 'in-progress').length
      : 0,
    liveCount: state => state.suggdata
      ? state.suggdata.filter(item => item.status === 'live').length
      : 0
  },
  actions: {
    loadSuggData ({ commit }) {
      commit('setSuggest', data)
    }
  }
}
