import { useFetch } from '../useFetch'
import { accountState } from './accountState'
import { updateState } from './updateState'

export async function submitEditAccount() {
  const { payload } = accountState()

  // headers
  const headers = new Headers()
  headers.append('Content-Type', 'application/json')

  const options = {
    method: 'POST',
    body: JSON.stringify(payload.value),
    headers: headers,
  }
  const response = await useFetch('account/edit', options)
  console.log(response.data.value, 'RES')

  // code 2 means we successfully updated account
  if (response.code.value === 2) {
    console.log(response.data, 'Response')
    updateState(response.data.value, 2)
  }

  return response
}
