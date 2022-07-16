<template>
  <div>
    <TheHeader></TheHeader>
    <!-- <badge-list></badge-list>
    <user-info
      :full-name="activeUser.name"
      :info-text="activeUser.description"
      :role="activeUser.role"
    ></user-info>
    <CourseGoals #default="slotProps">
      <h2>
        {{ slotProps }}
      </h2>
    </CourseGoals> -->
    <button @click="setSelectedComponent('active-goals')">Active Goals</button>
    <button @click="setSelectedComponent('manage-goals')">Manage Goals</button>
    <keep-alive>
      <component :is="selectedComponent" ></component>
    </keep-alive>
  </div>
</template>

<script>
import ActiveGoals from "./components/ActiveGoals.vue";
import ManageGoals from "./components/ManageGoals.vue";
import TheHeader from "./components/layout/TheHeader.vue";
export default {
  data() {
    return {
      selectedComponent: "active-goals",
      activeUser: {
        name: "Maximilian Schwarzmüller",
        description: "Site owner and admin",
        role: "admin",
      },
    };
  },
  components: { ActiveGoals, ManageGoals, TheHeader },
  methods: {
    setSelectedComponent(cmp) {
      this.selectedComponent = cmp;
    },
  },
};
</script>

<style>
html {
  font-family: sans-serif;
}

body {
  margin: 0;
}
</style>