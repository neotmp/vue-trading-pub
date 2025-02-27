import { store } from '@/store/store'

/**
 * getIndex returns index of the broker in the slice
 * @param id broker id, number
 * @returns index to find to locate object in the slice of brokers
 */
export function getIndex(id: number): number | undefined {
  const { data } = store()

  const found = data.value?.brokers.find((element) => element.id === id)

  if (found && data.value?.brokers) {
    return data.value?.brokers.indexOf(found)
  } else {
    return undefined
  }
}
