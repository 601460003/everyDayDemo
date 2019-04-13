import Vue from 'vue'                        //第一步下载插件并引入
import Vuex from 'vuex'
Vue.use(Vuex);

//常态对象
const state = {                             //第三步定义导出函数的方法（一共4个）
  products: [
    {name: '马云', price: 200, count: 1},
    {name: '马化腾', price: 140, count: 1},
    {name: '马冬梅', price: 20, count: 1},
    {name: '马蓉', price: 10, count: 1},
  ],
  count:1
};

//包含多个更新state函数对象
const mutations = {                                       //第六步把方法定义在库管员内，通过commit去提交
  //两个方法，一个是增加的
  ADDCOUNT(state,payload) {                //在大多数情况下，载荷应该是一个对象，这样可以包含多个字段并且记录的 mutation 会更易读：
    state.count++
  },
  //两个方法，一个是减少的
  DELCOUNT(state) {                       //使用常量(用大写表示官方规范)替代 Mutation 事件类型==必须是同步函数
    state.count--
  },
};

//包括多个对应事件回调函数的对象
const actions = {                                       //第五步使用commit这个方法通知库管员单独修改数据
  addCount({commit}){                                    //在组件中使用store的方法名跟这里的要一一对应。
    //提交mutations
    commit('ADDCOUNT')
  },
  delCount({commit}){
    //提交mutations
    commit('DELCOUNT')
  },
  //带条件的mutations
  increment({commit,state}){
    if(state.count%2===1){
      commit('ADDCOUNT')
    }
  },
  //在actions可以直接异步操作
  delcrement({commit}){
    setTimeout(()=>{
      commit('ADDCOUNT')
    },1000)
  }

};

//包括多个getter计算属性函数的对象
const getters = {                                     //第七部 这个属性跟计算属性是一样的
   evenOradd(state){
     return state.count%2===0?'偶数':'奇数'
   }
};





                                            //  第二步 把需要的函数全部导出
export default new Vuex.Store({
  state,                 //状态对象
  mutations,            //包含多个对应事件回调函数的对象
  actions,              //包括多个对应事件回调函数的对象
  getters,              //包括多个getter计算属性函数的对象
});

