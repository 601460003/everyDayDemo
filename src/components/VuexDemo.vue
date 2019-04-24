<template>
    <div>
      <p>click {{count}} time counts is {{evenOradd}}</p>
      <button @click="addCount">+</button>
      <button @click="delCount">-</button>
      <button @click="increment">increment if add</button>
      <button @click="delcrement">increment async</button>
    </div>
</template>

<script>
  import {mapState,mapActions,mapGetters} from 'vuex'    //组件简写方法...的第一步引入辅助函数
    export default {
     methods:{                                //第四步调用actions的方法dispatch 去通知vuex去更新数据
       // addCount() {                      //Action 通过 store.dispatch 方法分发：mutation 必须同步执行这个限制么
       //   //通知vuex去更新数据
       //   this.$store.dispatch('addCount')
       // },
       // delCount() {
       //   //通知vuex去更新数据
       //   this.$store.dispatch('delCount')
       // },
       // increment() {
       //   this.$store.dispatch('increment')
       // },
       // delcrement() {
       //   this.$store.dispatch('delcrement')
       // },
       // 简写第三步methods方法：一个辅助函数一句话直接带过
       ...mapActions(['addCount','delCount','increment','delcrement'])
     },
      //简写第二步 利用计算属性...mapState的语法里面是对象形式。
      computed:{
        ...mapState({
          count:(state)=>state.count
        }),
        ...mapGetters(['evenOradd'])
      },
    }
</script>

