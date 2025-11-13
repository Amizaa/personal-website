<script lang="ts" setup>
import { en } from '@nuxt/ui/locale'

const { locale } = useI18n()

useHead(() => ({
  htmlAttrs: {
    lang: locale.value,
    dir: locale.value === 'fa' ? 'rtl' : 'ltr'
  }
}))
</script>

<template>
  <div>
    <UApp :locale="en">
      <NuxtLoadingIndicator color="#6366F1" :height="3" :throttle="100" :duration="2000" />
      <NuxtLayout >
        <NuxtPage />
      </NuxtLayout>
    </UApp>
  </div>
</template>

<style>
.page-enter-active,
.page-leave-active {
  transition: all 0.6s cubic-bezier(0.25, 0.8, 0.25, 1);
}

.page-enter-from {
  opacity: 0;
  transform: translateY(30px) scale(0.95);
  filter: blur(1rem);
}

.page-leave-to {
  opacity: 0;
  transform: translateY(-30px) scale(0.95);
  filter: blur(1rem);
}


</style>
