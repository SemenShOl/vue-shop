<script setup>
import { ref } from 'vue'
defineProps({
    title: String,
    isAdded: Boolean,
    number: Number
})
const count = ref(0)

const increment = () => {
    count.value++
}
</script>


<template>
    <div class="wrapper">
        <slot></slot>

        <h1 class="mr-10 text-teal-600">{{ title }}</h1>
        <p>{{ isAdded }}</p>
        <p>{{ number }}</p>
        <h2>{{ count }}</h2>
        <button @click="increment">+</button>

    </div>

</template>

<style scoped>
/* .wrapper {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
}

h1 {
    color: red
} */
</style>