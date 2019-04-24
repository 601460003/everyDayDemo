
/**
 * vuex中最重要的store
 */

import Vue from 'vue'
import Vuex from  'vuex'

import state from '../stores/state'
import actions from '../stores/actions'
import mutations from '../stores/mutations'
import getters from '../stores/getters'

Vue.use(Vuex)

export  default new Vuex.Store({
  state,
  actions,
  mutations,
  getters
})
