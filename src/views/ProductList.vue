<script setup lang="ts">
  import { computed, ref } from 'vue';
  import ProductList from '../entities/ProductList';

  const productList = new ProductList()
  productList.products = [
    {name: 'Product1'},
    {name: 'Product2'},
    {name: 'Product3'},
    {name: 'Product4'},
  ]
  const productNameToSearch = ref('')
  const filteredProducts = computed(() => {
    if(productNameToSearch.value === '') return productList.getProducts()
    const product = productList.getProductByName(productNameToSearch.value)
    return product ? [product] : []
  })
</script>

<template>
  <h1>Product List</h1>
  <input v-model="productNameToSearch" placeholder="Type a product name">
  <p v-if="!filteredProducts.length">Product not found</p>
  <ul v-for="product in filteredProducts" :key="product?.name">
    <li v-if="filteredProducts.length">
      {{ product?.name }}
    </li>
  </ul>
</template>

<style scoped>
</style>