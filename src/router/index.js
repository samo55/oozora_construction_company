import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: () => import(/* webpackChunkName: "about" */ '../views/Home.vue')
  },
  {
    path: '/concept',
    name: 'Concept',
    component: () => import(/* webpackChunkName: "about" */ '../views/Concept.vue')
  },
  {
    path: '/works',
    name: 'Works',
    component: () => import(/* webpackChunkName: "about" */ '../views/Works.vue')
  },
  {
    path: '/jobDescription',
    name: 'JobDescription',
    component: () => import(/* webpackChunkName: "about" */ '../views/JobDescription.vue')
  },
  {
    path: '/company',
    name: 'Company',
    component: () => import(/* webpackChunkName: "about" */ '../views/Company.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
