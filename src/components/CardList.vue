<script setup>
import Card from './Card.vue'

const props = defineProps({
    cards: Array
})
const emit = defineEmits(['onClickFavorite', 'onAddToDrawer'])

console.log(props.cards)
</script>

<template>
    <div class="grid grid-cols-4 gap-4 pt-4" v-auto-animate>
        <Card v-for="card in cards" :key="card.id" :is-favorite="card.isFavorite" :is-added="card.isAdded"
            :title="card.title" :price="card.price" :img-url="card.imageUrl"
            :on-click-add="() => emit('onAddToDrawer', card)"
            :on-click-favorite="() => emit('onClickFavorite', card)" />


    </div>
</template>