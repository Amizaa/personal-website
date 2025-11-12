<script lang="ts" setup>
import { projects } from "@/data/projects";
</script>

<template>
    <h1 class=" text-4xl text-center text-cyan-600 my-6 font-bold">My Projects</h1>
    <p class="my-2 text-gray-600 dark:text-gray-300 text-center">Check out the projects I worked on!</p>
    
    <div class="grid grid-cols-1 md:grid-cols-4 gap-4 my-10">
        <PortfolioItem v-for="(project,index) in projects" :key="index" :item="project" />
    </div>
</template>