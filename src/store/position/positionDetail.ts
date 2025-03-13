import { positionState } from './positionState'
import { getPosition } from '@/composables/position/getPosition'
import { readonly, ref } from 'vue'
import type { TPosition } from '../types'

export function positionDetail(id: number) {
	const { positionData } = positionState()

	const data = ref<TPosition>()
	data.value = getPosition(id).value

	if (data.value) {
		positionData.value = readonly(data.value)
		console.log(positionData.value?.id, 'Computed order')
	}
}
