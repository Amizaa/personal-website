<script lang="ts" setup>
import type { Skill } from "@/types/skills.types";
import { ref, onMounted } from "vue";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const props = defineProps<{
  title: string;
  titleIcon?: string;
  items: Skill[];
}>();

const sectionRef = ref<HTMLElement | null>(null);

onMounted(() => {
  if (sectionRef.value) {
    gsap.from(sectionRef.value, {
      opacity: 0,
      y: 50,
      duration: 1,
      ease: "power3.out",
      scrollTrigger: {
        trigger: sectionRef.value,
        start: "top 80%", 
        toggleActions: "play none none none",
      },
    });
  }
});
</script>

<template>
  <div ref="sectionRef" class="my-7">
    <div class="flex items-center space-x-3 mb-2">
      <Icon :name="titleIcon ?? ''" class="size-8 text-cyan-800" />
      <h1 class="font-semibold text-xl my-4 text-cyan-800">
        {{ title }}
      </h1>
    </div>

    <div
      class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 rounded-2xl"
    >
      <SkillItem v-for="(item, index) in items" :key="index" :item="item" />
    </div>
  </div>
</template>
