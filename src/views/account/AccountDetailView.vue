<script setup lang="ts">
import AccountDetail from '@/components/account/AccountDetail.vue'
import BreadcrumbsComponent from '@/components/BreadcrumbsComponent.vue'
</script>

<template>
	<section class="container px-4 mx-auto">
		<div class="my-8">
			<BreadcrumbsComponent />
		</div>
		<div><AccountDetail /></div>
	</section>
</template>
