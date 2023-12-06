<!-- https://vuejs.org/tutorial/#step-5 -->

<script setup lang="ts">
import { ref } from 'vue'

const text = ref('')

function onInput(e) {
  text.value = e.target.value
}
</script>

<template>
  <h2>5 - Form Bindings</h2>
  <!-- <input :value="text" @input="onInput" placeholder="Type here"> -->
  <input v-model="text" placeholder="Type here">
  <p>{{ text }}</p>
</template>