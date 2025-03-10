<script setup lang="ts">
import { onBeforeMount } from 'vue'
import { store } from '@/store/store'
import BreadcrumbsComponent from '@/components/BreadcrumbsComponent.vue'

const { useBroker, data } = store()
const { brokerList } = useBroker()

onBeforeMount(() => {
	brokerList().fetch()
})
</script>

<template>
	<main>
		<section class="container px-4 mx-auto">
			<div class="my-8">
				<BreadcrumbsComponent />
			</div>

			<div class="space-y-5 p-3">
				<div>DATA: {{ data?.brokers[0].country }}</div>

				<div>Dashboard with vitals</div>

				<div class="bg-green-300 p-3 mt-2">
					<div>Inflow</div>
					<div>Outflow</div>
					<div>Profit</div>
					<div>Open positions</div>
				</div>

				<div class="bg-yellow-300 p-3 mt-2">
					<div>Chart - accounts funds distribution</div>
					<div>Chart - currency distribution</div>
					<div>Chart - profit distribution per pair/account</div>
				</div>

				<div class="bg-blue-300 p-3 mt-2">
					<div>Chart - Balance per account</div>
					<div>Chart - Equity ditto</div>
					<div>Chart - Margin per account</div>
					<div>Chart - Free margin ditto</div>
					<div>Chart - Margin level ditto</div>
					<div>Chart - P&L ditto</div>
				</div>
			</div>
		</section>
	</main>
</template>
