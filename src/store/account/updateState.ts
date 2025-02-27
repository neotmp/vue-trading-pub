import type { TAccount } from '../types'
import { store } from '../store'

function edit(accountData: TAccount) {
  const { data } = store()

  const found = data.value?.brokers.find((element) => element.id === brokerData.id)

  if (found && data.value?.brokers) {
    const index = data.value?.brokers.indexOf(found)
    data.value.brokers[index] = brokerData
  }
}

function add(brokerData: TBroker) {
  const { data } = store()
  data.value?.brokers.push(brokerData)
}

export async function updateState(accountData: TAccount, code: number) {
  if (code === 2) {
    edit(accountData)
  } else if (code === 3) {
    add(accountData)
  }
}
