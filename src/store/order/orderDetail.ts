import { orderState } from './orderState'
import { getOrder } from '@/composables/order/getOrder'
import { readonly, ref } from 'vue'
import type { TOrder } from '../types'

export function orderDetail(id: number) {
	const { orderData } = orderState()

	const data = ref<TOrder>()
	data.value = getOrder(id).value

	if (data.value) {
		orderData.value = readonly(data.value)
		console.log(orderData.value?.id, 'Computed order')
	}
}
