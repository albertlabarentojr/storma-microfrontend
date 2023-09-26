<script setup>
import { useStoryblok } from '@storyblok/vue';
const story = await useStoryblok('header', { version: 'draft' });
</script>

<template>
  <Suspense>
    <template #default>
      <div>
        <StoryblokComponent v-if="story" :blok="story.content" />
      </div>
    </template>

    <template #fallback>
      <div>Loading...</div>
    </template>
  </Suspense>
</template>
