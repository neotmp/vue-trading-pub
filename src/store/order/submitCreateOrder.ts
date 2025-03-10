import { useFetch } from '../useFetch'
import { orderState } from './orderState'
import { updateState } from './updateState'

export async function submitCreateOrder() {
	const { payload } = orderState()

	// headers
	const headers = new Headers()
	headers.append('Content-Type', 'application/json')

	const options = {
		method: 'POST',
		body: JSON.stringify(payload.value),
		headers: headers
	}
	const response = await useFetch('order/create', options)
	console.log(response.data.value, 'RES')

	// code 3 means we successfully created account
	if (response.code.value === 3) {
		console.log(response.data, 'Response')
		updateState(response.data.value, 3)
	}

	return response
}
