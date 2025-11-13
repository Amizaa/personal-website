import type { Ref } from 'vue'
import { experiencesEn } from "@/data/experiences.en";
import { experiencesFa } from "@/data/experiences.fa";

import type { ExperienceEn,ExperienceFa } from '@/types/experiences.types'

export function useExperience(): Ref<ExperienceEn[] | ExperienceFa[]> {
  const { locale } = useI18n()
  return computed(() => (locale.value === 'fa' ? experiencesFa : experiencesEn))
}