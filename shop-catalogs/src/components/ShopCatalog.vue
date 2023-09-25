<script setup>
import { store } from '../store'

const title = "Here is my Vue 3";
</script>

<template>
  <h1>{{ title }}</h1>

  <div v-for="catalog in store.catalogs"><span class="text-orange-400">{{ catalog }}</span></div>
</template>
