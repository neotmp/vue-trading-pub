import { brokerList } from './brokerList'
import { brokerState } from './brokerState'
import { editBroker } from './editBroker'
import { submitCreateBroker } from './submitCreateBroker'
import { submitEditBroker } from './submitEditBroker'

export function useBroker() {
  const { brokerData, payload } = brokerState()
  return {
    //local state
    brokerData,
    payload,
    //methods
    brokerList,
    submitCreateBroker,
    submitEditBroker,
    editBroker,
  }
}
