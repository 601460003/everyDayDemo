<template>
  <!--数据结构-->
<div>
  <h1 style="text-align: center;background: yellowgreen;margin: 0">数据结构</h1>
<div class="container">
  <div style="background: #8683ff">
    <h2>队列</h2>
    <article>队列只能在队尾插入元素，在队首删除元素。</article>
    <article>满足：只要数据的保存满足先进先出、后入后出的原理，都优先考虑使用队列</article>
  </div>
  <div style="background: orange">
    <h2>[zhàn] 栈 </h2>
    <article>栈被称为一种后入先出的数据结构。</article>
    <article>因为数据只能在栈顶添加或删除，所以这样的操作很快。</article>
    <h3>满足：只要数据的保存满足后入先出或先进后出的原理，都优先考虑使用栈</h3>
  </div>
  <div style="background: #999999">
    <h2>二叉树</h2>
    <article>常用：分层的方式存储数据</article>
  </div>
</div>
</div>
</template>

<script>
    export default {
        name: "li"
    }
</script>

<style scoped>
.container{
  display: flex;
  text-align: center;
}
  .container div{
    flex:1;
  }
</style>
自适应移动端插件rem
1.npm i lib-flexible --save
2.然后在项目入口文件main.js里引入lib-flexible import 'lib-flexible'
3.记得配置meta标签,在index.html文件当中<meta name="viewport" content="width=device-width, initial-scale=1.0">
4.npm i px2rem-loader --save-dev
5.我们只要在until.js里找到cssLoader这个对象，在它下面再加一个px2remLoader对象即可
http://www.cnblogs.com/zlbrother/p/7823380.html
