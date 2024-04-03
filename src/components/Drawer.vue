<script setup>
import CardItem from './CardItem.vue'
import DrawerHeader from './DrawerHeader.vue'
import InfoBlock from './InfoBlock.vue'
import { computed, ref } from 'vue'

const emit = defineEmits(['onDrawerClose', 'onDeleteFromDrawer', 'onCreateOrder'])

const props = defineProps({
    drawerCards: Array,
    totalPrice: Number
})

const isDrawerEmpty = computed(() => !props.drawerCards.length)

const isOrderCreated = ref(false)

const onCreateOrderClick = () => {
    isOrderCreated.value = true
    emit('onCreateOrder')
}

console.log('isDrawerEmpty: ', isDrawerEmpty.value)

</script>


<template>
    <div class="fixed z-10 top-0 h-full w-full bg-black opacity-70"></div>
    <div class="flex flex-col justify-between fixed h-full z-10 top-0 h-full right-0 w-1/3  bg-white px-10 py-7 overflow-y-auto"
        v-auto-animate>
        <DrawerHeader @on-drawer-close="() => emit('onDrawerClose')" />
        <div class="flex flex-col flex-1 justify-between">


            <div class="flex flex-col items-center h-full justify-center" v-if="isDrawerEmpty && !isOrderCreated">
                <InfoBlock title="Корзина пустая" text="Добавьте хотя бы одну пару кроссовок, чтобы сделать заказ"
                    img-url="/package-icon.png" />
            </div>
            <div class="flex flex-col items-center h-full justify-center" v-if="isOrderCreated">
                <InfoBlock title="Заказ оформлен!" text="Ваш заказ скоро будет передан курьерской доставке"
                    img-url="/order-success-icon.png" />
            </div>

            <div v-if="!isDrawerEmpty">
                <div class="flex flex-col gap-3" v-auto-animate>
                    <CardItem v-for="card in drawerCards" :key="card.id" :title="card.title" :price="card.price"
                        :img="card.imageUrl" @click="() => emit('onDeleteFromDrawer', card)" />
                </div>
                <div>
                    <div class="flex flex-col gap-5">
                        <div class="flex items-end gap-2">
                            <span>Итого:</span>
                            <div class="flex-1 border-b border-dashed" />
                            <span class="font-bold">{{ totalPrice }}</span>
                        </div>

                        <div class="flex items-end gap-2">
                            <span>Налог 5%:</span>
                            <div class="flex-1 border-b border-dashed" />
                            <span class="font-bold">{{ Math.floor(totalPrice * 0.05) }}</span>
                        </div>
                    </div>

                    <button :disabled="isDrawerEmpty" @click="onCreateOrderClick"
                        class="flex justify-center items-center gap-3 w-full py-3 mt-10 bg-lime-500 text-white rounded-xl transition disabled:bg-slate-300 active:bg-lime-700 hover:bg-lime-600">
                        Оформить заказ
                        <img src="/arrow-next.svg" alt="Arrow" />
                    </button>
                </div>
            </div>

        </div>
    </div>
</template>