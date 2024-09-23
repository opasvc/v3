import { createRouter, createWebHashHistory, RouteRecordRaw } from 'vue-router'
import LoginView from '../views/LoginView.vue'
import HomeView from '../views/HomeView.vue'
const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'LoginView',
    component: LoginView
  },
  {
    path: '/home',
    name: 'Home',
    component: HomeView
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
