<template>
  <form @submit.prevent="submitData">
    <div>
      <label>Name</label>
      <input v-model="enterName" type="text" />
    </div>
    <div>
      <label>Phone</label>
      <input v-model="enterPhone" type="text" />
    </div>
    <div>
      <label>Email</label>
      <input v-model="enterEmail" type="text" />
    </div>
    <div>
      <button>Add contact</button>
    </div>
  </form>
</template>

<script>
export default {
  emits: ["add-contact"],
  data() {
    return {
      enterName: "",
      enterPhone: "",
      enterEmail: "",
    };
  },
  methods: {
    submitData() {
        this.$emit('add-contact', this.enterName, this.enterPhone, this.enterEmail)
    },
  },
};
</script>

<style>
</style>