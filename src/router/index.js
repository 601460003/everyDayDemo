import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import zheng from '@/components/zheng'
import myVuex from '@/components/myVuex'
import shop from '@/components/shop'
import li from '@/components/li'
import lunbotu from '@/components/lunbotu'
import VuexDemo from '@/components/VuexDemo'

Vue.use(Router)

export default new Router({
  routes: [
    // {
    //   path: '/',
    //   name: 'HelloWorld',
    //   component: HelloWorld
    // },
    // {
    //   path: '/',
    //   component: lunbotu
    // },
    {
      path: '/',
      component: VuexDemo
    },
    // {
    //   path: '/',
    //   name: 'zheng',
    //   component: zheng
    // },
   // {
   //   path: '/',
   //   component: myVuex
   // },
   //  {
   //    path: '/',
   //    component: li
   //  }
   //  {
   //    path: '/',
   //    component: shop
   //  },
  ]
})
