<!-- https://vuejs.org/tutorial/#step-4 -->
<script setup lang="ts">
import { ref } from 'vue'

const count = ref(0)

const increment = () => count.value++
</script>

<template>
  <h2>4 - Event Listeners</h2>
  <button @click="increment">count is: {{ count }}</button>
</template>