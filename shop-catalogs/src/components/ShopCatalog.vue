<template>
  <h1>{{ title }}</h1>

  <div v-for="catalog in store.catalogs">{{ catalog }}</div>
</template>

<script setup>
import { store } from '../store'

const title = "Here is my Vue 3";
</script>
