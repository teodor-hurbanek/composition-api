import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/AboutView.vue'),
    },
    {
      path: '/template-syntax',
      name: 'template',
      component: () => import('../views/TemplateSyntax.vue'),
    },
    {
      path: '/reactivity-fundamentals',
      name: 'reactivity',
      component: () => import('../views/ReactivityFundamentals.vue'),
    },
    {
      path: '/computed-properties',
      name: 'computed',
      component: () => import('../views/ComputedProperties.vue'),
    },
    {
      path: '/class-style-bindings',
      name: 'classStyle',
      component: () => import('../views/ClassStyleBindings.vue'),
    },
    {
      path: '/conditional-rendering',
      name: 'conditional',
      component: () => import('../views/ConditionalRendering.vue'),
    },
    {
      path: '/list-rendering',
      name: 'list',
      component: () => import('../views/ListRendering.vue'),
    },
  ],
})

export default router
