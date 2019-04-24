<template>
<div style="text-align: center">
  ES6,Promise的用法
</div>
</template>

<!--<script>-->
   <!--// var ai=[1,2,3]-->
   <!--// var bi=[2,4,6]-->
  <!--// console.log(ai)-->
  <!--//  console.log(bi)-->
  <!--// var he=[...ai,...bi]-->
  <!--// console.log(he)-->
  <!--//  第一步封装一个Promise对象 ，用一个方法保存起来-->
   <!--let checkOut = function () {-->
<!--return new Promise((resolve,reject)=>{-->
<!--let flag = document.cookie.indexOf("user")>-1?true:false;-->
<!--if(flag=true){-->
<!--resolve({-->
<!--status:0,-->
<!--result:true-->
<!--})-->
<!--}else {-->
<!--reject("error")-->
<!--}-->
<!--})-->
<!--};-->
<!--//第三步 获取API后 读取里面的数据-->
<!--let getUser =()=>{-->
<!--return new Promise(((resolve, reject) => {-->
<!--let user ={-->
<!--id:101-->
<!--};-->
<!--resolve(user)-->
<!--}))-->
<!--};-->
<!--// 第二调用方法，用.then()的方法来输出-->
<!--checkOut().then(res=>{-->
<!--if(res.status==0){-->
<!--console.log("成功了")-->
<!--return getUser()-->
<!--}-->
<!--}).catch((error=>{-->
<!--console.log(`errors:${error}`)-->
<!--})).then(res2=>{-->
<!--console.log(res2.id)-->
<!--})-->

<!--//使用all的api调用多个异步操作-->
<!--Promise.all([getUser(),checkOut()]).then(([res1,res2])=>{-->
<!--console.log(res1,res2)-->
<!--})-->
<!--</script>-->

<style scoped>

</style>
