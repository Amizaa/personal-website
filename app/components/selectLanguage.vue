<script setup lang="ts">
import { useRouter, useRoute } from 'vue-router'

const { locale } = useI18n()
const router = useRouter()
const route = useRoute()

async function toggleLocale() {
  const newLocale = locale.value === 'en' ? 'fa' : 'en'

  const targetPath =
    newLocale === 'fa'
      ? `/fa${route.path.replace(/^\/fa/, '')}`
      : route.path.replace(/^\/fa/, '')

  await router.push({ path: targetPath })

  locale.value = newLocale
}
</script>

<template>
  <UButton
    @click="toggleLocale"
    class="px-3 rounded-full cursor-pointer dark:bg-cyan-600 dark:hover:bg-cyan-700 transition text-xl mx-2"
    aria-label="Toggle language"
    :icon="locale === 'en' ? 'emojione:flag-for-iran' : 'emojione:flag-for-us-outlying-islands'"
    color="neutral"
    variant="soft"
  />
</template>
