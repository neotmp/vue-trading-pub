<script setup lang="ts">
import BreadcrumbsComponent from '@/components/BreadcrumbsComponent.vue'
import BrokerTable from '@/components/broker/BrokerTable.vue'
</script>

<template>
	<section class="container px-4 mx-auto">
		<div class="my-8">
			<BreadcrumbsComponent />
		</div>

		<BrokerTable />
	</section>
</template>
