<script setup lang="ts">
import AccountEdit from '@/components/account/AccountEdit.vue'
import BreadcrumbsComponent from '@/components/elements/BreadcrumbsComponent.vue'
</script>

<template>
	<section class="container px-4 mx-auto">
		<div class="my-8">
			<BreadcrumbsComponent />
		</div>
		<AccountEdit />
	</section>
</template>
