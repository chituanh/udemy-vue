<template>
    <li>
        <h2>{{ friend.name }}</h2>
        <button @click="toggleDetails" >Show detail</button>
        <ul v-if="detailAreVisible" >
            <li><strong>Phone: </strong> {{friend.phone}} </li>
            <li><strong>Email: </strong> {{friend.email}} </li>
        </ul>
    </li>
</template>

<script>
export default {
    setup() {
        
    },
    data() {
        return {
            detailAreVisible: false,
            friend: {
                id: "manuel",
                name: "Mesdklf sdlfk sdf",
                phone: 'heheee',
                email: 'huhuhu',
            },
        }
    },
    methods: {
        toggleDetails() {
            this.detailAreVisible = !this.detailAreVisible;
        }
    }
}
</script>