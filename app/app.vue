<template>
  <div>
    <NuxtLayout >
      <NuxtPage />
    </NuxtLayout>
  </div>
</template>

<style>
.page-enter-active,
.page-leave-active {
  transition: all 0.6s cubic-bezier(0.25, 0.8, 0.25, 1);
}

.page-enter-from {
  opacity: 0;
  transform: translateY(30px) scale(0.95);
  filter: blur(1rem);
}

.page-leave-to {
  opacity: 0;
  transform: translateY(-30px) scale(0.95);
  filter: blur(1rem);
}


</style>
