import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    isShow:false,
  },
  getters:{
    loading(state){
      return state.isShow;
    }
  },
  mutations: {
    showLoading(state){
      state.isShow=true;
    },
    hideLoading(state){
      state.isShow=false;
    }
  },
  actions: {
    showLoading({commit}){
      commit('showLoading')
    },
    hideLoading({commit}){
      commit('hideLoading')
    }
  
  },
  modules: {
  }
})
