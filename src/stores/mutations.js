/*
  包含多个由actions触发去直接更新状态方法的对象
 */

import { ADD_TODU,DEL_TODU } from "./mutations-type";

export default {
  add_todu(state,{todu}){
    state.todos.unshift(todu)
  },

  del_todu(state,{index}){
    state.todos.splice(index,1)
  },
}
