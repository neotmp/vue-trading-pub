import { orderState } from './orderState'
import { getOrdersList } from '@/composables/order/getOrdersList'

function get() {
	const state = orderState()

	const response = getOrdersList()
	state.ordersList.value = response
	console.log(response, 'resp')
}

export function list() {
	return {
		get
	}
}
