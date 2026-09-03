<script lang="ts" setup>

import { useBooks } from "@/composable/useBooks";

const viewport = useViewport()

const bookItems = useBooks()


const { t } = useI18n()

const page = ref(1)

const itemsPerPage = computed(() => (viewport.isLessThan('desktop') ? 6 : 8));
watch(itemsPerPage, () => {
  page.value = 1;
});

const items = computed(() => bookItems.value.slice( (page.value - 1) * itemsPerPage.value, page.value * itemsPerPage.value))


</script>

<template>
  <div class="my-10">
    <h1 class="text-4xl text-center text-cyan-600 my-1 font-bold">
      {{ t('about.books.title') }}
    </h1>
    <p class="my-2 text-gray-600 dark:text-gray-300 text-center">
      {{ t('about.books.subtitle') }}
    </p>



    <div class="my-7">

      <Transition name="page" mode="out-in">
          <div
            :key="page"
            class="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 rounded-2xl"
          >
            <AboutBookItem
              v-for="item in items"
              :key="item.title"
              :item="item"
            />
          </div>
      </Transition>

      <div id="pagination" class="flex justify-center my-5">
        <UPagination class="mx-auto" v-model:page="page" active-color="info" active-variant="solid"
                      color="info" variant="soft" :items-per-page="itemsPerPage" :total="bookItems.length" size="xl" />
      </div>
    </div>
  

  </div>
</template>
<style scoped>
.page-enter-active,
.page-leave-active {
  transition: all 0.3s ease;
}

.page-enter-from {
  opacity: 0;
  transform: translateX(30px);
}

.page-leave-to {
  opacity: 0;
  transform: translateX(30px);
}

#pagination {
  direction: ltr;
}
</style>
