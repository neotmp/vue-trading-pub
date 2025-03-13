<script setup lang="ts">
import PositionTable from '@/components/position/PositionTable.vue'
import BreadcrumbsComponent from '@/components/elements/BreadcrumbsComponent.vue'
</script>

<template>
	<section class="container px-4 mx-auto">
		<div class="my-8">
			<BreadcrumbsComponent />
		</div>
		<PositionTable />
	</section>
</template>
