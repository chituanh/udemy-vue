<template>
  <ul>
    <transition-group tag="ul" name="user-list">
      <li v-for="user in users" :key="user" @click="removeUser(user)" > {{user}} </li>
    </transition-group>
  </ul>
  <div>
    <input type="text" v-model="add" />
    <button @click="addUser"  >Add User</button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      users: ['chi', 'tu', 'anh', 'hiihi'],
      add: '',
    };
  },
  methods: {
    removeUser(user) {
        this.users = this.users.filter((usr => usr != user));
    },

    addUser() {
        this.users.unshift(this.add);
        this.add = '';

    }
  }
};
</script>

<style>

ul {
    list-style: none;
    margin:1rem 0;
    padding: 0;
}

li {
    border: 1px solid #ccc;
    padding: 1rem;
    text-align: center;
}

.user-list-enter-from {
  opacity: 0;
  transform: translateX(-30px);
}

.user-list-enter-active {
  transition: all 1s ease-out;

}
.user-list-enter-to {
    opacity: 1;
  transform: translateX(0px);
}

.user-list-leave-from {
  opacity: 1;
  transform: translateX(0px);
}

.user-list-leave-active {
  transition: all 1s ease-out;
  position: absolute;
}
.user-list-leave-to {
    opacity: 0;
  transform: translateX(30px);
}
.user-list-move {
  transition: transform 0.8 ease;
}

</style>