<script lang="ts" setup>
import type { Experience } from "@/types/experiences.types";
import { onMounted } from "vue";
import gsap from "gsap";

const props = defineProps<{
    index: number,
    item: Experience
}>()


const timelineRef = ref<HTMLDivElement | null>(null);

onMounted(() => {
    if (timelineRef.value) {
        gsap.from(timelineRef.value, {
            x: props.index % 2 == 0 ? 200 : -200,
            opacity: 0,
            duration: 1,
            stagger: 0.3,
            ease: "power2.out",
            scrollTrigger: {
              trigger: timelineRef.value,
              start: "top 80%", 
              toggleActions: "play none none none",
            },
        });
    }
    
})
</script>

<template>
    <div ref="timelineRef" :class="['mb-8 flex justify-center lg:justify-between mt-10 lg:mt-3 items-center w-full', index % 2 == 0 ? 'flex-row-reverse' : '']">
      <div class="lg:order-1 lg:w-5/12"></div>

      <div class="hidden z-20 lg:flex items-center lg:order-1 justify-center bg-cyan-400 shadow-xl w-16 h-16 rounded-full">
        <img :src="item.companyIcon" :alt="item.company" class="object-cover w-14 h-14 rounded-full" />
      </div>
      
      
      <div class="lg:order-1 bg-cyan-500 rounded-lg shadow-xl w-full lg:w-5/12 px-6 py-4">
        <div class="z-20 mx-auto my-3 lg:hidden flex items-center justify-center bg-cyan-400 shadow-md w-16 h-16 rounded-full">
          <img :src="item.companyIcon" :alt="item.company" class="object-cover w-14 h-14 rounded-full" />
        </div>
        <div class="flex justify-between mb-3">
          <span class="text-sm text-gray-300">{{item.startDate}} - {{item.endDate}}</span>
          <span class="text-sm text-gray-300">{{item.location}}</span>
        </div>
        <h3 class="font-bold text-cyan-50 text-xl">{{item.title}}</h3>

        <h5 v-if="item.company" class=" text-cyan-100 mt-1 mb-4"><span class="text-gray-200">At</span> {{item.company}} - {{item.type}}</h5>
        <h5 v-else class=" text-cyan-100 mt-1 mb-4">{{item.type}}</h5>

        <ul class="text-sm leading-snug tracking-wide text-gray-900 text-opacity-100 list-disc space-y-2 p-3">
          <li v-for="(desc,index) in item.descriptions" :key="index">{{desc}}</li>
        </ul>
        <div class="flex justify-center gap-3 my-3 bg-cyan-100 p-2 rounded-full w-fit mx-auto">
          <Icon v-for="(tech,index) in item.technologies" :key="index" :name="tech" class="size-8"/>
        </div>
      </div>
    </div>
</template>