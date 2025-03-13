import type { TOrder } from '../types'
import { store } from '../store'

function edit(orderData: TOrder) {
	const { data } = store()

	// find broker
	const found = data.value?.brokers.find((element) => element.id === orderData.brokerId)

	if (found && data.value?.brokers) {
		// return index of the broker
		const index = data.value?.brokers.indexOf(found)

		// find order

		// orders may be NULL
		const foundOrder = data.value.brokers[index].orders?.find(
			(element) => element.id === orderData.id
		)

		if (foundOrder) {
			// return index of the order
			// null assertion, we know we have data here
			const indexOrder = data.value.brokers[index].orders!.indexOf(foundOrder)

			// edit object
			// null assertion, we know we have data here

			data.value.brokers[index].orders![indexOrder] = orderData
		}
	}
}

function add(orderData: TOrder) {
	const { data } = store()

	// find broker
	const found = data.value?.brokers.find((element) => element.id === orderData.brokerId)
	if (found) {
		const index = data.value?.brokers.indexOf(found)
		if (index) {
			// null assertion, we know we have orders here
			data.value?.brokers[index].orders!.push(orderData)
		}
	}
}

export async function updateState(orderData: TOrder, code: number) {
	if (code === 2) {
		edit(orderData)
	} else if (code === 3) {
		add(orderData)
	}
}
