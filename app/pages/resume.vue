<script lang="ts" setup>
const {t} = useI18n()

useHead({
    title: `${t('fullname')} | ${t('resume.pageTitle')} `
})
</script>

<template>
    <div class="my-10">
        <ExperienceTimeline />

        <EducationIntro />

        <EducationActivities />
    </div>

</template>