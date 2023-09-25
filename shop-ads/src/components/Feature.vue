<script setup>
defineProps({ blok: Object })
</script>

<template>
  <div v-editable="blok" class="border-slate-200 mb-3">
    <img v-for="feature in blok.name" :src="feature.filename" width="200" class="mb-3">
  </div>
</template>
