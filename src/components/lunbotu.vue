<template>
<div>
  <!--利用css3动画效果完成无缝滚动，兼容不确定-->
  <nav>
    <ul>
      <li><img src="../assets/图像-1_20.png" /></li>
      <li><img src="../assets/图像-1_03.png" /></li>
      <li><img src="../assets/图像-1_06.png" /></li>
      <li><img src="../assets/图像-1_08.png" /></li>
      <li><img src="../assets/图像-1_10.png" /></li>
      <li><img src="../assets/图像-1_17.png" /></li>
      <li><img src="../assets/图像-1_23.png" /></li>
      <li><img src="../assets/图像-1_20.png" /></li>
      <li><img src="../assets/图像-1_03.png" /></li>
      <li><img src="../assets/图像-1_06.png" /></li>
      <li><img src="../assets/图像-1_08.png" /></li>
      <li><img src="../assets/图像-1_10.png" /></li>
      <li><img src="../assets/图像-1_17.png" /></li>
      <li><img src="../assets/图像-1_23.png" /></li>
    </ul>
  </nav>
</div>
</template>

<script>
    export default {
        name: "lunbotu"
    }
</script>

<style scoped>
*{
  margin: 0;
  padding: 0;
}
  ul{
    list-style-type: none;
  }
  nav{
    width: 1050px;
    height:150px;
    border: 1px solid pink;
    margin: 0 auto;
    overflow: hidden;  /*父组件溢出隐藏*/
  }

  li{
    float: left;
  }
  img{
    height: 150px;
    width: 150px;
  }
  /*动画一条龙*/
  nav ul{
    width: 200%;
    animation: moving 15s linear infinite; /*infinite无线循环 也是利用css3的属性 */
  }
  nav ul:hover{
    animation-play-state: paused ;
  }
  @keyframes moving {
    from{
transform: translateX(0);
    }
    to{
transform: translateX(-1050px);
    }
  }
</style>
