import Vue from 'vue'
import Router from 'vue-router'
import List from '@/components/List'
import Home from '@/components/Home'
import Portfolio from '@/components/portfolio/Portfolio'
import Stocks from '@/components/stocks/Stocks'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/portfolio',
      name: 'portfolio',
      component: Portfolio
    },
    {
      path: '/to-do',
      name: 'ToDo',
      component: List
    },
    {
      path: '/stocks',
      name: 'Stocks',
      component: Stocks
    },
    {
      path: '/',
      name: 'home',
      component: Home
    }

  ]
})
