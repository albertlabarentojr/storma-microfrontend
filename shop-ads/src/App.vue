<script setup>
import ShopAds from './components/ShopAds.vue'
</script>

<template>
  <Suspense>
    <template #default>
      <div>
        <ShopAds/>
      </div>
    </template>

    <template #fallback>
      <div>Loading...</div>
    </template>
  </Suspense>
</template>
