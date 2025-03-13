import { transactionState } from './transactionState'
import { getTransactionsList } from '@/composables/transaction/getTransactionsList'

function get() {
	const state = transactionState()

	const response = getTransactionsList()
	state.transactionsList.value = response
	console.log(response, 'resp')
}

export function list() {
	return {
		get
	}
}
