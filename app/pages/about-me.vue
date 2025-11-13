<script lang="ts" setup>
const {t} = useI18n()
useHead({
    title: `${t('fullname')} | ${t('about.pageTitle')} `
})
</script>

<template>
    <div class="my-10">
        <AboutIntro />

        <AboutSkills />
        
    </div>

</template>