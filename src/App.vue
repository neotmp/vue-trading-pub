<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
</script>

<template>
	<header>
		<div class="bg-red-200 py-5">
			<nav class="justify-around flex">
				<RouterLink to="/">Home</RouterLink>
				<RouterLink to="/simulation">Simulation</RouterLink>
				<RouterLink to="/history">History</RouterLink>
				<RouterLink to="/performance">Performance</RouterLink>
				<RouterLink to="/risk-assessment">Risk</RouterLink>
				<RouterLink to="/brokers">Brokers</RouterLink>
				<RouterLink to="/accounts">Accounts</RouterLink>
				<RouterLink to="/positions">Positions</RouterLink>
				<RouterLink to="/orders">Orders</RouterLink>
				<RouterLink to="/candlestick">Candlestick</RouterLink>
			</nav>
		</div>
	</header>

	<RouterView />
</template>
