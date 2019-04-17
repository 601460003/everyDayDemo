import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import zheng from '@/components/zheng'
import myVuex from '@/components/myVuex'
import shuju from '@/components/shuju'
import lunbotu from '@/components/lunbotu'
import VuexDemo from '@/components/VuexDemo'
import home from '@/components/home'
import es from '@/components/es'
import sanjiao from '@/components/sanjiao'
import mockjs from '@/components/mock-js'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      component: home,
    },
    {
      path: '/home',
      component: home,
      children:[
        {
          path: '/home/HelloWorld ',
          name: 'HelloWorld',
          component: HelloWorld
        },
        {
          path: 'lunbotu',
          name: 'lunbotu',
          component: lunbotu
        },
        {
          path: '/home/VuexDemo',
          name: 'VuexDemo',
          component: VuexDemo
        },
        {
          path: 'zheng',
          name: 'zheng',
          component: zheng
        },
        {
          path: 'myVuex',
          name:'myVuex',
          component: myVuex
        },

        {
          path: 'shuju',
          name:'shuju',
          component: shuju
        },
        {
          path: 'es',
          name:'es',
          component: es
        },
        {
          path: 'mockjs',
          name:'mockjs',
          component: mockjs
        },
        {
          path: 'sanjiao',
          name:'sanjiao',
          component: sanjiao
        }
      ]
    },


  ]
})
