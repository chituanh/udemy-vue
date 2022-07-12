<template>
  <li>
    <h2>{{ name }} {{isFavorite ? '(Fav)' : ''}}</h2>
    <button @click="toggleFav">Favorites</button>
    <button @click="toggleDetails">{{ detailsAreVisible ? 'Hide' : 'Show' }} Details</button>
    <ul v-if="detailsAreVisible">
      <li>
        <strong>Phone:</strong>
        {{ friend.phone }}
      </li>
      <li>
        <strong>Email:</strong>
        {{ friend.email }}
      </li>
    </ul>
    <button @click="$emit('delete-friend', id)" >Delete</button>
  </li>
</template>

<script>
export default {
  props: {
    id: String,
    name: {
      type: String,
      required: true,
    },
    isFavorite: {
      type: Boolean,
      required: false,
      default: true,
    }
  },  
  emits:{
    'toggle-favorite': function(id) {
      if(id) {
        return true;
      } else {
        return false;
      }
    },
    'delete-friend': null,
  },
  data() {
    return {
      detailsAreVisible: false,
    };
  },
  methods: {
    toggleDetails() {
      this.detailsAreVisible = !this.detailsAreVisible;
    },
    toggleFav() {
      this.$emit('toggle-favorite', this.id)
    },
  }
};
</script>