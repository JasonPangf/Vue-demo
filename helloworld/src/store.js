import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
      count :1
  },
  mutations: {
      add(state) {
        state.count++;
      },
      recuction:function (state) {
        state.count--;
      }
  },
  actions: {

  },
  getters:{
    getCount:function (state) //上面的state
    {
      return state.count+1;
    }
  }
})
