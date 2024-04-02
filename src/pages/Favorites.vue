<script setup>
import axois from 'axios'
import CardList from '../components/CardList.vue'
import { inject, onMounted, computed } from 'vue'

const cards = inject('cards')
const favoriteCards = computed(() => cards.value.filter((card) => card.isFavorite))
const drawerCards = inject('drawerCards')
const titlePage = computed(() => !favoriteCards.value.length ? 'Нет избранных кроссовок' : 'Избранные кроссовки')
// const totalPrice = computed(() => drawerCards.value.reduce((acc, item) => acc + item.price, 0))
const onClickFavorite = (card) => {
    card.isFavorite = !card.isFavorite
    try {
        axois.patch(`https://5aa2a689c0c56cfa.mokky.dev/items/${card.id}`, card)

    } catch (error) {
        console.log(error)
    }
}

const onAddToDrawer = (card) => {
    if (!card.isAdded) {
        drawerCards.value.push(card)
        card.isAdded = true
        try {
            axois.patch(`https://5aa2a689c0c56cfa.mokky.dev/items/${card.id}`, card)

        } catch (error) {
            console.log(error)
        }
    }

}

const fetchItems = async () => {
    try {
        const { data } = await axois.get('https://5aa2a689c0c56cfa.mokky.dev/items?isFavorite=true',)
        favoriteCards.value = data;

    } catch (error) {
        console.log(error)
    }
}
onMounted(fetchItems)


</script>

<template>

    <div class="flex justify-between">
        <router-link to="/">
            <div class="w-10 h-8 bg-white rounded-md flex justify-center items-center drop-shadow-md cursor-pointer">
                <img src="/arrow-right.svg" alt="Arrow" class="rotate-180 " />
            </div>
        </router-link>

        <h2 class="text-xl font-bold mb-5">{{ titlePage }}
        </h2>
    </div>


    <CardList :cards="favoriteCards" @on-click-favorite="onClickFavorite" @on-add-to-drawer="onAddToDrawer" />
</template>/