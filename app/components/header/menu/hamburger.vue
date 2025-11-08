<script setup lang="ts">
import { menuItems } from "@/data/header";
import Logo from '@/../public/logo.png';
import gsap from "gsap";


const isOpen = ref(false);
const menu = ref(null);
const menuItem = ref([]);


const toggleMenu = () => {
  isOpen.value = !isOpen.value;
};

// Animate menu items when menu opens
watch(isOpen, async (newVal:any) => {
  if (newVal) {
    await nextTick();
    gsap.fromTo(
      menuItem.value,
      { y: 40, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 0.6,
        stagger: 0.1,
        ease: "power3.out",
      }
    );
  } else {
    gsap.to(menuItem.value, {
      y: -20,
      opacity: 0,
      duration: 0.3,
      stagger: 0.05,
    });
  }
});
</script>

<template>
    <div class="relative md:hidden">
      <!-- Hamburger Button -->
      <button
        @click="toggleMenu"
        class="z-50 fixed top-6 right-6 flex flex-col gap-1.5"
      >
        <span
          :class="[
            'block w-7 h-0.5 bg-cyan-600 rounded transition-transform duration-300',
            isOpen ? 'rotate-45 translate-y-2' : ''
          ]"
        ></span>
        <span
          :class="[
            'block w-7 h-0.5 bg-cyan-600 rounded transition-opacity duration-300',
            isOpen ? 'opacity-0' : 'opacity-100'
          ]"
        ></span>
        <span
          :class="[
            'block w-7 h-0.5 bg-cyan-600 rounded transition-transform duration-300',
            isOpen ? '-rotate-45 -translate-y-2' : ''
          ]"
        ></span>
      </button>
  
      <!-- Menu Overlay -->
      <transition name="fade">
        <div
          v-if="isOpen"
          ref="menu"
          class="fixed inset-0 bg-cyan-300 bg-opacity-90 flex flex-col items-center justify-center space-y-8 text-white text-2xl font-semibold"
        >
        <img :src="Logo" class="w-1/3" alt="Personal Logo">
          <ul>
            <li
              v-for="(item, index) in menuItems"
              :key="index"
              ref="menuItem"
              class="cursor-pointer hover:text-cyan-400 text-center my-2"
            >
            <NuxtLink :to="item.link" @click="toggleMenu">
              {{ item.name }}
            </NuxtLink>
            </li>
          </ul>
        </div>
      </transition>
    </div>
</template>

<style>
    .fade-enter-active,
    .fade-leave-active {
    transition: opacity 0.4s ease;
    }
    .fade-enter-from,
    .fade-leave-to {
    opacity: 0;
    }
</style>
