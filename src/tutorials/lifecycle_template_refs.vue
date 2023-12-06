<!-- https://vuejs.org/tutorial/#step-9 -->

<script setup lang="ts">
  import { onMounted, ref } from 'vue'

  const pElementRef = ref(null)

  onMounted(() => {
    pElementRef.value.textContent = "mounted!"
  })
</script>

<template>
  <h2>9 - Lifecycle and Template Refs</h2>
  <p ref="pElementRef">hello</p>
</template>