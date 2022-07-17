<template>
  <ul>
    <LearningResource
      v-for="store in resources"
      :key="store.id"
      :id="store.id"
      :title="store.title"
      :description="store.description"
      :link="store.link"
    >
      </LearningResource
    >
  </ul>
</template>

<script>
import LearningResource from './LearningResource.vue';
export default {
    inject: ["resources"],
    components: { LearningResource }
}
</script>

<style scoped>
ul {
  list-style: none;
  margin: 0;
  padding: 0;
  margin: auto;
  max-width: 40rem;
}
</style>