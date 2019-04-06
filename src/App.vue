<template>
  <div id="app">
    <!--<product-list-one ></product-list-one>-->
    <!--<product-list-tow ></product-list-tow>-->
    <router-view></router-view>
  </div>
</template>

<script>
import producyListOne from './components/producyListOne'
import producyListTow from './components/producyListTow'
  export default {
  components:{
    'product-list-one':producyListOne,
    'product-list-tow':producyListTow
  },
    data(){
    return{
    }
    },

  }
</script>

<style>

</style>
