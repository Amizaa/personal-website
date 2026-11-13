<script setup lang="ts">
const { t, locale } = useI18n()
</script>

<template>
  <div class="my-10 p-3">
    <h1 class="text-4xl text-center text-cyan-600 my-6 font-bold">
      {{ t('about.intro.title') }}
    </h1>

    <p class="text-xl leading-10 indent-8 text-justify">
      <i18n-t keypath="about.intro.content.intro">
        <template #amirreza>
          <NuxtLink to="/" class="highlighted-text">{{t('fullname')}}</NuxtLink>
        </template>
        <template #vue>
          <NuxtLink to="https://vuejs.org" class="highlighted-vue">Vue.js</NuxtLink>
        </template>
        <template #nuxt>
          <NuxtLink to="https://nuxt.com" class="highlighted-nuxt">Nuxt.js</NuxtLink>
        </template>
        <template #ai>
          <NuxtLink class="highlighted-text">{{locale === 'fa' ? 'هوش مصنوعی و علوم داده' : 'AI and data science'}}</NuxtLink>
        </template>
      </i18n-t>

      <br><br>

      <i18n-t keypath="about.intro.content.extra1">
        <template #ds>
            <NuxtLink class="highlighted-text">{{locale === 'fa' ? 'علوم داده' : 'data science'}}</NuxtLink>
          </template>
          <template #statistics>
            <NuxtLink class="highlighted-text">{{locale === 'fa' ? 'آمار' : 'statistics'}}</NuxtLink>
          </template>
          <template #ml>
            <NuxtLink class="highlighted-text">{{locale === 'fa' ? 'یادگیری ماشین' : 'machine learning'}}</NuxtLink>
          </template>
          <template #da>
            <NuxtLink class="highlighted-text">{{locale === 'fa' ? 'تحلیل داده' : 'data analysis'}}</NuxtLink>
        </template>
      </i18n-t>

      <br><br>

      <i18n-t keypath="about.intro.content.extra2">
        <template #keepLearning>
          <NuxtLink class="highlighted-text">{{locale === 'fa' ? 'یادگیری، ساخت و الهام' : 'keep learning, building, and inspiring'}}</NuxtLink>
        </template>
      </i18n-t>
    </p>
  </div>
</template>

