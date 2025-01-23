<script setup lang="ts">
import ListComponent from '@/components/broker/ListComponent.vue'
</script>

<template>
  <div class="p-5 bg-slate-50">
    <div>Brokers</div>
    <ListComponent />
    <div>
      <RouterLink to="/brokers/add">Add Broker</RouterLink>
    </div>
    <div>
      <RouterLink to="/brokers/3/details">View Broker - Func</RouterLink>
    </div>

    <div>
      <RouterLink to="/brokers/2/edit">Edit Broker - Func</RouterLink>
    </div>
    <div>
      <RouterLink to="/brokers/5/delete">Delete Broker - Func</RouterLink>
    </div>
  </div>
</template>
