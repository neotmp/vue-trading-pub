<script setup lang="ts">
import BrokerDetail from '@/components/broker/BrokerDetail.vue'
import BreadcrumbsComponent from '@/components/BreadcrumbsComponent.vue'
</script>

<template>
	<section class="container px-4 mx-auto">
		<div class="my-8">
			<BreadcrumbsComponent />
		</div>
		<div><BrokerDetail /></div>
	</section>
</template>
