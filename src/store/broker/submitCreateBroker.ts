import { useFetch } from '../useFetch'
import { brokerState } from './brokerState'
import { updateState } from './updateState'

export async function submitCreateBroker() {
  const { payload } = brokerState()

  // headers
  const headers = new Headers()
  headers.append('Content-Type', 'application/json')

  const options = {
    method: 'POST',
    body: JSON.stringify(payload.value),
    headers: headers,
  }
  const response = await useFetch('broker/create', options)
  console.log(response.data.value, 'RES')

  // code 3 means we successfully created account
  if (response.code.value === 3) {
    console.log(response.data, 'Response')
    updateState(response.data.value, 3)
  }

  return response
}
