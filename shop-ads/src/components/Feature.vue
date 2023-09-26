<script setup>
defineProps({ blok: Object })
</script>

<template>
  <div v-editable="blok">
    <img v-for="feature in blok.name" :src="feature.filename" width="400" class="mt-6">
  </div>
</template>
