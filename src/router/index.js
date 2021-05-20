import Vue from 'vue'
import VueRouter from 'vue-router'
import SignUp from '../views/auth/SignUp.vue'
import FirstPage from '../views/auth/FirstPage.vue'
import Login from '../views/auth/Login.vue'
import Main from '../views/Main.vue'
import SelectActors from '../views/SelectActors.vue'
Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'FirstPage',
    component: FirstPage
  },
  {
    path: '/signup',
    name: 'SignUp',
    component: SignUp,
  },
  {
    path: '/login',
    name: 'Login',
    component: Login
  },
  {
    path: '/main',
    name: 'Main',
    component: Main
  },
  {
    path:'/selectActors',
    name: 'SelectActors',
    component: SelectActors,
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
