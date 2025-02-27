import type { TBroker } from '../types'
import { store } from '../store'

function edit(brokerData: TBroker) {
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

export async function updateState(brokerData: TBroker, code: number) {
  if (code === 2) {
    edit(brokerData)
  } else if (code === 3) {
    add(brokerData)
  }
}
