import type { TPosition } from '../types'
import { ref } from 'vue'

// state of account
const positionData = ref<TPosition>()
const positionsList = ref<TPosition[]>()
const t = new Date()
const payload = ref<Partial<TPosition>>({
	type: 1,
	brokerId: 10,
	timestamp: t,
	accountId: 34,
	price: 1.09123,
	volume: 0.01,
	pairId: 22,
	sl: 0,
	ts: 0,
	tp: 0,
	memo: 'My position',
	commission: 1,
	direction: 2,
	margin: 5
})

const error = ref('')
const responseCode = ref<number>()

export function positionState() {
	return {
		positionData,
		positionsList,
		payload,
		error,
		responseCode
	}
}
