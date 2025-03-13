import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const router = createRouter({
	history: createWebHistory(import.meta.env.BASE_URL),
	routes: [
		{
			path: '/',
			name: 'home',
			component: HomeView
		},
		{
			path: '/simulation',
			name: 'simulation',
			component: () => import('../views/SimulationView.vue')
		},

		{
			path: '/history',
			name: 'history',
			component: () => import('../views/HistoryView.vue')
		},

		{
			path: '/performance',
			name: 'performance',
			component: () => import('../views/PerformanceView.vue')
		},

		{
			path: '/risk-assessment',
			name: 'risk-assessment',
			component: () => import('../views/RiskAssessmentView.vue')
		},

		{
			path: '/brokers',
			name: 'brokers',
			component: () => import('../views/BrokersView.vue'),
			meta: {
				protected: true,
				authorized: true,
				bc: 1
			}
		},

		{
			path: '/brokers/edit/:id',
			name: 'brokers-edit',
			component: () => import('../views/broker/BrokerEditView.vue'),
			meta: {
				protected: true,
				authorized: true,
				bc: 11
			}
		},

		{
			path: '/brokers/detail/:id',
			name: 'brokers-detail',
			component: () => import('../views/broker/BrokerDetailView.vue'),
			meta: {
				protected: true,
				authorized: true,
				bc: 12
			}
		},

		{
			path: '/brokers/analytics/:id',
			name: 'brokers-analytics',
			component: () => import('../views/broker/BrokerAnalyticsView.vue'),
			meta: {
				protected: true,
				authorized: true,
				bc: 13
			}
		},

		{
			path: '/brokers/add',
			name: 'brokers-add',
			component: () => import('../views/broker/BrokerAddView.vue'),
			meta: {
				protected: true,
				authorized: true,
				bc: 14
			}
		},

		{
			path: '/accounts',
			name: 'accounts',
			component: () => import('../views/AccountsView.vue'),
			meta: {
				protected: true,
				authorized: true,
				bc: 2
			}
		},

		{
			path: '/accounts/edit/:id',
			name: 'accounts-edit',
			component: () => import('../views/account/AccountEditView.vue'),
			meta: {
				protected: true,
				authorized: true,
				bc: 21
			}
		},

		{
			path: '/accounts/detail/:id',
			name: 'accounts-detail',
			component: () => import('../views/account/AccountDetailView.vue'),
			meta: {
				protected: true,
				authorized: true,
				bc: 22
			}
		},

		{
			path: '/accounts/analytics/:id',
			name: 'accounts-analytics',
			component: () => import('../views/account/AccountAnalyticsView.vue'),
			meta: {
				protected: true,
				authorized: true,
				bc: 23
			}
		},

		{
			path: '/accounts/add',
			name: 'accounts-add',
			component: () => import('../views/account/AccountAddView.vue'),
			meta: {
				protected: true,
				authorized: true,
				bc: 24
			}
		},

		{
			path: '/orders',
			name: 'orders',
			component: () => import('../views/OrdersView.vue'),
			meta: {
				protected: true,
				authorized: true,
				bc: 3
			}
		},

		{
			path: '/orders/add',
			name: 'orders-add',
			component: () => import('../views/order/OrderAddView.vue'),
			meta: {
				protected: true,
				authorized: true,
				bc: 31
			}
		},

		{
			path: '/orders/edit/:id',
			name: 'orders-edit',
			component: () => import('../views/order/OrderEditView.vue'),
			meta: {
				protected: true,
				authorized: true,
				bc: 32
			}
		},

		{
			path: '/orders/detail/:id',
			name: 'orders-detail',
			component: () => import('../views/order/OrderDetailView.vue'),
			meta: {
				protected: true,
				authorized: true,
				bc: 33
			}
		},

		{
			path: '/positions',
			name: 'positions',
			component: () => import('../views/PositionsView.vue'),
			meta: {
				protected: true,
				authorized: true,
				bc: 4
			}
		},

		{
			path: '/positions/create',
			name: 'positions-create',
			component: () => import('../views/position/PositionCreateView.vue'),
			meta: {
				protected: true,
				authorized: true,
				bc: 41
			}
		},

		{
			path: '/positions/edit/:id',
			name: 'positions-edit',
			component: () => import('../views/position/PositionModifyView.vue'),
			meta: {
				protected: true,
				authorized: true,
				bc: 42
			}
		},

		{
			path: '/positions/detail/:id',
			name: 'positions-detail',
			component: () => import('../views/position/PositionDetailView.vue'),
			meta: {
				protected: true,
				authorized: true,
				bc: 43
			}
		},

		{
			path: '/positions/close/:id',
			name: 'positions-close',
			component: () => import('../views/position/PositionCloseView.vue'),
			meta: {
				protected: true,
				authorized: true,
				bc: 44
			}
		},

		{
			path: '/transactions',
			name: 'transactions',
			component: () => import('../views/TransactionsView.vue'),
			meta: {
				protected: true,
				authorized: true,
				bc: 5
			}
		},

		{
			path: '/transactions/transfer',
			name: 'transfer',
			component: () => import('../views/transaction/TransferView.vue'),
			meta: {
				protected: true,
				authorized: true,
				bc: 51
			}
		},

		{
			path: '/balance',
			name: 'balance',
			component: () => import('../views/BalanceView.vue')
		},

		{
			path: '/candlestick',
			name: 'candlestick',
			component: () => import('../views/CandleStickView.vue')
		}
	]
})

export default router
