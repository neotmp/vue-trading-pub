<script setup lang="ts">
import PositionCreateComponent from '@/components/position/PositionCreateComponent.vue'
import BreadcrumbsComponent from '@/components/elements/BreadcrumbsComponent.vue'
</script>

<template>
	<section class="container px-4 mx-auto">
		<div class="my-8">
			<BreadcrumbsComponent />
		</div>
		<div><PositionCreateComponent /></div>
	</section>
</template>
