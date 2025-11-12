<script lang="ts" setup>
    import { frontend,backend,databases,devops,securityNetworking,dataScience,hardware,designTools,cmsTools } from "@/data/skills";
    
</script>

<template>
    <div class="my-10">
        <h1 class=" text-4xl text-center text-cyan-600 my-1 font-bold">My Skills & Expertises</h1>
        <p class="my-2 text-gray-600 dark:text-gray-300 text-center">Live to Create, Learn to Grow</p>


        <SkillSection title="Frontend" title-icon="line-md:document-code" :items="frontend"/>

        <SkillSection title="Backend" title-icon="line-md:document-code" :items="backend"/>

        <SkillSection title="Databases" title-icon="line-md:document-report" :items="databases"/>

        <SkillSection title="Cyber Security & Networking" title-icon="line-md:security" :items="securityNetworking"/>

        <SkillSection title="Data Science" title-icon="line-md:computer" :items="dataScience"/>

        <SkillSection title="Hardware Embedded" title-icon="line-md:lightbulb" :items="hardware"/>

        <SkillSection title="Design Tools" title-icon="line-md:pencil" :items="designTools"/>

        <SkillSection title="CMS Tools" title-icon="line-md:computer" :items="cmsTools"/>

    </div>
</template>