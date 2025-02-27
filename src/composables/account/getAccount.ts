import { computed } from 'vue'
import type { TAccount } from '@/store/types'
import { accountState } from '@/store/account/accountState'

/**
 * getAccount finds account in the slice based on the provided id.
 * Computed property.
 * @param id account number.
 * @returns account object TAccount found in the slice or undefined.
 */
export const getAccount = (id: number) =>
  computed((): TAccount | undefined => {
    const { accountsList } = accountState()
    return accountsList.value?.find((element) => element.id === id)
  })
