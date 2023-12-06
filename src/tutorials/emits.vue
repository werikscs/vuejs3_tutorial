<!-- https://vuejs.org/tutorial/#step-13 -->

<script setup lang="ts">
  // declare emitted events
  const emit = defineEmits(['res'])

  // emit with argument
  emit('res', 'hello from child')
</script>