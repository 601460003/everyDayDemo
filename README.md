# zhang https://www.cnblogs.com/zlbrother/p/7823380.html vue自适应插件

mock：https://www.easy-mock.com/

vue父子组件传https://github.com/ljianshu/Blog.git



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
