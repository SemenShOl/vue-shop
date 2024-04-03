<script setup>
defineProps({
    imgUrl: String,
    title: String,
    price: Number,
    isFavorite: Boolean,
    isAdded: Boolean,
    onClickAdd: Function,
    onClickFavorite: Function
})
</script>


<template>
    <div
        class="relative flex flex-col w-full border border-slate-100 bg-white rounded-xl p-5 cursor-pointer transition hover:shadow-xl hover:transform hover:-translate-y-2">
        <div class="absolute top-8 left-8">
            <img @click="onClickFavorite" :src="isFavorite ? '/like-2.svg' : 'like-1.svg'" alt="Favorite" />
        </div>
        <img :src="imgUrl" class="w-18 h-18 bg-cover" alt="Sneaker" />
        <p>{{ title }}</p>
        <div class="flex justify-between mt-5">
            <div class="flex flex-col gap-2">
                <span class="text-slate-200">Цена:</span>
                <span class="font-bold">{{ price }}</span>
            </div>
            <img class="w-8 h-8 cursor-pointer" @click="onClickAdd" :src="isAdded ? '/checked.svg' : '/plus.svg'"
                alt="Plus" />
        </div>
    </div>
</template>