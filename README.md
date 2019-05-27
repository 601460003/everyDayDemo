# zhang https://www.cnblogs.com/zlbrother/p/7823380.html

> A Vue.js project

## Build Setup

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build

# build for production and view the bundle analyzer report
npm run build --report
```

For a detailed explanation on how things work, check out the [guide](http://vuejs-templates.github.io/webpack/) and [docs for vue-loader](http://vuejs.github.io/vue-loader).

display: -webkit-box;
overflow: hidden;
text-overflow: ellipsis;
-webkit-line-clamp: 2;
-webkit-box-orient: vertical;

 window.onload = function () {
   var aul = document.getElementById('ul1');
   var ali = aul.getElementsByTagName('li');

   for(var i =0;i<ali.length;i++){
      ali[i].index = i;
      ali[i].onclick = function () {
        for(var i =0;i<ali.length;i++){
          ali[i].className = ''
        }
        this.className='action';
      }

   }

 }
</script>
