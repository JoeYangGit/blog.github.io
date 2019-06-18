import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import Travel from './views/Travel.vue'
import Tech from './views/Tech.vue'
import Feeling from './views/Feeling.vue'
import About from './views/About.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/home',
      name: 'home',
      component: Home
    },
    {
      path: '/tech',
      name: 'tech',
      component: Tech
    },
    {
      path: '/travel',
      name: 'travel',
      component: Travel
    },
    {
      path: '/feeling',
      name: 'feeling',
      component: Feeling
    },
    {
      path: '/about',
      name: 'about',
      component: About
    }
  ]
})
