<script setup lang="ts">
import { onBeforeMount } from 'vue'
import AccountHistory from './AccountHistory.vue'
import AccountOpenPositions from './AccountOpenPositions.vue'
import { useRoute } from 'vue-router'
import { store } from '@/store/store'
import { list } from '@/store/account/accountList'
const route = useRoute()
const pageId = route.params.id.toString()
const { data, useAccount, useBroker } = store()
const { accountData, accountDetail } = useAccount()

//import { getOrderDirection } from '@/composables/order/getOrderDirection'
//import { getOrderStatus } from '@/composables/order/getOrderStatus'
//import { getOrderType } from '@/composables/order/getOrderType'
//import ButtonComponent from '../elements/ButtonComponent.vue'

// When dealing with async you need to use then() approach
onBeforeMount(() => {
	if (data.value) {
		accountDetail(Number(pageId))
	} else {
		useBroker()
			.brokerList()
			.fetch()
			.then(() => {
				// compute list of accounts
				list().get()
				// get specific account
				accountDetail(Number(pageId))
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
								:value="accountData?.name"
								disabled
								class="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
							/>
						</div>
					</div>

					<div class="sm:col-span-2">
						<label for="broker" class="block text-sm/6 font-medium text-gray-900">Broker</label>
						<div class="mt-2">
							<input
								type="text"
								name="broker"
								id="broker"
								:value="accountData?.broker"
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
								:value="accountData?.openedAt"
								disabled
								class="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
							/>
						</div>
					</div>

					<div class="sm:col-span-2">
						<label for="active" class="block text-sm/6 font-medium text-gray-900">Status</label>
						<div class="mt-2">
							<input
								type="text"
								name="active"
								id="active"
								:value="accountData?.active"
								disabled
								class="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
							/>
						</div>
					</div>

					<div class="sm:col-span-2">
						<label for="contract" class="block text-sm/6 font-medium text-gray-900">Contract</label>
						<div class="mt-2">
							<input
								type="text"
								name="contract"
								id="contract"
								:value="accountData?.contract"
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
								:value="accountData?.currency"
								disabled
								class="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
							/>
						</div>
					</div>

					<div class="sm:col-span-2">
						<label for="type" class="block text-sm/6 font-medium text-gray-900">Type</label>
						<div class="mt-2">
							<input
								type="text"
								name="type"
								id="type"
								:value="accountData?.type"
								disabled
								class="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
							/>
						</div>
					</div>

					<div class="sm:col-span-2">
						<label for="lot" class="block text-sm/6 font-medium text-gray-900">Lot</label>
						<div class="mt-2">
							<input
								type="text"
								name="lot"
								id="lot"
								:value="accountData?.lot"
								disabled
								class="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
							/>
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
								disabled
								class="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
							/>
						</div>
					</div>

					<div class="sm:col-span-2">
						<label for="stopout" class="block text-sm/6 font-medium text-gray-900">Stopout</label>
						<div class="mt-2">
							<input
								type="text"
								name="stopout"
								id="stopout"
								:value="accountData?.stopOut"
								disabled
								class="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
							/>
						</div>
					</div>

					<div class="sm:col-span-2">
						<label for="hedge" class="block text-sm/6 font-medium text-gray-900">Hedge</label>
						<div class="mt-2">
							<input
								type="text"
								name="hedge"
								id="hedge"
								:value="accountData?.hedge"
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
								:value="accountData?.margin"
								disabled
								class="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
							/>
						</div>
					</div>

					<div class="sm:col-span-2">
						<label for="freeMargin" class="block text-sm/6 font-medium text-gray-900"
							>Free margin</label
						>
						<div class="mt-2">
							<input
								type="text"
								name="freeMargin"
								id="freeMargin"
								:value="accountData?.freeMargin"
								disabled
								class="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
							/>
						</div>
					</div>

					<div class="sm:col-span-2">
						<label for="marginLevel" class="block text-sm/6 font-medium text-gray-900"
							>Margin level</label
						>
						<div class="mt-2">
							<input
								type="text"
								name="marginLevel"
								id="marginLevel"
								:value="accountData?.marginLevel"
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
								:value="accountData?.balance"
								disabled
								class="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
							/>
						</div>
					</div>

					<div class="sm:col-span-2">
						<label for="profit" class="block text-sm/6 font-medium text-gray-900">Equity</label>
						<div class="mt-2">
							<input
								type="text"
								name="equity"
								id="equity"
								:value="accountData?.equity"
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
								:value="accountData?.profit"
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
								:value="accountData?.memo"
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

				<AccountOpenPositions />

				<AccountHistory />
			</div>
		</div>
	</section>
</template>
