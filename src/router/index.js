import Vue from 'vue'
import VueRouter from 'vue-router'


Vue.use(VueRouter)

const routes = [{
    path: '/',
    name: 'home',
    component: () => import('../views/home/home.vue')
  },
  {
    path: '/form',
    name: 'form',
    component: () => import('../views/form/form.vue')
  },
  {
    path: '/checkPending',
    name: 'checkPending',
    component: () => import('../views/checkPending/checkPending.vue')
  },
  {
    path: '/pass',
    name: 'pass',
    component: () => import('../views/pass/pass.vue')
  },
  {
    path: '/overdue',
    name: 'overdue',
    component: () => import('../views/overdue/overdue.vue')
  },
  {
    path: '/noPass',
    name: 'noPass',
    component: () => import('../views/noPass/noPass.vue')
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router