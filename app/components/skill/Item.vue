<script setup lang="ts">
import type { Skill } from "@/types/skills.types";
import { skillConfig } from "@/types/skills.types";

  const props = defineProps<{
    item: Skill
  }>()

  const { t } = useI18n()
</script>

<template>
    <div class="p-0.5 rounded-xl bg-linear-30 from-cyan-500 via-cyan-200 to-white animate-gradient">
        <div class="rounded-xl bg-white p-6">
          <div class="flex justify-between">
            <div class="flex justify-center items-center gap-2 dark:text-gray-800">
              <Icon :name="item.icon" class=" size-6" />
              <h3 class=" text-lg">{{item.name}}</h3>
            </div>

            <span :class="skillConfig[item.level].textcolor">
              {{ t(`about.skills.levels.${item.level}`) }}
            </span>
          </div>
          
          <div>
            <SkillBar :level="item.level"/>
          </div>

        </div> 
    </div>

</template>

