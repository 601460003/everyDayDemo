<template>
  <div id="product-list-tow">
    <h2>product-list-tow</h2>
    <ul>
      <li v-for="p in products">
        <span class="name">{{p.name}}</span>
        <span class="price">${{p.price}}</span>
      </li>
    </ul>
  </div>
</template>

<script>
  export default {
    computed:{
      products(){
        return this.$store.state.products;
      },
    },
  }
</script>

<style scoped>
  li{
    list-style-type: none;
  }
  #product-list-tow{
    background:#D1E4FF;
    box-shadow: 1px 2px 3px rgba(0,0,0,0.2);
    margin-bottom: 30px;
    padding: 10px 20px;
  }
  #product-list-tow ul{
    padding: 0;
    list-style-type: none;
  }
  #product-list-tow li {
    margin-right: 10px;
    margin-top: 10px;
    padding: 10px;
    background-color: rgba(255,255,255,0.7);
  }
  .price{
    font-weight: bold;
    color:#860CE8;
    display: block;

  }
</style>
