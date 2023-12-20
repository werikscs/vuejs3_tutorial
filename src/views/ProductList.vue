<script setup lang="ts">
import { inject, onMounted, ref } from 'vue';
import ProductsGateway from '../infra/ProductsGateway'
import ProductList from '../entities/ProductList';

const productList = new ProductList()
const searchInput = ref('')
const localProducts = ref([])
const isSearching = ref(false)

function searchProduct() {
  console.log(searchInput)
  if (searchInput.value === "") return productList.getProducts()
  const productFound = productList.getProductByName(searchInput.value)
  localProducts.value = productFound ? [productFound] : []
  isSearching.value = true
}

onMounted(async () => {
  const productsGateway = inject("productsGateway") as ProductsGateway
  const productsData = await productsGateway.getProducts()
  productList.products = productsData
  localProducts.value = productsData
})
</script>

<template>
  <h1>Product List</h1>
  <form @submit.prevent="searchProduct">
    <input data-test="search-input" type="text" v-model="searchInput">
    <button data-test="search-button" type="submit">Search</button>
  </form>
  <span data-test="empty-list" v-if="localProducts.length === 0 && !isSearching">
    Empty list
  </span>
  <ul data-test="product-list" v-for="product in localProducts">
    <li data-test="product-list-item">{{ product.name }}</li>
  </ul>
  <span data-test="product-not-found" v-if="localProducts.length === 0 && isSearching">
    Product not found
  </span>
</template>

<style scoped></style>