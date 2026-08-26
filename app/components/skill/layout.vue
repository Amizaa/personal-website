<script lang="ts" setup>
import { frontend, backend, databases, devops, securityNetworking, dataScience, hardware, designTools, cmsTools } from "@/data/skills"

const { t } = useI18n()
</script>

<template>
  <div class="my-10">
    <h1 class="text-4xl text-center text-cyan-600 my-1 font-bold">
      {{ t('about.skills.title') }}
    </h1>
    <p class="my-2 text-gray-600 dark:text-gray-300 text-center">
      {{ t('about.skills.subtitle') }}
    </p>

    <SkillSection :title="t('about.skills.sections.frontend')" title-icon="line-md:document-code" :items="frontend" />
    <SkillSection :title="t('about.skills.sections.backend')" title-icon="line-md:document-code" :items="backend" />
    <SkillSection :title="t('about.skills.sections.databases')" title-icon="line-md:document-report" :items="databases" />
    <SkillSection :title="t('about.skills.sections.devops')" title-icon="line-md:cog" :items="devops" />
    <SkillSection :title="t('about.skills.sections.securityNetworking')" title-icon="line-md:security" :items="securityNetworking" />
    <SkillSection :title="t('about.skills.sections.dataScience')" title-icon="line-md:computer" :items="dataScience" />
    <SkillSection :title="t('about.skills.sections.hardware')" title-icon="line-md:lightbulb" :items="hardware" />
    <SkillSection :title="t('about.skills.sections.designTools')" title-icon="line-md:pencil" :items="designTools" />
    <SkillSection :title="t('about.skills.sections.cmsTools')" title-icon="line-md:computer" :items="cmsTools" />
  </div>
</template>
