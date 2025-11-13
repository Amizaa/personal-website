import type { Ref } from 'vue'
import {menuItemsEn} from "@/data/header.en";
import {menuItemsFa} from "@/data/header.fa";

import type { MenuItem } from '@/data/header.en'

export function useHeader(): Ref<MenuItem[]> {
  const { locale } = useI18n()
  return computed(() => (locale.value === 'fa' ? menuItemsFa : menuItemsEn))
}