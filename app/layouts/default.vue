<script lang="ts" setup>
const {locale} = useI18n()
</script>

<template>
  <div :class="[locale === 'fa' ? 'font-playpen' : 'font-dyna' ,'container min-h-screen']">
    <HeaderMenu />
    <slot />
  </div>
  
  <FooterRights />
</template>
