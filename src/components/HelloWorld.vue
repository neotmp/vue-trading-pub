<script setup lang="ts">
defineProps<{
  msg: string
}>()
</script>

<template>
  <div class="bg-green-300">
    <h1 class="green">{{ msg }}</h1>
  </div>
</template>
