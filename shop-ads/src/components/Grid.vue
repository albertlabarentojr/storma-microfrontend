<script setup>
defineProps({ blok: Object })
</script>

<template>
  <div v-editable="blok" class="flex mb-6">
    <div v-for="inblok in blok.columns" :key="inblok._uid" class="flex-auto">
      <StoryblokComponent :blok="inblok" />
    </div>
  </div>
</template>
