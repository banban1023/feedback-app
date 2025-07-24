import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: () => import('../views/home.vue')
  },
  {
    path: '/detail/:id',
    name: 'detail',
    component: () => import('@/views/detail.vue')
  },
  {
    path: '/new',
    name: 'new',
    component: () => import('@/views/new.vue')
  },
  {
    path: '/roadmap',
    name: 'readmap',
    component: () => import('@/views/roadmap.vue')
  },
  {
    path: '/edit',
    name: 'edit',
    component: () => import('@/views/edit.vue')
  },
  {
    path: '/roadmap',
    name: 'roadmap',
    component: () => import('@/views/roadmap.vue')
  }
]

const router = new VueRouter({
  routes
})

export default router
