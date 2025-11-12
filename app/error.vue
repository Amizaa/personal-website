<script setup lang="ts">

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
      return 'i-heroicons-magnifying-glass'
    case 403:
      return 'i-heroicons-lock-closed'
    case 500:
      return 'i-heroicons-exclamation-triangle'
    default:
      return 'i-heroicons-x-circle'
  }
})

const errorTitle = computed(() => {
  switch (statusCode.value) {
    case 404:
      return 'Page Not Found'
    case 403:
      return 'Access Forbidden'
    case 500:
      return 'Server Error'
    default:
      return 'Unexpected Error'
  }
})

const message = computed(() => {
  if (props.error?.message) {
    return props.error.message
  }

  switch (statusCode.value) {
    case 404:
      return 'The page you are looking for could not be found.'
    case 403:
      return 'You do not have permission to view this page.'
    case 500:
      return 'Something went wrong on our end. Please try again later.'
    default:
      return 'An unexpected error has occurred.'
  }
})

function handleError() {
  clearError({ redirect: '/' })
}
</script>

<template>
  <div class="flex flex-col items-center justify-center min-h-screen text-center p-6 font-dyna">
    <Icon :name="errorIcon" class="w-20 h-20 text-cyan-500 mb-4" />
    <h1 class="text-3xl font-bold mb-2">{{ errorTitle }}</h1>
    <p class="text-gray-600 dark:text-gray-300 mb-6">{{ message }}</p>
    <button @click="handleError" class="px-4 py-2 bg-cyan-500 text-white rounded cursor-pointer hover:bg-cyan-600 transition">
      Go back home
    </button>
  </div>
</template>
