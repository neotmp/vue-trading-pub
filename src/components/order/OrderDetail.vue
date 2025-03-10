<script setup lang="ts">
import { onBeforeMount } from 'vue'
import { useRoute, RouterLink } from 'vue-router'
import { store } from '@/store/store'
const route = useRoute()
const pageId = route.params.id.toString()
const { data, useOrder, useBroker } = store()
const { orderData, orderDetail, list } = useOrder()

import { getOrderDirection } from '@/composables/order/getOrderDirection'
import { getOrderStatus } from '@/composables/order/getOrderStatus'
import { getOrderType } from '@/composables/order/getOrderType'
import ButtonComponent from '../elements/ButtonComponent.vue'

// When dealing with async you need to use then() approach
onBeforeMount(() => {
	if (data.value) {
		orderDetail(Number(pageId))
		console.log(pageId, 'page')
	} else {
		useBroker()
			.brokerList()
			.fetch()
			.then(() => {
				// compute list of orders
				list().get()
				// get specific account
				orderDetail(Number(pageId))
				console.log(orderData.value, 'order data')
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

		<div class="flex justify-center">
			<div class="w-full max-w-xl overflow-hidden bg-white rounded-lg shadow-lg dark:bg-gray-800">
				<!-- <img
				class="object-cover w-full h-56"
				src="https://images.unsplash.com/photo-1542156822-6924d1a71ace?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60"
				alt="avatar"
			/> -->

				<div class="py-5 text-center">
					<span class="block text-xl font-bold text-gray-800 dark:text-white" tabindex="0"
						>Order Detail</span
					>
					<span class="text-sm text-gray-700 dark:text-gray-200"
						>Placed {{ orderData?.timestamp }}</span
					>
				</div>

				<div class="">
					<div class="flex justify-between border-b border-dotted p-3">
						<div class="ml-2">Number</div>
						<div class="mr-2">{{ orderData?.id }}</div>
					</div>
				</div>

				<div class="">
					<div class="flex justify-between border-b border-dotted p-3">
						<div class="ml-2">Placed</div>
						<div class="mr-2">{{ orderData?.timestamp }}</div>
					</div>
				</div>

				<div class="">
					<div class="flex justify-between border-b border-dotted p-3">
						<div class="ml-2">Execution Type</div>
						<div class="mr-2">{{ getOrderType(Number(orderData?.type)) }}</div>
					</div>
				</div>

				<div>
					<div class="flex justify-between border-b border-dotted p-3">
						<div class="ml-2">Status</div>
						<div class="mr-2 bg-green-600 text-white px-3 rounded-lg">
							{{ getOrderStatus(Number(orderData?.status)) }}
						</div>
					</div>
				</div>

				<div>
					<div class="flex justify-between border-b border-dotted p-3">
						<div class="ml-2">Broker</div>
						<RouterLink :to="`/brokers/detail/${orderData?.brokerId}`"
							><div class="mr-2">RoboForex</div></RouterLink
						>
					</div>
				</div>

				<div>
					<div class="flex justify-between border-b border-dotted p-3">
						<div class="ml-2">Account</div>
						<div class="mr-2">My Trading account</div>
					</div>
				</div>

				<div class="">
					<div class="flex justify-between border-b border-dotted p-3">
						<div class="ml-2 text-lg">Direction</div>
						<div
							:class="`mr-2 ${orderData?.direction === 1 ? 'bg-green-600 text-white px-3 rounded-lg' : 'bg-red-600 text-white px-3 rounded-lg'}`"
						>
							{{ getOrderDirection(Number(orderData?.direction)) }}
						</div>
					</div>
				</div>

				<div>
					<div class="flex justify-between border-b border-dotted p-3">
						<div class="ml-2 text-lg">Volume</div>
						<div class="mr-2">{{ orderData?.volume }}</div>
					</div>
				</div>

				<div>
					<div class="flex justify-between border-b border-dotted p-3">
						<div class="ml-2 text-lg">Currency Pair</div>
						<div class="mr-2">{{ orderData?.pair }}</div>
					</div>
				</div>

				<div>
					<div class="flex justify-between border-b border-dotted p-3">
						<div class="ml-2 text-lg">Price</div>
						<div class="mr-2">{{ orderData?.price }}</div>
					</div>
				</div>

				<div>
					<div class="flex justify-between border-b border-dotted p-3">
						<div class="ml-2 text-lg">Margin</div>
						<div class="mr-2">{{ orderData?.margin }}</div>
					</div>
				</div>

				<div>
					<div class="flex justify-between border-b border-dotted p-3">
						<div class="ml-2 text-lg">Stop Loss</div>
						<div class="mr-2">{{ orderData?.sl }}</div>
					</div>
				</div>

				<div>
					<div class="flex justify-between border-b border-dotted p-3">
						<div class="ml-2 text-lg">Take Profit</div>
						<div class="mr-2">{{ orderData?.tp }}</div>
					</div>
				</div>

				<div>
					<div class="flex justify-between border-b border-dotted p-3">
						<div class="ml-2 text-lg">Trailing Stop</div>
						<div class="mr-2">{{ orderData?.ts }}</div>
					</div>
				</div>

				<div>
					<div class="flex justify-between border-b border-dotted p-3">
						<div class="ml-2 text-lg">Commission</div>
						<div class="mr-2">{{ orderData?.commission }}</div>
					</div>
				</div>

				<div>
					<div class="p-3">
						<div class="ml-2 text-lg">Memo</div>
						<div class="mx-2 mt-2">{{ orderData?.memo }}</div>
					</div>
				</div>
				<div>
					<div class="flex justify-center p-3 mb-3">
						<ButtonComponent label="Close Order" />
					</div>
				</div>
			</div>
		</div>

		<div class="space-y-12">
			<div class="border-b border-gray-900/10 pb-12">
				<h2 class="text-base/7 font-semibold text-gray-900">ORDER DETAIL</h2>
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
						<label for="ticket" class="block text-sm/6 font-medium text-gray-900">Ticket</label>
						<div class="mt-2">
							<input
								type="text"
								ticket="ticket"
								id="ticket"
								:value="orderData?.id"
								disabled
								class="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
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
								class="block w-full rounded-md bg-gray-100 px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
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
								class="block w-full rounded-md bg-gray-100 px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
							/>
						</div>
					</div>

					<div class="sm:col-span-2">
						<label for="broker" class="block text-sm/6 font-medium text-gray-900">Broker</label>
						<div class="mt-2">
							<input
								type="text"
								broker="broker"
								id="broker"
								:value="orderData?.brokerId"
								disabled
								class="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
							/>
						</div>
					</div>

					<div class="sm:col-span-2">
						<label for="account" class="block text-sm/6 font-medium text-gray-900">Account</label>
						<div class="mt-2">
							<input
								type="text"
								account="account"
								id="account"
								:value="orderData?.accountId"
								disabled
								class="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
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
								:value="orderData?.direction"
								disabled
								class="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
							/>
						</div>
					</div>

					<div class="sm:col-span-2">
						<label for="vplume" class="block text-sm/6 font-medium text-gray-900">Volume</label>
						<div class="mt-2">
							<input
								type="text"
								name="vplume"
								id="vplume"
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
								:value="orderData?.memo"
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
			</div>
		</div>
	</section>
</template>
