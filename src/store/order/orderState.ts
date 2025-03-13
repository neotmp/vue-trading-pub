import type { TOrder } from '../types'
import { ref } from 'vue'

// state of account
const orderData = ref<TOrder>()
const ordersList = ref<TOrder[]>()
const payload = ref<Partial<TOrder>>({
	id: 0,
	type: 1,
	volume: 0.01,
	pair: 'EURUSD',
	pairId: 1,
	sl: 1.02392,
	ts: 1.02343,
	tp: 1.03448,
	memo: ''
})

const error = ref('')
const responseCode = ref<number>()

export function orderState() {
	return {
		orderData,
		ordersList,
		payload,
		error,
		responseCode
	}
}
