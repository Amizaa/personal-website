<script lang="ts" setup>
import { useProjects } from "@/composable/useProjects";

const projects = useProjects()

const {t} = useI18n()

</script>

<template>
    <h1 class=" text-4xl text-center text-cyan-600 my-6 font-bold">{{t('portfolio.title')}}</h1>
    <p class="my-2 text-gray-600 dark:text-gray-300 text-center">{{t('portfolio.subtitle')}}</p>
    
    <div class="grid grid-cols-1 md:grid-cols-4 gap-4 my-10">
        <PortfolioItem v-for="(project,index) in projects" :key="index" :item="project" />
    </div>
</template>