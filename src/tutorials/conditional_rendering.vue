<script setup lang="ts">
import { ref } from 'vue'

const awesome = ref(true)

function toggle() {
  awesome.value = !awesome.value
}
</script>

<template>
  <h2>6 - Conditional Rendering</h2>
  <button @click="toggle">toggle</button>
  <p v-if="awesome">Vue is awesome!</p>
  <p v-else>Oh no 😢</p>
</template>