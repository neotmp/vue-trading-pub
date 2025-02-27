import { ref } from 'vue'

import type { TData, TError } from './types'

const isLoading = ref(false)
const code = ref<number>()
const message = ref<string>()
const error = ref<TError>()
const data = ref<TData | undefined>(undefined)

export function useState() {
  return {
    isLoading,
    data,
    code,
    message,
    error,
  }
}
