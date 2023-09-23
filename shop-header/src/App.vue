<script setup>
import ShopHeader from './components/ShopHeader.vue'
</script>

<template>
  <Suspense>
    <template #default>
      <ShopHeader />
    </template>

    <template #fallback>
      <div>Loading...</div>
    </template>
  </Suspense>
</template>
