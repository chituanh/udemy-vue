<template>
  <div>
    <h2>Manage Goals</h2>
    <input type="text" ref="goal" />
    <button @click="setGoal">Set Goal</button>
    <teleport to="body">
      <ErrorAlert v-if="inputIsInvalid">
        <div>
          <h2>Co loi roi nef</h2>
          <p>lam on hay quay lai</p>
          <button @click="inputIsInvalid = false">Okey</button>
        </div>
      </ErrorAlert>
    </teleport>
  </div>
</template>

<script>
import ErrorAlert from "./ErrorAlert.vue";
export default {
  data() {
    return {
      inputIsInvalid: false,
    };
  },
  methods: {
    setGoal() {
      const enteredValue = this.$refs.goal.value;
      if (enteredValue === "") {
        this.inputIsInvalid = true;
      } else this.inputIsInvalid = false;
    },
  },
  components: { ErrorAlert },
};
</script>

<style>
</style>