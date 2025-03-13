<script setup lang="ts">
import GaugeProgressComponent from '@/components/GaugeProgressComponent.vue'
import AccountAnalytics from '@/components/account/AccountAnalytics.vue'
import BreadcrumbsComponent from '@/components/elements/BreadcrumbsComponent.vue'
</script>

<template>
	<section class="container px-4 mx-auto">
		<div class="my-8">
			<BreadcrumbsComponent />
		</div>
		<div>All Graphs here</div>
		<div class="flex"><GaugeProgressComponent /></div>
		<div><AccountAnalytics /></div>
	</section>
</template>
