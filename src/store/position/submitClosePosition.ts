import { useFetch } from '../useFetch'
import { positionState } from './positionState'
import { updateState } from './updateState'

export async function submitClosePosition() {
	const { payload } = positionState()

	// headers
	const headers = new Headers()
	headers.append('Content-Type', 'application/json')

	const options = {
		method: 'POST',
		body: JSON.stringify(payload.value),
		headers: headers
	}
	const response = await useFetch('position/close', options)
	console.log(response.data.value, 'RES')

	// TO DO Handle state change
	// code 4 means we successfully created account
	if (response.code.value === 3) {
		console.log(response.data, 'Response')
		updateState(response.data.value, 3)
	}

	return response
}
