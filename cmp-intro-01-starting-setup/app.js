const app = Vue.createApp({
    data() {
        return {
            friends: [
                {
                    id: "manuel",
                    name: "Manuel Lorenz",
                    phone: "021323234 24 2342",
                    email: "chituanh212@gmail.com",
                },
                {
                    id: "sdfsdf",
                    name: "sdfasdf adsfasfd",
                    phone: "sdf22 24 2342",
                    email: "12312@gmail.com",
                },
            ]
        }
    }
});

app.component('friend-contact', {
    template: `
    <li>
    <h2>{{ friend.name }}</h2>
    <button @click="toggleDetails" >{{ detailsAreVisible ? "Hide" : "Show" }} Details</button>
    <ul v-show="detailsAreVisible === true" >
      <li><strong>Phone:</strong> {{ friend.phone }}</li>
      <li><strong>Email:</strong> {{ friend.email }}</li>
    </ul>
  </li>
    `,
    data() {
        return {
            detailsAreVisible: false,
            friend: {
                id: "sdfsdf",
                name: "sdfasdf adsfasfd",
                phone: "sdf22 24 2342",
                email: "12312@gmail.com",
            },
        }
    },
    methods: {
        toggleDetails() {
            this.detailsAreVisible = !this.detailsAreVisible;
        }
    }
});

app.mount("#app");