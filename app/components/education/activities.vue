<script setup lang="ts">
import { activities } from "@/data/activities";


</script>

<template>
    <div>
        <h1 class="text-3xl text-center text-cyan-600 my-6 font-bold">
            Academic Activities
        </h1>

        <div class="md:columns-2 lg:columns-3 gap-6 p-4 sm:p-1 mt-2">
            <EducationItem v-for="(activity,index) in activities" :item="activity" :key="index"/> 

        </div>
  </div>


</template>
