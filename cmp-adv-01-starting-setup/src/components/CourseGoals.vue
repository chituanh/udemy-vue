<template>
  <ul> 
    <li v-for="goal in goals" :key="goal" > 
        <slot :item="goal" chituanh="hehee" ></slot>
    </li>
  </ul>
</template>

<script>
export default {
  data() {
    return {
      goals: ["Kết thúc rồi", "Học thôi nào"],
    };
  },
};
</script>

<style>
</style>