<script setup lang="ts">
import { onMounted } from "vue";
import gsap from "gsap";
import { useExperience  } from "@/composable/useExperience";

const { t } = useI18n()

const experiences = useExperience()

const borderRef = ref<HTMLDivElement | null>(null);

onMounted(() => {

  if (borderRef.value) {
    gsap.from(borderRef.value, {
      scaleY: 0,
      transformOrigin: "top center",
      duration: 1.5,
      ease: "power2.out"
    });
  }

});
</script>


<template>
<div class="container mx-auto w-full h-full p-2 my-6">
  <h1 class=" text-4xl text-center text-cyan-600 my-6 font-bold">{{t('resume.experience.title')}}</h1>
  <div class="relative wrap overflow-hidden p-10 h-full">
    <div ref="borderRef" class="border-2-2 absolute border-opacity-20 border-cyan-700 h-full border left-[50%]"></div>

    <ExperienceItem v-for="(experience,index) in experiences" :key="index" :index="index" :item="experience" />

  </div>
</div>
</template>