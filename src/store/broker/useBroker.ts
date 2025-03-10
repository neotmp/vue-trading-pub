import { brokerDetail } from './brokerDetail'
import { brokerList } from './brokerList'
import { brokerState } from './brokerState'
import { editBroker } from './editBroker'
import { submitCreateBroker } from './submitCreateBroker'
import { submitDeleteBroker } from './submitDeleteBroker'
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
		brokerDetail,
		submitDeleteBroker
	}
}
