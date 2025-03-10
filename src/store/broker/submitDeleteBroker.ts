import { useFetch } from '../useFetch'
//import { brokerState } from './brokerState'
//import { updateState } from './updateState'

export async function submitDeleteBroker(id: number) {
	//const { payload } = brokerState()

	// headers
	//const headers = new Headers()
	//headers.append('Content-Type', 'application/json')

	// const options = {
	// 	method: 'POST',
	// 	body: JSON.stringify(payload.value),
	// 	headers: headers
	// }
	const response = await useFetch(`broker/delete/${id}`)
	console.log(response.data.value, 'RES')

	// code 4 means we successfully deleted broker, 2 - archived
	if (response.code.value === 4) {
		console.log(response.data, 'Response')
		// TO DO update state
		//updateState(response.data.value, 4)
	}

	return response
}
