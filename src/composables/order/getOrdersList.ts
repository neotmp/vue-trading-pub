import type { TOrder } from '@/store/types'
import { useState } from '@/store/useState'

/**
 * getOrderList returns all orders from all brokers
 * @returns a slice as TOrder[]
 */
export function getOrdersList(): TOrder[] {
	const { data } = useState()
	const ordersList: TOrder[] = []

	if (data.value) {
		// check for undefined
		for (let i = 0; i < data.value?.brokers.length; i++) {
			if (data.value.brokers[i].orders !== null) {
				data.value.brokers[i].orders?.forEach((element) => {
					ordersList.push(element)
				})
			} else {
				break
			}
		}
	}

	console.log(ordersList, data.value, 'getOrdersList!!!')

	return ordersList
}
