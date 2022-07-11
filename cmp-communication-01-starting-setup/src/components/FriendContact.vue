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
  },
  data() {
    return {
      detailsAreVisible: false,
      friend: {
        id: "manuel",
        name: "Manuel Lorenz",
        phone: "0123 45678 90",
        email: "manuel@localhost.com",
      },
    };
  },
  methods: {
    toggleDetails() {
      this.detailsAreVisible = !this.detailsAreVisible;
    },
    toggleFav() {
      this.$emit('toggle-favorite', this.id)
    }
  }
};
</script>