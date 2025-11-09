<script setup lang="ts">
import { ref, onMounted } from "vue";
import gsap from "gsap";
import type { SkillLevel } from "@/types/skills.types";
import { skillConfig } from "@/types/skills.types";

const props = defineProps<{
  level: SkillLevel;
}>();

const bar = ref<HTMLDivElement | null>(null);

onMounted(() => {
  const { progress } = skillConfig[props.level];
  gsap.fromTo(
    bar.value,
    { width: 0 },
    { width: `${progress}%`, duration: 2, ease: "power2.out",
      scrollTrigger: {
        trigger: bar.value,
        start: "top 100%",
        toggleActions: "play none none none",
      }, },
    
  );
});
</script>

<template>
  <div class="max-w-md mx-auto mt-8 text-white">
    <div class="relative w-full h-8 rounded-lg flex items-center justify-center overflow-hidden bg-gray-800">
      <!-- Progress bar -->
      <div
        ref="bar"
        class="absolute left-0 top-0 h-full rounded-lg z-10"
        :class="skillConfig[level].color"
      >
        <div
          class="absolute right-[-5px] -top-2.5 w-[70px] h-[70px] rounded-[40%] animate-spin-slow"
          :class="skillConfig[level].color"
        ></div>
      </div>
    </div>
  </div>
</template>

<style scoped>
@keyframes spin-slow {
  from { transform: rotate(0deg); }
  to { transform: rotate(360deg); }
}
.animate-spin-slow {
  animation: spin-slow 6s linear infinite;
}
</style>
