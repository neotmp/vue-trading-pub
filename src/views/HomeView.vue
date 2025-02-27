<script setup lang="ts">
import { onBeforeMount } from 'vue'
import { store } from '@/store/store'

const { useBroker, data } = store()
const { brokerList } = useBroker()

onBeforeMount(() => {
  brokerList().fetch()
})
</script>

<template>
  <main>
    <div>hi there</div>
    <div class="space-y-5 p-3">
      <div>DATA: {{ data?.brokers[0].country }}</div>

      <div>Dashboard with vitals</div>
      <div>Agg of balances</div>
      <div>Agg of P&L</div>
      <div>Num of positions</div>
      <div>List of positions?</div>
    </div>
  </main>
</template>
