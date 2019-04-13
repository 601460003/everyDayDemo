<template>
  <!--淘宝的商标动画效果-->
  <div id="move">
    <img src="../assets/logo.png" />
    <img src="../assets/logo.png" />
    <img src="../assets/logo.png" />
    <img src="../assets/logo.png" />
    <img src="../assets/logo.png" />
    <img src="../assets/logo.png" />
    <img src="../assets/logo.png" />
  </div>
</template>

<style scoped>
  div{
    width: 500px;
    height: 500px;
    background: #c7ffe5;
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 10px auto;
    padding: 10px;
    position: relative;
  }
  img{
    width: 60px;
    height: 60px;
  }
</style>

<script>
  $(function () {
    $('#move img').mouseenter(function () {
      $(this).animate({top:'-25px',opacity:'0'},300,function () {
        $(this).css({top:'30px'});
        $(this).animate({top:'20px',opacity:'1'},200)
      })
    })
  })
</script>

