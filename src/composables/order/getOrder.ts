import { computed } from 'vue'
import type { TOrder } from '@/store/types'
import { orderState } from '@/store/order/orderState'

/**
 * getOrder finds order in the slice based on the provided id.
 * Computed property.
 * @param id order number.
 * @returns order object TOrder found in the slice or undefined.
 */
export const getOrder = (id: number) =>
	computed((): TOrder | undefined => {
		const { ordersList } = orderState()
		return ordersList.value?.find((element) => element.id === id)
	})
