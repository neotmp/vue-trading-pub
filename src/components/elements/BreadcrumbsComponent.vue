<script setup lang="ts">
import { useRoute } from 'vue-router'
import { getBreadcrumbsData } from '@/composables/getBreadcrumbsData'
const route = useRoute()

// defineProps<{
// 	items: BreadcrumbsItem[]
// }>()

console.log(route.meta.bc)
const pageCode: number = Number(route.meta.bc)
</script>

<template>
	<div class="flex">
		<div v-for="item in getBreadcrumbsData(pageCode)" :key="item.id" class="flex">
			<div class="pr-2">
				<RouterLink v-if="item.link" :to="item.href">{{ item.label }}</RouterLink>
				<div v-else class="font-bold text-blue-500">{{ item.label }}</div>
			</div>

			<div v-if="item.link" class="pr-2">/</div>
		</div>
	</div>
</template>
