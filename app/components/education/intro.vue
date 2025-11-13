<script setup lang="ts">
import { gsap } from "gsap"

const { t,locale } = useI18n()
const infoRef = ref<HTMLDivElement | null>(null)

onMounted(() => {
  if (infoRef.value) {
    gsap.from(infoRef.value, {
      opacity: 0,
      y: 50,
      duration: 1,
      ease: "power3.out",
      scrollTrigger: {
        trigger: infoRef.value,
        start: "top 80%",
        toggleActions: "play none none none"
      }
    })
  }
})
</script>

<template>
  <div ref="infoRef" class="my-10 p-3">
    <h1 class="text-4xl text-center text-cyan-600 my-6 font-bold">
      {{ t('resume.education.title') }}
    </h1>
    <p class="text-xl leading-10 indent-8 text-justify">
      <i18n-t keypath="resume.education.content.intro">
        <template #university>
          <NuxtLink to="https://urmia.ac.ir" class="highlighted-text">{{ locale === 'fa' ? 'دانشگاه ارومیه' : 'Urmia University' }}</NuxtLink>
        </template>
        <template #major>
          <NuxtLink to="/" class="highlighted-text">{{ locale === 'fa' ? 'مهندسی کامپیوتر' : 'Computer Engineering' }}</NuxtLink>
        </template>
        <template #association>
          <NuxtLink to="https://uucessc.ir" class="highlighted-text">{{ locale === 'fa' ? 'انجمن علمی مهندسی کامپیوتر' : 'Computer Engineering Association' }}</NuxtLink>
        </template>
      </i18n-t>
    </p>
  </div>
</template>
