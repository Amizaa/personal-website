<script setup lang="ts">
import { useActivities } from "@/composable/useActivities";

const activities = useActivities()

const { t } = useI18n()

</script>

<template>
    <div class="my-10">
        <h1 class="text-3xl text-center text-cyan-600 my-6 font-bold">
            {{ t('resume.academic.title') }}
        </h1>

        <div class="md:columns-2 lg:columns-3 gap-6 p-4 sm:p-1 mt-2">
            <EducationItem v-for="(activity,index) in activities" :item="activity" :key="index"/> 

        </div>
  </div>


</template>
