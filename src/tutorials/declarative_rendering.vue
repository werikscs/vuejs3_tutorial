<!-- https://vuejs.org/tutorial/#step-2 -->

<script setup lang="ts">
  import { ref } from 'vue'
  import { reactive } from 'vue'

  const msg = ref('Hello World!')
  const counter = reactive({count: 0})

// component logic
// declare some reactive state here.
</script>

<template>
  <h2>2 - Declarative Rendering</h2>
  <p>{{ msg }}</p>
  <p>{{ msg.split('').reverse().join('') }}</p>
  <p>count is: {{ counter.count }}</p>
</template>