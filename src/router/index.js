import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Aphorism from '@/components/Aphorism'
import Morning from '@/components/Morning'
import Joke from '@/components/Joke'
Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/aphorism',
      name: 'Aphorism',
      component: Aphorism
    },
    {
      path: '/morning',
      name: 'Morning',
      component: Morning
    },
    {
      path: '/joke',
      name: 'Joke',
      component: Joke
    }
  ]
})
