import type { TAccount } from '../types'
import { store } from '../store'

function edit(accountData: TAccount) {
	const { data } = store()

	// find broker
	const found = data.value?.brokers.find((element) => element.id === accountData.brokerId)

	if (found && data.value?.brokers) {
		// return index of the broker
		const index = data.value?.brokers.indexOf(found)

		// find account

		// accounts may be NULL
		const foundAccount = data.value.brokers[index].accounts?.find(
			(element) => element.id === accountData.id
		)

		if (foundAccount) {
			// return index of the account
			// null assertion, we know we have data here
			const indexOrder = data.value.brokers[index].accounts!.indexOf(foundAccount)

			// edit object
			// null assertion, we know we have data here
			data.value.brokers[index].accounts![indexOrder] = accountData
		}
	}
}

function add(accountData: TAccount) {
	const { data } = store()

	// find broker
	const found = data.value?.brokers.find((element) => element.id === accountData.brokerId)
	if (found) {
		const index = data.value?.brokers.indexOf(found)
		if (index) {
			// null assertion, we know we have accounts here
			data.value?.brokers[index].accounts!.push(accountData)
		}
	}
}

export async function updateState(accountData: TAccount, code: number) {
	if (code === 2) {
		edit(accountData)
	} else if (code === 3) {
		add(accountData)
	}
}
