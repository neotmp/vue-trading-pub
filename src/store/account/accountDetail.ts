import { accountState } from './accountState'
import { getAccount } from '@/composables/account/getAccount'
import { readonly, ref } from 'vue'
import type { TAccount } from '../types'

export function accountDetail(id: number) {
	const { accountData } = accountState()

	const data = ref<TAccount>()
	data.value = getAccount(id).value

	if (data.value) {
		accountData.value = readonly(data.value)
		console.log(accountData.value?.name, 'Computed account')
	}
}
