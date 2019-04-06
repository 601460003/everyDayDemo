<template>
    <div id="product-list-one">
      <h2>product-list-one</h2>
      <ul>
        <li v-for="p in products">
          <span class="name">{{p.name}}</span>
          <span class="price">${{p.price}}</span>
          <span class="price">${{p.count}}</span>
        </li>
      </ul>
      <button @click="add">钱太多了，扣你一点</button>
    </div>
</template>

<script>
    export default {
     computed:{
       products(){
         return this.$store.state.products;
       },
     },
      methods:{
        add(){
          this.$store.commit('changeM')
        }
      }
    }
</script>

<style scoped>
  li{
    list-style-type: none;
  }
  button{
    background: #f44;
    padding: 5px;
    color: #ffffff;
  }
  #product-list-one{
    background:wheat;
    box-shadow: 1px 2px 3px rgba(0,0,0,0.2);
    margin-bottom: 10px;
    padding: 10px 20px;
  }
  #product-list-one ul{
    padding: 0;
    list-style-type: none;
  }
  #product-list-one li {
    margin-right: 10px;
    margin-top: 10px;
    padding: 1px;
    background-color: rgba(255,255,255,0.7);
  }
  .price{
    font-weight: bold;
    color:#860CE8;
    display: block;

  }
</style>
