import { useFetch } from '../useFetch'
import { positionState } from './positionState'
import { updateState } from './updateState'

export async function submitEditPosition() {
	const { payload } = positionState()

	// headers
	const headers = new Headers()
	headers.append('Content-Type', 'application/json')

	const options = {
		method: 'POST',
		body: JSON.stringify(payload.value),
		headers: headers
	}
	const response = await useFetch('order/edit', options)
	console.log(response.data.value, 'RES')

	// code 2 means we successfully updated order
	if (response.code.value === 2) {
		console.log(response.data, 'Response')
		updateState(response.data.value, 2)
	}

	return response
}
