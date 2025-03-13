import type { TPosition } from '@/store/types'
import { useState } from '@/store/useState'

/**
 * getPositionsList returns all positions from all brokers
 * @returns a slice as TOrder[]
 */
export function getPositionsList(): TPosition[] {
	const { data } = useState()
	const positionsList: TPosition[] = []

	if (data.value) {
		// check for undefined
		for (let i = 0; i < data.value?.brokers.length; i++) {
			if (data.value.brokers[i].positions !== null) {
				data.value.brokers[i].positions?.forEach((element) => {
					positionsList.push(element)
				})
			}
		}
	}

	console.log(positionsList, data.value, 'getPositionsList!!!')

	return positionsList
}
