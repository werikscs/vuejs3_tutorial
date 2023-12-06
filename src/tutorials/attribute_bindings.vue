<!-- https://vuejs.org/tutorial/#step-3 -->

<script setup lang="ts">
  import { ref } from 'vue'

  const titleClass = ref('title')
</script>

<template>
  <h2>3 - Attribute Bindings</h2>
  <!-- <p v-bind:class="titleClass">Make me red</p> -->
  <p :class="titleClass">Make me red</p>
</template>

<style>
  .title {
    color: red;
  }
</style>