<script setup lang="ts">
import { links } from "@/data/contact";

const { t } = useI18n()

useHead({
    title: `${t('fullname')} | ${t('contact.pageTitle')} `
})
</script>

<template>
    <div class="my-10">
        <div class="my-10 p-3">
            <h1 class=" text-4xl text-center text-cyan-600 my-6 font-bold">{{t('contact.title')}}</h1>
            <p class="my-2 text-gray-600 dark:text-gray-300 text-center">{{t('contact.subtitle')}}</p>
            <h5 class=" text-gray-800 dark:text-gray-200 text-center">
                <Icon name="line-md:map-marker-alt" class="size-6"/>
                {{t('contact.address')}}
            </h5>

            <div class="grid lg:grid-cols-6 md:grid-cols-2 grid-cols-1 space-x-10 space-y-10 my-15 mx-auto ">
                <ContactItem v-for="(link,index) in links" :key="index" :item="link" />
            </div>
               
        </div>

        <div class="mx-auto">
        </div>
        


        
    </div>
</template>