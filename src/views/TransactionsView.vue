<script setup lang="ts">
import TransactionsTable from '@/components/transfer/TransactionsTable.vue'
import BreadcrumbsComponent from '@/components/elements/BreadcrumbsComponent.vue'
</script>

<template>
	<section class="container px-4 mx-auto">
		<div class="my-8">
			<BreadcrumbsComponent />
		</div>
		<TransactionsTable />
	</section>
</template>
