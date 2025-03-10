import { computed } from 'vue'
import type { TBroker } from '@/store/types'
import { store } from '@/store/store'
const { data } = store()

/**
 * getBroker finds broker in the slice based on the provided id.
 * Computed property.
 * @param id broker number.
 * @returns broker object TBroker found in the slice or undefined.
 */
export const getBroker = (id: number) =>
	computed((): TBroker | undefined => {
		return data.value?.brokers.find((element) => element.id === id)
	})
