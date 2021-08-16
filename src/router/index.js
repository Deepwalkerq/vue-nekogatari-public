import { createRouter, createWebHistory } from 'vue-router'
import '@/main.scss'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: () => import('../views/Home.vue')
  },
  {
    path: '/members',
    name: 'Members',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/Members.vue')
  },
  {
    path: '/groups',
    name: 'Groups',
    component: () => import('../views/Groups.vue')
  },

]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
