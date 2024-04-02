<script setup>
import axois from 'axios'
import { onMounted, reactive, watch, inject } from 'vue'

import CardList from '../components/CardList.vue'

const cards = inject('cards')
const drawerCards = inject('drawerCards')

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


const filters = reactive({
    sortType: '',
    searchString: ''
})
const onSortTypeChange = (event) => {
    filters.sortType = event.target.value
}

const onSearchStringChange = (event) => {
    filters.searchString = event.target.value
}

const fetchItems = async () => {
    try {
        const params = {
            sortBy: filters.sortType
        }
        if (filters.searchString) {
            params.title = `*${filters.searchString}*`
        }
        const { data } = await axois.get('https://5aa2a689c0c56cfa.mokky.dev/items', {
            params
        })
        cards.value = data;
        drawerCards.value = data.filter((card) => card.isAdded === true)
    } catch (error) {
        console.log(error)
    }
}
onMounted(fetchItems)

watch(filters, fetchItems)
</script>

<template>
    <div class="flex justify-between">
        <h2 class="text-xl font-bold">Все кроссовки</h2>
        <div class="flex items-center gap-4">
            <select @change="onSortTypeChange"
                class="py-2 px-3 border border-gray-200 bg-white focus:border-gray-400 h-10 rounded-md focus:outline-none">
                <option value="name">По названию</option>
                <option value="price">По цене (дешевые)</option>
                <option value="-price">По цене (дорогие)</option>
            </select>
            <div class="relative">
                <img src="/search.svg" class="absolute left-2 top-1/2 -translate-y-1/2" />
                <input @input="onSearchStringChange" type="text" placeholder="Поиск..."
                    class="border border-slate-300 rounded-md h-10 px-8 py-2 outline-none" />
            </div>
        </div>

    </div>
    <CardList :cards="cards" @on-click-favorite="onClickFavorite" @on-add-to-drawer="onAddToDrawer" />
</template>