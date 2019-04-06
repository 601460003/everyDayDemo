<template>
    <div class="logo">
      <!--<div class="div">你是大SB</div>-->

      <header><img src="../assets/图像-1_10.png" alt=""></header>
      <figure>  <img src="../assets/图像-1_03.png" alt=""></figure>
      <nav><img src="../assets/图像-1_08.png" alt=""></nav>
      <figure> <img src="../assets/图像-1_03.png" alt=""></figure>
      <section><img src="../assets/图像-1_06.png" alt=""></section>
      <figure> <img src="../assets/图像-1_03.png" alt=""></figure>
      <article>
        <img src="../assets/图像-1_23.png" alt="">
      </article>
      <figure> <img src="../assets/图像-1_20.png" alt=""></figure>
      <footer><img src="../assets/图像-1_17.png" alt=""></footer>

    </div>
</template>



<style scoped>
.div{
  text-align: center;
  line-height: 200px;
  width: 200px;
  height: 200px;
  background: red;
  /*position: absolute;*/
  transition:all 0.5s ease;

}
img{
  transition:all 0.5s;
  width: 100px;
  border-radius: 50%;
}
  img:hover{
    transform: rotate(30deg);
    /*transform: translateX(100%);*/

  }
  .logo{
    column-count:4;
  }
</style>
