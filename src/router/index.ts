import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const isAuthenticated = true

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),

  routes: [
    {
      path: '/',
      name: 'Home',
      component: HomeView
    },
    {
      path: '/about',
      name: 'About',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/AboutView.vue')
    },
    {
      path: '/login',
      name: 'Login',
      component: () => import('../views/LoginView.vue')
    },
    {
      path: '/brokers',
      name: 'Brokers',
      component: () => import('../views/BrokersView.vue')
    },
    {
      path: '/funds',
      name: 'Funds',
      component: () => import('../views/FundsView.vue')
    },
    {
      path: '/analytics',
      name: 'Analytics',
      component: () => import('../views/AnalyticsView.vue')
    },
    {
      path: '/history',
      name: 'History',
      component: () => import('../views/HistoryView.vue')
    },
    {
      path: '/accounts',
      name: 'Accounts',
      component: () => import('../views/AccountsView.vue'),
      meta: {
        protected: true,
        authorized: isAuthenticated
      }
    },
    {
      path: '/preferences',
      name: 'Preferences',
      component: () => import('../views/PreferencesView.vue')
    },
    {
      path: '/pairs',
      name: 'Pairs',
      component: () => import('../views/PairsView.vue')
    },
    {
      path: '/pairs',
      name: 'Pairs',
      component: () => import('../views/PairsView.vue')
    },
    {
      path: '/terminal',
      name: 'Terminal',
      component: () => import('../views/TerminalView.vue')
    },
    {
      path: '/brokers/:id/edit',
      name: 'Edit broker',
      component: () => import('../views/broker/BrokerEdit.vue')
    },
    {
      path: '/brokers/:id/delete',
      name: 'Delete broker',
      component: () => import('../views/broker/BrokerDelete.vue')
    },
    {
      path: '/brokers/:id/details',
      name: 'Broker detail',
      component: () => import('../views/broker/BrokerDetail.vue')
    },
    {
      path: '/:catchAll(.*)',
      name: 'Preferences',
      component: () => import('../views/PreferencesView.vue')
    }
  ]
})

//from
router.beforeEach(async (to) => {
  if (
    // make sure the user is authenticated
    to.meta.protected &&
    !to.meta.authorized &&
    // ❗️ Avoid an infinite redirect
    to.name !== 'Login'
  ) {
    // redirect the user to the login page
    return { name: 'Login' }
  }
})

export default router

// Another way
// If I need to check credentials of user every time they try to access the page

// router.beforeEach(async (to, from) => {
//   // canUserAccess() returns `true` or `false`
//   const canAccess = await canUserAccess(to)
//   if (!canAccess) return '/login'
// })
