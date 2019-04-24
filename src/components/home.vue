<template>
  <div>
   <div class="ab">
     <h2>每天积累的demo</h2>
     <ul>
       <li class="action">
         <router-link :to="{name:'VuexDemo'}">vuex</router-link>
       </li>
       <li>
         <router-link :to="{ name: 'shuju'}">数据结构</router-link>
       </li>
       <li>
         <router-link :to="{ name: 'HelloWorld'}">绝对定位和相对定位</router-link>
       </li>
       <li>
         <router-link :to="{ name: 'myVuex'}">css3动画</router-link>
       </li>
       <li>
         <router-link :to="{ name: 'zheng'}">淘宝图标</router-link>
       </li>
       <li>
         <router-link :to="{ name: 'lunbotu'}">无缝滚动</router-link>
       </li>
       <li>
         <router-link :to="{ name: 'es'}">封装Promise异步操作</router-link>
       </li>
       <li>
         <router-link :to="{ name: 'sanjiao'}">画提示三角形</router-link>
       </li>
       <li>
         <router-link :to="{ name: 'mockjs'}">引入模拟mock数据</router-link>
       </li>
     </ul>
   </div>
    <router-view></router-view>
  </div>
</template>

<script>
    export default {
        name: "home"
    }
</script>

<style scoped>
  a{
    text-decoration: none;
    color: #333;
  }
  h2{
    text-align: center;
  }
  ul{
    display: flex;
  }
  li{
    list-style-type: none;
    background: yellowgreen;
    padding: 10px;
    display: block;
  }
  .action a{
    color: white;
  }
  li a:hover{
    color: white;
  }
</style>
