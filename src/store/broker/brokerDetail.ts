import { brokerState } from './brokerState'
import { getBroker } from '@/composables/broker/getBroker'
import { ref, shallowReadonly } from 'vue'
import type { TBroker } from '../types'

export function brokerDetail(id: number) {
	const { brokerData } = brokerState()

	const data = ref<TBroker>()
	data.value = getBroker(id).value

	if (data.value) {
		// TO DO why can't I apply readonly?
		brokerData.value = shallowReadonly(data.value)
		console.log(brokerData.value?.name, 'Computed broker')
	}
}
