<script setup>

const emit = defineEmits(['onDrawerOpen'])

defineProps({
    totalPrice: Number
})
</script>


<template>
    <header class="flex justify-between align-center border-b border-slate-300 p-2 ">
        <router-link to="/">
            <div class="flex items-center gap-4">
                <img class="w-11" src="/logo2.jpg" alg="Logo" />
                <div>
                    <h1 class="text-xl font-bold uppercase">Vue Shop by Semyon</h1>
                    <p class="text-slate-400 text-sm">Простой макет магазина кроссовок на Vue
                    </p>
                </div>


            </div>
        </router-link>

        <div>
            <ul class="flex items-center gap-4">
                <li class="flex items-center gap-2 text-slate-500 hover:text-black cursor-pointer"
                    @click="emit('onDrawerOpen')">
                    <img src="/cart.svg" />
                    <b>{{ totalPrice }}</b>
                </li>
                <li>
                    <router-link to="/favorites" class="flex items-center gap-2 cursor-pointer">
                        <img src="/heart.svg" />
                        <p>Закладки</p>
                    </router-link>

                </li>
                <li class="flex items-center gap-2 cursor-pointer">
                    <img src="/profile.svg" />
                    <p>Профиль</p>
                </li>
            </ul>
        </div>
    </header>
</template>