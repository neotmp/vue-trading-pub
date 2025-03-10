<script setup lang="ts">
//import { onBeforeMount } from 'vue'

import { store } from '@/store/store'

//const route = useRoute()
//const pageId = route.params.id.toString()
const { useBroker } = store()
const { payload, submitCreateBroker } = useBroker()

function submit() {
	submitCreateBroker()
	// TO DO update, errors handling and so forth
}

// When dealing with async you need to use then() approach
// onBeforeMount(() => {
// 	if (data.value) {
// 		brokerDetail(Number(pageId))
// 		console.log(pageId, 'page')
// 	} else {
// 		useBroker()
// 			.brokerList()
// 			.fetch()
// 			.then(() => {
// 				// compute list of
// 				list().get()
// 				// get specific account
// 				brokerDetail(Number(pageId))
// 				console.log(brokerData.value, 'accdata')
// 			})
// 			.finally(() => {
// 				console.log('data finally')
// 			})
// 	}
// })
</script>

<template>
	<button @click="submit" class="p-2 bg-green-300 rounded-md mt-4">SEND DATA</button>

	<div class="space-y-12">
		<div class="border-b border-gray-900/10 pb-12">
			<h2 class="text-base/7 font-semibold text-gray-900">BROKER PAGE</h2>
			<p class="mt-1 text-sm/6 text-gray-600">Info here?</p>
			<div>PAYLOAD: {{ payload }}</div>

			<div class="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6"></div>
		</div>

		<div class="border-b border-gray-900/10 pb-12">
			<h2 class="text-base/7 font-semibold text-gray-900">Information about your broker</h2>
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
							class="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
						/>
					</div>
				</div>

				<div class="sm:col-span-2">
					<label for="country" class="block text-sm/6 font-medium text-gray-900">Country</label>
					<div class="mt-2">
						<input
							country="text"
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
					<label for="openedAt" class="block text-sm/6 font-medium text-gray-900">Opened at</label>
					<div class="mt-2">
						<input
							type="date"
							name="openedAt"
							id="openedAt"
							v-model="payload.openedAt"
							class="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
						/>
					</div>
				</div>

				<div class="col-span-full">
					<label for="memo" class="block text-sm/6 font-medium text-gray-900">Memo</label>
					<div class="mt-2">
						<textarea
							name="memo"
							id="memo"
							v-model="payload.memo"
							rows="3"
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
		</div>
	</div>
</template>
