import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Sandbox from '@/components/Sandbox'
import Mahdia from '@/components/Mahdia'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/sandbox',
      name: 'Sandbox',
      component: Sandbox
    },
    {
     path: '/mahdia',
      name: 'Mahdia',
      component: Mahdia
    }  
  ]
})
