import { useFetch } from '../useFetch'
import { accountState } from './accountState'
import { updateState } from './updateState'

export async function submitCreateAccount() {
  const { payload } = accountState()

  // headers
  const headers = new Headers()
  headers.append('Content-Type', 'application/json')

  const options = {
    method: 'POST',
    body: JSON.stringify(payload.value),
    headers: headers,
  }
  const response = await useFetch('account/create', options)
  console.log(response.data.value, 'RES')

  // code 3 means we successfully created account
  if (response.code.value === 3) {
    console.log(response.data, 'Response')
    updateState(response.data.value, 3)
  }

  return response
}
