import { submitCreateTransaction } from './submitCreateTransaction'
import { list } from './transactionList'
import { transactionState } from './transactionState'

export function useTransaction() {
	const { transactionData, transactionsList, payload } = transactionState()
	return {
		//local state
		transactionData,
		payload,
		transactionsList,
		//methods
		submitCreateTransaction,
		list
	}
}
