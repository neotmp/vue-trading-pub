<script setup lang="ts">
import { onBeforeMount } from 'vue'
import { useRoute } from 'vue-router'
import { store } from '@/store/store'

import BrokerAccounts from './BrokerAccounts.vue'
import BrokerPositions from './BrokerPositions.vue'
import BrokerOrders from './BrokerOrders.vue'

const route = useRoute()
const pageId = route.params.id.toString()
const { data, useBroker } = store()
const { brokerDetail, brokerData } = useBroker()

// When dealing with async you need to use then() approach
onBeforeMount(() => {
	if (data.value) {
		brokerDetail(Number(pageId))
	} else {
		useBroker()
			.brokerList()
			.fetch()
			.then(() => {
				brokerDetail(Number(pageId))
			})
			.finally(() => {
				console.log('data finally')
			})
	}
})
</script>

<template>
	<section class="container px-4 mx-auto">
		<!-- <button @click="submit" class="p-2 bg-green-300 rounded-md mt-4">SEND DATA</button> -->

		<div class="flex items-center mt-4 gap-x-3">
			<RouterLink
				to="#"
				class="flex items-center justify-center w-1/2 px-5 py-2 text-sm tracking-wide text-white transition-colors duration-200 bg-blue-500 rounded-lg shrink-0 sm:w-auto gap-x-2 hover:bg-blue-600 dark:hover:bg-blue-500 dark:bg-blue-600"
			>
				<svg
					xmlns="http://www.w3.org/2000/svg"
					fill="none"
					viewBox="0 0 24 24"
					stroke-width="1.5"
					stroke="currentColor"
					class="w-5 h-5"
				>
					<path
						stroke-linecap="round"
						stroke-linejoin="round"
						d="M12 9v6m3-3H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z"
					/>
				</svg>

				<span>DEPOSIT</span>
			</RouterLink>
			<RouterLink
				to="#"
				class="flex items-center justify-center w-1/2 px-5 py-2 text-sm tracking-wide text-white transition-colors duration-200 bg-blue-500 rounded-lg shrink-0 sm:w-auto gap-x-2 hover:bg-blue-600 dark:hover:bg-blue-500 dark:bg-blue-600"
			>
				<svg
					xmlns="http://www.w3.org/2000/svg"
					fill="none"
					viewBox="0 0 24 24"
					stroke-width="1.5"
					stroke="currentColor"
					class="w-5 h-5"
				>
					<path
						stroke-linecap="round"
						stroke-linejoin="round"
						d="M12 9v6m3-3H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z"
					/>
				</svg>

				<span>TRANSFER</span>
			</RouterLink>
			<RouterLink
				to="#"
				class="flex items-center justify-center w-1/2 px-5 py-2 text-sm tracking-wide text-white transition-colors duration-200 bg-blue-500 rounded-lg shrink-0 sm:w-auto gap-x-2 hover:bg-blue-600 dark:hover:bg-blue-500 dark:bg-blue-600"
			>
				<svg
					xmlns="http://www.w3.org/2000/svg"
					fill="none"
					viewBox="0 0 24 24"
					stroke-width="1.5"
					stroke="currentColor"
					class="w-5 h-5"
				>
					<path
						stroke-linecap="round"
						stroke-linejoin="round"
						d="M12 9v6m3-3H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z"
					/>
				</svg>

				<span>WITHDRAW</span>
			</RouterLink>
		</div>

		<div class="space-y-12">
			<div class="border-b border-gray-900/10 pb-12">
				<h2 class="text-base/7 font-semibold text-gray-900">BROKER PAGE</h2>
				<p class="mt-1 text-sm/6 text-gray-600">Info here?</p>

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
								:value="brokerData?.name"
								disabled
								class="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
							/>
						</div>
					</div>

					<div class="sm:col-span-2">
						<label for="balance" class="block text-sm/6 font-medium text-gray-900">Balance</label>
						<div class="mt-2">
							<input
								type="text"
								name="balance"
								id="balance"
								value="123,765.00"
								disabled
								class="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
							/>
						</div>
					</div>

					<div class="sm:col-span-2">
						<label for="currency" class="block text-sm/6 font-medium text-gray-900">Currency</label>
						<div class="mt-2">
							<input
								type="text"
								name="currency"
								id="currency"
								value="USD"
								disabled
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
								:value="brokerData?.country"
								disabled
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
								:value="brokerData?.phone"
								disabled
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
								:value="brokerData?.email"
								disabled
								class="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
							/>
						</div>
					</div>

					<div class="sm:col-span-2">
						<label for="active" class="block text-sm/6 font-medium text-gray-900">Active</label>
						<div class="mt-2">
							<input
								active="text"
								name="active"
								id="active"
								:value="brokerData?.active"
								disabled
								class="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
							/>
						</div>
					</div>

					<div class="sm:col-span-2">
						<label for="openedAt" class="block text-sm/6 font-medium text-gray-900"
							>Opened at</label
						>
						<div class="mt-2">
							<input
								type="text"
								name="openedAt"
								id="openedAt"
								:value="brokerData?.openedAt"
								disabled
								class="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
							/>
						</div>
					</div>

					<div class="sm:col-span-2">
						<label for="profit" class="block text-sm/6 font-medium text-gray-900">Profit</label>
						<div class="mt-2">
							<input
								type="text"
								name="profit"
								id="profit"
								value="123,534.93"
								disabled
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
								:value="brokerData?.memo"
								disabled
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

				<BrokerAccounts />
				<BrokerPositions />
				<BrokerOrders />
			</div>
		</div>
	</section>
</template>
