import type { TTransaction } from '@/store/types'
import { useState } from '@/store/useState'

/**
 * getTransactionList returns all transactions from all brokers
 * @returns a slice as TTransaction[]
 */
export function getTransactionsList(): TTransaction[] {
	const { data } = useState()
	const transctionsList: TTransaction[] = []

	if (data.value) {
		// check for undefined
		for (let i = 0; i < data.value?.brokers.length; i++) {
			if (data.value.brokers[i].transactions !== null) {
				data.value.brokers[i].transactions?.forEach((element) => {
					transctionsList.push(element)
				})
			}
		}
	}

	console.log(transctionsList, data.value, 'getTransactionsList!!!')

	return transctionsList
}
