/*
  接收组件通知出发mutation调用间接状态方法的对象
 */
import { ADD_TODU,DEL_TODU } from './mutations-type'
  export  default {
    addTodu({commit},todu){
      //提交mutation的请求
      commit(ADD_TODU,{todu})
    },
    delTodu({commit},index){
      //提交mutation的请求
      commit(DEL_TODU,{index})
    }
  }
