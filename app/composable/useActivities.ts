import type { Ref } from 'vue'
import { activitiesEn } from "@/data/activities.en";
import { activitiesFa } from "@/data/activities.fa";

import type { Activity } from '@/types/education.types'

export function useActivities(): Ref<Activity[]> {
  const { locale } = useI18n()
  return computed(() => (locale.value === 'fa' ? activitiesFa : activitiesEn))
}