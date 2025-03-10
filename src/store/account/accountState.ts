import type { TAccount } from '../types'
import { ref } from 'vue'

// state of account
const accountData = ref<TAccount>()
const accountsList = ref<TAccount[]>()
const payload = ref<Partial<TAccount>>({
	id: 0,
	name: '',
	leverage: 400,
	active: true,
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
