<script lang="ts" setup>
import { gsap } from "gsap";
import type { Link } from "@/types/contact.types";

const props = defineProps<{
    item: Link
}>()
</script>

<template>
    <NuxtLink class=" mx-auto" :to="item.link" target="_blank">
        <Icon :name="item.icon" class="size-50 hover:scale-110 transition-all duration-300 ease-in-out cursor-pointer" :class="`hover:${item.hoverColor}`" />
    </NuxtLink>
</template>