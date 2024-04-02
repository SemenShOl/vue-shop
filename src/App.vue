<script setup>
import axois from 'axios'
import { ref, computed, provide } from 'vue'
import Header from './components/Header.vue'
import Drawer from './components/Drawer.vue'

const cards = ref([])
const drawerCards = ref([])
provide('cards', cards)
provide('drawerCards', drawerCards)
const isDrawerVisible = ref(false)

const totalPrice = computed(() => drawerCards.value.reduce((acc, item) => acc + item.price, 0))


const onDeleteFromDrawer = (card) => {
  drawerCards.value = drawerCards.value.filter(item => item.id !== card.id)
  card.isAdded = false
  try {
    axois.patch(`https://5aa2a689c0c56cfa.mokky.dev/items/${card.id}`, card)

  } catch (error) {
    console.log(error)
  }
}


</script>

<template>
  <div class="w-4/5 mx-auto my-0 bg-white rounded-xl shadow-xl mt-8 p-4">
    <Header @onDrawerOpen="() => isDrawerVisible = true" :totalPrice="totalPrice" />
    <div class="p-5">
      <!-- <Home /> -->

      <router-view></router-view>
    </div>

  </div>
  <Drawer v-if="isDrawerVisible" @on-drawer-close="() => isDrawerVisible = false" :drawerCards="drawerCards"
    :totalPrice="totalPrice" @on-delete-from-drawer="onDeleteFromDrawer" />
</template>

<style scoped></style>
