<script setup lang="ts">
import OrderAdd from '@/components/order/OrderAdd.vue'
import BreadcrumbsComponent from '@/components/BreadcrumbsComponent.vue'
</script>

<template>
	<section class="container px-4 mx-auto">
		<div class="my-8">
			<BreadcrumbsComponent />
		</div>
		<div><OrderAdd /></div>
	</section>
</template>
