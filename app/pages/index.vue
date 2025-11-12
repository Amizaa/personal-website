<script setup lang="ts">
import { ref, onMounted, watch, nextTick } from 'vue';
import { gsap } from 'gsap';
import logo from "~/../public/logo.png";
import SplitText from 'gsap/SplitText';
import { links } from "@/data/contact";

useHead({
  title: 'Amirreza Noruzi | Home'
})

const phrases = [
    'Frontend Developer',
    'Nuxt.js/Vue.js Developer',
    'Data Science Enthusiast'
];
const currentPhrase = ref(0);


gsap.registerPlugin(SplitText);

const introRef = ref<HTMLElement | null>(null);
const phraseRef = ref<HTMLElement | null>(null)
const imageRef = ref<HTMLElement | null>(null)


onMounted(() => {
  document.fonts.ready.then(() => {
    if (introRef.value) {
      gsap.set(introRef.value, { opacity: 1 });
      const split = SplitText.create(introRef.value, {
        type: 'chars, words',
        mask: 'chars'
      });

      gsap.from(split.chars, {
        duration: 0.6,
        yPercent: 'random([-150, 150])',
        xPercent: 'random([-150, 150])',
        stagger: {
          from: 'random',
          amount: 0.6
        },
        ease: 'power3.out'
      });
    }
  
  if (imageRef.value) {
    gsap.from(imageRef.value, {
      opacity: 0,
      y: 50,
      duration: 1,
      ease: "power3.out",
    });
    
  }

    setInterval(() => {
      currentPhrase.value = (currentPhrase.value + 1) % phrases.length;
    }, 3000);

  });

});


watch(currentPhrase, async () => {
  await nextTick(); // wait for DOM update
  if (phraseRef.value) {
    const split = SplitText.create(phraseRef.value, {
      type: 'chars',
      mask: 'chars',

    });

    gsap.from(split.chars, {
      duration: 0.6,
      yPercent: 'random([-150, 150])',
      xPercent: 'random([-150, 150])',
      stagger: {
        from: 'random',
        amount: 0.6
      },
      ease: 'power3.out'
    });
  }

});
</script>

<template>
    <div class="grid justify-center md:flex items-center pb-15 h-screen space-x-7">
            <div class=" w-full h-full flex justify-center items-center">
                <img ref="imageRef" :src="logo" class="md:w-full w-3/4" alt="Amirreza Noruzi Logo">
            </div>

            <div class="w-full h-full flex flex-col justify-center items-center text-center space-y-4 my-5">
                <h1 ref="introRef" class=" inline-block text-3xl  md:text-6xl font-semibold opacity-0 md:leading-20">
                    Hi. I'm <br><span class=" text-cyan-400">Amirreza Noruzi</span>
                    <br><span class=" text-xl md:text-2xl">a <span  ref="phraseRef" class=" text-cyan-600">{{ phrases[currentPhrase] }}</span></span>
                </h1>
                <div class="flex justify-between gap-5 my-5">
                  <NuxtLink v-for="(item,index) in links" :key="index" class="mx-auto" :to="item.link" target="_blank">
                      <Icon :name="item.icon" :class="['size-10 hover:scale-110 transition-all duration-300 ease-in-out cursor-pointer',`hover:text-${item.hoverColor}`]" />
                  </NuxtLink>
                </div>
            </div>
    </div>

</template>





