<script setup lang="ts">
  const productList = [
    {id: 1, name: 'Product 1', price: 100},
    {id: 2, name: 'Product 2', price: 200},
    {id: 3, name: 'Product 3', price: 300},
    {id: 4, name: 'Product 4', price: 400},
  ]
</script>

<template>
  <h1>Product List</h1>
  <ul>
    <li v-for="product in productList" :key="product.id">
      {{ product.name }}
    </li>
  </ul>
</template>

<style scoped>
</style>