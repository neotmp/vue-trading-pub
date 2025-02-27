import { brokerState } from './brokerState'
import { getBroker } from '@/composables/broker/getBroker'

export function editBroker(id: number) {
  const { brokerData, payload } = brokerState()

  brokerData.value = getBroker(id).value
  console.log(brokerData.value?.name, 'Computed')

  if (brokerData.value) {
    const id = brokerData.value.id
    const name = brokerData.value.name
    const country = brokerData.value.country
    const phone = brokerData.value.phone
    const email = brokerData.value.email
    const memo = brokerData.value.memo
    const active = brokerData.value.active
    //
    payload.value.id = id
    payload.value.name = name
    payload.value.country = country
    payload.value.phone = phone
    payload.value.email = email
    payload.value.memo = memo
    payload.value.active = active
  }
}
