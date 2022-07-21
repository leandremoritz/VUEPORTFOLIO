import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/about',
    name: 'about',
 
    component: () => import( '../views/AboutView.vue')
  },
  {
    path: '/projects',
    name: 'projects',
 
    component: () => import( '../views/Projects.vue')
  },
  {
    path: '/testimonials',
    name: 'testimonials',
 
    component: () => import( '../views/Testimonials.vue')
  },
  {
    path: '/contact',
    name: 'contact',
 
    component: () => import( '../views/Contact.vue')
  },
  {
    path: '/resume',
    name: 'resume',
 
    component: () => import( '../views/Resume.vue')
  },
  {
    path: '/skills',
    name: 'skills',
 
    component: () => import( '../views/Skills.vue')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
