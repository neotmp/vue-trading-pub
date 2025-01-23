<script setup lang="ts">
import { defineProps } from 'vue'

defineProps({
  title: {
    type: String,
    default: 'Cool mother Fucker'
  },
  bg: {
    type: String,
    default: 'bg-green-200'
  }
})
</script>

<template>
  <div :class="`${bg} p-2 rounded-md m-2`">This is my title: {{ title }}</div>
</template>
