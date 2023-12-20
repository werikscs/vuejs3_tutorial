<script setup lang="ts">
import { inject, onMounted, ref } from 'vue';
import ProductsGateway from '../infra/ProductsGateway'
import ProductList from '../entities/ProductList';

let searchInput = ""
let isSearching = false
const localProducts = ref([])
const productList = new ProductList()

function searchProduct() {
  if (searchInput === "") {
    localProducts.value = productList.getProducts()
    return
  }
  const productFound = productList.getProductByName(searchInput)
  localProducts.value = productFound ? [productFound] : []
  isSearching = true
  searchInput = ""
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
    <button
      data-test="search-button"
      type="submit" 
      v-bind:disabled="localProducts.length === 0 && !isSearching"
    >
      Search
    </button>
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