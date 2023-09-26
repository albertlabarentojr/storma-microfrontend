<script setup>
import { store, loadCatalogs } from '../store';
import { addToCart } from 'shopCart/store';

const title = "Here is my Vue 3";

loadCatalogs();

const clicked = (catalog) => {
  addToCart(catalog);
}
</script>

<template>
  <div v-if="store.isCatalogFetching">Fetching Catalogs...</div>
  <div v-else class="grid grid-cols-3 md:grid-cols-2 lg:grid-cols-3 gap-4">
    <div v-for="catalog in store.catalogs">
      <div class="bg-white rounded p-4 shadow">
        <img class="w-full h-30 object-cover rounded" :src="catalog.image" alt="Product">
        <h3 class="text-lg font-semibold mt-2"> {{ catalog.product_name }} </h3>
        <p class="text-gray-500">{{ catalog.description }}</p>
        <span class="text-blue-500 font-semibold">$ {{ catalog.price }} </span>
        <button class="w-full bg-blue-400 text-white rounded mt-2 p-2 hover:bg-blue-600" @click="clicked(catalog)">Add to Cart</button>
      </div>
    </div>
  </div>
</template>
