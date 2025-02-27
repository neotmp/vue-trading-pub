import { useState } from '../useState'
import { useFetch } from '../useFetch'

async function fetch() {
  const state = useState()

  state.isLoading.value = true
  const response = await useFetch('broker/list')
  state.data.value = response.data.value
  state.message.value = response.message.value
  state.error.value = response.error.value
  state.code.value = response.code.value
  state.isLoading.value = false
}

export function brokerList() {
  return {
    fetch,
  }
}
