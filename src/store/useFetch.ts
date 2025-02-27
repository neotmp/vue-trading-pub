import type { TError } from '@/store/types'
import { ref } from 'vue'

// network errors
//

// type TNetworkError = {
// 	code: number
// 	message: string
// 	response: string
// }

//type TMethod = 'GET' | 'POST' | 'DELETE' | 'PUT' | 'PATCH'

// prettier-ignore

//remove it from here
type TOptions = {
	method: string
	body: string
	headers: Headers
}
export const useFetch = async (uri: string, options?: TOptions) => {
  //
  const isLoading = ref<boolean>(false)
  const code = ref<number>()
  const message = ref<string>()
  const error = ref<TError>()
  const data = ref()

  const API = import.meta.env.VITE_APP_API
  const PORT = import.meta.env.VITE_APP_API_PORT

  const url = new URL(`${API}:${PORT}/api/${uri}`)
  isLoading.value = true

  // headers
  const headers = new Headers()
  headers.append('Content-Type', 'application/json')

  // POST OPTIONS

  // type TFetchOptions = {
  //   method: "POST" | "PATCH" | "OPTIONS"
  //   body: string | Blob | BufferSource | FormData | URLSearchParams
  //   headers: Headers

  // }

  // const options = {
  //   method: "POST",
  //   body: JSON.stringify({user:"Mokaeff"}),
  //   headers: headers

  // }

  // THIS IS FOR FETCHING ONLY
  /**
   * fetchURL
   * @returns Promise<Response>
   */
  const fetchURL = async (): Promise<Response> => {
    return await fetch(url, {
      signal: AbortSignal.timeout(100000),
      method: options?.method,
      body: options?.body,
      headers: options?.headers,
    })
  }

  //const timeoutError = new Error("Timeout Error12")

  // this is for error Handling ONLY
  try {
    const res = await fetchURL()
    if (res.status === 400) {
      // cancells operation
      //state.error.value = {code:res.status,message:"Error",response:"Hello"}
      throw new Error(`Some text here, ${res.status}`)
    }

    const d = await res.json()
    code.value = d.code
    message.value = d.message
    data.value = d.data
    error.value = d.error
    console.log(d, 'Fetch Main')
  } catch (error) {
    console.log(error)
    //throw new Error("New error message");
  } finally {
    isLoading.value = false
    //error.value = {code:200,message:"Hello",response:"Hello"}
  }

  console.log(data.value, 'DATA RETURN')

  return { data, code, message, error, isLoading }
}
