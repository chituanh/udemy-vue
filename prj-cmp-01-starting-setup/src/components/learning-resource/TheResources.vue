<template>
  <BaseCard>
    <BaseButton
      @click="setSelectedTab('stored-resources')"
      :mode="storedResButtonMode"
    >
      List Card
    </BaseButton>
    <BaseButton
      @click="setSelectedTab('add-resources')"
      :mode="addResButtonMode"
    >
      Add Card
    </BaseButton>
  </BaseCard>
  <keep-alive>
    <component :is="selectedTab"></component>
  </keep-alive>
</template>

<script>
import BaseButton from '../UI/BaseButton.vue';
import StoredResources from './StoredResources.vue';
import AddResources from './AddResources.vue';
import BaseCard from '../UI/BaseCard.vue';
export default {
  data() {
    return {
      selectedTab: 'stored-resources',
      storedResources: [
        {
          id: '1',
          title: 'hehe',
          description: 'thehed',
          link: 'https://vuejs.org',
        },
      ],
    };
  },
  provide() {
    return {
      resources: this.storedResources,
      addResource: this.addResource,
      deleteResource: this.removeResource,
    };
  },
  computed: {
    storedResButtonMode() {
      return this.selectedTab === 'stored-resources' ? null : 'flat';
    },
    addResButtonMode() {
      return this.selectedTab === 'add-resources' ? null : 'flat';
    },
  },
  methods: {
    setSelectedTab(tab) {
      this.selectedTab = tab;
    },
    addResource(title, desc, url) {
      const newResource = {
        id: new Date().toISOString(),
        title: title,
        description: desc,
        link: url,
      };
      this.storedResources.unshift(newResource);
      this.selectedTab = 'stored-resources';
    },
    removeResource(resId) {
        const resIndex = this.storedResources.findIndex(res => res.id === resId);
        this.storedResources.splice(resIndex, 1);

    },
  },
  components: { BaseCard, BaseButton, StoredResources, AddResources },
};
</script>

<style>
</style>