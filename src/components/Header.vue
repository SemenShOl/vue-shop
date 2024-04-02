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
                <img class="w-10" src="/logo.png" alg="Logo" />
                <div>
                    <h1 class="text-xl font-bold uppercase">Vue Shop</h1>
                    <p class="text-slate-400 text-sm">This template should help get you started developing with Vue 3 in
                        Vite.
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