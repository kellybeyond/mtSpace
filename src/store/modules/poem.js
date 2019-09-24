const state = {
  poem: ''
}

const mutations = {
  change: function (state, poem) {
    state = poem
  }
}
export default {
  namespaced: true,
  state,
  mutations
}
