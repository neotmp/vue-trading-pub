<script setup lang="ts">
import { onBeforeMount, onUnmounted } from 'vue'
import { useRoute } from 'vue-router'
import LockClosed from '@/components/icons/LockClosed.vue'
//
import { store } from '@/store/store'
const { useBroker } = store()
const route = useRoute()
const pageId = route.params.id.toString()
const { payload, submitEditBroker, editBroker } = useBroker()

async function submit() {
  const res = await submitEditBroker()
  console.log(res.code.value, 'code')
}

onBeforeMount(() => {
  editBroker(Number(pageId))
})

onUnmounted(() => {
  payload.value = {}
})
</script>

<template>
  <section class="container px-4 mx-auto">
    <button @click="submit" class="p-2 bg-green-300 rounded-md mt-4">SEND DATA</button>

    <form>
      <div class="space-y-12">
        <div class="border-b border-gray-900/10 pb-12">
          <h2 class="text-base/7 font-semibold text-gray-900">EDIT ACCOUNT</h2>
          <p class="mt-1 text-sm/6 text-gray-600">Info here?</p>

          <div class="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6"></div>
        </div>

        <div class="border-b border-gray-900/10 pb-12">
          <h2 class="text-base/7 font-semibold text-gray-900">Information about your account</h2>
          <p class="mt-1 text-sm/6 text-gray-600">
            Once the account has been created only a limited number of fields may be changed.
          </p>

          <div class="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
            <div class="sm:col-span-2">
              <label for="name" class="block text-sm/6 font-medium text-gray-900">Name</label>
              <div class="mt-2">
                <input
                  type="text"
                  name="name"
                  id="name"
                  v-model="payload.name"
                  autocomplete="name"
                  class="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
                />
              </div>
            </div>

            <div class="sm:col-span-2">
              <label for="country" class="block text-sm/6 font-medium text-gray-900">Country</label>
              <div class="mt-2">
                <input
                  type="text"
                  name="country"
                  id="country"
                  v-model="payload.country"
                  class="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
                />
              </div>
            </div>

            <div class="sm:col-span-2">
              <label for="phone" class="block text-sm/6 font-medium text-gray-900">Phone</label>
              <div class="mt-2">
                <input
                  type="text"
                  name="phone"
                  id="phone"
                  v-model="payload.phone"
                  class="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
                />
              </div>
            </div>

            <div class="sm:col-span-2">
              <label for="email" class="block text-sm/6 font-medium text-gray-900">Email</label>
              <div class="mt-2">
                <input
                  type="text"
                  name="email"
                  id="email"
                  v-model="payload.email"
                  class="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
                />
              </div>
            </div>

            <div class="sm:col-span-2">
              <label for="balance" class="block text-sm/6 font-medium text-gray-900">Balance</label>
              <div class="mt-2 relative">
                <input
                  id="balance"
                  value="1,500.90"
                  name="balance"
                  disabled
                  type="balance"
                  class="block w-full rounded-md bg-gray-100 px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
                />
                <span class="absolute top-1/2 right-3 -translate-y-1/2">
                  <LockClosed />
                </span>
              </div>
            </div>

            <div class="sm:col-span-2">
              <label for="currency" class="block text-sm/6 font-medium text-gray-900"
                >Currency</label
              >
              <div class="mt-2 relative">
                <input
                  id="currency"
                  name="currency"
                  value="USD"
                  disabled
                  type="currency"
                  class="block w-full rounded-md bg-gray-100 px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
                />
                <span class="absolute top-1/2 right-3 -translate-y-1/2">
                  <LockClosed />
                </span>
              </div>
            </div>

            <div class="col-span-full">
              <label for="memo" class="block text-sm/6 font-medium text-gray-900">Memo</label>
              <div class="mt-2">
                <textarea
                  name="memo"
                  id="memo"
                  rows="3"
                  v-model="payload.memo"
                  class="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
                />
              </div>
              <p class="mt-3 text-sm/6 text-gray-600">Write a few sentences about your account.</p>
            </div>
          </div>
        </div>

        <div class="border-b border-gray-900/10 pb-12">
          <h2 class="text-base/7 font-semibold text-gray-900">Restrictions</h2>
          <p class="mt-1 text-sm/6 text-gray-600">
            You can limit visibility of your account or close it altogether.
          </p>

          <div class="mt-10 space-y-10">
            <div class="p-3 border border-gray-600 rounded-md bg-gray-200">
              <fieldset>
                <legend class="text-sm/6 font-semibold text-gray-900">Status</legend>
                <p class="mt-1 text-sm/6 text-gray-600">
                  Account can only be closed if its balance is zero.
                </p>
                <p class="mt-1 text-sm/6 text-gray-600">
                  Closed account cannot be used for transactions. You can re-open it any time,
                  though.
                </p>
                <div class="mt-6 space-y-6">
                  <div class="flex items-center gap-x-3">
                    <input
                      id="active-true"
                      name="active-true"
                      v-model="payload.active"
                      :value="true"
                      type="radio"
                      class="relative size-4 appearance-none rounded-full border border-gray-300 bg-white before:absolute before:inset-1 before:rounded-full before:bg-white not-checked:before:hidden checked:border-indigo-600 checked:bg-indigo-600 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 disabled:border-gray-300 disabled:bg-gray-100 disabled:before:bg-gray-400 forced-colors:appearance-auto forced-colors:before:hidden"
                    />
                    <label for="active-true" class="block text-sm/6 font-medium text-gray-900"
                      >Active</label
                    >
                  </div>

                  <div class="flex items-center gap-x-3">
                    <input
                      id="active-false"
                      name="active-false"
                      :value="false"
                      v-model="payload.active"
                      type="radio"
                      class="relative size-4 appearance-none rounded-full border border-gray-300 bg-white before:absolute before:inset-1 before:rounded-full before:bg-white not-checked:before:hidden checked:border-indigo-600 checked:bg-indigo-600 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 disabled:border-gray-300 disabled:bg-gray-100 disabled:before:bg-gray-400 forced-colors:appearance-auto forced-colors:before:hidden"
                    />
                    <label for="active-false" class="block text-sm/6 font-medium text-gray-900"
                      >Closed</label
                    >
                  </div>
                </div>
              </fieldset>
            </div>
          </div>
        </div>
      </div>

      <div class="mt-6 flex items-center justify-end gap-x-6">
        <button type="button" class="text-sm/6 font-semibold text-gray-900">Cancel</button>
        <button
          type="submit"
          class="rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-xs hover:bg-indigo-500 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
        >
          Save
        </button>
      </div>
    </form>
  </section>
</template>
