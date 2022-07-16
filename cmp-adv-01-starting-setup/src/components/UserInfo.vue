<template>
  <BaseCard>
    <template #header>
      <h3>{{ fullName }}</h3>
      <base-badge :type="role" :caption="role.toUpperCase()"></base-badge>
    </template>
    <p>{{ infoText }}</p>
  </BaseCard>
</template>

<script>
import BaseCard from "./UI/BaseCard.vue";
export default {
  props: ["fullName", "infoText", "role"],
  components: { BaseCard },
};
</script>

