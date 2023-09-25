<script setup>
import ShopHeader from './components/ShopHeader.vue'
</script>

<template>
  <Suspense>
    <template #default>
      <div>
        <ShopHeader />
      </div>
    </template>

    <template #fallback>
      <div>Loading...</div>
    </template>
  </Suspense>
</template>
