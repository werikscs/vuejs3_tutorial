<script setup lang="ts">
import { provide } from 'vue';
import ProductList from './ProductList.vue';
import ProductManager from './ProductManager.vue';
import ProductsGateway from '../infra/ProductsGateway';

// const productsGateway: ProductsGateway = {
//   async getProducts() {
//     return [
//       { name: "HP Pavilion 15-DK1056WM" },
//       { name: "Huawei P30" },
//       { name: "OPPOF19" },
//       { name: "Samsung Universe 9" },
//     ]
//   },
// }

// provide("productsGateway", productsGateway)

</script>

<template>
  <h1>User Guide</h1>
  <ProductList />
  <ProductManager />
</template>

<style scoped></style>