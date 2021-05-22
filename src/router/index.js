import Vue from 'vue'
import VueRouter from 'vue-router'
import SignUp from '../views/auth/SignUp.vue'
import FirstPage from '../views/auth/FirstPage.vue'
import Login from '../views/auth/Login.vue'
import Main from '../views/Main.vue'
import Select from '../views/Select.vue'
import Profile from '../views/Profile.vue'

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
    path:'/select',
    name: 'Select',
    component: Select,
  },
  {
    path:'/profile',
    name: 'Profile',
    component: Profile,
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
