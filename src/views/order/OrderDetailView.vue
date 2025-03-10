<script setup lang="ts">
import OrderDetail from '@/components/order/OrderDetail.vue'
import BreadcrumbsComponent from '@/components/BreadcrumbsComponent.vue'
</script>

<template>
	<section class="container px-4 mx-auto">
		<div class="my-8">
			<BreadcrumbsComponent />
		</div>
		<div><OrderDetail /></div>
	</section>
</template>
