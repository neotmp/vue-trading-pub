import type { TAccount } from '../types'
import { ref } from 'vue'

// state of account
const accountData = ref<TAccount>()
const accountsList = ref<TAccount[]>()
const t = new Date()
const payload = ref<Partial<TAccount>>({
	name: '',
	leverage: 200,
	openedAt: t,
	active: true,
	type: 0,
	contractId: 1,
	hedge: true, // ????
	memo: '' //change
})

const error = ref('')
const responseCode = ref<number>()

export function accountState() {
	return {
		accountData,
		accountsList,
		payload,
		error,
		responseCode
	}
}
