const state = {
  path: ''
}

const mutations = {
  change: function (state, path) {
    state = path
  }
}
export default {
  namespaced: true,
  state,
  mutations
}
