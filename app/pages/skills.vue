<script lang="ts" setup>

const {t} = useI18n()

useHead({
    title: `${t('fullname')} | ${t('portfolio.pageTitle')} `
})
</script>

<template>
    <div class="mt-10 mb-15">
    
        <skillLayout />

    </div>

</template>