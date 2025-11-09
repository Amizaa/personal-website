<script setup>
  const props = defineProps({
    item: Object
  })

  import { skillConfig } from "@/types/skills.types";

</script>

<template>
    <div class="p-0.5 rounded-xl bg-linear-30 from-cyan-500 via-cyan-200 to-white animate-gradient">
        <div class="rounded-xl bg-white p-6">
          <div class="flex justify-between">
            <div class="flex justify-center items-center gap-2">
              <Icon :name="item.icon" class=" size-6" />
              <h3 class=" text-lg">{{item.name}}</h3>
            </div>

            <div>
              <span :class="skillConfig[item.level].textcolor">{{ item.level }}</span>
            </div>
          </div>
          
          <div>
            <SkillBar :level="item.level"/>
          </div>

        </div> 
    </div>

</template>

<style>
@keyframes gradient {
  0% { background-position: 0% 50%; }
  25% { background-position: 100% 50%; }
  50% { background-position: 100% 0%; }
  100% { background-position: 0% 50%; }
}

.animate-gradient {
  background-size: 200% 200%;
  animation: gradient 3s ease infinite;
}

.animate-gradient:hover {
  background-position: 0% 50%; 
  animation: none;
}
</style>

