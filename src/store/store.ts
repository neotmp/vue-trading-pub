import { useAccount } from './account/useAccount'
import { useBroker } from './broker/useBroker'
import { useOrder } from './order/useOrder'
import { usePosition } from './position/usePosition'
import { useTransaction } from './transaction/useTransaction'
import { useState } from './useState'

export function store() {
	const state = useState()
	const isLoading = state.isLoading
	const data = state.data
	const code = state.code
	const message = state.message
	const error = state.error

	return {
		//state
		isLoading,
		data,
		code,
		message,
		error,
		// methods
		useBroker,
		useAccount,
		useOrder,
		usePosition,
		useTransaction
	}
}
