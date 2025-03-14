import type { TBroker } from '../types'
import { ref } from 'vue'

// state of account
const brokerData = ref<TBroker>()
const t = new Date()
const payload = ref<Partial<TBroker>>({
	id: 0,
	name: '',
	country: '',
	phone: '',
	email: '',
	openedAt: t,
	memo: '', //change
	active: true
})

const error = ref('')
const responseCode = ref<number>()

export function brokerState() {
	return {
		brokerData,
		payload,
		error,
		responseCode
	}
}
