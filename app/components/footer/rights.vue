<script lang="ts" setup>
const { t,locale } = useI18n()
</script>

<template>
  <footer
    :class="[
      'bottom-0 left-0 relative w-full bg-cyan-800 text-white text-start text-sm p-2 z-49',
      locale === 'fa' ? 'font-playpen' : 'font-dyna'
    ]"
  >
    <div class="flex flex-col justify-center items-center space-y-2">
      <i18n-t keypath="footer.create">
        <template #heart>
          <Icon name="line-md:heart-filled" class="text-red-500 size-4 mx-1" />
        </template>
      </i18n-t>

      <span class="my-2">{{ t('footer.rights') }}</span>

      <NuxtLink
        to="https://github.com/Amizaa/personal-website"
        target="_blank"
      >
        <Icon
          name="line-md:github-twotone"
          class="size-7 mt-3"
        />
      </NuxtLink>
    </div>
  </footer>
</template>
