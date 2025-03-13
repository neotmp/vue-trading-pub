import { computed } from 'vue'
import type { TPosition } from '@/store/types'
import { positionState } from '@/store/position/positionState'

/**
 * getPOsition finds position in the slice based on the provided id.
 * Computed property.
 * @param id position number.
 * @returns position object TPosition found in the slice or undefined.
 */
export const getPosition = (id: number) =>
	computed((): TPosition | undefined => {
		const { positionsList } = positionState()
		return positionsList.value?.find((element) => element.id === id)
	})
