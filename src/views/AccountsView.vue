<script setup lang="ts">
import AccountTable from '@/components/account/AccountTable.vue'
import BreadcrumbsComponent from '@/components/BreadcrumbsComponent.vue'
</script>

<template>
	<section class="container px-4 mx-auto">
		<div class="my-8">
			<BreadcrumbsComponent />
		</div>
		<AccountTable />
	</section>
</template>
