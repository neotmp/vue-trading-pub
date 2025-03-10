<script setup lang="ts">
import BreadcrumbsComponent from '@/components/BreadcrumbsComponent.vue'
</script>

<template>
	<section class="container px-4 mx-auto">
		<div class="my-8">
			<BreadcrumbsComponent />
		</div>
		<h1>Simulation Page</h1>
		<div class="bg-yellow-200 p-2 space-y-2">
			<div>List of all simulations</div>
			<div>Create new simulation from scratch or use template</div>
			<div>Specify account settings</div>
			<div>Add Historic Volatility params</div>
			<div>Specify timeframe to run sim</div>
			<div>Add transactions</div>
			<div>Add transactions conditionally</div>
			<div>Conditional transactions: Equity level, price level</div>
			<div>Close Deals conditonally</div>
			<div>Conditions: price level, TP, SL,</div>
			<div>Pick methods to use, e.g. binomial probability model</div>
		</div>
	</section>
</template>
