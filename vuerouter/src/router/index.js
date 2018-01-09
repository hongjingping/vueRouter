import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Params from '@/components/Params'
import Hi1 from '@/components/Hi1'
import Error from '@/components/Error'

Vue.use(Router)

export default new Router({
  // mode: 'history',
  mode: 'hash',
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    }, {
      path: '/params/:newsId(\\d+)/:newsTitle',
      component: Params,
      beforeEnter: (to, from, next) => {
        console.log(to)
        console.log(from)
        next()
      }
    }, {
      path: '/goHome',
      redirect: '/'
    }, {
      path: '/goHome/:newsId(\\d+)/:newsTitle',
      redirect: '/params/:newsId(\\d+)/:newsTitle'
    }, {
      path: '/Hi1',
      component: Hi1,
      alias: '/wikiHong'
    }, {
      path: '*',
      component: Error
    }
  ]
})
