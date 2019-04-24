<template>
<div>

  <div class="box">
    <div class="sanjiao"></div>
    <div class="xinxi">这是一个提示信息框-less</div>

  </div>
</div>

</template>

<script>
    export default {
      data(){
        return{
          isShow:true
        }
      }
    }
</script>

<style scoped>
  .box{
    display: flex;
    flex-direction: column;
    align-items: center;
    position: absolute;
    top: 110px;
    left: 200px;
  }
.sanjiao{
  width: 0;
  height: 0;
  overflow: hidden;
  border-width: 10px;
  border-color: transparent transparent red transparent;
  border-style: solid;
}
  .xinxi{
    background: #a7a8ff;
    width: 150px;
    height: 50px;
    text-align: center;
    line-height: 50px;
  }

  /*less的嵌套最实用最常用的语法  读法：next s*/
  .xinxi {
    padding: 0;
  li {
    display: flex;
  }
  a {
    border: 1px;
  /*//&代表上一层选择器*/
    &:hover{
    color:red;
     }
  }
  span {
    color: red;
  }

  }

  /*避免编译调试加   ~‘’波浪线*/
</style>
