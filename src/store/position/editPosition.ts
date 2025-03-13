import { positionState } from './positionState'
import { getPosition } from '@/composables/position/getPosition'

export function editPosition(id: number) {
	const { positionData, payload } = positionState()

	positionData.value = getPosition(id).value
	console.log(positionData.value?.id, 'Computed')

	if (positionData.value) {
		const id = positionData.value.id
		const direction = positionData.value.direction
		const volume = positionData.value.volume
		const pair = positionData.value.pair
		const pairId = positionData.value.pairId
		const price = positionData.value.price
		const sl = positionData.value.sl
		const tp = positionData.value.tp
		const ts = positionData.value.ts
		const memo = positionData.value.memo
		const brokerId = positionData.value.brokerId
		const accountId = positionData.value.accountId
		//
		payload.value.id = id
		payload.value.direction = direction
		payload.value.volume = volume
		payload.value.pair = pair
		payload.value.pairId = pairId
		payload.value.price = price
		payload.value.sl = sl
		payload.value.tp = tp
		payload.value.ts = ts
		payload.value.memo = memo
		payload.value.brokerId = brokerId
		payload.value.accountId = accountId
	}
}
