import { positionState } from './positionState'
import { getPositionsList } from '@/composables/position/getPositionsList'

function get() {
	const state = positionState()

	const response = getPositionsList()
	state.positionsList.value = response
	console.log(response, 'resp')
}

export function list() {
	return {
		get
	}
}
