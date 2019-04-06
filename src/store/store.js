import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export const store = new Vuex.Store({
    state: {
      products: [
        {name: '马云', price: 200,count:1},
        {name: '马化腾', price: 140,count:1},
        {name: '马冬梅', price: 20,count:1},
        {name: '马蓉', price: 10,count:1},
      ]
    },
  mutations:{
      changeM(state){
        state.products[0].price--
      }
  },
  });

