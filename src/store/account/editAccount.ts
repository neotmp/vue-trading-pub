import { accountState } from './accountState'
import { getAccount } from '@/composables/account/getAccount'

export function editAccount(id: number) {
  const { accountData, payload } = accountState()

  accountData.value = getAccount(id).value
  console.log(accountData.value?.name, 'Computed')

  if (accountData.value) {
    const id = accountData.value.id
    const name = accountData.value.name
    const leverage = accountData.value.leverage
    const active = accountData.value.active
    const hedge = accountData.value.hedge
    const memo = accountData.value.memo
    //
    payload.value.id = id
    payload.value.name = name
    payload.value.leverage = leverage
    payload.value.active = active
    payload.value.hedge = hedge
    payload.value.memo = memo
  }
}
