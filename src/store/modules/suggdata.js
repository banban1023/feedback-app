import data from '@/db/data.json'
export default {
  namespaced: true,
  state () {
    return {
      suggdata: null, // 所有suggestion
      currentItem: null, // 当前点击
      currentUser: data.currentUser
    }
  },
  mutations: {
    setSuggest (state, data) {
      state.suggdata = data.productRequests
    },
    setCurrentItem (state, item) {
      state.currentItem = item
    },
    // new一个建议
    addSuggestion (state, newItem) {
      state.suggdata.unshift(newItem)
    },
    // 评论
    addComment (state, { feedbackId, comment }) {
      const feedback = state.suggdata.find(item => item.id === feedbackId)
      if (feedback) {
        if (!feedback.comments) {
          feedback.comments = []
        }
        feedback.comments.push(comment)
        // 更新当前项目
        if (state.currentItem && state.currentItem.id === feedbackId) {
          state.currentItem = { ...feedback }
        }
      }
    }
  },
  getters: {
    getSuggData: state => state.suggdata,
    getCurrentItem: state => state.currentItem,
    getCurrentUser: state => state.currentUser, // 添加当前用户 getter
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
    },
    // 添加评论的 action
    addComment ({ commit, state, getters }, { feedbackId, content }) {
      const currentUser = getters.getCurrentUser
      const newComment = {
        id: Date.now(), // 使用时间戳作为临时ID
        content,
        user: {
          image: currentUser.image,
          name: currentUser.name,
          username: currentUser.username
        }
      }
      commit('addComment', { feedbackId, comment: newComment })
    }
  }
}
