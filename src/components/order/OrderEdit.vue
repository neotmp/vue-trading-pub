<script setup lang="ts">
import { onBeforeMount } from 'vue'
import { useRoute } from 'vue-router'
import { store } from '@/store/store'
const route = useRoute()
const pageId = route.params.id.toString()
const { data, useOrder, useBroker } = store()
const { orderData, payload, editOrder, submitEditOrder, list } = useOrder()

import { getOrderDirection } from '@/composables/order/getOrderDirection'
import { getOrderStatus } from '@/composables/order/getOrderStatus'
import { getOrderType } from '@/composables/order/getOrderType'
import ButtonComponent from '../elements/ButtonComponent.vue'

// When dealing with async you need to use then() approach
onBeforeMount(() => {
	if (data.value) {
		editOrder(Number(pageId))
		console.log(pageId, 'page')
	} else {
		useBroker()
			.brokerList()
			.fetch()
			.then(() => {
				// compute list of order
				list().get()
				// get specific order
				editOrder(Number(pageId))
			})
			.finally(() => {
				console.log('data finally')
			})
	}
})

function submit() {
	submitEditOrder()
}
</script>

<template>
	<section class="container px-4 mx-auto">
		<form @submit.prevent="submit">
			<!-- <button @click="submit" class="p-2 bg-green-300 rounded-md mt-4">SEND DATA</button> -->

			<div class="space-y-12">
				<div class="border-b border-gray-900/10 pb-12">
					<h2 class="text-base/7 font-semibold text-gray-900">ORDER EDIT</h2>
					<!-- <div>orderData: {{ orderData }}</div>
					<div>payload: {{ payload }}</div> -->

					<p class="mt-1 text-sm/6 text-gray-600">Info here?</p>

					<div class="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6"></div>
				</div>

				<div class="border-b border-gray-900/10 pb-12">
					<h2 class="text-base/7 font-semibold text-gray-900">Information about your account</h2>
					<p class="mt-1 text-sm/6 text-gray-600">Rules of editing:</p>
					<p class="mt-1 text-sm/6 text-gray-600">
						1. If status of order is pending, any field is editable
					</p>
					<p class="mt-1 text-sm/6 text-gray-600">
						2. If status of order is executed, only sl, tp, ts fields can be amended.
					</p>
					<p class="mt-1 text-sm/6 text-gray-600">
						3. If account type is not hedge, volume can be changed, plus sl, tp, ts.
					</p>

					<div class="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
						<div class="sm:col-span-2">
							<label for="ticket" class="block text-sm/6 font-medium text-gray-900">Order #</label>
							<div class="mt-2">
								<input
									type="text"
									ticket="ticket"
									id="ticket"
									:value="orderData?.id"
									disabled
									class="block w-full rounded-md bg-gray-100 px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
								/>
							</div>
						</div>

						<div class="sm:col-span-2">
							<label for="type" class="block text-sm/6 font-medium text-gray-900">Order Type</label>
							<div class="mt-2">
								<input
									type="text"
									name="type"
									id="type"
									:value="getOrderType(Number(orderData?.type))"
									disabled
									class="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
								/>
							</div>
						</div>

						<div class="sm:col-span-2">
							<label for="status" class="block text-sm/6 font-medium text-gray-900"
								>Order Status</label
							>
							<div class="mt-2">
								<input
									type="text"
									name="status"
									id="status"
									:value="getOrderStatus(Number(orderData?.status))"
									disabled
									class="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
								/>
							</div>
						</div>

						<div class="sm:col-span-2">
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

						<div class="sm:col-span-2">
							<label for="account" class="block text-sm/6 font-medium text-gray-900">Account</label>
							<div class="mt-2">
								<input
									type="text"
									account="account"
									id="account"
									v-model="payload.accountId"
									disabled
									class="block w-full rounded-md bg-gray-100 px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
								/>
							</div>
						</div>

						<div class="sm:col-span-2">
							<label for="direction" class="block text-sm/6 font-medium text-gray-900"
								>Direction</label
							>
							<div class="mt-2">
								<input
									type="text"
									name="direction"
									id="direction"
									:value="getOrderDirection(Number(orderData?.direction))"
									disabled
									class="block w-full rounded-md bg-gray-100 px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
								/>
							</div>
						</div>

						<div class="sm:col-span-2">
							<label for="volume" class="block text-sm/6 font-medium text-gray-900">Volume</label>
							<div class="mt-2">
								<input
									type="text"
									name="volume"
									id="volume"
									:value="orderData?.volume"
									disabled
									class="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
								/>
							</div>
						</div>

						<div class="sm:col-span-2">
							<label for="pair" class="block text-sm/6 font-medium text-gray-900">Pair</label>
							<div class="mt-2">
								<input
									type="text"
									name="pair"
									id="pair"
									:value="orderData?.pair"
									disabled
									class="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
								/>
							</div>
						</div>

						<div class="sm:col-span-2">
							<label for="sl" class="block text-sm/6 font-medium text-gray-900">SL</label>
							<div class="mt-2">
								<input
									type="text"
									name="sl"
									id="sl"
									:value="orderData?.sl"
									disabled
									class="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
								/>
							</div>
						</div>

						<div class="sm:col-span-2">
							<label for="ts" class="block text-sm/6 font-medium text-gray-900">TS</label>
							<div class="mt-2">
								<input
									type="text"
									name="ts"
									id="ts"
									:value="orderData?.ts"
									disabled
									class="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
								/>
							</div>
						</div>

						<div class="sm:col-span-2">
							<label for="tp" class="block text-sm/6 font-medium text-gray-900">TP</label>
							<div class="mt-2">
								<input
									tp="text"
									name="tp"
									id="tp"
									:value="orderData?.tp"
									disabled
									class="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
								/>
							</div>
						</div>

						<div class="sm:col-span-2">
							<label for="price" class="block text-sm/6 font-medium text-gray-900">Price</label>
							<div class="mt-2">
								<input
									type="text"
									name="price"
									id="price"
									:value="orderData?.price"
									disabled
									class="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
								/>
							</div>
						</div>

						<div class="sm:col-span-2">
							<label for="margin" class="block text-sm/6 font-medium text-gray-900">Margin</label>
							<div class="mt-2">
								<input
									type="text"
									name="margin"
									id="margin"
									:value="orderData?.margin"
									disabled
									class="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
								/>
							</div>
						</div>

						<div class="sm:col-span-2">
							<label for="commission" class="block text-sm/6 font-medium text-gray-900"
								>Commission</label
							>
							<div class="mt-2">
								<input
									type="text"
									name="commission"
									id="commission"
									:value="orderData?.commission"
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
									v-model="payload.memo"
									rows="3"
									class="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
								/>
							</div>
							<p class="mt-3 text-sm/6 text-gray-600">Write a few sentences about your order.</p>
						</div>
					</div>
				</div>

				<div class="border-b border-gray-900/10 pb-12">
					<h2 class="text-base/7 font-semibold text-gray-900">Info</h2>
					<p class="mt-1 text-sm/6 text-gray-600">Additional info here</p>
					<div class="flex justify-end">
						<button type="submit">
							<ButtonComponent />
						</button>
					</div>
				</div>
			</div>
		</form>
	</section>
</template>
