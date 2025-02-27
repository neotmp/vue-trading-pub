import { accountState } from './accountState'
import { getAccountsList } from '@/composables/account/getAccountsList'

function get() {
  const state = accountState()

  const response = getAccountsList()
  state.accountsList.value = response
  console.log(response, 'resp')
}

export function list() {
  return {
    get,
  }
}
