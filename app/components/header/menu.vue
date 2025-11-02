<template>
  <div class="relative">
    <!-- Hamburger Button -->
    <button
      @click="toggleMenu"
      class="z-50 fixed top-6 right-6 flex flex-col gap-1.5"
    >
      <span
        :class="[
          'block w-7 h-0.5 bg-gray-800 rounded transition-transform duration-300',
          isOpen ? 'rotate-45 translate-y-2' : ''
        ]"
      ></span>
      <span
        :class="[
          'block w-7 h-0.5 bg-gray-800 rounded transition-opacity duration-300',
          isOpen ? 'opacity-0' : 'opacity-100'
        ]"
      ></span>
      <span
        :class="[
          'block w-7 h-0.5 bg-gray-800 rounded transition-transform duration-300',
          isOpen ? '-rotate-45 -translate-y-2' : ''
        ]"
      ></span>
    </button>

    <!-- Menu Overlay -->
    <transition name="fade">
      <div
        v-if="isOpen"
        ref="menu"
        class="fixed inset-0 bg-gray-900 bg-opacity-90 flex flex-col items-center justify-center space-y-8 text-white text-2xl font-semibold"
      >
        <ul>
          <li
            v-for="(item, index) in menuItems"
            :key="index"
            ref="menuItem"
            class="cursor-pointer hover:text-yellow-400"
          >
            {{ item }}
          </li>
        </ul>
      </div>
    </transition>
  </div>
</template>

<script setup>
import { ref, onMounted, watch, nextTick } from "vue";
import { gsap } from "gsap";

const isOpen = ref(false);
const menu = ref(null);
const menuItem = ref([]);

const menuItems = ["Home", "About", "Projects", "Contact"];

const toggleMenu = () => {
  isOpen.value = !isOpen.value;
};

// Animate menu items when menu opens
watch(isOpen, async (newVal) => {
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

<style scoped>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.4s ease;
}
.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>
