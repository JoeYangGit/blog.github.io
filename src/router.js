import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import Articles from './views/Articles.vue'
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
      path: '/articles',
      name: 'articles',
      component: Articles
    },
    {
      path: '/about',
      name: 'about',
      component: About
    }
  ]
})
