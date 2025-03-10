<script setup lang="ts">
import OrderEdit from '@/components/order/OrderEdit.vue'
import BreadcrumbsComponent from '@/components/BreadcrumbsComponent.vue'
</script>

<template>
	<section class="container px-4 mx-auto">
		<div class="my-8">
			<BreadcrumbsComponent />
		</div>
		<div><OrderEdit /></div>
	</section>
</template>
