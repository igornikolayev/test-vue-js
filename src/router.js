import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import Login from './views/Login.vue'
import Profile from './views/Profile.vue'
import News from './views/News.vue'


Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/profile',
      name: 'profle',

      component: Profile
    },
    {
      path: '/news',
      name: 'news',
      component: News
    }, {
      path: '/login',
      name: 'login',
      component: Login
    }
  ]
})
