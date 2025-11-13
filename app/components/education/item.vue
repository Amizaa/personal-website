<script lang="ts" setup>
const {locale} = useI18n()
import { ref, onMounted } from "vue";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import type { Activity } from "@/types/education.types";

gsap.registerPlugin(ScrollTrigger);

const props = defineProps<{
  item: Activity;
}>();

const cardRef = ref<HTMLDivElement | null>(null);
const overlayText = ref<HTMLDivElement | null>(null);
const openModal = ref<boolean>(false);

onMounted(() => {
  if (overlayText.value) {
    gsap.set(overlayText.value, { opacity: 0, y: "100%" });
  }

  if (cardRef.value) {
    gsap.from(cardRef.value, {
      opacity: 0,
      y: 100,
      duration: 1,
      ease: "power3.out",
      scrollTrigger: {
        trigger: cardRef.value,
        start: "top 80%", 
        toggleActions: "play none none none"
      }
    });
  }
});

function showOverlay() {
  if (overlayText.value) {
    gsap.to(overlayText.value, {
      opacity: 1,
      y: 0,
      duration: 0.6,
      ease: "power3.out",
    });
  }
}

function hideOverlay() {
  if (overlayText.value) {
    gsap.to(overlayText.value, {
      opacity: 0,
      y: "100%",
      duration: 0.6,
      ease: "power3.in",
    });
  }
}
</script>


<template>
  <div
    ref="cardRef"
    @click="openModal = true"
    @mouseenter="showOverlay"
    @mouseleave="hideOverlay"
    class="ring-2 rounded-lg flex flex-col space-y-2 break-inside-avoid mb-6 bg-white hover:ring-4 ring-gray-300 hover:ring-sky-400 transform duration-200 hover:shadow-sky-200 hover:shadow-md z-0 relative cursor-pointer overflow-hidden"
  >
    <div class="flex flex-col break-inside-avoid-page z-0 rounded-lg relative">
      <!-- Image fits container -->
      <img :src="item.image" :alt="item.title" class="w-full h-64 object-cover rounded-lg" />

      <!-- Overlay text at bottom with gradient -->
      <div
        ref="overlayText"
        class="absolute bottom-0 left-0 w-full p-3 flex items-center justify-center
        text-white text-lg font-semibold bg-linear-to-t from-cyan-500 to-transparent"
      >
        {{ item.title }}
      </div>
    </div>
  </div>
<UModal
  v-model:open="openModal"
  :ui="{
    content: 'lg:max-w-4xl',
    header: `${locale === 'fa' ? 'font-playpen' : 'font-dyna'} lg:font-semibold`
  }"
  :title="item.title"
  :close="{
    variant: 'outline',
    class: 'rounded-full cursor-pointer text-cyan-600 border-2 border-cyan-600 hover:bg-cyan-50'
  }"
>
  <template #body>
    <div class="flex flex-col justify-center">
      <div class="w-full h-60 lg:h-100 relative overflow-hidden rounded-lg">
        <img
          :src="item.image"
          :alt="item.title"
          class="w-full h-full object-cover"
        />
      </div>
      <p :class="[locale === 'fa' ? 'font-playpen' : 'font-dyna', 'text-justify my-5']">{{item.description}}</p>
    </div>
  </template>
</UModal>

</template>
