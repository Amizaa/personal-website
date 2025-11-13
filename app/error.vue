<script setup lang="ts">

const { t, locale } = useI18n()

interface ErrorProps {
  error: {
    statusCode: number
    statusMessage?: string
    message?: string
  }
}

const props = defineProps<ErrorProps>()

const statusCode = computed(() => props.error?.statusCode || 500)

const errorIcon = computed(() => {
  switch (statusCode.value) {
    case 404:
      return "i-heroicons-magnifying-glass"
    case 403:
      return "i-heroicons-lock-closed"
    case 500:
      return "i-heroicons-exclamation-triangle"
    default:
      return "i-heroicons-x-circle"
  }
})

const errorTitle = computed(() =>
  t(`error.titles.${statusCode.value}`, t("error.titles.default"))
)

const message = computed(() =>
  props.error?.message
    ? props.error.message
    : t(`error.messages.${statusCode.value}`, t("error.messages.default"))
)

function handleError() {
  clearError({ redirect: "/" })
}
</script>

<template>
  <div
    :class="[
      'flex flex-col items-center justify-center min-h-screen text-center p-6',
      locale === 'fa' ? 'font-playpen' : 'font-dyna'
    ]"
  >
    <Icon :name="errorIcon" class="w-20 h-20 text-cyan-500 mb-4" />
    <h1 class="text-3xl font-bold mb-2">{{ errorTitle }}</h1>
    <p class="text-gray-600 dark:text-gray-300 mb-6">{{ message }}</p>
    <button
      @click="handleError"
      class="px-4 py-2 bg-cyan-500 text-white rounded cursor-pointer hover:bg-cyan-600 transition"
    >
      {{ t("error.button") }}
    </button>
  </div>
</template>
