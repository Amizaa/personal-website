<script lang="ts" setup>
    import menuItems from "~/data/header.json";
    import Logo from '@/../public/logo.png';



</script>

<template>
    <nav class="hidden md:flex w-full justify-center my-4">
      <div class="flex justify-between items-center shadow p-3 w-3/4 menu h-17 grid-cols-5 rounded-full">
        <div class="flex justify-center col-span-1">
          <img class="w-15 h-15" :src="Logo" alt="Amirreza Noruzi logo">
        </div>
        <div class="flex justify-center col-span-3 gap-2">
          <nuxtlink v-for="(item,index) in menuItems" :key="index" :to="item.link" class="px-2">{{ item.name }}</nuxtlink>
        </div>
        <div class="flex justify-center col-span-1">

        </div>
      </div>
    </nav>

</template>

<style>
    .menu{
    backdrop-filter: blur(5px) saturate(180%);
    background-color: rgba(88,199,240,0.39);
    border: 4px solid rgba(88,199,240,0.2);
    }
</style>