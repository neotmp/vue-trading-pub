<script setup lang="ts">
import AccountAdd from '@/components/account/AccountAdd.vue'
import BreadcrumbsComponent from '@/components/BreadcrumbsComponent.vue'
</script>

<template>
	<section class="container px-4 mx-auto">
		<div class="my-8">
			<BreadcrumbsComponent />
		</div>
		<AccountAdd />
	</section>
</template>
