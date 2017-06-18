
import Vue from 'vue'
import Vuex from 'vuex'
import * as VuexFire from 'vuexfire'

Vue.use(Vuex)
Vue.use(VuexFire)

export const store = new Vuex.Store({
  state: {
    notes: []
  },
  mutations: {
    setNotes: function (state, ref) {
      state.notes = ref
    }
  },
  actions: {
    setNotesRef: function ({ commit }, ref) {
      console.log('SetNotes', ref)
      commit('setNotes', ref)
    }
  },
  getters: {
    getNotes: (state) => {
      console.log(state.notes)
      return state.notes
    }
  }
})
