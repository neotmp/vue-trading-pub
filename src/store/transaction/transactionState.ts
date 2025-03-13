import type { TTransaction } from '../types'
import { ref } from 'vue'

// state of account
const transactionData = ref<TTransaction>()
const transactionsList = ref<TTransaction[]>()
const t = new Date()
const payload = ref<Partial<TTransaction>>({
	timestamp: t,
	brokerId: 8,
	accountId: 11,
	debitId: 11,
	creditId: 22,
	currencyId: 1,
	direction: 1,
	external: false,
	amount: 100,
	fee: 0,
	memo: 'Test transfer'
})

const error = ref('')
const responseCode = ref<number>()

export function transactionState() {
	return {
		transactionData,
		transactionsList,
		payload,
		error,
		responseCode
	}
}
