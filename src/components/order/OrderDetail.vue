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
			<div
				class="w-full max-w-xl overflow-hidden bg-white rounded-lg shadow-lg dark:bg-gray-800 dark:shadow-gray-700"
			>
				<div class="py-5 text-center">
					<span class="block text-xl font-bold text-gray-800 dark:text-white" tabindex="0"
						>Order Detail</span
					>
					<span class="text-sm text-gray-700 dark:text-gray-200"
						>Placed {{ orderData?.timestamp }}</span
					>
				</div>

				<div class="">
					<div class="flex justify-between border-b border-dotted p-3 dark:text-white">
						<div class="ml-2">Number</div>
						<div class="mr-2">{{ orderData?.id }}</div>
					</div>
				</div>

				<div class="">
					<div class="flex justify-between border-b border-dotted p-3 dark:text-white">
						<div class="ml-2">Placed</div>
						<div class="mr-2">{{ orderData?.timestamp }}</div>
					</div>
				</div>

				<div class="">
					<div class="flex justify-between border-b border-dotted p-3 dark:text-white">
						<div class="ml-2">Execution Type</div>
						<div class="mr-2">{{ getOrderType(Number(orderData?.type)) }}</div>
					</div>
				</div>

				<div>
					<div class="flex justify-between border-b border-dotted p-3 dark:text-white">
						<div class="ml-2">Status</div>
						<div class="mr-2 bg-green-600 text-white px-3 rounded-lg">
							{{ getOrderStatus(Number(orderData?.status)) }}
						</div>
					</div>
				</div>

				<div>
					<div class="flex justify-between border-b border-dotted p-3 dark:text-white">
						<div class="ml-2">Broker</div>
						<RouterLink :to="`/brokers/detail/${orderData?.brokerId}`"
							><div class="mr-2">RoboForex</div></RouterLink
						>
					</div>
				</div>

				<div>
					<div class="flex justify-between border-b border-dotted p-3 dark:text-white">
						<div class="ml-2">Account</div>
						<div class="mr-2">My Trading account</div>
					</div>
				</div>

				<div class="">
					<div class="flex justify-between border-b border-dotted p-3 dark:text-white">
						<div class="ml-2 text-lg">Direction</div>
						<div
							:class="`mr-2 ${orderData?.direction === 1 ? 'bg-green-600 text-white px-3 rounded-lg' : 'bg-red-600 text-white px-3 rounded-lg'}`"
						>
							{{ getOrderDirection(Number(orderData?.direction)) }}
						</div>
					</div>
				</div>

				<div>
					<div class="flex justify-between border-b border-dotted p-3 dark:text-white">
						<div class="ml-2 text-lg">Volume</div>
						<div class="mr-2">{{ orderData?.volume }}</div>
					</div>
				</div>

				<div>
					<div class="flex justify-between border-b border-dotted p-3 dark:text-white">
						<div class="ml-2 text-lg">Currency Pair</div>
						<div class="mr-2">{{ orderData?.pair }}</div>
					</div>
				</div>

				<div>
					<div class="flex justify-between border-b border-dotted p-3 dark:text-white">
						<div class="ml-2 text-lg">Price</div>
						<div class="mr-2">{{ orderData?.price }}</div>
					</div>
				</div>

				<div>
					<div class="flex justify-between border-b border-dotted p-3 dark:text-white">
						<div class="ml-2 text-lg">Margin</div>
						<div class="mr-2">{{ orderData?.margin }}</div>
					</div>
				</div>

				<div>
					<div class="flex justify-between border-b border-dotted p-3 dark:text-white">
						<div class="ml-2 text-lg">Stop Loss</div>
						<div class="mr-2">{{ orderData?.sl }}</div>
					</div>
				</div>

				<div>
					<div class="flex justify-between border-b border-dotted p-3 dark:text-white">
						<div class="ml-2 text-lg">Take Profit</div>
						<div class="mr-2">{{ orderData?.tp }}</div>
					</div>
				</div>

				<div>
					<div class="flex justify-between border-b border-dotted p-3 dark:text-white">
						<div class="ml-2 text-lg">Trailing Stop</div>
						<div class="mr-2">{{ orderData?.ts }}</div>
					</div>
				</div>

				<div>
					<div class="flex justify-between border-b border-dotted p-3 dark:text-white">
						<div class="ml-2 text-lg">Commission</div>
						<div class="mr-2">{{ orderData?.commission }}</div>
					</div>
				</div>

				<div>
					<div class="p-3 dark:text-white">
						<div class="ml-2 text-lg">Memo</div>
						<div class="mx-2 mt-2">{{ orderData?.memo }}</div>
					</div>
				</div>
				<div>
					<div class="flex justify-around p-3 mb-6">
						<ButtonComponent label="Edit Order" color="indigo" />
						<ButtonComponent label="Cancel Order" color="yellow" :active="false" :loading="false" />
					</div>
				</div>
			</div>
		</div>

		<div class="border-b border-gray-900/10 pb-12">
			<h2 class="text-base/7 font-semibold text-gray-900">Restrictions</h2>
			<p class="mt-1 text-sm/6 text-gray-600">
				You can limit visibility of your account or close it altogether.
			</p>
		</div>
	</section>
</template>
