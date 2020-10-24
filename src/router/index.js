import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: () => import('../views/Home.vue')
  },
  {
    path: '/concept',
    name: 'Concept',
    component: () => import('../views/Concept.vue')
  },
  {
    path: '/works',
    name: 'Works',
    component: () => import('../views/Works.vue')
  },
  {
    path: '/jobDescription',
    name: 'JobDescription',
    component: () => import('../views/JobDescription.vue')
  },
  {
    path: '/company',
    name: 'Company',
    component: () => import('../views/Company.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
