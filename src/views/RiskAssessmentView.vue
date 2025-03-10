<script setup lang="ts">
import BreadcrumbsComponent from '@/components/BreadcrumbsComponent.vue'
</script>

<template>
	<section class="container px-4 mx-auto">
		<div class="my-8">
			<BreadcrumbsComponent />
		</div>
		<div>Portfolio Risk Assessment</div>
		<div class="bg-green-200 p-2 space-y-2">
			<div>Show Graph</div>
			<div>Balance based on open positions - probabilities</div>
			<div>Margin level based on open positions - probabilities</div>
		</div>
	</section>
</template>
