<script lang="ts" setup>
import type { Project } from "@/types/projects.types";
import { gsap } from "gsap";

const { locale } = useI18n()

const openModal = ref<boolean>(false)
const overlayText = ref<HTMLDivElement | null>(null);
const cardRef = ref<HTMLDivElement | null>(null);

const props = defineProps<{
    item: Project
}>()

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
        start: "top 90%", 
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
        class="relative overflow-hidden rounded-2xl shadow-lg group cursor-pointer" :class="item.size == 'L' ? 'md:col-span-2 md:row-span-2' : item.size == 'M' ? 'md:col-span-2' : '' ">
        <span class="absolute opacity-80 bg-cyan-700 text-white p-2 rounded-full m-2 text-sm">{{item.tag}}</span>

        <img :src="item.image" :alt="item.title" class="w-full h-full object-cover">
        <div
        ref="overlayText"
        class="absolute bottom-0 left-0 w-full p-3 flex items-center justify-center
        text-white text-lg font-semibold bg-linear-to-t from-cyan-500 to-transparent"
        >
        {{ item.title }}
      </div>
    </div>

    <UModal
    v-model:open="openModal"
    :ui="{
        content: 'lg:max-w-4xl',
        header: `${locale === 'fa' ? 'font-playpen' : 'font-dyna'} lg:font-semibold`,
        footer: 'justify-center'
    }"
    :title="item.title"
    :close="{
        variant: 'outline',
        class: 'rounded-full cursor-pointer text-cyan-600 border-2 border-cyan-600 hover:bg-cyan-50'
    }"
    >
        <template #body>
            <div :class="['flex flex-col justify-center', locale === 'fa' ? 'font-playpen' : 'font-dyna']">
                <div class="w-full h-60 lg:h-100 relative overflow-hidden rounded-lg">
                    <img
                    :src="item.image"
                    :alt="item.title"
                    class="w-full h-full object-cover"
                    />
                </div>
                <p class="text-justify my-5">{{item.description}}</p>

                <h6 class="text-lg text-cyan-400">{{ locale === 'fa' ? 'تکنولوژی ها' : 'Technologies' }}</h6>
                <div class="flex justify-start gap-2 my-2">
                    <span class="p-2 text-white bg-cyan-700 text-sm rounded-full" v-for="(tech,index) in item.technologies" :key="index">{{tech}}</span>
                </div>
            </div>
        </template>

        <template #footer>
            <div :class="['flex justify-center space-x-4',locale === 'fa' ? 'font-playpen' : 'font-dyna']">
                <a v-if="item.demo" :href="item.demo" target="_blank"  class="p-2 text-cyan-700 text-sm cursor-pointer flex justify-between items-center gap-2">
                    <Icon name="line-md:computer" class="size-7" />
                    <span>{{ locale === 'fa' ? 'دمو' : 'Demo' }}</span>
                </a>
                <a v-if="item.github" :href="item.github"  class="p-2 text-cyan-700 text-sm cursor-pointer flex justify-between items-center gap-2">
                    <Icon name="line-md:github" class="size-7" />
                    <span>{{ locale === 'fa' ? 'گیت هاب' : 'Github' }}</span>
                </a>
            </div>
        </template>
    </UModal>
</template>