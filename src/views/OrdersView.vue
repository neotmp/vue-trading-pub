<script setup lang="ts">
import OrderTable from '@/components/order/OrderTable.vue'
import BreadcrumbsComponent from '@/components/elements/BreadcrumbsComponent.vue'
</script>

<template>
	<section class="container px-4 mx-auto">
		<div class="my-8">
			<BreadcrumbsComponent />
		</div>
		<OrderTable />
	</section>
</template>
