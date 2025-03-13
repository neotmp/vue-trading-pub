import { positionDetail } from './positionDetail'
import { list } from './positionList'
import { positionState } from './positionState'
import { editPosition } from './editPosition'
import { submitCreatePosition } from './submitCreatePosition'
import { submitEditPosition } from './submitEditPosition'
import { submitClosePosition } from './submitClosePosition'

export function usePosition() {
	const { positionData, positionsList, payload } = positionState()
	return {
		//local state
		positionData,
		payload,
		positionsList,
		//methods
		submitCreatePosition,
		submitEditPosition,
		submitClosePosition,
		editPosition,
		list,
		positionDetail
	}
}
