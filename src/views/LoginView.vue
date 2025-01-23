<script setup lang="ts">
function doSomething() {
  console.log('Enter')
}
</script>
<template>
  <div>Login Page</div>
  <div>User Name</div>
  <div>Pasword</div>
  <button class="bg-green-400 p5 rounded-md" @click="doSomething">Enter</button>
</template>
