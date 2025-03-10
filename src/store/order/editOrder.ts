import { orderState } from './orderState'
import { getOrder } from '@/composables/order/getOrder'

export function editOrder(id: number) {
	const { orderData, payload } = orderState()

	orderData.value = getOrder(id).value
	console.log(orderData.value?.id, 'Computed')

	if (orderData.value) {
		const id = orderData.value.id
		const direction = orderData.value.direction
		const volume = orderData.value.volume
		const pair = orderData.value.pair
		const pairId = orderData.value.pairId
		const price = orderData.value.price
		const sl = orderData.value.sl
		const tp = orderData.value.tp
		const ts = orderData.value.ts
		const memo = orderData.value.memo
		const brokerId = orderData.value.brokerId
		const accountId = orderData.value.accountId
		//
		payload.value.id = id
		payload.value.direction = direction
		payload.value.volume = volume
		payload.value.pair = pair
		payload.value.pairId = pairId
		payload.value.price = price
		payload.value.sl = sl
		payload.value.tp = tp
		payload.value.ts = ts
		payload.value.memo = memo
		payload.value.brokerId = brokerId
		payload.value.accountId = accountId
	}
}
