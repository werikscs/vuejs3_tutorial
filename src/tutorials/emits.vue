<!-- https://vuejs.org/tutorial/#step-13 -->

<script setup lang="ts">
  // declare emitted events
  const emit = defineEmits(['res'])

  // emit with argument
  emit('res', 'hello from child')
</script>

<template>
  <h2>13 - Emits</h2>
  <h3>Child component</h3>
</template>