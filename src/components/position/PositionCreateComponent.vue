<script setup lang="ts">
import { onBeforeMount } from 'vue'
import { store } from '@/store/store'
import ButtonComponent from '../elements/ButtonComponent.vue'

const { data, usePosition, useBroker } = store()
const { positionData, payload, submitCreatePosition } = usePosition()

// When dealing with async you need to use then() approach
onBeforeMount(() => {
	if (!data.value) {
		useBroker()
			.brokerList()
			.fetch()
			.then(() => {
				console.log(positionData.value, 'position data')
			})
			.finally(() => {
				console.log('data finally')
			})
	}
})

// 		"AUDCAD",	Price: 0.91123
// 		"AUDCHF", Price: 0.56123,
// 		"AUDJPY", Price: 93.1230,
// 		"AUDNZD", Price: 1.11123,
// 		"AUDUSD", Price: 0.63123,
// 		"EURUSD", Price: 1.10123,
// 		"EURAUD", Price: 1.72123,
// 		"EURNZD", Price: 1.92123,
// 		"EURCAD", Price: 1.58123,
// 		"EURCHF", Price: 0.97123,
// 		"EURJPY", Price: 161.123,
// 		"EURGBP", Price: 0.83123,
// 		"GBPUSD", Price: 1.13123,
// 		"GBPAUD", Price: 2.06123,
// 		"GBPNZD", Price: 2.27123,
// 		"GBPCAD", Price: 1.87123,
// 		"GBPJPY", Price: 191.123,
// 		"USDJPY", Price: 148.123,
// 		"USDCAD", Price: 1.45123,
// 		"USDCHF", Price: 0.89123,
// 		"NZDUSD", Price: 0.58123,
// 		"NZDCAD", Price: 0.83123,
// 		"NZDCHF", Price: 0.51123,
// 		"NZDJPY", Price: 85.123,
// 		"CHFJPY", Price: 168.123,
// 		"CADCHF", Price: 0.62123,
// 		"CADJPY", Price: 103.123,

function submit() {
	submitCreatePosition()
}

const accs = [
	{ id: 32, name: 'Cash Account' },
	{ id: 33, name: 'Transit Account' },
	{ id: 34, name: 'Trade Account' }
]

const pairs = [
	{ pairId: 2, name: 'AUDCAD' },
	{ pairId: 3, name: 'AUDCHF' },
	{ pairId: 4, name: 'AUDJPY' },
	{ pairId: 5, name: 'AUDNZD' },
	{ pairId: 6, name: 'AUDUSD' },
	{ pairId: 22, name: 'EURUSD' },
	{ pairId: 16, name: 'EURAUD' },
	{ pairId: 21, name: 'EURNZD' },
	{ pairId: 17, name: 'EURCAD' },
	{ pairId: 18, name: 'EURCHF' },
	{ pairId: 20, name: 'EURJPY' },
	{ pairId: 19, name: 'EURGBP' },
	{ pairId: 15, name: 'GBPUSD' },
	{ pairId: 10, name: 'GBPAUD' },
	{ pairId: 14, name: 'GBPNZD' },
	{ pairId: 11, name: 'GBPCAD' },
	{ pairId: 13, name: 'GBPJPY' },
	{ pairId: 29, name: 'USDJPY' },
	{ pairId: 27, name: 'USDCAD' },
	{ pairId: 28, name: 'USDCHF' },
	{ pairId: 26, name: 'NZDUSD' },
	{ pairId: 23, name: 'NZDCAD' },
	{ pairId: 24, name: 'NZDCHF' },
	{ pairId: 25, name: 'NZDJPY' },
	{ pairId: 9, name: 'CHFJPY' },
	{ pairId: 7, name: 'CADCHF' },
	{ pairId: 8, name: 'CADJPY' }
]

const types = [
	{ id: 1, name: 'Market' },
	{ id: 2, name: 'Pending' },
	{ id: 0, name: 'Modify' }
]

const directions = [
	{ id: 1, name: 'Buy' },
	{ id: 2, name: 'Sell' }
]
</script>

<template>
	<section class="container px-4 mx-auto">
		<button @click="submit" class="p-2 bg-green-300 rounded-md mt-4">SEND DATA</button>

		<div>Payload: {{ payload }}</div>

		<div class="flex justify-center">
			<div
				class="w-full max-w-xl overflow-hidden bg-white rounded-lg shadow-lg dark:bg-gray-800 dark:shadow-gray-700"
			>
				<div class="py-5 text-center">
					<span class="block text-xl font-bold text-gray-800 dark:text-white" tabindex="0"
						>Create New Order</span
					>
				</div>
				<div class="bg-green-300">
					<div class="text-sm text-gray-700 dark:text-gray-200">Balance: 100</div>
					<div class="text-sm text-gray-700 dark:text-gray-200">Free Margin: 50</div>
					<div class="text-sm text-gray-700 dark:text-gray-200">Margin Level: 500%</div>
					<div class="text-sm text-gray-700 dark:text-gray-200">Margin: 50</div>
				</div>

				<div class="space-y-3">
					<div class="mx-4">
						<label for="type" class="block text-sm/6 font-medium text-gray-900">Broker</label>
						<div class="mt-2">
							<select
								v-model="payload.brokerId"
								id="type"
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

					<div class="mx-4">
						<label for="accountId" class="block text-sm/6 font-medium text-gray-900">Account</label>
						<div class="mt-2">
							<select
								v-model="payload.accountId"
								id="accountId"
								class="block bg-white h-9 w-full rounded-md px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
							>
								<option v-for="item in accs" :key="item.id" :value="item.id" class="dark:bg-dark-2">
									{{ item.name }}
								</option>
							</select>
						</div>
					</div>

					<div class="mx-4">
						<div class="sm:col-span-2">
							<label for="timestamp" class="block text-sm/6 font-medium text-gray-900"
								>Timestamp</label
							>
							<div class="mt-2">
								<input
									type="datetime-local"
									step="1"
									name="timestamp"
									id="timestamp"
									v-model="payload.timestamp"
									class="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
								/>
							</div>
						</div>
					</div>

					<div class="mx-4">
						<label for="type" class="block text-sm/6 font-medium text-gray-900"
							>Currency Pair</label
						>
						<div class="mt-2">
							<select
								v-model="payload.pairId"
								id="type"
								class="block bg-white h-9 w-full rounded-md px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
							>
								<option
									v-for="item in pairs"
									:key="item.pairId"
									:value="item.pairId"
									class="dark:bg-dark-2"
								>
									{{ item.name }}
								</option>
							</select>
						</div>
					</div>

					<div class="mx-4">
						<div class="sm:col-span-2">
							<label for="volume" class="block text-sm/6 font-medium text-gray-900">Volume</label>
							<div class="mt-2">
								<input
									type="number"
									step="0.01"
									min="0.01"
									max="1.01"
									placeholder="Min 0.01 Max 1.01"
									name="volume"
									id="volume"
									v-model="payload.volume"
									class="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
								/>
							</div>
						</div>
					</div>

					<div class="mx-4">
						<label for="direction" class="block text-sm/6 font-medium text-gray-900"
							>Direction</label
						>
						<div class="mt-2">
							<select
								v-model="payload.direction"
								id="direction"
								class="block bg-white h-9 w-full rounded-md px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
							>
								<option
									v-for="item in directions"
									:key="item.id"
									:value="item.id"
									class="dark:bg-dark-2"
								>
									{{ item.name }}
								</option>
							</select>
						</div>
					</div>

					<div class="mx-4">
						<div class="sm:col-span-2">
							<label for="price" class="block text-sm/6 font-medium text-gray-900">Price</label>
							<div class="mt-2">
								<input
									type="text"
									name="price"
									id="price"
									v-model.number="payload.price"
									class="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
								/>
							</div>
						</div>
					</div>

					<div class="mx-4">
						<label for="type" class="block text-sm/6 font-medium text-gray-900">Type</label>
						<div class="mt-2">
							<select
								v-model="payload.type"
								id="type"
								class="block bg-white h-9 w-full rounded-md px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
							>
								<option
									v-for="item in types"
									:key="item.id"
									:value="item.id"
									class="dark:bg-dark-2"
								>
									{{ item.name }}
								</option>
							</select>
						</div>
					</div>

					<div class="mx-4">
						<div class="sm:col-span-2">
							<label for="sl" class="block text-sm/6 font-medium text-gray-900">Stop Loss</label>
							<div class="mt-2">
								<input
									type="text"
									name="sl"
									id="sl"
									v-model="payload.sl"
									class="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
								/>
							</div>
						</div>
					</div>

					<div class="mx-4">
						<div class="sm:col-span-2">
							<label for="tp" class="block text-sm/6 font-medium text-gray-900">Take Profit</label>
							<div class="mt-2">
								<input
									type="text"
									name="tp"
									id="tp"
									v-model="payload.tp"
									class="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
								/>
							</div>
						</div>
					</div>

					<div class="mx-4">
						<div class="sm:col-span-2">
							<label for="ts" class="block text-sm/6 font-medium text-gray-900"
								>Trailing Stop</label
							>
							<div class="mt-2">
								<input
									type="text"
									name="ts"
									id="ts"
									v-model="payload.ts"
									class="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
								/>
							</div>
						</div>
					</div>

					<div class="mx-4">
						<div class="sm:col-span-2">
							<label for="margin" class="block text-sm/6 font-medium text-gray-900">Margin</label>
							<div class="mt-2">
								<input
									type="text"
									name="margin"
									id="margin"
									v-model="payload.margin"
									class="block w-full rounded-md bg-gray-100 px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
								/>
							</div>
						</div>
					</div>

					<div class="mx-4">
						<div class="sm:col-span-2">
							<label for="commission" class="block text-sm/6 font-medium text-gray-900"
								>Broker Commission</label
							>
							<div class="mt-2">
								<input
									type="text"
									name="commission"
									id="commission"
									v-model="payload.commission"
									class="block w-full rounded-md bg-gray-100 px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
								/>
							</div>
						</div>
					</div>

					<div class="mx-4">
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
							<p class="mt-3 text-sm/6 text-gray-600">Write a few sentences about your order.</p>
						</div>
					</div>
				</div>

				<div>
					<div class="flex justify-around p-3 mb-6">
						<ButtonComponent label="Submit" color="green" />
						<ButtonComponent label="Cancel" color="red" />
					</div>
				</div>
			</div>
		</div>

		<div class="space-y-12 mt-12">
			<div class="border-b border-gray-900/10 pb-12">
				<h2 class="text-base/7 font-semibold text-gray-900">Information about your account</h2>
				<p class="mt-1 text-sm/6 text-gray-600">
					Once the account has been created only a limited number of fields may be changed.
				</p>

				<div class="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6"></div>
			</div>

			<div class="border-b border-gray-900/10 pb-12">
				<h2 class="text-base/7 font-semibold text-gray-900">Restrictions</h2>
				<p class="mt-1 text-sm/6 text-gray-600">
					You can limit visibility of your account or close it altogether.
				</p>
			</div>
		</div>
	</section>
</template>
