<script setup lang="ts">
import { onBeforeMount, onUnmounted } from 'vue'

//
import { store } from '@/store/store'
const { data, useBroker, useAccount } = store()

const { accountData, payload, submitCreateAccount } = useAccount()

async function submit() {
	const res = await submitCreateAccount()
	console.log(res.code.value, 'code')
}

onBeforeMount(() => {
	if (!data.value) {
		useBroker()
			.brokerList()
			.fetch()
			.then(() => {})
			.finally(() => {
				console.log('data finally')
			})
	}
})

onUnmounted(() => {
	payload.value = {}
})
// TO DO fix all select types of input

const contracts = [
	{ id: 1, name: 'Pro' },
	{ id: 2, name: 'Other contract' }
]

const currencies = [
	{ id: 1, name: 'USD' },
	{ id: 2, name: 'EUR' },
	{ id: 3, name: 'NZD' }
]

const types = [
	{ id: 1, name: 'Trade' },
	{ id: 2, name: 'Transit' },
	{ id: 0, name: 'Cash' }
]

// const directions = [
// 	{ id: 1, name: 'Buy' },
// 	{ id: 2, name: 'Sell' }
// ]
</script>

<template>
	<button @click="submit" class="p-2 bg-green-300 rounded-md mt-4">SEND DATA</button>
	<div>PAYLOAD: {{ payload }}</div>
	<div>accdata: {{ accountData }}</div>

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
							class="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
						/>
					</div>
				</div>

				<div class="sm:col-span-2">
					<label for="brokerId" class="block text-sm/6 font-medium text-gray-900">Broker</label>
					<div class="mt-2">
						<select
							v-model="payload.brokerId"
							id="brokerId"
							class="block bg-white h-9 w-full rounded-md px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
						>
							<option
								v-for="item in data?.brokers"
								:key="item.id"
								:value="item.id"
								class="dark:bg-dark-2"
							>
								{{ item.name }}
							</option>
						</select>
					</div>
				</div>

				<div class="sm:col-span-2">
					<label for="contractId" class="block text-sm/6 font-medium text-gray-900"
						>ContractId</label
					>
					<div class="mt-2">
						<select
							v-model="payload.contractId"
							id="contractId"
							class="block bg-white h-9 w-full rounded-md px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
						>
							<option
								v-for="item in contracts"
								:key="item.id"
								:value="item.id"
								class="dark:bg-dark-2"
							>
								{{ item.name }}
							</option>
						</select>
					</div>
				</div>

				<div class="sm:col-span-2">
					<label for="currencyId" class="block text-sm/6 font-medium text-gray-900">Currency</label>
					<div class="mt-2">
						<select
							v-model="payload.currencyId"
							id="currencyId"
							class="block bg-white h-9 w-full rounded-md px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
						>
							<option
								v-for="item in currencies"
								:key="item.id"
								:value="item.id"
								class="dark:bg-dark-2"
							>
								{{ item.name }}
							</option>
						</select>
					</div>
				</div>

				<div class="sm:col-span-2">
					<label for="type" class="block text-sm/6 font-medium text-gray-900">Account Type</label>
					<div class="mt-2">
						<select
							v-model="payload.type"
							id="type"
							class="block bg-white h-9 w-full rounded-md px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
						>
							<option v-for="item in types" :key="item.id" :value="item.id" class="dark:bg-dark-2">
								{{ item.name }}
							</option>
						</select>
					</div>
				</div>

				<div class="sm:col-span-2">
					<label for="leverage" class="block text-sm/6 font-medium text-gray-900">Leverage</label>
					<div class="mt-2">
						<input
							type="text"
							name="leverage"
							id="leverage"
							:value="accountData?.leverage"
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

			<div class="mt-10 space-y-10">
				<div class="p-3 border border-gray-600 rounded-md bg-gray-200">
					<fieldset>
						<legend class="text-sm/6 font-semibold text-gray-900">Hedge</legend>
						<p class="mt-1 text-sm/6 text-gray-600">
							Account can only be closed if its balance is zero.
						</p>
						<p class="mt-1 text-sm/6 text-gray-600">
							Closed account cannot be used for transactions. You can re-open it any time, though.
						</p>
						<div class="mt-6 space-y-6">
							<div class="flex items-center gap-x-3">
								<input
									id="active-true"
									name="active-true"
									v-model="payload.hedge"
									:value="true"
									type="radio"
									class="relative size-4 appearance-none rounded-full border border-gray-300 bg-white before:absolute before:inset-1 before:rounded-full before:bg-white not-checked:before:hidden checked:border-indigo-600 checked:bg-indigo-600 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 disabled:border-gray-300 disabled:bg-gray-100 disabled:before:bg-gray-400 forced-colors:appearance-auto forced-colors:before:hidden"
								/>
								<label for="active-true" class="block text-sm/6 font-medium text-gray-900"
									>Yes</label
								>
							</div>

							<div class="flex items-center gap-x-3">
								<input
									id="active-false"
									name="active-false"
									:value="false"
									v-model="payload.hedge"
									type="radio"
									class="relative size-4 appearance-none rounded-full border border-gray-300 bg-white before:absolute before:inset-1 before:rounded-full before:bg-white not-checked:before:hidden checked:border-indigo-600 checked:bg-indigo-600 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 disabled:border-gray-300 disabled:bg-gray-100 disabled:before:bg-gray-400 forced-colors:appearance-auto forced-colors:before:hidden"
								/>
								<label for="active-false" class="block text-sm/6 font-medium text-gray-900"
									>No</label
								>
							</div>
						</div>
					</fieldset>
				</div>
			</div>
		</div>
	</div>
</template>
