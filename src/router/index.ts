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

    {
      path: '/brokers',
      name: 'brokers',
      component: () => import('../views/BrokersView.vue'),
    },

    {
      path: '/brokers/:id/edit',
      name: 'brokers-edit',
      component: () => import('../views/broker/BrokerEdit.vue'),
    },

    {
      path: '/brokers/add',
      name: 'brokers-add',
      component: () => import('../views/broker/BrokerAdd.vue'),
    },

    {
      path: '/accounts',
      name: 'accounts',
      component: () => import('../views/AccountsView.vue'),
    },

    {
      path: '/accounts/:id/edit',
      name: 'accounts-edit',
      component: () => import('../views/account/AccountEdit.vue'),
    },

    {
      path: '/accounts/:id/detail',
      name: 'accounts-detail',
      component: () => import('../views/account/AccountDetail.vue'),
    },

    {
      path: '/accounts/:id/analytics',
      name: 'accounts-analytics',
      component: () => import('../views/account/AccountAnalytics.vue'),
    },

    {
      path: '/accounts/add',
      name: 'accounts-add',
      component: () => import('../views/account/AccountAdd.vue'),
    },

    {
      path: '/positions',
      name: 'positions',
      component: () => import('../views/PositionsView.vue'),
    },

    {
      path: '/balance',
      name: 'balance',
      component: () => import('../views/BalanceView.vue'),
    },
  ],
})

export default router
