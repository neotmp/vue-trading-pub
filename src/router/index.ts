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
      path: '/simulation',
      name: 'simulation',
      component: () => import('../views/SimulationView.vue'),
    },

    {
      path: '/history',
      name: 'history',
      component: () => import('../views/HistoryView.vue'),
    },

    {
      path: '/performance',
      name: 'performance',
      component: () => import('../views/PerformanceView.vue'),
    },

    {
      path: '/risk-assessment',
      name: 'risk-assessment',
      component: () => import('../views/RiskAssessmentView.vue'),
    },
  ],
})

export default router
