import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '@/views/Home.vue'
import AddRestaurant from '@/views/AddRestaurant'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: Home
  },
  {
    path: '/add-restaurant',
    name: 'add restaurant',
    component: AddRestaurant
  }
]

const router = new VueRouter({
  routes
})

export default router
