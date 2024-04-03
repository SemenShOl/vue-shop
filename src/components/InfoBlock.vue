<script setup>
defineProps({
    imgUrl: String,
    title: String,
    text: String
})
</script>

<template>
    <div class="flex items-center justify-center flex-col text-center">
        <img width="70" height="70" :src="imgUrl">
        <h2 class="mt-4 text-2xl font-medium mb-4 ">{{ title }}</h2>
        <p class="text-gray-400">{{ text }}</p>
    </div>

</template>