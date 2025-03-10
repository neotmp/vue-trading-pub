<script setup lang="ts">
import PositionTable from '@/components/position/PositionTable.vue'
import BreadcrumbsComponent from '@/components/BreadcrumbsComponent.vue'
</script>

<template>
	<section class="container px-4 mx-auto">
		<div class="my-8">
			<BreadcrumbsComponent />
		</div>
		<div>List of all Open Positions</div>
		<div>Functionality</div>
		<div>Add</div>
		<div>Edit</div>
		<div>Close</div>
		<PositionTable />
	</section>
</template>
