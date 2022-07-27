<template>
<div class="container" > 
  <list-data></list-data> 
</div>
  <div class="container">
    <div :class="{ animate: animatedBlock }" class="block"></div>
    <button @click="animateBlock">Animate</button>
  </div>
  <div class="container">
    <transition name="hehe">
      <p v-if="paraIsVisible">this is some time the visible!</p>
    </transition>
    <button @click="toggleParagraph">Toggle Paragraph</button>
  </div>

  <div class="container">
    <transition name="fade-button" mode="out-in" >
      <button @click="showUsers" v-if="!usersAreVisible">Show user</button>
      <button @click="hideUsers" v-else>Hide user</button>
    </transition>
  </div>

  <base-modal @close="hideDialog" :open="dialogIsVisible">
    <p>This is a test dialog!</p>
    <button @click="hideDialog">Close it!</button>
  </base-modal>

  <div class="container">
    <button @click="showDialog">Show Dialog</button>
  </div>
</template>  

<script>
import ListData from './components/ListData.vue';
export default {
    data() {
        return {
            animatedBlock: false,
            dialogIsVisible: false,
            paraIsVisible: false,
            usersAreVisible: false,
        };
    },
    methods: {
        showUsers() {
            this.usersAreVisible = true;
        },
        hideUsers() {
            this.usersAreVisible = false;
        },
        animateBlock() {
            this.animatedBlock = !this.animatedBlock;
        },
        toggleParagraph() {
            this.paraIsVisible = !this.paraIsVisible;
        },
        showDialog() {
            this.dialogIsVisible = true;
        },
        hideDialog() {
            this.dialogIsVisible = false;
        },
    },
    components: { ListData }
};
</script>

<style>
* {
  box-sizing: border-box;
}
html {
  font-family: sans-serif;
}
body {
  margin: 0;
}
button {
  font: inherit;
  padding: 0.5rem 2rem;
  border: 1px solid #810032;
  border-radius: 30px;
  background-color: #810032;
  color: white;
  cursor: pointer;
}
button:hover,
button:active {
  background-color: #a80b48;
  border-color: #a80b48;
}
.block {
  width: 8rem;
  height: 8rem;
  background-color: #290033;
  margin-bottom: 2rem;
  /* transition: all 0.5s ease-out; */
}
.container {
  max-width: 40rem;
  margin: 2rem auto;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  padding: 2rem;
  border: 2px solid #ccc;
  border-radius: 12px;
}

.animate {
  /* transform: translateX(-100px); */
  animation: slide-fade 0.5s ease-out forwards;
}

.v-enter-active {
  animation: slide-fade 0.5s ease-out forwards;
}

.v-leave-from {
  opacity: 1;
  transform: translateY(0px);
}

.v-leave-active {
  transition: all 0.5s ease-in;
}

.v-leave-to {
  opacity: 0;
  transform: translateY(30px);
}

.fade-button-enter-from, 
.fade-button-leave-to {
  opacity: 0;
}

.fade-button-enter-active {
  transition: opacity 0.3s ease-out ;
}

.fade-button-leave-active {
  transition: opacity 0.3s ease-in;
}


.fade-button-leave-from, 
.fade-button-enter-to {
  opacity: 1;
}

@keyframes slide-fade {
  0% {
    transform: translateX(0px) scale(1);
  }

  70% {
    transform: translateX(-150px) scale(1.1);
  }

  100% {
    transform: translateX(-200px) scale(1);
  }
}
</style>