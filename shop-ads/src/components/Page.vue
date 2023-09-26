<script setup>
defineProps({ blok: Object })
</script>

<template>
  <div v-editable="blok">
    <StoryblokComponent
        v-for="inblok in blok.body"
        :blok="inblok"
        :key="inblok._uid"
    />
  </div>
</template>
