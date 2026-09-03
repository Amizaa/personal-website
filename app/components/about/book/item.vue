<script lang="ts" setup>
const { locale } = useI18n();
const { t } = useI18n()

import { ref, computed, onMounted } from "vue";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import type { Book } from "@/types/books.types";
import { bookCategoryConfig, bookRatingConfig } from "@/types/books.types";

gsap.registerPlugin(ScrollTrigger);

const props = defineProps<{
  item: Book;
}>();

const overlayText = ref<HTMLDivElement | null>(null);
const openModal = ref<boolean>(false);

const categoryConfig = computed(() => {
  return bookCategoryConfig[props.item.category];
});


onMounted(() => {
  if (overlayText.value) {
    gsap.set(overlayText.value, {
      opacity: 0,
      y: "100%",
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
    @click="openModal = true"
    @mouseenter="showOverlay"
    @mouseleave="hideOverlay"
    class="ring-2 rounded-lg flex flex-col space-y-2 break-inside-avoid mb-6 bg-white hover:ring-4 ring-gray-300 transform duration-200 hover:shadow-md z-0 relative cursor-pointer overflow-hidden"
    :class="categoryConfig.ring"
  >
    <div
      class="flex flex-col break-inside-avoid-page z-0 rounded-lg relative"
    >

      <img
        :src="item.cover"
        :alt="item.title"
        class="w-full aspect-2/3 object-cover rounded-lg"
      />

      <div
        ref="overlayText"
        class="absolute bottom-0 left-0 w-full p-3 flex items-center justify-center text-white text-lg font-semibold bg-linear-to-t to-transparent"
        :class="categoryConfig.gradient"
      >
        {{ item.title }}
      </div>


      <div class="p-3 space-y-2">

        <div class="flex items-center justify-between gap-2">
          <span
            class="px-2.5 py-1 rounded-full text-xs font-semibold text-white"
            :class="categoryConfig.color"
          >
            {{locale === 'fa' ?  t(`about.books.bookCategory.${item.category}`) : item.category }}
          </span>

          <!-- Rating -->
          <span
            class="text-sm whitespace-nowrap"
            :title="`${item.rating}/5`">

            <Icon :name="bookRatingConfig[props.item.rating].icon" class=" size-10" :class="bookRatingConfig[props.item.rating].color"/>

          </span>
        </div>


      </div>
    </div>
  </div>


    <UModal
    v-model:open="openModal"
    :ui="{
        content: 'lg:max-w-4xl',
        header: locale === 'fa' ? 'font-playpen' : 'font-dyna',
    }"
    :close="{
        variant: 'outline',
        class: 'rounded-full cursor-pointer text-cyan-600 border-2 border-cyan-600 hover:bg-cyan-50',
    }"
    >
    <template #header>
        <div class="flex flex-col gap-1">

        <h2 class="text-xl lg:text-2xl font-bold">
            {{ item.title }}
        </h2>


        <p class="text-sm lg:text-base text-gray-500">
            {{ item.author }}
        </p>
        </div>
    </template>

    <template #body>
      <div
        class="flex flex-col justify-center"
        :class="locale === 'fa' ? 'font-playpen' : 'font-dyna'"
      >
        <div class="w-full relative overflow-hidden rounded-lg">
          <img
            :src="item.cover"
            :alt="item.title"
            class="w-full h-full object-cover"
          />
        </div>


        <div class="mt-5 space-y-4">

          <p class="text-justify">
            {{ item.description }}
          </p>

          <div
            class="py-2"
            :class="[categoryConfig.textcolor,locale === 'fa' ? 'border-r-4 pr-4' : 'border-l-4 pl-4']"
            v-if="item.review">

            <h3 class="font-semibold text-lg mb-2"
              :class="categoryConfig.textcolor">
               {{ t('about.books.bookReview') }}
            </h3>

            <p class="text-justify text-gray-600 leading-7">
              {{ item.review }}
            </p>
          </div>
        </div>
      </div>
    </template>
  </UModal>
</template>