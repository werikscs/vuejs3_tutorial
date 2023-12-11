<script setup lang="ts">
  import { inject, onMounted, ref } from 'vue';
  import ProductsGateway from '../infra/ProductsGateway'
  import ProductList from '../entities/ProductList';
  
  const productList = ref(new ProductList())

  onMounted(async () => {
    const productsGateway = inject("productsGateway") as ProductsGateway
    const productsData = await productsGateway.getProducts()
    productList.value.products = productsData
  })
</script>

<template>
  <h1>Product List</h1>
  <ul data-test="product-list" v-for="product in productList.getProducts()">
    <li data-test="product">{{ product.name }}</li>
  </ul>
</template>

<style scoped>
</style>