import { accountDetail } from './accountDetail'
import { list } from './accountList'
import { accountState } from './accountState'
import { editAccount } from './editAccount'
import { submitCreateAccount } from './submitCreateAccount'
import { submitEditAccount } from './submitEditAccount'

export function useAccount() {
	const { accountData, accountsList, payload } = accountState()
	return {
		//local state
		accountData,
		payload,
		accountsList,
		//methods
		submitCreateAccount,
		submitEditAccount,
		editAccount,
		list,
		accountDetail
	}
}
