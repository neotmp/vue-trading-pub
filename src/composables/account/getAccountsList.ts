import type { TAccount } from '@/store/types'
import { useState } from '@/store/useState'

export function getAccountsList(): TAccount[] {
  const { data } = useState()
  const accountList: TAccount[] = []

  if (data.value) {
    // check for undefined
    for (let i = 0; i < data.value?.brokers.length; i++) {
      if (data.value.brokers[i].accounts !== null) {
        data.value.brokers[i].accounts?.forEach((element) => {
          accountList.push(element)
        })
      } else {
        break
      }
    }
  }

  console.log(accountList, data.value, 'getAccountList!!!')

  return accountList
}
