<script lang="ts" setup>
import { ref, onMounted } from 'vue';
import gsap from 'gsap';
import {menuItems} from "@/data/header";
import Logo from '@/../public/logo.png';
import { useRoute } from 'vue-router';

const route = useRoute();

const activeIndex = ref<number | null>(null);
activeIndex.value = route.name === 'index'? 0: menuItems.findIndex(item => item.slug === route.name);

onMounted(() => {
  gsap.fromTo(
    `.menu-item-${activeIndex.value}`,
    { scale: 1 },
    {
      scale: 1.3,
      duration: 0.3,
      ease: "power2.out"
    }
  );
})

function handleClick(index: number) {
  if (activeIndex.value !== null && activeIndex.value !== index) {
    gsap.to(`.menu-item-${activeIndex.value}`, {
      scale: 1,
      duration: 0.3,
      ease: "power2.out"
    });
  }

  gsap.fromTo(
    `.menu-item-${index}`,
    { scale: 1 },
    {
      scale: 1.3,
      duration: 0.3,
      ease: "power2.out"
    }
  );

  activeIndex.value = index;
}
</script>


<template>
  <nav class="hidden lg:flex w-full justify-center my-4">
    <div class="flex justify-between items-center shadow p-3 w-3/4 menu h-17 grid-cols-5 rounded-full">
      <div class="flex justify-center col-span-1">
        <NuxtLink to="/" @click="handleClick(0)">
          <img class="w-15 h-15 cursor-pointer" :src="Logo" alt="Amirreza Noruzi logo">
        </NuxtLink>
      </div>
      <div class="flex justify-center col-span-3 gap-3">
        <nuxtLink
          v-for="(item, index) in menuItems"
          :key="index"
          :to="item.link"
          :class="[
            'menu-item',
            `menu-item-${index}`,
            'px-3 py-1 transition-transform rounded-md duration-300 ease-in-out cursor-pointer',
            activeIndex === index
              ? 'text-cyan-500 dark:text-cyan-300 font-semibold'
              : 'text-gray-700 dark:text-gray-300 hover:text-cyan-400 dark:hover:text-cyan-200'
          ]"
          @click="handleClick(index)"
        >
          {{ item.name }}
        </nuxtLink>
      </div>
      <div class="flex justify-center col-span-1">
        <ColorModeButton />
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
  
  html.dark .menu {
  backdrop-filter: blur(5px) saturate(180%);
  background-color: rgba(234, 226, 226, 0.25); 
  border: 4px solid rgba(234, 226, 226, 0.15);
}
</style>