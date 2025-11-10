<script setup lang="ts">
import { gsap } from "gsap";
const infoRef = ref<HTMLDivElement | null>(null)

onMounted(() => {
    if (infoRef.value) {
        gsap.from(infoRef.value,{
            opacity: 0,
            y: 50,
            duration: 1,
            ease: "power3.out",
            scrollTrigger: {
                trigger: infoRef.value,
                start: "top 80%", 
                toggleActions: "play none none none",
            },
        })
        
    }
})
</script>

<template>
    <div ref="infoRef" class="my-10 p-3">
        <h1 class=" text-4xl text-center text-cyan-600 my-6 font-bold">My Education & Academic Achievements</h1>
        <p class=" text-xl leading-10 indent-8 text-justify">
            I recently graduated from <NuxtLink to="https://urmia.ac.ir" class="highlighted-text">Urmia University</NuxtLink> with a degree in <NuxtLink to="/" class="highlighted-text"> Computer Engineering </NuxtLink>, achieving a high academic standing. During my studies, I actively contributed to the <NuxtLink to="https://uucessc.ir" class="highlighted-text">Computer Engineering Association </NuxtLink> for two years. This experience not only strengthened my technical expertise but also enhanced my teamwork, leadership, and communication skills.
        </p>
    </div>
</template>